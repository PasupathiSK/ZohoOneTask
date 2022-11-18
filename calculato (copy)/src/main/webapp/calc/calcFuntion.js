
var outputScreen=0;
var container;
var result='';
var check='';
var flags=false;
var secondCount=false;
var count=0;
function display(num){
  
	outputScreen.value='';
	
	outputScreen=document.getElementById("output-screen");
	outputScreen.value+=num;
	check+=num;
	console.log(check);
if(num=='%'){
	document.getElementById("hoverActiveOne").style.backgroundColor="#007BFF";
}
else if(num=='+'){
		document.getElementById("hoverActiveFive").style.backgroundColor="#007BFF";
}
else if(num=='-'){
		document.getElementById("hoverActiveFour").style.backgroundColor="#007BFF";
}
else if(num=='*'){
		document.getElementById("hoverActiveThree").style.backgroundColor="#007BFF";
}else if(num=='/'){
		document.getElementById("hoverActiveTwo").style.backgroundColor="#007BFF";
}
	count++;
}



function calculate(){
	container=Array.from(check);
	console.log(outputScreen.value);
/*	document.write(container[0]+" "+container[1]+" "+container[2]);
*/	var length=container.length;
    var first='';
    var second='';
    var flag=false;
    var operatorFind='';
var count=0;
var flagCount=false;
for(var i=0;i<length;i++){
	if(container[i]=='+'||container[i]=='-'||container[i]=='*'||container[i]=='/'||container[i]=='%'){
		if(container[i]=='-'&&container[i-1]=='-'){
			operatorFind='+';
		}
		else if(container[i]=='-'&&container[i-1]=='*'){
			second+=container[i];
			operatorFind='*';
			secondCount=true;
			console.log("***"+second);
		}
		else if(container[i]=='*'&&container[i-2]=='-'){
			first+=container[i-2];
			operatorFind='*';
			flagCount=true;
		}
		else if(container[i]=='-'&&container[i-2]=='-'){
			first+=container[i-2];
			operatorFind='-';
			flagCount=true;
		}
		else if(container[i]=='+'&&container[i-2]=='-'){
			first+=container[i-2];
			operatorFind='+';
			flagCount=true;
		}
		else if(container[i]=='/'&&container[i-2]=='-'){
			first+=container[i-2];
			operatorFind='/';
			flagCount=true;
		}
		else{
			operatorFind=container[i];
		}
		/*if(i==0){
			first+=container[i];
			console.log("**"+first);
			console.log("first");
		}
		if(count==0&&i!=0){
		operatorFind=container[i];
					console.log("2");
		}else{
			if(!flagCount){
		  if(container[i]==container[i-1]){
			operatorFind='+';
			flagCount=true;
						console.log("3");
		}
		else if(container[i]=='+'&&container[i-1]=='-'){
			operatorFind='+';
						console.log("4");
		}
		else if(container[i]=='-'&&container[i-1]=='*'){
			second+=container[i];
			operatorFind='*';
			secondCount=true;
			console.log("***"+second);
		}
		else if((container[i]=='%'||container[i-1]=='/')&&(container[i-1]=='%'||container[i-1]=='/')){
			operatorFind=container[i];
		}
		else if(container[i]=='-'&&container[i-1]=='%'){
			second+=container[i];
			operatorFind='%';
			secondCount=true;
			console.log("***"+second);
		}
		else if(container[i]=='-'&&container[i-1]=='/'){
			second+=container[i];
			operatorFind='/';
			secondCount=true;
			console.log("***"+second);
		}
		else if((container[i]!='+'&&container[i]!='-')||(container[i-1]!='+'&&container[i-1]!='-')){
			operatorFind=container[i];
		}
		
		else{
						console.log("6");
			operatorFind='-';
			flagCount=true;
		}
		}
		}
		count++;*/
		console.log("*"+operatorFind);
	}
}

if(operatorFind=='%'){
	document.getElementById("hoverActiveOne").style.backgroundColor="#ecf0f3";
}
else if(operatorFind=='+'){
		document.getElementById("hoverActiveFive").style.backgroundColor="#ecf0f3";
}
else if(operatorFind=='-'){
		document.getElementById("hoverActiveFour").style.backgroundColor="#ecf0f3";
}
else if(operatorFind=='*'){
		document.getElementById("hoverActiveThree").style.backgroundColor="#ecf0f3";
}else if(operatorFind=='/'){
		document.getElementById("hoverActiveTwo").style.backgroundColor="#ecf0f3";
}
var firstFinal=0;
var secondFinal=0;
var j=0;
var newCount=0;
console.log("**** "+operatorFind);
for(var i=0;i<length;i++){
	if(container[i]!='+'&&container[i]!='-'&&container[i]!='*'&&container[i]!='/'&&container[i]!='%'){
		
		if(result==''){
			result=container[i];
			console.log("*"+result);
		}
		else{
			result+=container[i];
			console.log("*"+result);
		}
		console.log("*"+result);
	}
	else{
		if(container[i]=='+'||container[i]=='-'||container[i]=='*'||container[i]=='/'||container[i]=='%'){
			if(j==0&&!flagCount){
			first=result;
			}
			if(flagCount){
				first+=result;
			}
			console.log("first"+first);
			flag=true;
			result='';
			j++;
		}
	}
	if(flag&&i==length-1){
		if(secondCount){
			second+=result;
		}
		if(newCount==0&&!secondCount){
		second=result;
		}
		console.log("second"+second);
		result='';
	}
}

console.log(length);
console.log(operatorFind);
console.log(outputScreen.value);
switch(operatorFind){
	case '+':{
/*	for(var i=0;i<length;i++){
*//*		console.log(i);
*/	/*	if(container[i]!='+'){
	        if(result=='0'){
			result=container[i];
			}
			else{
				result=result+container[i];
			}
			console.log(result);
		}
		else{
			
			if(container[i]=='+'){
			first=result;
			console.log("first"+first);
			flag=true;
			result=0;
			}	
		}
		console.log(i);
		console.log(length-1);
		if(flag&&i==length-1){
			second=result;
			console.log("second"+second);
			result='';
			result=Number(first)+Number(second);
		}
	}*/
	outputScreen.value=Number(first)+Number(second);
	result='';
	check='';
	break;
	}
	
	case '-':{
/*		for(var i=0;i<length;i++){
		if(container[i]!='-'){
	        if(result=='0'||result==''){
			result=container[i];
			}
			else{
				result=result+container[i];
			}
			console.log("*"+container[i]);
			console.log(result);
		}
		else{
			
			if(container[i]=='-'){
			first=result;
			console.log("first"+first);
			flag=true;
			result=0;
			}	
		}
		console.log(i);
		console.log(length-1);
		if(flag&&i==length-1){
			second=result;
			console.log("second"+second);
			result='';
			result=Number(first)-Number(second);
		}
	}*/
	console.log(first+" "+second);
	outputScreen.value=Number(first)-Number(second);
	console.log(outputScreen.value);
	result='';
	check='';
		break;
	}
	
	case '*':{
/*		for(var i=0;i<length;i++){
		if(container[i]!='*'){
	        if(result=='0'||result==''){
			result=container[i];
			}
			else{
				result=result+container[i];
			}
			console.log("*"+container[i]);
			console.log(result);
		}
		else{
			
			if(container[i]=='*'){
			first=result;
			console.log("first"+first);
			flag=true;
			result=0;
			}	
		}
		console.log(i);
		console.log(length-1);
		if(flag&&i==length-1){
			second=result;
			console.log("second"+second);
			result='';
			result=Number(first)*Number(second);
		}
	}*/
	outputScreen.value=Number(first)*Number(second);
	result='';
	check='';
		break;
	}
	
	case '/':{
	/*	for(var i=0;i<length;i++){
		if(container[i]!='/'){
	        if(result=='0'||result==''){
			result=container[i];
			}
			else{
				result=result+container[i];
			}
			console.log("*"+container[i]);
			console.log(result);
		}
		else{
			
			if(container[i]=='/'){
			first=result;
			console.log("first"+first);
			flag=true;
			result=0;
			}	
		}
		console.log(i);
		console.log(length-1);
		if(flag&&i==length-1){
			second=result;
			console.log("second"+second);
			result='';
			result=Number(first)/Number(second);
		}
	}*/
	outputScreen.value=Number(first)/Number(second);
	result='';
		break;
	}
	
		
	case '%':{
/*		for(var i=0;i<length;i++){
		if(container[i]!='%'){
	        if(result=='0'||result==''){
			result=container[i];
			}
			else{
				result=result+container[i];
			}
			console.log("*"+container[i]);
			console.log(result);
		}
		else{
			
			if(container[i]=='%'){
			first=result;
			console.log("first"+first);
			flag=true;
			result=0;
			}	
		}
		console.log(i);
		console.log(length-1);
		if(flag&&i==length-1){
			second=result;
			console.log("second"+second);
			result='';
			result=Number(first)%Number(second);
		}
	}*/
	outputScreen.value=Number(first)%Number(second);
	result='';
	check='';
		break;
	}
	}
	
	}

function clearValue(){
	outputScreen.value="";
}

function del(){
	outputScreen.value=outputScreen.value.slice(0,-1);
}
/*var header=document.getElementById("myDiv");
var btns=document.getElementsByClassName("bright");
for(var i=0;i<btns.length;i++){
btns[i].addEventListener("click",function(){
	var current=document.getElementsByClassName("active");
	if(current.length>0){
		 current[0].className=current[0].className.replace("active","");
		}
	this.className+="active";
});
}*/