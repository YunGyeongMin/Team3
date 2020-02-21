package kr.gudi.login;

import java.util.List;
import java.util.Map;

public interface LoginService {
	
	public UserBean getUser(UserBean ub); 
	public Map<String, Object> userFindId(UserBean ub) throws Exception;
	public int upPassword(UserBean ub);
	public int loginCount(UserBean ub);
	
}
