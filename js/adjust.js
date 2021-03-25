$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})




//DINAMIK CONTROL

$("#epostaInput").change(function(){

  if($("#epostaInput").val()==""){
  		$("#epostaInput").css("border","1px solid red");
  		$("#uyariYaziMail").css("color","red");
		$("#uyariYaziMail").text("Bu alan boş bırakılamaz");
	}
	else{
		$("#uyariYaziMail").text("");
		$("#epostaInput").css("border","1px solid #ededed")
	}
});



$("#sifreInput").change(function(){

  if($("#sifreInput").val()==""){
  		$("#sifreInput").css("border","1px solid red");
  		$("#uyariYazi").css("color","red");
		$("#uyariYazi").text("Bu alan boş bırakılamaz");
	}
	else{
		$("#uyariYaziAd").text("");
		$("#sifreInput").css("border","1px solid #ededed");
	}
});




$("#uyeOlAd").change(function(){

  if($("#uyeOlAd").val().length<3){
  		$("#uyeOlAd").css("border","1px solid red")
  		$("#uyariYaziAd").css("color","red");
		$("#uyariYaziAd").text("Bu alan boş bırakılamaz");
	}
	else{
		$("#uyariYaziAd").text("");
		$("#uyeOlAd").css("border","1px solid #ededed")
	}
});


$("#uyeOlSoyad").change(function(){

  if($("#uyeOlSoyad").val().length<3){
  		$("#uyeOlSoyad").css("border","1px solid red")
  		$("#uyariYaziSoyad").css("color","red");
		$("#uyariYaziSoyad").text("Bu alan boş bırakılamaz");
	}
	else{
		$("#uyariYaziSoyad").text("");
		$("#uyeOlSoyad").css("border","1px solid #ededed")
	}
});




$("#uyeOlEposta").change(function(){

  if($("#uyeOlEposta").val()==""){
  		$("#uyeOlEposta").css("border","1px solid red")
  		$("#uyariYaziEposta").css("color","red");
		$("#uyariYaziEposta").text("Bu alan boş bırakılamaz");
	}
	else{
		$("#uyariYaziEposta").text("");
		$("#uyeOlEposta").css("border","1px solid #ededed")
	}
});



    





		$(".uyeOl").click(function(){
				$(".mainBorder").css("height","620px");
			})

		$(".giris").click(function(){
				$(".mainBorder").css("height","400px");
			})


		$("#uyeOlAd,#uyeOlSoyad").keyup(function (){

			 if (this.value.match(/[^a-zA-Z]/g)){

			    this.value = this.value.replace(/[^a-zA-Z]/g,'');

			 }

		});


$("#uyeOlSifre,#uyeOlSifreOnay,#sifreInput").keyup(function (){

  if (this.value.match(/[^a-zA-Z-0-9]/g)){

    this.value = this.value.replace(/[^a-zA-Z-0-9]/g,'');

  }

});



	$("#girisYapBtn").click(function(){
		var epostaInput=$("#epostaInput").val();
		var sifreInput=$("#sifreInput").val();
		var kontrolEposta=epostaInput.indexOf("@");


		if(kontrolEposta==-1 || epostaInput==""){
			$("#epostaInput").css("border","1px solid red");
			$("#uyariYaziMail").css("color","red");
			$("#uyariYaziMail").text("Bu alan boş bırakılamaz");
		}


		else{
			$("#epostaInput").css("border","1px solid #ededed");
			$("#uyariYaziMail").text("");
		}


		if(sifreInput==""){
			$("#sifreInput").css("border","1px solid red");
			$("#uyariYazi").css("color","red");
			$("#uyariYazi").text("Bu alan boş bırakılamaz");

		}
		else{
			$("#sifreInput").css("border","1px solid #ededed");

			$("#uyariYazi").text("");

		}

		
	});


	$("#eye").click(function(){

		if ($("#sifreInput").attr("type") == "password"){
			 $("#sifreInput").attr("type", "text");
		}
		else {
	            $("#sifreInput").attr("type", "password");
	        }
		
	});



	 $("#uyeEye").click(function(){

			if ($("#uyeOlSifre").attr("type") == "password"){
				 $("#uyeOlSifre").attr("type", "text");
			}
			else {
		            $("#uyeOlSifre").attr("type", "password");
		        }
			
		});

	$("#uyeEyeOnay").click(function(){

		if ($("#uyeOlSifreOnay").attr("type") == "password"){
			 $("#uyeOlSifreOnay").attr("type", "text");
		}
		else {
	            $("#uyeOlSifreOnay").attr("type", "password");
	        }
		
	});



 $("#uyeOlBtn").prop('disabled',true); 


	var eposta2=$("#uyeOlEposta").val();
	var kontrolEposta2=eposta2.indexOf("@");



