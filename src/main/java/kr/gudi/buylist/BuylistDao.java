package kr.gudi.buylist;

import java.util.List;
import java.util.Map;

public interface BuylistDao {
   
   public List<Map<String,Object>> getcancel(Map<String, Object> paramMap);
   public int setcancel(BuylistBean bb);
   public int setcancellist(BuylistBean bb);
   public Map<String, Object> getblist();
   public Map<String, Object> getomonth();
   public Map<String, Object> gettmonth();
   public Map<String, Object> getsmonth();
   public int uporder(BuylistBean bb);
}