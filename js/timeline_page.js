var pos=2;

var event_name=document.getElementsByClassName('event_name');
var event_time=document.getElementsByClassName('event_time');

var next=document.getElementsByClassName('nav_right')[0];
var prev=document.getElementsByClassName('nav_left')[0];

next.addEventListener('click',function(){

	if(pos<=3)
	{
		event_name[pos].style.fontSize="1vw";
		event_name[pos].style.top="0vh";
		event_name[pos].style.margin="0% 0%";
		event_name[pos].style.fontWeight="unset";

		event_time[pos].style.fontSize="1vw";
		event_time[pos].style.top="0vw";
		event_time[pos].style.margin="0% 0%";

		pos=pos+1;
		event_name[pos].style.fontSize="1.5vw";
		event_name[pos].style.fontWeight="bold";
		event_name[pos].style.top="-6vh";
		event_name[pos].style.margin="0% -3.5%";


		event_time[pos].style.fontSize="1.5vw";
		event_time[pos].style.fontWeight="bold";
		event_time[pos].style.top="1vw";
		event_time[pos].style.margin="0% -2%";	
	}
	



});

prev.addEventListener('click',function(){

	if(pos>=1)
	{
		event_name[pos].style.fontSize="1vw";
		event_name[pos].style.top="0vh";
		event_name[pos].style.margin="0% 0%";
		event_name[pos].style.fontWeight="unset";

		event_time[pos].style.fontSize="1vw";
		event_time[pos].style.top="0vw";
		event_time[pos].style.margin="0% 0%";

		pos=pos-1;
		event_name[pos].style.fontSize="1.5vw";
		event_name[pos].style.fontWeight="bold";
		event_name[pos].style.top="-6vh";
		event_name[pos].style.margin="0% -3.5%";

		event_time[pos].style.fontSize="1.5vw";
		event_time[pos].style.fontWeight="bold";
		event_time[pos].style.top="1vw";
		event_time[pos].style.margin="0% -2%";
	}

	

});