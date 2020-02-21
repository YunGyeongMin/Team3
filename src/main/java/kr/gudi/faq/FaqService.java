package kr.gudi.faq;

import java.util.List;
import java.util.Map;

import kr.gudi.login.UserBean;

public interface FaqService {
	
	public Map<String, Object> getFaq(PaggingBean pb);
	public int setFaq(FaqBean fb); 
}
