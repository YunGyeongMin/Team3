<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
 	<h1 class = "title">HOME</h1>
 	<hr>
	<h3 class = "subtitle">주문관리</h3>
	<div class = "order">
		<form>
			<ul>
				<li>
					<a>
						<span id = "Home_pay">0</span>
						<h4>결제완료</h4>
					</a>
				</li>
				<li>
					<a>
						<span id = "Home_countRefund">0</span>
						<h4>반품신청</h4>
					</a>
				</li>
				<li>
					<a>
						<span id = "Home_countExchange">0</span>
						<h4>교환신청</h4>
					</a>
				</li>
			</ul>
		</form>
	</div>
	<hr>	
	<h3 class = "subtitle">회원/방문자</h3>
	<div class = "visitant">
		<form>
			<ul>
				<li>
					<a>
						<span id = "Home_SelectUserCount">0</span>
						<h4>전체회원</h4>
					</a>
				</li>
				<li>
					<a>
						<span id = "Home_monthUserSignup">0</span>
						<h4>이달가입회원</h4>
					</a>
				</li>
				<li>
					<a>
						<span id = "Home_todayLogin">0</span>
						<h4>오늘방문자</h4>
					</a>
				</li>
				<li>
					<a>
						<span id = "Home_monthLogin">0</span>
						<h4>이달방문자</h4>
					</a>
				</li>
			</ul>
		</form>
	</div>
	<hr>	
	<h3 class = "subtitle">매출</h3>
	<div class = "sales">
		<form>
			<ul>
				<li>
					<a>
						<span id = "Home_dateSales">0</span>
						<h4>오늘매출</h4>
					</a>
				</li>
				<li>
					<a>
						<span id = "Home_monthSales">0</span>
						<h4>당월매출</h4>
					</a>
				</li>
			</ul>
		</form>
	</div>
</body>
</html>