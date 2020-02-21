var fun_Inquiry = function(){
	
	var fun_checked = function(){
		$(".chk").click(function(){
			var index = $(".chk").index(this);
			if($(".accordion").eq(index).find("label").eq(1).text() == "처리") {
				$(".chk").eq(index).prop("checked", false);
				return;
			}
			if($(this).is(":checked") == true) {
				$(".panel").eq(index).show();
			} else {
				$(".panel").eq(index).hide();
				$(".content").eq(index).val("");
			}			
		});
	}
	
	var op=	{
			contentType:'application/json; charset=UTF-8'
	};
	$.ajax({
		type: "put",
		 url: "/admin"
    }).done(function(data){
    	console.log(data);
       $("#tquestion").text(numberFormat(data[0].getquestion) + "건");
       $("#uquestion").text(numberFormat(data[1].getuquestion) + "건");
       $("#cInquiry").text(numberFormat(data[2].getInquiry) + "건");
    }); 
	//화면 구현
	$.ajax({
		type: "get",
		url: "/admin"
	}).done(function(d){
		console.log(d);
		var data = d.list;
//		var adminIndex = data.length - 1;
//		console.log("data : " +  data[adminIndex].adminNm);
		$("#faq_inventory").empty();
		for(var i = 0; i < data.length - 1; i++){
			var process = "미처리";
			if(data[i].process == "Y") {
				process = "처리";
			}
			if(data[i].name2 == undefined){
				data[i].name2 = data[data.length - 1].adminNm;
			}
			if(data[i].reg2 == undefined){
				data[i].reg2 = "작성일";
			}
			if(data[i].content2 == undefined){
				data[i].content2 = "";
			}
			var html = `
						<ul class = "accordion">
						<li class = "li_tatle item_inventory_li2"><input class="chk" value="${data[i].no}" type = "checkbox" name = "check"></li>
						<li><label class = "item_inventory_li2">${data[i].no}</label></li>
						<li><label class = "item_inventory_li1">${process}</label></li>
						<li><label class = "item_inventory_li1">${data[i].name}</label></li>
						<li><label class = "item_inventory_li3">${data[i].content}</label></li>
						<li><label class = "item_inventory_li1">${data[i].reg}</label></li>
					</ul>
					<ul class = "panel">
						<li class = "li_tatle item_inventory_li2"></li>
						<li><label class = "item_inventory_li2 fno">${data[i].no}</label></li>
						<li><label class = "item_inventory_li1 answer" >${process}</label></li>
						<li><label class = "item_inventory_li1 answer uno" data-uno = "${data[i].uno}">${data[i].name2}</label></li>
						<li><label class = "item_inventory_li3 answer" ><textarea class = "textAnswer content" placeholder="답변을 등록해주세요." >${data[i].content2}</textarea></label></li>
						<li><label class = "item_inventory_li1 answer" >${data[i].reg2}</label></li>
					</ul>
					`;
			$(".item_inventory").append(html);
			if($("#faq_inventory ul").eq(i).find(".content").val() != ""){
				$("#faq_inventory ul").eq(i).find(".content").attr("readonly","readonly");
			} else if(data[i].content2 == ""){
				$("#faq_inventory ul").eq(i).find(".content").attr("readonly", false);
			}
		}
//		Accordion();
		fun_checked();
	});
	//미처리 정렬
	$("#processN").off().on("click", function(){
		$.ajax({
			type:"POST",
			url:"/admin/processN"
		}).done(function(d){
			var data = d.list;
			$("#faq_inventory").empty();
			for(var i = 0; i < data.length - 1; i++){
				var process = "미처리";
				if(data[i].process == "Y") {
					process = "처리";
				}
				if(data[i].name2 == undefined){
					data[i].name2 = data[data.length - 1].adminNm;
				}
				if(data[i].reg2 == undefined){
					data[i].reg2 = "작성일";
				}
				if(data[i].content2 == undefined){
					data[i].content2 = "";
				}
				var html = `
							<ul class = "accordion">
								<li class = "li_tatle item_inventory_li2"><input class="chk" value="${data[i].no}" type = "checkbox" name = "check"  onclick="oneCheckbox(this)"></li>
								<li><label class = "item_inventory_li2">${data[i].no}</label></li>
								<li><label class = "item_inventory_li1">${process}</label></li>
								<li><label class = "item_inventory_li1">${data[i].name}</label></li>
								<li><label class = "item_inventory_li3">${data[i].content}</label></li>
								<li><label class = "item_inventory_li1">${data[i].reg}</label></li>
							</ul>
							<ul class = "panel">
								<li class = "li_tatle item_inventory_li2"><input type = "checkbox" name = "check"  onclick="oneCheckbox(this)"></li>
								<li><label class = "item_inventory_li2 fno">${data[i].no}</label></li>
								<li><label class = "item_inventory_li1 answer" >${process}</label></li>
								<li><label class = "item_inventory_li1 answer uno" data-uno = "${data[i].uno}">${data[i].name2}</label></li>
								<li><label class = "item_inventory_li3 answer" ><textarea class = "textAnswer content" placeholder="답변을 등록해주세요." >${data[i].content2}</textarea></label></li>
								<li><label class = "item_inventory_li1 answer" >${data[i].reg2}</label></li>
							</ul>
							`; 
				$(".item_inventory").append(html);
				if($("#faq_inventory ul").eq(i).find(".content").val() != ""){
					$("#faq_inventory ul").eq(i).find(".content").attr("readonly","readonly");
				} else if(data[i].content2 == ""){
					$("#faq_inventory ul").eq(i).find(".content").attr("readonly", false);
				}
			}
//			Accordion();
			fun_checked();
		})
	})
	//처리완료 정렬
	$("#processY").off().on("click", function(){
		$.ajax({
			type:"POST",
			url:"/admin/processY"
		}).done(function(d){
			var data = d.list;
			$("#faq_inventory").empty();
			for(var i = 0; i < data.length - 1; i++){
				var process = "미처리";
				if(data[i].process == "Y") {
					process = "처리";
				}
				if(data[i].name2 == undefined){
					data[i].name2 = data[data.length - 1].adminNm;
				}
				if(data[i].reg2 == undefined){
					data[i].reg2 = "작성일";
				}
				if(data[i].content2 == undefined){
					data[i].content2 = "";
				}
				var html = `
							<ul class = "accordion">
								<li class = "li_tatle item_inventory_li2"><input class="chk" value="${data[i].no}" type = "checkbox" name = "check"  onclick="oneCheckbox(this)"></li>
								<li><label class = "item_inventory_li2">${data[i].no}</label></li>
								<li><label class = "item_inventory_li1">${process}</label></li>
								<li><label class = "item_inventory_li1">${data[i].name}</label></li>
								<li><label class = "item_inventory_li3">${data[i].content}</label></li>
								<li><label class = "item_inventory_li1">${data[i].reg}</label></li>
							</ul>
							<ul class = "panel">
								<li class = "li_tatle item_inventory_li2"><input type = "checkbox" name = "check"  onclick="oneCheckbox(this)"></li>
								<li><label class = "item_inventory_li2 fno">${data[i].no}</label></li>
								<li><label class = "item_inventory_li1 answer" >${process}</label></li>
								<li><label class = "item_inventory_li1 answer uno" data-uno = "${data[i].uno}">${data[i].name2}</label></li>
								<li><label class = "item_inventory_li3 answer" ><textarea class = "textAnswer content" placeholder="답변을 등록해주세요." >${data[i].content2}</textarea></label></li>
								<li><label class = "item_inventory_li1 answer" >${data[i].reg2}</label></li>
							</ul>
							`; 
				$(".item_inventory").append(html);
				if($("#faq_inventory ul").eq(i).find(".content").val() != ""){
					$("#faq_inventory ul").eq(i).find(".content").attr("readonly","readonly");
				} else if(data[i].content2 == ""){
					$("#faq_inventory ul").eq(i).find(".content").attr("readonly", false);
				}
			}
//			Accordion();
			fun_checked();
		})
		
	})
	//관리자 답변 등록 	
	$("#process").off().on("click", function(){
		var index = -1;
		$(".chk").each(function(a,b){
		    if($(b).is(":checked") == true){
		        console.log(a);
		        index = a;
		    }
		});
		if(index < 0) return;
		
		if($(".content").eq(index).val() == "") {
			alert("답변을 등록해주세요.");
			return;
		}
		
		var afaq = { 
				"content":	$(".content").eq(index).val(),
				"fno"	 :	$(".fno").eq(index).text(),
				"uno"	 :	$(".uno").eq(index).attr("data-uno")	
		};
		console.log(afaq);
		op.url = "/admin";
		op.type = "POST";
		op.data = JSON.stringify(afaq);
		$.ajax(op).done(function(d){
			console.log("dddd" + d);
			if(d > 0){
				alert("FAQ 답변등록!");
				$(".panel").eq(index).hide();
				$(".content").eq(index).val("");
				$(".chk").eq(index).prop("checked", false);
				$(".accordion").eq(index).find("label").eq(1).text("처리");
			} else alert("문제가 발생했습니다!");
		})
	});
}

//체크박스 중복방지
function oneCheckbox(a){
    var obj = document.getElementsByName("check");
    for(var i=0; i<obj.length; i++){
        if(obj[i] != a){
            obj[i].checked = false;
        }
    }
}