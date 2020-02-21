$(document).ready(function(){
   // 구매내역 페이지
	var option =  {
	         contentType:'application/json; charset=UTF-8'
	   };
	var params = {};
	var getParams = function(){
		var q = location.search;
		q = q.substring(1, q.length);
		var arr = q.split("&");
		console.log(arr);
		for(var i = 0; i < arr.length; i++) {
		      var data = arr[i].split("=");
		      var key = data[0];
		      var value = data[1];
		      console.log(key, value);
		      params[key] = value;
		}
		console.log(params);
		getData();
	}
	var getData = function(){
      // 구매내역 상세페이지   
      $.ajax({
         type: "get",
         url: "/mypageMain1",
         data: params        	 
      }).done(function(d){
         console.log(d);
         var data = d.list;
         $("#order_dlist").empty();
         for(var i = 0; i < data.length; i++){
        	 if(data[i].process === "S")	data[i].process = "결제완료";
         	 if(data[i].process === "D")	data[i].process = "배송중";
         	 if(data[i].process === "DS")	data[i].process = "배송완료";
         	 if(data[i].process === "R")	data[i].process = "반품";
         	 if(data[i].process === "C")	data[i].process = "교환";
            var cstate = "처리완료";
            if(data[i].cstate == "I") {
               cstate = "처리중";
            }
            var html = ` 
                     <ul>
                          <li class = "li1"> 
                          	<input id = "check" class = "order_check" type = "checkbox" value= "check" name= "check" onclick="checkOnly(this)">
                          </li>
                          <li>${data[i].reg}</li>
                          <li class = "click">${data[i].no}</li>
                          <li class = "li2" >${data[i].sname}</li>
                          <li>${data[i].sumPrice}</li>
                          <li>${data[i].process}</li>
                     </ul>
                     `;
            $("#order_dlist").append(html);
         }
      });
      
   }
   // 교환 환불버튼
   $(".outbut").click(function(e){
      console.log("outbut");
      for(var i =0; i < $("#order_dlist ul").length; i++){
    	    if($("input:checkbox[name='check']").eq(i).is(":checked") == true ){
    	    var ono;
    	    ono = $("#order_dlist ul").eq(i).children(".click").text();
    	    }
    	}
      var blist = {
         "ono" :   ono,
         "exchange" : $("#exchange1").val(),
         "reason" : $("#text1").val()   
      };
      console.log(blist);
      option.url = "/mypageMain1";
      option.type = "POST";
      option.data = JSON.stringify(blist);
      $.ajax(option).done(function(d){
         console.log("성공~!" + d);
         location.href = "/main/mypageMain";
      })
   });
   
	// 처리과정 변경
   $(".outbut").click(function(e){
	   for(var i =0; i < $("#order_dlist ul").length; i++){
   	    if($("input:checkbox[name='check']").eq(i).is(":checked") == true ){
   	    var ono;
   	    ono = $("#order_dlist ul").eq(i).children(".click").text();
   	    }
   	}
     var ulist = {
        "ono" :   ono,
        "exchange" : $("#exchange1").val(),
        "reason" : $("#text1").val()   
     };
     option.url = "/mypageMain1";
     option.type = "PATCH";
     option.data = JSON.stringify(ulist);
     $.ajax(option).done(function(d){
     })
   	});
   	// 체크박스 중복 방지
   	$(".order_check").click(function() {
   	  $(".order_check").attr("checked", false); //uncheck all checkboxes
   	  $(this).attr("checked", true);  //check the clicked one
   	});
   	
	getParams();
})