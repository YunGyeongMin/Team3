<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
	<h1 class = "title">결제/주문관리</h1>
	<hr>
	<h3 class = "subtitle">매출현황</h3>
		<div class = "salesStatus itemstatusfont" id = "totalsales">
			<ul>
				<li>
					<a>
						<strong>총매출액</strong>
						<span id = "totSales"></span>
					</a>
				</li>
				<li>
					<a>
						<strong>이번달 매출액</strong>
						<span id = "monthSales"></span>
					</a>
				</li>
				<li class = "a_line2">
					<a>
						<strong>저번달 매출액</strong>
						<span id = "lastMonthSales"></span>
					</a>
				</li>
				<li class = "a_line2">
					<a>
						<strong>전월대비 증감액</strong>
						<span id = "salesGap"></span>
					</a>
				</li>
			</ul>
		</div>
			<h3 class = "subtitle">주문목록</h3>
			<div class = "search">
				<form>
					<button id = "open2" type="button" class = "search_array" onclick="openModal('.M2')">결제정보 등록</button>
					<button type="button" id = "deposit_range"class = "search_array">무통장 정렬</button>
					<input id = "order_search_text" type="text" placeholder="회원명 또는 주문번호를 입력하세요." class= "searchbar"/>
					<button type="button" id = "order_search" class = "search_btn">검색</button>
				</form>
			</div>	
		<div class = "item_inventory2">	
			<form>
				<ul>
					<li class = "li_tatle order_item_name_li2"><input type = "checkbox" name ="" class = "checkboxAll" checked="checked" onclick="return false"></li>
					<li class = "order_item_name_li2">no</li>
					<li class = "order_item_name_li3">주문상태</li>
					<li class = "order_item_name_li4">상품코드</li>
					<li class = "order_item_name_li4">상품수량</li>
					<li class = "order_item_name_li1">상품명</li>
					<li class = "order_item_name_li1">주문합계</li>
					<li class = "order_item_name_li3">구매자명</li>
					<li class = "order_item_name_li1">주문일자</li>
				</ul>
			</form>
		</div>		
		<div class = "item_inventory">
			<form id = "order_itemlist" class = "scroll"></form>	
<!-- 						<ul> -->
<!-- 							<li class = "li_tatle item_inventory_li2"><input type = "checkbox" name ="" class = "checkboxAll"></li> -->
<!-- 							<li class = "item_inventory_li2">no</li> -->
<!-- 							<li class = "item_inventory_li1">주문상태</li> -->
<!-- 							<li class = "item_inventory_li1">상품코드</li> -->
<!-- 							<li class = "item_inventory_li1">상품명</li> -->
<!-- 							<li class = "item_inventory_li1">주문합계</li> -->
<!-- 							<li class = "item_inventory_li1">구매자명</li> -->
<!-- 							<li class = "item_inventory_li1">주문일자</li> -->
<!-- 						</ul> -->
<!-- 					</form> -->
		</div>
	<div class="modal hidden M2">
		<div class = "modal__overlay"></div>
		<div class="modal__content">
		<span class="close" onclick="closeModal2()">&times;</span> 
	<h1 class = "title2">결제관리</h1>
	<hr>
	<div class = "inputarea">
		<form autocomplete="off" id = "bankbook">
			<ul>
				<li>
					<label class = "li_tatle" for = "depositor">무통장 예금주명</label>
					<input class = "input_name" type = "text" id = "depositor" placeholder="EX : 한충렬" >
				</li>	
			</ul>	
			<ul>
				<li>
					<label class = "li_tatle" for = "bank">입금은행</label>
					<input class = "input_price" type = "text" id = "bank"
					 placeholder="EX : 국민은행 : 0000000-00-000000">	 
				</li>
			</ul>
			<div  class="btnregister">	
				<input type="submit" value="등록" class = "submit">
			</div>	
		</form>	
	</div>
	</div>
	</div>
</body>
</html>