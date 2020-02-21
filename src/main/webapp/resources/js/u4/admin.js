/*주문내역뷰*/
function orderListView(){
	$.ajax({
		type: "POST",
		url: "/orderListView"
	}).always(function(d,textStatus){
		$("#order_itemlist").html(d);
	});
}

/*매출현황판*/
function salesView(){
	$.ajax({
		type: "POST",
		url : "/salesView"
	}).done(function(d){
		if(d[0] !== null)	$("#totSales").text("￦ "+numberFormat(d[0].totSales));
		else	$("#totSales").text("￦ 0");
		if(d[0] !== null)	$("#monthSales").text("￦ "+numberFormat(d[1].monthSales));
		else	$("#monthSales").text("￦ 0");
		$("#monthSales").text("￦ "+numberFormat(d[1].monthSales));
		if(d[2] !== null){
			$("#lastMonthSales").text("￦ "+numberFormat(d[2].lastMonthSales));
			$("#salesGap").text("￦ "+numberFormat(d[1].monthSales - d[2].lastMonthSales));
		}
		else {
			$("#lastMonthSales").text("￦ 0");
			$("#salesGap").text("￦ 0");
		}
	})
}

/*반품/교환리스트*/
function cancelListView(){
	$.ajax({
		type: "POST",
		url : "/selectCancel"
	}).done(function(d){
		$("#cancel_List").html(d);
	});
}

/*교환/반품 현황판*/
function ExchangeListView(){
	$.ajax({
		type: "POST",
		url : "/ExchangeListView"
	}).done(function(d){
		$("#countRefund").text(numberFormat(d[0].countRefund)+"건");
		$("#countExchange").text(numberFormat(d[1].countExchange)+"건");
		$("#finishExchange").text(numberFormat(d[2].finishExchange)+"건");
		$("#finishRefund").text(numberFormat(d[3].finishRefund)+"건");
	});
}

/*Admin Home*/
function adminHomeView(){
	$.ajax({
		type: "POST",
		url : "/adminHome"
	}).done(function(d){
		console.log(d);
		$("#Home_pay").text(numberFormat(d[0].pay));
		$("#Home_countRefund").text(numberFormat(d[1].countRefund));
		$("#Home_countExchange").text(numberFormat(d[2].countExchange));
		$("#Home_SelectUserCount").text(numberFormat(d[3].SelectUserCount));
		$("#Home_monthUserSignup").text(numberFormat(d[4].monthUserSignup));
		$("#Home_dateSales").text(numberFormat(d[5].dateSales));
		$("#Home_monthSales").text(numberFormat(d[6].monthSales));
		$("#Home_todayLogin").text(numberFormat(d[7].todayLogin));
		$("#Home_monthLogin").text(numberFormat(d[8].monthLogin));
	});
}

var fun_Kmin1 = function(){ 
	/* 결제정보등록 > 결재*/
	$("#bankbook").off().on("submit", function(e){
		e.preventDefault();
		var params = {
				depositor : $("#depositor").val(),
				bank	  : $("#bank").val()
		};
		$.ajax({
			type: "POST",
			url: "/bank",
			data : JSON.stringify(params),
			contentType : "application/json; charset=UTF-8"
		}).done(function(d){
			alert("결제정보 등록완료!");
			closeModal2();
		});
	
	});
	
	/*주문검색 > 결재*/
	$("#order_search").off().on("click", function(){
		var search = $("#order_search_text").val();
		var params = {search};
		$.ajax({
			type : "POST",
			url : "/selectOrder",
			data : JSON.stringify(params),
			contentType : "application/json; charset=UTF-8"
		}).done(function(d){
			$("#order_itemlist").html(d);
		});
	});
	
	/*무통장정렬 > 결재*/
	$("#deposit_range").off().on("click", function(){
		$.ajax({
			type: "POST",
			url : "/getDeposit"
		}).done(function(d){
			$("#order_itemlist").html(d);
		});
	});
}

var fun_Kmin2 = function(){ 
	/*승인처리 > 반품*/
	$("#approve").off().on("click", function(){
		var params = [];
		$("#cancel_List input:checkbox").each(function(i){
			if($("#cancel_List input:checkbox").eq(i).is(":checked") == true){
				params[i] = {no : $("#cancel_List ul").eq(i).children(".checkNo").text()};
				}
		})
		console.log(params);
		
		$.ajax({
			type: "PATCH",
			url : "/approve",
			data : JSON.stringify(params),
			contentType : "application/json; charset=UTF-8"
		}).done(function(d){
			if(d > 0){
				$("#cancel_List").load(window.location.href + "#cancel_List");
			}
		})
	});

	/*거절처리 > 반품*/
	$("#denial").off().on("click", function(){
		var params = [];
		$("#cancel_List input:checkbox").each(function(i){
			if($("#cancel_List input:checkbox").eq(i).is(":checked") == true){
				params[i] = {no : $("#cancel_List ul").eq(i).children(".checkNo").text()};
				}
		})
		console.log(params);
		
		$.ajax({
			type: "PATCH",
			url : "/denial",
			data : JSON.stringify(params),
			contentType : "application/json; charset=UTF-8"
		}).done(function(d){
			if(d > 0){
				$("#cancel_List").load(window.location.href + "#cancel_List");
			}
		})
	});

	/*교환정렬 > 반품*/
	$("#selectExchange").off().on("click", function(){
		$.ajax({
			type: "POST",
			url : "/selectExchange"
		}).done(function(d){
			$("#cancel_List").html(d);
		});
	});

	/*반품정렬 > 반품*/
	$("#selectRefund").off().on("click", function(){
		$.ajax({
			type: "POST",
			url : "/selectRefund"
		}).done(function(d){
			$("#cancel_List").html(d);
		});
	});
	/*전체보기 > 반품*/
	$("#selectAllExchange").off().on("click", function(){
		cancelListView()
	});
	
}
