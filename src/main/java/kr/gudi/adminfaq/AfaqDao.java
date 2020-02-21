package kr.gudi.adminfaq;

import java.util.List;
import java.util.Map;

public interface AfaqDao {
	
	public List<Map<String, Object>> getAdminfaq();
	public int setAfaq(AfaqBean ab);
	public Map<String, Object> getquestion();
	public Map<String, Object> getuquestion();
	public Map<String, Object> getInquiry();
}
