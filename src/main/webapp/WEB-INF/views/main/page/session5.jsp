<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
	<h1 class = "title">회원관리</h1>
	<hr>
	<h3 class = "subtitle">회원현황</h3>
		<div class = "memberstatus itemstatusfont">
			<ul>
				<li>
					<a>
						<strong>전체회원</strong>
						<span id = "UserListnum"></span>
					</a>
				</li>
				
				<li>
					<a>
						<strong>남자회원</strong>
						<span id = "UserM"></span>
					</a>
				</li>
				<li>
					<a>
						<strong>여자회원</strong>
						<span id = "UserF"></span>
					</a>
				</li>
			</ul>
		</div>
			<h3 class = "subtitle">회원목록</h3>
			<div class = "search">
				<form id = "Usersearch">
					<div>
					<button type="button" class = "search_array" id = "AdminFindSearch" >관리자정렬</button>
					<button type="button" class = "search_array" id = "UserFindSearch" >회원정렬</button> </div>
					<input type="text" placeholder="회원명을 입력하세요." class= "searchbar" id="searchTxt"/>
					<button type="submit" class = "search_btn" id = "Usersearch">검색</button>
					
				</form>
			</div>	
		<div class = "item_inventory2">	
			<form>
				<ul>
					<li class = "li_tatle user_item_name_li1"><input type = "checkbox" name ="" class = "checkboxAll"></li>
					<li class = "user_item_name_li1">no</li>
					<li class = "user_item_name_li2">성별</li>
					<li class = "user_item_name_li3">이름</li>
					<li class = "user_item_name_li3">구분</li>
					<li class = "user_item_name_li3">회원정보</li>
					<li class = "user_item_name_li3">가입일자</li>
				</ul>
			</form>
		</div>
		<div class = "item_inventory">
				<form class = "scroll" id="UserList">	</form>
		</div>
</body>
</html>