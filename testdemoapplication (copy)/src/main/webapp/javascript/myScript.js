$(document).ready(function(){
	$("body").html("first");
	$("#updateUserName").click(function(){
		$("body").html("first");
		$.ajax({
			url:'update',
			type:'POST',
			dataType:'json',
			data:$("#updateUserName").serialize(),
			success:function(data){
				if(data.isValid){
					$("#result").html(data.myName);
				}
				else{
					 alert("Invalid");
				}
			}
		});
		return false;
	});
});