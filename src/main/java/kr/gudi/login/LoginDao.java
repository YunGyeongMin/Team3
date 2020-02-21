package kr.gudi.login;

import java.util.List;
import java.util.Map;

public interface LoginDao {
	
	public UserBean getUser(UserBean ub); 
	
	public UserBean userFindId(UserBean ub) throws Exception;
	
	public int upPassword(UserBean ub);
	
	public int loginCount(UserBean ub);

}
