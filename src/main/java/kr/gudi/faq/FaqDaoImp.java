package kr.gudi.faq;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class FaqDaoImp implements FaqDao {
	
	@Autowired SqlSession session;
	
	@Override
	public List<Map<String, Object>> getFaq(PaggingBean pb) {
		return session.selectList("faq.getFaq", pb);
	}

	@Override
	public int countBoard() {
		return session.selectOne("faq.countFaq");
	}

	@Override
	public int setFaq(FaqBean fb) {
		return session.insert("faq.setFaq", fb);
	}
	
}