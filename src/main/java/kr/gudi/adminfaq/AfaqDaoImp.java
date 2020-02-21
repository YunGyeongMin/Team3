package kr.gudi.adminfaq;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class AfaqDaoImp implements AfaqDao {
	
	@Autowired SqlSession session;
	
	@Override
	public int setAfaq(AfaqBean ab) {
		System.out.println("dao :" + ab);
		return session.insert("adminfaq.setafaq", ab);
	}

	@Override
	public List<Map<String, Object>> getAdminfaq() {
		return session.selectList("adminfaq.getadminfaq");
	}

	@Override
	public Map<String, Object> getquestion() {
		return session.selectOne("adminfaq.getquestion");
	}

	@Override
	public Map<String, Object> getuquestion() {
		return session.selectOne("adminfaq.getuquestion");
	}

	@Override
	public Map<String, Object> getInquiry() {
		return session.selectOne("adminfaq.getInquiry");
	}

	@Override
	public List<Map<String, Object>> processN() {
		return  session.selectList("adminfaq.processN");
	}

	@Override
	public List<Map<String, Object>> processY() {
		return  session.selectList("adminfaq.processY");
	}

	@Override
	public int setProcess(AfaqBean ab) {
		return session.update("adminfaq.setProcess", ab);
	}

}
