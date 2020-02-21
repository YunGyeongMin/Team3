package kr.gudi.faq;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.gudi.login.UserBean;


@Controller
@RequestMapping("/faq")
public class FaqController {
	
	@Autowired private FaqService faqService;
	
	@RequestMapping(value = "", method = RequestMethod.POST)
	public @ResponseBody int getFaq(@RequestBody FaqBean fb, HttpSession session){
		System.out.println(fb);
		Object obj = session.getAttribute("User");
		if(obj != null) {
			UserBean ub = (UserBean) obj;
			fb.setUno(ub.getNo());
			System.out.println(fb);
			return faqService.setFaq(fb);
		}
		return -1;
	};
	
	@RequestMapping(value = "",method = RequestMethod.GET)
	public @ResponseBody Map<String, Object> getFaq(PaggingBean pb) {
		return faqService.getFaq(pb);
	}
}
