package kr.gudi.buylist;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class BuylistDaoImp implements BuylistDao {

   @Autowired SqlSession session;
   
   @Override
   public int setcancel(BuylistBean bb) {
      return session.insert("buylist.setcancel", bb);
   }

   @Override
   public List<Map<String, Object>> getcancel(Map<String, Object> paramMap) {
	   return session.selectList("buylist.getcancel", paramMap);
   }

   @Override
   public int setcancellist(BuylistBean bb) {
	   return session.insert("buylist.setcancel", bb);
   }
   
   @Override
   public Map<String, Object> getblist() {
	   return session.selectOne("buylist.getblist");
	}

	@Override
	public Map<String, Object> getomonth() {
		return session.selectOne("buylist.getomonth");
	}
	
	@Override
	public Map<String, Object> gettmonth() {
		return session.selectOne("buylist.gettmonth");
	}
	
	@Override
	public Map<String, Object> getsmonth() {
		return session.selectOne("buylist.getsmonth");
	}

	@Override
	public int uporder(BuylistBean bb) {
		return session.update("buylist.uporder", bb);
	}
	
	
   
   

}