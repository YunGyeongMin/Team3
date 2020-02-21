package kr.gudi.faq;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.gudi.login.UserBean;

@Service
public class FaqServiceImp implements FaqService {
	
	@Autowired private FaqDao faqDao;
	
	@Override
	public Map<String, Object> getFaq(PaggingBean pb) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("rows", faqDao.getFaq(pb));
		resultMap.put("totCnt", faqDao.countBoard());
		return resultMap;
	}

	@Override
	public int setFaq(FaqBean fb) {
		return faqDao.setFaq(fb);
	}
}
