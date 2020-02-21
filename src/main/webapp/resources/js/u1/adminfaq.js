var fun_Inquiry = function(){	
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
		$("#Inquiry .item_inventory").empty();
		for(var i = 0; i < data.length - 1; i++){
			console.log(i,data[i]);
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
							<li class = "li_tatle item_inventory_li2"><input type = "checkbox" name = "check"></li>
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
		Accordion();
	});
	
	//관리자 답변 등록 	
	$("#process").off().on("click", function(){
		  for(var i =0; i < $("#faq_inventory ul").length; i++){
	    	    if($("input:checkbox[name='check']").eq(i).is(":checked") == true ){
	    	    var fno;
	    	    var uno;
	    	    var content;
	    	    fno = $("#faq_inventory ul").eq(i).find(".fno").text();
	    	    uno = $("#faq_inventory ul").eq(i).find(".uno").attr("data-uno");
	    	    content =  $("#faq_inventory ul").eq(i).find(".content").val();
	    	    } 
	    	}
		var afaq = { 
				"content":	content,
				"fno"	 :	fno,
				"uno"	 :	uno	
		}
		op.url = "/admin";
		op.type = "POST";
		op.data = JSON.stringify(afaq);
		$.ajax(op).done(function(d){	
			alert("faq처리완료");
		})
	});
}