/*Vertival timeline*/

var ptr=document.getElementsByClassName('pointer');

ptr[1].style.backgroundColor="rgb(210,210,210,0)";
ptr[2].style.backgroundColor="rgb(210,210,210,0)";

var timeline_ptr=document.getElementsByClassName('menu');
timeline_ptr[0].style.color="black";

function display(change,same1,same2)
{
	var type1=document.getElementsByClassName('sub_part');
	var type2=document.getElementsByClassName('pointer');

	type1[change].style.color="black";
	type1[same1].style.color="rgb(210,210,210,0.8)";
	type1[same2].style.color="rgb(210,210,210,0.8)";

	type2[change].style.backgroundColor="black";
	type2[same1].style.backgroundColor="transparent";
	type2[same2].style.backgroundColor="transparent";

}

function change(pic,same1,same2)
{
	document.getElementsByClassName('about1')[pic].style.border="solid 13px rgba(250,164,26,1)";
	document.getElementsByClassName('about1')[same1].style.border="solid 13px black";
	document.getElementsByClassName('about1')[same2].style.border="solid 13px black";
}


/*Horizontal timeline*/

var pos=2;

var right=document.getElementsByClassName('nav_right')[0];
var left=document.getElementsByClassName('nav_left')[0];
var event_name=document.getElementsByClassName('event_name');
var event_time=document.getElementsByClassName('event_time');

var left_pos=75;

right.addEventListener('click',function(){
	
	if(pos==2)
	{
		event_name[pos].style.color="rgb(200,200,200)";
		event_name[pos].style.fontSize="0.8vw";
		event_name[pos].style.left="13.5%";
		event_name[pos].style.top="65px";
		event_name[pos-1].style.marginRight="5%";

		event_time[pos].style.color="rgb(200,200,200)";
		event_time[pos].style.fontSize="1.1vw";
		event_time[pos].style.fontWeight="normal";

		pos=pos+1;

		event_name[pos].style.color="rgb(0,0,0)";
		event_name[pos].style.fontSize="1.3vw";
		// event_name[pos].style.left="13.5%";
		event_name[pos].style.top="35px";
		event_name[pos].style.marginRight="2%";	

		event_time[pos].style.color="rgb(0,0,0)";
		event_time[pos].style.fontSize="1.4vw";
		event_time[pos].style.fontWeight="bold";
		event_time[0].style.left="30.8%";
		event_time[1].style.left="45.5%";
		event_time[pos].style.left="74%";
		event_time[2].style.left="61%";
		event_time[4].style.left="86.5%";

		
	}
	else if(pos==3)
	{
		event_name[pos].style.color="rgb(200,200,200)";
		event_name[pos].style.fontSize="0.8vw";
		event_name[pos].style.left="13.5%";
		event_name[pos].style.top="65px";
		event_name[pos-1].style.marginRight="5%";

		event_time[pos].style.color="rgb(200,200,200)";
		event_time[pos].style.fontSize="1.1vw";
		event_time[pos].style.fontWeight="normal";

		pos=pos+1;

		event_name[pos].style.color="rgb(0,0,0)";
		event_name[pos].style.fontSize="1.3vw";
		// event_name[pos].style.left="13.5%";
		event_name[pos].style.top="35px";
		event_name[pos].style.marginRight="2%";	

		event_time[pos].style.color="rgb(0,0,0)";
		event_time[pos].style.fontSize="1.4vw";
		event_time[pos].style.fontWeight="bold";
		event_time[0].style.left="30.8%";
		event_time[1].style.left="45.5%";
		event_time[3].style.left="76%";
		event_time[2].style.left="61%";
		event_time[pos].style.left="88.5%";

		
	}

	else if(pos==0)
	{
		event_name[pos].style.color="rgb(200,200,200)";
		event_name[pos].style.fontSize="0.8vw";
		event_name[pos].style.left="13.5%";
		event_name[pos].style.top="65px";
		event_name[pos].style.marginRight="2.3%";

		event_time[pos].style.color="rgb(200,200,200)";
		event_time[pos].style.fontSize="1.1vw";
		event_time[pos].style.fontWeight="normal";

		pos=pos+1;

		event_name[pos].style.color="rgb(0,0,0)";
		event_name[pos].style.fontSize="1.3vw";
		// event_name[pos].style.left="13.5%";
		event_name[pos].style.top="35px";
		event_name[pos].style.marginRight="2%";	

		event_time[pos].style.color="rgb(0,0,0)";
		event_time[pos].style.fontSize="1.4vw";
		event_time[pos].style.fontWeight="bold";
		event_time[0].style.left="30.8%";
		event_time[pos].style.left="43%";
		event_time[3].style.left="71%";
		event_time[2].style.left="56.5%";
		event_time[4].style.left="86.5%";

		
	}

	else if(pos==1)
	{
		event_name[pos].style.color="rgb(200,200,200)";
		event_name[pos].style.fontSize="0.8vw";
		event_name[pos].style.left="13.5%";
		event_name[pos].style.top="65px";
		event_name[pos-1].style.marginRight="5%";

		event_time[pos].style.color="rgb(200,200,200)";
		event_time[pos].style.fontSize="1.1vw";
		event_time[pos].style.fontWeight="normal";

		pos=pos+1;

		event_name[pos].style.color="rgb(0,0,0)";
		event_name[pos].style.fontSize="1.3vw";
		// event_name[pos].style.left="13.5%";
		event_name[pos].style.top="35px";
		event_name[pos].style.marginRight="2%";	

		event_time[pos].style.color="rgb(0,0,0)";
		event_time[pos].style.fontSize="1.4vw";
		event_time[pos].style.fontWeight="bold";
		event_time[0].style.left="30.8%";
		event_time[1].style.left="45.5%";
		event_time[3].style.left="72%";
		event_time[pos].style.left="58.5%";
		event_time[4].style.left="86.5%";

		
	}





});

