var invoiceNumber=0;
function checkFunction(){
var Crust=['Hard','Thin','Soft'];
var Filling=[
	'ChickenTikka',
	'PannerTikka',
	'TurkeyTikka'
];
var Toppings=['Cucumber','Tomato','MeatStrip','Cabbage'];

var priceList={
	Hard:['10'],Thin:['10'],Soft:['12'],ChickenTikka:['120'],PannerTikka:['100'],TurkeyTikka:['130'],
	Cucumber:['25'],Tomato:['20'],MeatStrip:['45'],Cabbage:['20']
};

var limitToppings=['1','2','3'];

var choiceLimitTopping=Math.floor(Math.random()*3);

var toppingsContainer=[];

for(var i=0;i<choiceLimitTopping;i++){
	
	var choice=Math.floor(Math.random()*4);
	toppingsContainer[i]=Toppings[choice];
}

var length=toppingsContainer.length;

var toppingsPrice=0;
var flag=false;
var flags=false;
var toppingsFinal=" ";
for(var i=0;i<length;i++){
	console.log(toppingsContainer[i]);
	if(choiceLimitTopping==3){
		if(toppingsContainer[i]=='Tomato'||toppingsContainer[i]=='Cabbage'){
			flag=true;
		}
		else if(toppingsContainer[i]=='Cucumber'&&flag==false){
			flags=true;
		}
	}
	toppingsPrice=Number(toppingsPrice)+Number(priceList[toppingsContainer[i]]);
	toppingsFinal=toppingsFinal+toppingsContainer[i]+" RS : "+priceList[toppingsContainer[i]];
	}
console.log(toppingsPrice);
if(flag){
	topingsPrice=Number(toppingsPrice)-Number(20);
}
if(flags){
	toppingsPrice=Number(toppingsPrice)-Number(25);
}

var choiceCrust=Math.floor(Math.random()*3);
console.log(choiceCrust);
var choiceFilling=Math.floor(Math.random()*3);
console.log(choiceFilling);
var choiceToppings=Math.floor(Math.random()*4);
console.log(choiceCrust);

console.log(Crust[choiceCrust]+" "+Filling[choiceFilling]);
console.log(priceList[Crust[choiceCrust]]+" "+priceList[Filling[choiceFilling]])
var price=Number(priceList[Crust[choiceCrust]])+Number(priceList[Filling[choiceFilling]])
+Number(toppingsPrice);
console.log(price);
invoiceNumber=Math.floor(Math.random()*677387);
var result="<h3>Invoice Id : "+invoiceNumber +"</h3><br><b>Toppings:</b>"+toppingsFinal+" <br><b> Crust :</b> "+Crust[choiceCrust]+" RS : "+priceList[Crust[choiceCrust]] 
+" <br><b> Filling :</b> "+Filling[choiceFilling]+" RS : "+priceList[Filling[choiceFilling]]
+"<br><h1> Price : </h1> RS : "+price;
return result;
}

function ownBurgeer(crustItem,fillingItem,toppingArray){
	var priceNewList={
	Hard:['10'],Thin:['10'],Soft:['12'],ChickenTikka:['120'],PannerTikka:['100'],TurkeyTikka:['130'],
	Cucumber:['25'],Tomato:['20'],MeatStrip:['45'],Cabbage:['20']
};
var flagOne=false;
var flagsOne=false;
var offer="";
	var ownToppingPrice=0;
	var toppingLength=toppingArray.length;
	console.log(toppingLength);
	var toppingsItem=" ";
	for(var i=0;i<toppingLength;i++){
		console.log(toppingArray[i]);
		if(toppingLength==3){
		if(toppingArray[i]=='Tomato'||toppingArray[i]=='Cabbage'){
			flagOne=true;
		}
		else if(toppingArray[i]=='Cucumber'&&flagOne==false){
			flagsOne=true;
		}
	}
		toppingsItem=toppingsItem+toppingArray[i]+" RS: "+priceNewList[toppingArray[i]];
		ownToppingPrice=Number(ownToppingPrice)+Number(priceNewList[toppingArray[i]]);
	}
	if(flagOne){
		console.log("*"+ownToppingPrice);
	ownToppingPrice=Number(ownToppingPrice)-Number(20);
	offer="Offer Price 20";
	console.log("*"+ownToppingPrice);
}
if(flagsOne&&flagOne!=true){
	ownToppingPrice=Number(ownToppingPrice)-Number(25);
	offer="Offer Price 25";
}
console.log("*"+ownToppingPrice);
invoiceNumber=Math.floor(Math.random()*677387);
	var own=Number(priceNewList[crustItem])+Number(priceNewList[fillingItem]);
	own=own+ownToppingPrice;
	var resultOwn="<h3>Invoice Id : "+invoiceNumber+"</h3><br><b>Toppings:</b>"+toppingsItem+"<b> <br> Crust:</b> "
	+crustItem+" RS : "+priceNewList[crustItem]+"<b> <br> Filling : </b>"+fillingItem+" RS : "+priceNewList[fillingItem]+
	"<br><h2>"+offer+"</h2><br>"+
	"<h1>Price:</h1> RS : "+own;
	return resultOwn;
}
