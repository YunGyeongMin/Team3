package kr.gudi.login;

import java.util.List;
import java.util.Map;


import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class LoginDaoImp implements LoginDao {
	
	@Autowired SqlSession session;

	@Override
	public UserBean getUser(UserBean ub) {
		System.out.println("Dao"  + ub);
		return session.selectOne("join.getUser", ub);
	}
	
	//아이디 찾기
	@Override
	public UserBean userFindId(UserBean ub) throws Exception {
		return session.selectOne("join.userFindId", ub);
	}

	@Override
	public int upPassword(UserBean ub) {
		return session.update("join.upPassword", ub);
	}

	@Override
	public int loginCount(UserBean ub) {
		return session.insert("join.loginCount", ub);
	}

}
