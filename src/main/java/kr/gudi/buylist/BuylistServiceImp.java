package kr.gudi.buylist;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	public List<Map<String, Object>> getMypageMain() {
		List<Map<String, Object>> getBuyList = new ArrayList<Map<String, Object>>();
		getBuyList.add(buylistDao.getblist());
		getBuyList.add(buylistDao.getomonth());
		getBuyList.add(buylistDao.gettmonth()); 
		getBuyList.add(buylistDao.getsmonth());
		return getBuyList;
	}

	@Override
	public int uporder(BuylistBean bb) {
		return buylistDao.uporder(bb);
	}
   
   

}