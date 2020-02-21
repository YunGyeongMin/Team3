package kr.gudi.view;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ViewController {
	
	@GetMapping("/main/{name}")
	public String main(@PathVariable("name") String name, HttpSession session) {
		String url = "main/" + name;
		System.out.println("Get : " + url);
		if("admin".equals(name) || "mypageMain".equals(name)) {
			Object obj = session.getAttribute("User");
			if(obj == null) {url = "redirect:/";}
		}
		return url;
	}
	
	@PostMapping("/admin/{page}")
	public String admin(@PathVariable("page") String page) {
		String url = "main/page/" + page;
		System.out.println("Post : " + url);
		return url;
	}
	
}