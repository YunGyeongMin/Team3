package kr.gudi.payment;

import java.util.List;
import java.util.Map;

import kr.gudi.login.UserBean;

public interface PaymentService {

	public Map<String, Object> getbank();
	public List<Map<String, Object>> pickCart(UserBean ub);
	public int setPay(Map<String, Object> ParamMap);
}
