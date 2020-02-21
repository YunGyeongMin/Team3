package kr.gudi.userlist;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.gudi.login.UserBean;

@Repository
public class UserListDaoImp implements UserListDao {
	
	@Autowired private SqlSession session;

	public List<UserBean> UserFind(UserBean ub) {
		return session.selectList("join.UserFind" , ub);
	}
	
	@Override
	public List<UserBean> AdminFind(UserBean ub) {
		return session.selectList("join.AdminFind" , ub);
	}
	
	// 회원 전체 목록
	@Override
	public List<UserBean> UserList(UserBean ub) {
		return session.selectList("join.UserList", ub);
	}

	@Override
	public int UpdateSector(UserBean ub) {
		return session.update("join.UpdateSector", ub);
	}

	@Override
	public Map<String, Object> Usernum() {
		return session.selectOne("join.Usernum");
	}

	@Override
	public Map<String, Object> UserF() {
		return session.selectOne("join.UserF");
	}

	@Override
	public Map<String, Object> UserM() {
		return session.selectOne("join.UserM");
	}

	

	
}