if(ad!="" || soyad!="" || kontrolEposta2!=-1 || sifre!="" || sifreOnay!=""){
		$("#uyeOlBtn").prop('disabled',false); 
	}






$("#uyeOlBtn").click(function(){
	var ad=$("#uyeOlAd").val();
	var soyad=$("#uyeOlSoyad").val();
	var eposta=$("#uyeOlEposta").val();
	var sifre=$("#uyeOlSifre").val();
	var sifreOnay=$("#uyeOlSifreOnay").val();
	
	if(ad==""){
		$("#uyariYaziAd").text("Bu alan boş bırakılamaz");
	}
	else{$("#uyariYaziAd").text("");}

	if(soyad==""){
		$("#uyariYaziSoyad").text("Bu alan boş bırakılamaz");
	}
	else{$("#uyariYaziSoyad").text("");}

	if(eposta==""){
		$("#uyariYaziEposta").text("Bu alan boş bırakılamaz");
	}
	else{$("#uyariYaziEposta").text("");}

	if(sifre==""){
		$("#uyariYaziSifre").text("Bu alan boş bırakılamaz");
	}
	else{$("#uyariYaziSifre").text("");}

	if(sifreOnay==""){
		$("#uyariYaziOnaySifre").text("Bu alan boş bırakılamaz");
	}
	else{$("#uyariYaziOnaySifre").text("");}

});



//STATIC CONTROL

function checkBox(){
	var checkBox = document.getElementById("checkbox");
	var uyeOlBtn=document.getElementById("uyeOlBtn");
	var ad=$("#uyeOlAd").val();
	var soyad=$("#uyeOlSoyad").val();
	var eposta=$("#uyeOlEposta").val();
	var sifre=$("#uyeOlSifre").val();
	var sifreOnay=$("#uyeOlSifreOnay").val();


	if(checkBox.checked==true && ad.length>=3 && soyad.length>=3 && eposta.indexOf("@")!=-1 && sifre!="" && sifreOnay!="" && sifre==sifreOnay){
		$("#uyeOlBtn").prop('disabled',false);
		$("#uyeOlBtn").css("background-color","orange") 
	}

	else {
		$("#uyeOlBtn").prop('disabled',true);
		$("#uyeOlBtn").css("background-color","#ededed");
		$("#uyariYaziOnaySifre").text("");
		checkBox.checked=false; 		
	}

	if(ad.length<3) { 
		$("#uyariYaziAd").css("color","red");
		$("#uyeOlAd").css("border","1px solid red");
		$("#uyariYaziAd").text("Bu alanlar boş bırakılamaz");
	} else {
		$("#uyariYaziAd").text("");
		$("#uyeOlAd").css("border","1px solid #ededed");
	}


	if(soyad.length<3){ 
		$("#uyariYaziSoyad").css("color","red");
		$("#uyeOlSoyad").css("border","1px solid red");
		$("#uyariYaziSoyad").text("Bu alanlar boş bırakılamaz");
	} else{ 
		$("#uyariYaziSoyad").text("");
		$("#uyeOlSoyad").css("border","1px solid #ededed");
	}


	if(eposta=="" || eposta.indexOf("@")==-1){ 
		$("#uyariYaziEposta").css("color","red");
		$("#uyeOlEposta").css("border","1px solid red");
		$("#uyariYaziEposta").text("Bu alanlar boş bırakılamaz");
	}  else{
		$("#uyariYaziEposta").text("");
		$("#uyeOlEposta").css("border","1px solid #ededed");
	}


	if(sifre==""){  
		$("#uyariYaziSifre").css("color","red");
		$("#uyeOlSifre").css("border","1px solid red");
		$("#uyariYaziSifre").text("Bu alanlar boş bırakılamaz");
	} else {
		$("#uyariYaziSifre").text("");
		$("#uyeOlSifre").css("border","1px solid #ededed");
	}


	if(sifreOnay=="") {
		$("#uyariYaziSifreOnay").css("color","red");
		$("#uyeOlSifreOnay").css("border","1px solid red");
		$("#uyariYaziOnaySifre").text("Bu alanlar boş bırakılamaz");
	} else{
		$("#uyariYaziOnaySifre").text("");
		$("#uyeOlSifreOnay").css("border","1px solid #ededed");
	}



	if(sifre==sifreOnay){
	    $("#uyariYaziOnaySifre").text(""); 
	}
	else{
		$("#uyariYaziOnaySifre").css("color","red");
		$("#uyeOlSifre").css("border","1px solid red");
		$("#uyeOlSifreOnay").css("border","1px solid red");
		$("#uyariYaziOnaySifre").text("Şifreler birbiriyle uyuşmamaktadır");

	}
}






`${'*'.repeat(27)}`;