left.addEventListener('click',function(){

	if(pos==2)
	{
		event_name[pos].style.color="rgb(200,200,200)";
		event_name[pos].style.fontSize="0.8vw";
		event_name[pos].style.left="13.5%";
		event_name[pos].style.top="65px";
		event_name[pos-2].style.marginRight="2.3%";

		event_time[pos].style.color="rgb(200,200,200)";
		event_time[pos].style.fontSize="1.1vw";
		event_time[pos].style.fontWeight="normal";

		pos=pos-1;

		event_name[pos].style.color="rgb(0,0,0)";
		event_name[pos].style.fontSize="1.3vw";
		// event_name[pos].style.left="13.5%";
		event_name[pos].style.top="35px";
		event_name[pos].style.marginRight="2%";
		event_name[pos+1].style.marginRight="5%";	

		event_time[pos].style.color="rgb(0,0,0)";
		event_time[pos].style.fontSize="1.4vw";
		event_time[pos].style.fontWeight="bold";
		event_time[0].style.left="30%";
		event_time[pos].style.left="43%";
		event_time[3].style.left="71%";
		event_time[2].style.left="55.5%";
		event_time[4].style.left="86.5%";

		
	}
	else if(pos==1)
	{
		event_name[pos].style.color="rgb(200,200,200)";
		event_name[pos].style.fontSize="0.8vw";
		event_name[pos].style.left="13.5%";
		event_name[pos].style.top="65px";
		event_name[pos-1].style.marginRight="5%";

		event_time[pos].style.color="rgb(200,200,200)";
		event_time[pos].style.fontSize="1.1vw";
		event_time[pos].style.fontWeight="normal";

		pos=pos-1;

		event_name[pos].style.color="rgb(0,0,0)";
		event_name[pos].style.fontSize="1.3vw";
		// event_name[pos].style.left="13.5%";
		event_name[pos].style.top="35px";
		event_name[pos].style.marginRight="2%";	

		event_time[pos].style.color="rgb(0,0,0)";
		event_time[pos].style.fontSize="1.4vw";
		event_time[pos].style.fontWeight="bold";
		event_time[pos].style.left="27.8%";
		event_time[1].style.left="41%";
		event_time[3].style.left="71.5%";
		event_time[2].style.left="56.5%";
		event_time[4].style.left="86.5%";

		event_name[pos].style.marginRight="-1.5%";
		event_name[pos].style.left="10%";
		event_name[1].style.marginRight="5%";
		event_name[2].style.marginRight="5%";

		
	}

	else if(pos==4)
	{
		event_name[pos].style.color="rgb(200,200,200)";
		event_name[pos].style.fontSize="0.8vw";
		event_name[pos].style.left="13.5%";
		event_name[pos].style.top="65px";
		event_name[pos-2].style.marginRight="2.3%";

		event_time[pos].style.color="rgb(200,200,200)";
		event_time[pos].style.fontSize="1.1vw";
		event_time[pos].style.fontWeight="normal";

		pos=pos-1;

		event_name[pos].style.color="rgb(0,0,0)";
		event_name[pos].style.fontSize="1.3vw";
		// event_name[pos].style.left="13.5%";
		event_name[pos].style.top="35px";
		event_name[pos].style.marginRight="2%";	

		event_time[pos].style.color="rgb(0,0,0)";
		event_time[pos].style.fontSize="1.4vw";
		event_time[pos].style.fontWeight="bold";
		event_time[0].style.left="30%";
		event_time[1].style.left="45.5%";
		event_time[pos].style.left="73%";
		event_time[2].style.left="61%";
		event_time[4].style.left="86%";

		
	}
	else if(pos==3)
	{
		event_name[pos].style.color="rgb(200,200,200)";
		event_name[pos].style.fontSize="0.8vw";
		event_name[pos].style.left="13.5%";
		event_name[pos].style.top="65px";
		event_name[pos-2].style.marginRight="2.3%";

		event_time[pos].style.color="rgb(200,200,200)";
		event_time[pos].style.fontSize="1.1vw";
		event_time[pos].style.fontWeight="normal";

		pos=pos-1;

		event_name[pos].style.color="rgb(0,0,0)";
		event_name[pos].style.fontSize="1.3vw";
		// event_name[pos].style.left="13.5%";
		event_name[pos].style.top="35px";
		event_name[pos].style.marginRight="2%";	
		event_name[pos+1].style.marginRight="5%";

		event_time[pos].style.color="rgb(0,0,0)";
		event_time[pos].style.fontSize="1.4vw";
		event_time[pos].style.fontWeight="bold";
		event_time[0].style.left="30%";
		event_time[1].style.left="45.5%";
		event_time[3].style.left="71.5%";
		event_time[pos].style.left="58.5%";
		event_time[4].style.left="86%";

		
	}
	
});



