<!DOCTYPE jsp>
<jsp>
<head>
<meta charset="UTF-8">

<title>Login Page</title>
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<link rel="stylesheet" href="<%=request.getContextPath() %>/mycss/myStyle.css">
<style type="text/css">

body{
    font-family: sans-serif;
    background: linear-gradient(#141e30, #243b55);
}
.login-box{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    padding: 80px;
    transform: translate(-50%,-50%);
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
}

.login-box .user-box{
    position: relative;
}
.login-box .user-box input{
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
}


.login-box form a{
    position: relative;
    display: inline-block;
    padding: 30px 20px;
    color: #03e9f4;
    font-size: 16px;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 4px;
}
.login-box a:hover{
   
    border-radius: 5px;
    box-shadow: 0 0 15px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 100px #03e9f4;
}
 







</style>

<!-- css bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<link rel="stylesheet" href="<%=request.getContextPath() %>/asserts/css/bootstrap.min.css">
<!-- end -->

<!-- script -->

	<script src="../asserts/js/jquery.min.js"></script>
	<script src="../asserts/js/bootstrap.min.js"></script>
<!-- end -->


</head>
<body >
	
		
	<!--	<span style='font-size:250px;'>&#127963;</span>
	  	<div class="imagecontainer">
			<img src="newAvatar.png" class="avatar">
					<div style="height: 10px; display: block;"></div>
			<fieldset class="form">
				<legend>
					<h1>Login</h1>
				</legend>
		</div>-->
<div class="container">
	<div align="center">
	<h1 style="font-size:60px;color:pink;">BLA)KPINK BANK</h1>
	<div class="login-box">

             
  <a>     
		<form action="<%=request.getContextPath() %>/login" method="post" >
			

				   <div class="user-box">
				   					<label><b style="font-size:25px;color:white;"> User Id  </b></label>
					<input type="tel" name="customerId" value="1"placeholder="123"  >

				</div>
				
				   <div class="user-box">
				   										<flabel style="font-size:25px;color:white;"> <b>Passcode </b></flabel>
					<input type="password" name="passcode" value="Pasu@143"placeholder="xxx@xxxl" >

				</div>
				<a><input type="submit" value="Login" style="border:none;font-size:35px;background:transparent;color:pink"></a>
	
			<p style="color:red;">${message }</p>
			
		</form>
	
		</a>  
	</div>
	</div>
	</div>
	
</body>
</jsp>