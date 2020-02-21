package kr.gudi.adminfaq;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.gudi.login.UserBean;

@Service
public class AfaqServiceImp implements AfaqService {
	
	@Autowired private AfaqDao afaqDao;

	@Override
	public List<Map<String, Object>> getAdminfaq() {
		return afaqDao.getAdminfaq();
	}
	
	@Override
	public int setAfaq(AfaqBean ab) {
		System.out.println("service :" + ab);
		int state = afaqDao.setAfaq(ab);
		if(state == 1) {
			state = afaqDao.setProcess(ab);
		}
		return state;
	}

	@Override
	public List<Map<String, Object>> getInquiry() {
		List<Map<String, Object>> getInquirylist = new ArrayList<Map<String,Object>>();
		getInquirylist.add(afaqDao.getquestion());
		getInquirylist.add(afaqDao.getuquestion());
		getInquirylist.add(afaqDao.getInquiry());
		return getInquirylist;
	}

	@Override
	public List<Map<String, Object>> processN() {
		return afaqDao.processN();
	}

	@Override
	public List<Map<String, Object>> processY() {
		return afaqDao.processY();
	}

	

	


}
