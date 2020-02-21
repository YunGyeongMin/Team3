package kr.gudi.buylist;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.gudi.login.UserBean;

@Controller
@RequestMapping("/")
public class BuylistController {
   
   @Autowired private BuylistService buylistService;
   
   @RequestMapping(value = "/mypageMain1", method = RequestMethod.POST)
   public @ResponseBody int setcancel(@RequestBody BuylistBean bb) {
      System.out.println("controller" + bb);
      return buylistService.setcancel(bb);
   }
   
   
   @RequestMapping(value = "/mypageMain",method = RequestMethod.GET)
   public @ResponseBody Map<String, Object> getcancel(HttpSession session) {
	   Map<String, Object> userMap = new HashMap<String, Object>();
	   Object obj = session.getAttribute("User");
	   if(obj != null) {
		   UserBean ub = (UserBean) obj;
		   Map<String, Object> paramMap = new HashMap<String, Object>();
		   paramMap.put("uno", ub.getNo());
		   List<Map<String,Object>> list = buylistService.getcancel(paramMap);
		   userMap.put("list", list);
	   }
   return userMap;
   }
   
   @RequestMapping(value = "/mypageMain1",method = RequestMethod.GET)
   public @ResponseBody Map<String, Object> getcancellist(HttpSession session, HttpServletRequest req) {
   Map<String, Object> userMap = new HashMap<String, Object>();
   Object obj = session.getAttribute("User");
   if(obj != null) {
	   UserBean ub = (UserBean) obj;
	   
	   String sno = req.getParameter("no");
	   if(sno != null) {
		   try {
			   Map<String, Object> paramMap = new HashMap<String, Object>();
			   int no = Integer.parseInt(sno);
			   paramMap.put("uno", ub.getNo());
			   paramMap.put("no", no);
			   List<Map<String,Object>> list = buylistService.getcancel(paramMap);
			   userMap.put("list", list);
		   } catch (Exception e) {
				e.printStackTrace();
		   }
	   }
   }
   return userMap;
   }
   
   @RequestMapping(value = "/mypageMain", method=RequestMethod.POST)
	public @ResponseBody List<Map<String, Object>> getMypageMain() {
		return buylistService.getMypageMain();
   }
   
   @RequestMapping(value="/mypageMain1", method=RequestMethod.PATCH)
	public @ResponseBody int uporder(@RequestBody BuylistBean bb) {
		return buylistService.uporder(bb);
	}
   
}