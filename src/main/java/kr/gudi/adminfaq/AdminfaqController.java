package kr.gudi.adminfaq;



import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.gudi.login.UserBean;

@Controller
@RequestMapping("/admin")
public class AdminfaqController {
	
	@Autowired private AfaqService afaqService;
	
	@RequestMapping(value = "", method = RequestMethod.POST)
	public @ResponseBody int setAfaq(@RequestBody AfaqBean ab) {
		System.out.println("controller :" + ab);
		return afaqService.setAfaq(ab); 
	}  
	@RequestMapping(value = "",method = RequestMethod.GET)
	public @ResponseBody Map<String, Object> getAdminfaq(HttpSession session) {
		System.out.println("admin faq");
		Map<String, Object> userMap = new HashMap<String, Object> ();
		Object obj = session.getAttribute("User");
		if(obj != null) {
			UserBean ub = (UserBean) obj;
			List<Map<String,Object>> list = afaqService.getAdminfaq();
			if(list != null) {
				Map<String, Object> uname = new HashMap<String, Object>();
				uname.put("adminNm", ub.getName());
				list.add(uname);
			};
			userMap.put("list", list);
		}
		return userMap;
	}
	//상태바
	@RequestMapping(value = "",method = RequestMethod.PUT)
	   public @ResponseBody List<Map<String, Object>> getInquiry(){  
		return afaqService.getInquiry();
	   }
	@RequestMapping(value = "/processN", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> processN(HttpSession session) {
		Map<String, Object> userMap = new HashMap<String, Object> ();
		Object obj = session.getAttribute("User");
		if(obj != null) {
			UserBean ub = (UserBean) obj;
			List<Map<String,Object>> list = afaqService.processN();
			if(list != null) {
				Map<String, Object> uname = new HashMap<String, Object>();
				uname.put("adminNm", ub.getName());
				list.add(uname);
			};
			userMap.put("list", list);
		}
		return userMap;
	} 
	@RequestMapping(value = "/processY", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> processY(HttpSession session) {
		Map<String, Object> userMap = new HashMap<String, Object> ();
		Object obj = session.getAttribute("User");
		if(obj != null) {
			UserBean ub = (UserBean) obj;
			List<Map<String,Object>> list = afaqService.processY();
			if(list != null) {
				Map<String, Object> uname = new HashMap<String, Object>();
				uname.put("adminNm", ub.getName());
				list.add(uname);
			};
			userMap.put("list", list);
		}
		return userMap;
	} 
}
