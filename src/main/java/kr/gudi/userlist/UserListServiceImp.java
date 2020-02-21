package kr.gudi.userlist;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.gudi.login.UserBean;

@Service
public class UserListServiceImp implements UserListService {
	
	@Autowired private UserListDao userListDao ;

	// 회원 전체 목록
	@Override
	public List<UserBean> UserList(UserBean ub) {
		return userListDao.UserList(ub);
	}

	@Override
	public int UpdateSector(UserBean ub) {
		return userListDao.UpdateSector(ub);
	}
	
	@Override
	public List<UserBean> AdminFind(UserBean ub) {
		return userListDao.AdminFind(ub);
	}
	
	@Override
	public List<UserBean> UserFind(UserBean ub) {
		return userListDao.UserFind(ub);
	}
	
	// 회원 수 
	@Override
	public List<Map<String, Object>> UserMember() {
		List<Map<String, Object>> UserMember =  new ArrayList<Map<String,Object>>();
		UserMember.add(userListDao.Usernum());
		UserMember.add(userListDao.UserM());
		UserMember.add(userListDao.UserF());
		System.out.println(UserMember);
		return UserMember;
	}

	
	

	
	



	

	
}
