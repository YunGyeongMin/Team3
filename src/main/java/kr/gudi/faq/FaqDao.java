package kr.gudi.faq;

import java.util.List;
import java.util.Map;

public interface FaqDao {
	
	public List<Map<String, Object>> getFaq(PaggingBean pb);
	public int countBoard();
	
	public int setFaq(FaqBean fb);
	//게시물 총 갯수
}
