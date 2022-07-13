let date=new Date();
console.log("hello World");
var hour=document.getElementById("hr");
var minute=document.getElementById("min");
var second=document.getElementById("sec");

var hours=document.getElementById("myhour");
var minutes=document.getElementById("mymin");
var seconds=document.getElementById("mysec");
var aps=document.getElementById("ap");

setInterval(()=>{
	let date=new Date();
	let hr=date.getHours()*30;
	let min=date.getMinutes()*6;
	let sec=date.getSeconds()*6;
	
	
	hour.style.transform=`rotateZ(${(hr)+(min/12)}deg)`;
	minute.style.transform=`rotateZ(${min}deg)`;
	second.style.transform=`rotateZ(${sec}deg)`;
	
	
	let h=date.getHours()%12;
	let h1=date.getHours();
	if(h1==24){
		aps.innerHTML="AM";
		
	}else{
		aps.innerHTML="PM";
	}
	
	
	hours.innerHTML=h;
	minutes.innerHTML=date.getMinutes();
	seconds.innerHTML=date.getSeconds();
	
})