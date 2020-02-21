package kr.gudi.signup;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.gudi.login.UserBean;

@Repository
public class SignupDaoImp implements SignupDao {
	
	@Autowired
	SqlSession session;
	
	@Override
	public int setUser(UserBean ub) {
		System.out.println("SignupDaoImp.setUser : " + ub);
		return session.insert("join.setUser",ub );
	}

	@Override
	public UserBean getUser(UserBean ub) {
		System.out.println("Dao:" + ub);
		return session.selectOne("join.getUser", ub);
	}
	
	// 이메일 중복 확인
	@Override
	public int emailcheck(UserBean ub) {
		return session.selectOne("join.emailcheck", ub);
	}
	
	

	//회원 정보 수정
	@Override
	public UserBean getUserList(UserBean ub) {
		return session.selectOne("join.getUserList" , ub);
	}
	
	@Override
	public int updateUser(UserBean ub) {
		System.out.println("Dao:" + ub);
		return session.update("join.updateUser" ,  ub);
	}
	
	
	// 회원 탈퇴 수정
	@Override
	public int deleteUser(UserBean ub) {
		System.out.println("Dao:" + ub);
		return session.update("join.deleteUser" ,  ub);
	}	

}
