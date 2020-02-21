package kr.gudi.userlist;

import java.util.List;
import java.util.Map;

import kr.gudi.login.UserBean;

public interface UserListDao {
	
	// 전체 회원 리스트 조회
	public List<UserBean> UserList(UserBean ub);
	public int UpdateSector(UserBean ub);
	
	public List<UserBean> UserFind(UserBean ub);
	public List<UserBean> AdminFind(UserBean ub);
	
	// 회원 관리 수
	public Map<String , Object> Usernum(); 
	public Map<String , Object> UserF();
	public Map<String , Object> UserM();
	
	
	
}
