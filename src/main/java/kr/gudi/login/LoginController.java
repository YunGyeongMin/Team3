package kr.gudi.login;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.view.RedirectView;

@Controller
@RequestMapping("/")
public class LoginController {
	
		@Autowired private LoginService loginService;
		@Autowired private JavaMailSenderImpl mailSender;
		@Autowired private SqlSession sql;
		
		@RequestMapping(value = "/loginTeam", method = RequestMethod.POST)
		public @ResponseBody boolean getUser(UserBean ub, HttpSession session){
			UserBean userBean = loginService.getUser(ub);
			System.out.println(userBean);
			if(userBean != null) {
				session.setAttribute("User", userBean);
				session.setAttribute("Chose", sql.selectList("chose.getChose", userBean));
				System.out.println("User : " + session.getAttribute("User"));
				System.out.println("Chose : " + session.getAttribute("Chose"));				
				
				// 경민이 소스 확인 후 추가
				loginService.loginCount(ub);
				return true;
			}			
			return false;
		}
		
		@RequestMapping(value = "/logout", method = RequestMethod.GET)
		public RedirectView removeUser(HttpSession session){
			session.invalidate();
			return new RedirectView("/main/index");
		}

		
		// 아이디 찾기 
		@RequestMapping(value = "/id", method = RequestMethod.POST)
		public @ResponseBody Map<String, Object> userFindId(UserBean ub ) throws Exception {
			return loginService.userFindId(ub);
		}
		
		// 비밀번호 찾기 
		@RequestMapping(value = "/passwordfind", method = RequestMethod.POST)
		public @ResponseBody Map<String, Object> passwordfind(UserBean ub) throws Exception {
			Map<String, Object> resultMap = new HashMap<String, Object>();
			resultMap.put("code", 0);
			String key = UUID.randomUUID().toString();
			String newPWD = key.substring(0, 16);
			ub.setPassword(newPWD);
			int state = loginService.upPassword(ub);
			if(state == 1) {
				final MimeMessagePreparator preparator = new MimeMessagePreparator() { 
					@Override public void prepare(MimeMessage mimeMessage) throws Exception { 
						final MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8"); 
						helper.setFrom("kmdo4079@naver.com"); 
						helper.setTo(ub.getEmail());
						helper.setSubject("임시 비밀번호 발송입니다."); 
						helper.setText("임시 번호 : " + newPWD, true);
					}
				}; 
				
				mailSender.send(preparator);
				resultMap.put("code", 1);
			}			
			return resultMap; 
		}		
	

}
