package kr.gudi.buylist;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.gudi.login.UserBean;

@Service
public class BuylistServiceImp implements BuylistService {

   @Autowired private BuylistDao buylistDao;
   
   @Override
   public int setcancel(BuylistBean bb) {
      return buylistDao.setcancel(bb);
   }

   @Override
   public List<Map<String, Object>> getcancel(Map<String, Object> paramMap) {
      return buylistDao.getcancel(paramMap);
   }

   @Override
   public int setcancellist(BuylistBean bb) {
      return buylistDao.setcancellist(bb);
   }

   @Override
	public List<Map<String, Object>> getMypageMain(String param, UserBean ub) {
	   List<Map<String, Object>> getBuyList = new ArrayList<Map<String, Object>>();
	   switch (param) {
	   case "15": 
		   return buylistDao.getblist(ub);
		case "1":
			return buylistDao.getomonth(ub);
		case "3":
			return buylistDao.gettmonth(ub); 
		case "6":
			return buylistDao.getsmonth(ub);
		default:
			return null;
	}
}

	@Override
	public int uporder(BuylistBean bb) {
		return buylistDao.uporder(bb);
	}
   
   

}