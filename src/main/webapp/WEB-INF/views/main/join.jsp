<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>join</title>
<link rel="stylesheet" href="/resources/css/reset.css">
<link rel="stylesheet" href="/resources/css/commonlayout.css">
<link rel="stylesheet" href="/resources/css/check.css">
<link rel="stylesheet" href="/resources/css/join.css">
<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="/resources/js/u3/join1.js"></script>
<script src="/resources/js/u3/join.js"></script>
<script type="text/javascript" src="/resources/js/u3/mypage.js"></script>
</head>
<body>

	</head>
 <body>
 <header>
		<h1>
			<a href="./index">LOGO</a>
		</h1>		
	</header>
	<section>
		<form  method="post" id = "join1" >
			<div class = "join">
				<ul>
				
					<li><label for="name">이름 입력</label> <br></li>
					<li><input id="name" type="text" name="mb_name"
						placeholder="이름을 입력하세요." title="이름입력" required="required"><br></li>
				
					<li><label for="email">이메일 입력</label> <br></li>
					<li><input id="emailcheck" type="email" name="mb_email"
						placeholder="이메일을 입력하세요." title="이메일입력" required="required"> <br />
						<p id= "emailcheck1"> 중복된 이메일 입니다. </P>
						<p id= "emailcheck2"> 사용 가능 한  이메일 입니다. </P>
						<p id= "emailcheck3"> 이메일 주소가 유효하지 않습니다.  </P>
					</li>	
				
					<li><label for="password">비밀번호 입력</label><br></li>
					<li><input id="password" type="password" name="mb_password"
						placeholder="비밀번호를 입력하세요." title="password입력" required="required"><br>
						<p id= "password1" style="display: none;">8자리 ~ 16자리 이내로 입력해주세요.</P>
						<p id= "password2" style="display: none;">비밀번호는 공백 없이 입력해주세요.</P>
						<p id= "password3" style="display: none;">영문,숫자, 특수문자를 혼합하여 입력해주세요.</P>
<!-- 						<p id= "password4" style="display: none;">비밀번호를 입력 해주세요.</P> -->
						<p id= "password5" style="display: none;">사용가능 한 비밀번호 입니다.</P>
						</li>
						
						
						
						
					<li><label for="password">비밀번호 재확인</label> <br></li>
					<li><input id="passwordcheck" type="password" name="mb_password" 
						placeholder="비밀번호를 입력하세요." title="password입력" required="required"><br>
						<p id= "check" style="display: none;">비밀번호가 일치 하지 않습니다.</P>	
					</li>

					<li><label for="date">생년월일 입력</label><br></li>
					<li><input id="birth" type="date" name="mb_date"
						placeholder="생년월일을 입력하세요" title="birthdate" required="required"><br></li>
					
					<li><label for="addr">주소 입력 </label><br></li>
					<li class="addr"> 
					<div class = "addr1">
						<input type="text" id="address1" placeholder="우편번호" readonly>
						<input id = button type="button" onclick="sample4_execDaumPostcode()" value="우편번호 찾기" > </div> </li>	
					<li><input type="text" id="address2" placeholder="도로명주소" ></li>
					<li><span id="guide" style="color:#999;display:none"></span>
					<li><input type="text" id="address3" placeholder="상세주소" ></li>					
					<li><label>성별선택</label><br></li>
					<li>
						<select name=gender id = "gender" required="required">
							<option value=M>남성</option>
							<option value=F>여성</option>
						</select>
					</li>
					<li><label>휴대전화</label><br></li>
					<li><input id = "tel" type="tel" name="mb_number" placeholder="(-)을 제외한 번호를 입력하세요." title="number" onchange="ck()" required="required">
					<p id= "telcheck"> 정확한 전화번호를 입력하세요. </P>
					</li>					
					
				</ul>
				
			<button type="submit" id="save" disabled="disabled">회원가입완료</button>
			</div>
		</form>
	</section>
	<footer>
		<p>Created by VYVOJ</p>
		<h4>본 사이트에서 사용된 모든 이미지는 <a href="https://store.musinsa.com/">MUSINSA Store</a>에 저작권이 있습니다.</h4>
	</footer>
	
</body>
</html>