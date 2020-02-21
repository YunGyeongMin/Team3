<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
<!-- 		<meta name="viewport" content="width=640, heigth=device-heigth,"> -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel = "stylesheet" href = "/resources/css/admin.css">
		<link rel="shortcut icon" type="image/x-icon" href="/resources/images/admin/adminFavicon.png">
		<title>상품관리 / 관리자 전용</title>
		<link href="https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap&subset=korean" rel="stylesheet">
		<script src="/lib/jquery/3.4.1/dist/jquery.min.js"></script>
		<script src="/resources/js/u1/adminfaq.js"></script>
		<script src="/resources/js/u2/product.js"></script>
		<script src="/resources/js/u3/UserList.js"></script>
		<script src="/resources/js/u4/admin.js"></script>
		<script src="/resources/js/admin2.js"></script>
		<style>
			.tab_active {background-color: #ffe3c8;}
		</style>
	</head>
	<body onload="Accordion()">
	 	<header>
			<nav id = "nav_tab">
				<ul>
					<li><label for = "tab1" class = "logo" data-id="session0">LOGO</label></li>
					<li><label for = "tab2" data-id="session2">Home</label></li>
					<li><label for = "tab3" data-id="session1">상품관리</label></li>
					<li><label for = "tab4" data-id="session6">결제/주문관리</label></li>
					<li><label for = "tab5" data-id="session3">반품/교환관리</label></li>
					<li><label for = "tab6" data-id="session4">문의관리</label></li>
					<li><label for = "tab7" data-id="session5">회원관리</label></li>
				</ul>
			</nav>
		</header>	
		<section id="contents"></section>
	<footer>
		<p>Created by VYVOJ</p>
	</footer>
	</body>
</html>