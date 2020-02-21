package kr.gudi.adminfaq;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import kr.gudi.login.UserBean;

public interface AfaqService {
	
	public List<Map<String, Object>> getAdminfaq();
	public int setAfaq(AfaqBean ab);
	public List<Map<String, Object>> getInquiry();
	public List<Map<String, Object>> processN();
	public List<Map<String, Object>> processY();
}
