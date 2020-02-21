<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>id</title>
<link rel="stylesheet" href="/resources/css/reset.css">
<link rel="stylesheet" href="/resources/css/commonlayout.css">
<link rel="stylesheet" href="/resources/css/join.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="/resources/js/u3/login.js"></script>


</head>
<body>
</head>
 <body>
 <c:import url="/header" />
 
<section> 
		<form id ="idfind">
<!-- 			<h3>아이디 찾기</h3> -->
			<div class = "join">
				<ul>
					<li><label for="name">이름 입력</label> <br></li>
					<li><input id="name" type="text" name="mb_name"
						placeholder="이름을 입력하세요." title="이름입력"><br></li>					
					<li><label for="tel">휴대전화</label> <br></li>
					<li><input id="tel" type="text" name="mb_phoneNo"
						placeholder="전화번호를 입력하세요." title="휴대전화번호"><br></li>
				</ul>
					<button class = "idpwd" type="submit">아이디 찾기</button>
			</div>
		
		</form>
	</section>

<c:import url="/footer" />


</body>
</html>