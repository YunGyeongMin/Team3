package kr.gudi.signup;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.gudi.login.UserBean;


@Controller
public class SignupController {
	 
	@Autowired private SignupService signupService;
	
	@RequestMapping(value ="/main/join", method = RequestMethod.POST)
	public @ResponseBody int setUser(UserBean ub ) throws Exception {
		System.out.println("con:" + ub);
		return signupService.setUser(ub);
	}
	
	@RequestMapping(value ="/", method = RequestMethod.POST)
	public @ResponseBody UserBean getUser(@RequestBody UserBean ub ) throws Exception {
		return signupService.getUser(ub);
	}
	
	// 이메일 중복 체크 
	@RequestMapping(value = "/emailcheck", method = RequestMethod.POST)
    @ResponseBody
    public Map<Object, Object> emailcheck(UserBean ub) {
		System.out.println(ub);
        int count = 0;
        Map<Object, Object> map = new HashMap<Object, Object>();
        count = signupService.emailcheck(ub);
        map.put("cnt", count);
 
        return map;
    }
		
	// 회원 정보 수정
	@RequestMapping(value = "/main/mypage", method = RequestMethod.PATCH)
	public @ResponseBody int updateUser(@RequestBody UserBean ub, HttpSession session) throws Exception {
//		System.out.println("Con:" + ub);
		Object obj = session.getAttribute("User");
		if(obj != null) {
			int state = signupService.updateUser(ub);
			if(state > 0) {
				session.setAttribute("User", signupService.getUser(ub));
				return 1;
			} else {
				return -1;
			}			
		}else
		return -1;
	}
	
	// 회원 탈퇴 수정
	@RequestMapping(value = "/main/mypage", method = RequestMethod.DELETE)
	public @ResponseBody Map<String, Object> deleteUser(@RequestBody UserBean ub, HttpSession session) throws Exception {
		System.out.println("Con:" + ub);
		Map<String, Object> resultMap = signupService.deleteUser(ub, session);
		if("1".equals(resultMap.get("code"))) {
			session.invalidate();
		}
		return resultMap;
	}

	@PostMapping("/json/mypage")
	public @ResponseBody UserBean getData(HttpServletRequest req, HttpSession session) {
		UserBean ub = new UserBean();
		Object obj = req.getParameter("no");
		if(obj != null) {
			try {
				int no = Integer.parseInt(obj.toString());
				ub.setNo(no);
				return signupService.getUserList(ub);
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else {
			Object user = session.getAttribute("User");
			if(user != null) {
				ub = (UserBean) user;
				return signupService.getUser(ub);
			}
		}
		return null;
	}

}
