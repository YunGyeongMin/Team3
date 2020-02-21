package kr.gudi.login;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImp implements LoginService {
	
	@Autowired private LoginDao loginDao; 

	@Override
	public UserBean getUser(UserBean ub) {
		System.out.println("ervice"  + ub);
		return loginDao.getUser(ub);
	}

	// id 찾기
	@Override
	public Map<String, Object> userFindId(UserBean ub) throws Exception {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("code", 0);
		UserBean result = loginDao.userFindId(ub);
		if(result != null) {
			if(ub.getTel().equals(result.getTel())) {
				resultMap.put("code", 1);
				resultMap.put("data", result.getEmail()); // 정상 Email
			} else {
				resultMap.put("msg", "휴대전화가 잘못 되었습니다."); // ? 휴대전화 X
			}
		} else {
			resultMap.put("msg", "이름이 잘못 되었습니다."); // ? 이름 X
		}
		return resultMap; 
	}

	// 임시비밀번호 update
	@Override
	public int upPassword(UserBean ub) {
		return loginDao.upPassword(ub);
	}

	@Override
	public int loginCount(UserBean ub) {
		return loginDao.loginCount(ub);
	}

}
