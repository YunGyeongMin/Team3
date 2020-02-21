$(document).ready(function(){
   // 구매내역 페이지
	var option =  {
	         contentType:'application/json; charset=UTF-8'
	   };
	$.ajax({
      type: "get",
      url: "/mypageMain"
   }).done(function(d){
      console.log(d);
      var data = d.list;
      $("#order_list").empty();
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
                       <li>${data[i].reg}</li>
                       <li class="no" data-key="${data[i].no}">${data[i].no}</li>
                       <li class = "li2" >${data[i].sname}</li>
                       <li>${data[i].sumPrice}</li>
                       <li>${data[i].process}</li>
                  </ul>
                  `;
         $("#order_list").append(html);
      }
      productview();
   });
   // 날짜별 구매목록 페이지
	$("#selectdate").change(function(){
		var param = 0;
		console.log($("#selectdate option:selected").val());
	switch ($("#selectdate option:selected").val()) {
	case "15": 
		param = 15;
		break;
	case "1":
		param = 1;
		break;
	case "3":
		param = 3;
	break;
	case "6":
		param = 6;
	break;
	default: 
		alert("잘못된 방법입니다.")
		break;
	}
	  option.url = "/mypageMain";
      option.type = "POST";
      option.data = JSON.stringify(param);
      $.ajax(option).done(function(d){
    	  var data = d.list;
          $("#order_list").empty();
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
                           <li>${data[i].greg}</li>
                           <li class="no" data-key="${data[i].no}">${data[i].no}</li>
                           <li class = "li2" >${data[i].sname}</li>
                           <li>${data[i].sumPrice}</li>
                           <li>${data[i].process}</li>
                      </ul>
                      `;
             $("#order_list").append(html);
          }
          productview();
      });
	});
   // 상세 페이지 
      var productview = function(){
         $("#order_list ul").click(function(){
        	if($(this).find("li").eq(4).text() == "결제완료"){
        		var no = this.querySelector(".no");
        		location.href = "/main/mypageMain1?no=" + no.dataset.key;
        	} else {
        		alert("교환 및 환불 상태입니다.");
        	}
         });
         
      }

})