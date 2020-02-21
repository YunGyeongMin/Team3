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
	$("#selectdate").click(function(){
	  option.url = "/mypageMain";
      option.type = "POST";
      $.ajax(option).done(function(d){
    	  console.log(d);
      });
	});
   // 상세 페이지 
      var productview = function(){
         $("#order_list ul").click(function(){
        	if($(this).find("li").eq(4).text() == "S"){
        		var no = this.querySelector(".no");
        		location.href = "/main/mypageMain1?no=" + no.dataset.key;
        	} else {
        		alert("교환 및 환불 상태입니다.");
        	}
         });
         
      }

})