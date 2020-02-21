package kr.gudi.view;


import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainController {
	
	@GetMapping("/")
	public String main() {
		return "redirect:/main/index";
	}
	
	@GetMapping("/header")
	public String header(HttpSession session) {
		return "/main/header";
	}
	
	@GetMapping("/footer")
	public String footer() {
		return "/main/footer";
	}
	
	@ControllerAdvice
	public class CommonExceptionAdvice {

		private final Logger logger = LoggerFactory.getLogger(CommonExceptionAdvice.class);

		@ExceptionHandler(Exception.class)
		public ModelAndView common(Exception e) {
			logger.info(e.toString());

	    ModelAndView mv = new ModelAndView();
	    mv.setViewName("/main/index");
	    mv.addObject("exception", e);

			return mv;
		}
	}
}