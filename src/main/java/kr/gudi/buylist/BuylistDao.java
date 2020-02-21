package kr.gudi.buylist;

import java.util.List;
import java.util.Map;

import kr.gudi.login.UserBean;

public interface BuylistDao {
   
   public List<Map<String,Object>> getcancel(Map<String, Object> paramMap);
   public int setcancel(BuylistBean bb);
   public int setcancellist(BuylistBean bb);
   public List<Map<String, Object>> getblist(UserBean ub);
   public List<Map<String, Object>> getomonth(UserBean ub);
   public List<Map<String, Object>> gettmonth(UserBean ub);
   public List<Map<String, Object>> getsmonth(UserBean ub);
   public int uporder(BuylistBean bb);
}