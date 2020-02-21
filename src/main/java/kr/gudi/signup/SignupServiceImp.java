package kr.gudi.signup;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.gudi.login.UserBean;

@Service
public class SignupServiceImp implements SignupService {
	
	@Autowired SignupDao signupDao;
	
	@Override
	public int setUser(UserBean ub) {		
		return signupDao.setUser(ub);
	}

	@Override
	public UserBean getUser(UserBean ub) {
		System.out.println("Ser:" + ub);
		return signupDao.getUser(ub);
	}
	
	// 이메일 중복 체크 
	@Override
	public int emailcheck(UserBean ub) {
		return signupDao.emailcheck(ub);
	}
	
	
	//회원 정보 수정 
	@Override
	public int updateUser(UserBean ub) {
		System.out.println("Ser:" + ub);
		return signupDao.updateUser(ub);
	}
	
	@Override
	public UserBean getUserList(UserBean ub) {
		return signupDao.getUserList(ub);
	}
			
//  아이디 찾기 
	@Override
	public Map<String, Object> deleteUser(UserBean ub, HttpSession session) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("code", 0);
		Object obj = session.getAttribute("User");
		if(obj != null) {
			UserBean UserBean = (UserBean) obj;
			if(UserBean.getEmail().equals(ub.getEmail())) {
				if(UserBean.getPassword().equals(ub.getPassword())) {
					resultMap.put("code", 1);
					signupDao.deleteUser(ub);
				} else {
					resultMap.put("msg", "비밀번호가 잘 못 되었습니다.");
				}	
			} else {
				resultMap.put("msg", "이메일이 잘 못 되었습니다.");
			}
		}
		return resultMap;
	}




	



	

}
