package kr.gudi.buylist;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.gudi.login.UserBean;

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
   public List<Map<String, Object>> getblist(UserBean ub) {
	   return session.selectList("buylist.getblist",ub);
	}

	@Override
	public List<Map<String, Object>> getomonth(UserBean ub) {
		return session.selectList("buylist.getomonth",ub);
	}
	
	@Override
	public List<Map<String, Object>> gettmonth(UserBean ub) {
		return session.selectList("buylist.gettmonth",ub);
	}
	
	@Override
	public List<Map<String, Object>> getsmonth(UserBean ub) {
		return session.selectList("buylist.getsmonth",ub);
	}

	@Override
	public int uporder(BuylistBean bb) {
		return session.update("buylist.uporder", bb);
	}
	
	
   
   

}