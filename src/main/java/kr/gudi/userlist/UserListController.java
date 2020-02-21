package kr.gudi.userlist;

import java.lang.System.Logger;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.gudi.login.UserBean;

@Controller
@RequestMapping("/")
public class UserListController {
	
	@Autowired private UserListService userListService;
	
	// 회원 검색 목록 이름
	@RequestMapping(value = "main/userFind" , method = RequestMethod.POST)
	public @ResponseBody List<UserBean> UserFind(UserBean ub) {
		return userListService.UserFind(ub);
	}
	
	// 관리자 검색 
	@RequestMapping(value = "main/AdminFindSearch" , method = RequestMethod.POST)
	public @ResponseBody List<UserBean> userFindSearch(UserBean ub) {
		return userListService.AdminFind(ub);
	}
	
	// 회원 검색 
	@RequestMapping(value = "main/userFindSearch" , method = RequestMethod.POST)
	public @ResponseBody List<UserBean> AdminFindSearch(UserBean ub) {
		return userListService.UserFind(ub);
	}
	
	// 회원 전체 목록
	@RequestMapping(value = "main/admin" , method = RequestMethod.POST)
	public @ResponseBody List<UserBean> UserList(UserBean ub) {
		return userListService.UserList(ub);
	}
	
	// 선택 회원 구분 수정
	@RequestMapping(value = "main/upSector" , method = RequestMethod.POST)
	public @ResponseBody int UpdateSector(UserBean ub) {
		return userListService.UpdateSector(ub);
	}
	
	// 회원 전체 수 / 남자  수  /여자 수 
	@RequestMapping(value = "/main/Usernum" , method = RequestMethod.POST)
	public @ResponseBody List<Map<String, Object>> Usernum() {
		System.out.println("Usernum");
		return userListService.UserMember();
	}

	
}
