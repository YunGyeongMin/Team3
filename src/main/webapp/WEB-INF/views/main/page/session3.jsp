<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
	<h1 class = "title">반품/교환 관리</h1>
		<hr>
		<h3 class = "subtitle">반품/교환 현황</h3>
		<div class = "itemstatus itemstatusfont">
			<ul>
				<li>
					<a>
						<strong>반품</strong>
						<span id = "countRefund"></span>
					</a>
				</li>
				<li>
					<a>
						<strong>교환</strong>
						<span id = "countExchange"></span>
					</a>
				</li>
				<li>
					<a class = "a_line">
						<strong>반품완료</strong>
						<span id = "finishRefund"></span>
					</a>
				</li>
				<li>
					<a class = "a_line">
						<strong>교환완료</strong>
						<span id = "finishExchange"></span>
					</a>
				</li>
			</ul>
		</div>
			<h3 class = "subtitle">반품/교환 목록</h3>
			<div class = "btnset">
				<button type="button" id = "approve">승인처리</button>
				<button type="button" id = "denial">거절처리</button>
				<button type="button" id = "selectRefund">반품정렬</button>
				<button type="button" id = "selectExchange">교환정렬</button>
				<button type="button" id = "selectAllExchange">전체보기</button>
			</div>	
		<div class = "item_inventory2">	
			<form>
				<ul>
					<li class = "li_tatle cancel_name_li1"><input type = "checkbox" name ="" class = "checkboxAll"></li>
					<li class = "cancel_name_li1">no</li>
					<li class = "cancel_name_li2">상태구분</li>
					<li class = "cancel_name_li2">주문코드</li>
					<li class = "cancel_name_li3">사유</li>
					<li class = "cancel_name_li2">상품명</li>
					<li class = "cancel_name_li2">처리상태</li>
				</ul>
			</form>	
		</div>	
		<div class = "item_inventory">
			<form class = "scroll" id = "cancel_List"></form>
		</div>
</body>
</html>