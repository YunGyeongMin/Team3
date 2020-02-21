package kr.gudi.buylist;

import java.util.List;
import java.util.Map;

public interface BuylistService {
   
   // 교환 환불 
   public List<Map<String,Object>> getcancel(Map<String, Object> paramMap);
   
   // 구매내역 
   public int setcancel(BuylistBean bb);
   
   // 구매 상세 내역 
   public int setcancellist(BuylistBean bb);
   
   //날짜별 구매 내역 
   public List<Map<String, Object>> getMypageMain();
   
   public int uporder(BuylistBean bb);
}