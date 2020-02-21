<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
	<h1 class = "title">문의 관리</h1>
	<hr>
	<h3 class = "subtitle">문의 현황</h3>
		<div class = "itemstatus itemstatusfont">
			<ul>
				<li>
					<a>
						<strong>전체문의</strong>
						<span id="tquestion">13건</span>
					</a>
				</li>
				<li>
					<a>
						<strong>미처리</strong>
						<span id="uquestion">2건</span>
					</a>
				<li>
					<a class = "a_line">
						<strong>문의완료</strong>
						<span id="cInquiry">3건</span>
					</a>
				</li>
			</ul>
		</div>
			<h3 class = "subtitle">문의목록</h3>
			<div class = "btnset">
				<button type="button">처리완료정렬</button>
				<button type="button">미처리정렬</button>
				<button type="button" id="process">처리완료</button>
			</div>	
			<div class = "item_inventory2">	
				<form>
					<ul>
						<li class = "li_tatle item_name_li2"><input type = "checkbox" name ="" id = "checkboxAll"></li>
						<li><label class = "item_name_li2">no</label></li>
						<li><label class = "item_name_li1">문의상태</label></li>
						<li><label class = "item_name_li1">이름</label></li>
						<li><label class = "item_name_li3">문의내용</label></li>
						<li><label class = "item_name_li1">작성일</label></li>
					</ul>
				</form>
			</div>	
			
			<div class = "item_inventory" id = "faq_inventory" ></div>
</body>
</html>