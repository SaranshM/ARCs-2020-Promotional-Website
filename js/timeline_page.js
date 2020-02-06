var center_name=document.getElementsByClassName('event_name')[2];
var center_time=document.getElementsByClassName('event_time')[2];
var pos=2;
var pos2=0;
if(window.innerWidth<=650)
{
	
	center_name.style.fontSize="3vw";
	center_name.style.fontWeight="bold";
	center_name.style.top="-3vh";
	center_name.style.margin="0% 0%";
	center_name.style.lineHeight="50%";
	center_time.style.fontSize="3vw";
	center_time.style.fontWeight="bold";
	center_time.style.top="0vh";
	center_time.style.margin="0% 0%";
}
else
{

	
	center_name.style.fontSize="1.5vw";
	center_name.style.fontWeight="bold";
	center_name.style.top="-6vh";
	center_name.style.margin="0% -3%";

	center_time.style.fontSize="1.5vw";
	center_time.style.fontWeight="bold";
	center_time.style.top="1vh";
	center_time.style.margin="0% -2%";

}




var event_name=document.getElementsByClassName('event_name');
var event_time=document.getElementsByClassName('event_time');
var next=document.getElementsByClassName('nav_right')[0];
var prev=document.getElementsByClassName('nav_left')[0];


var event_name_wrap=document.getElementsByClassName('event_name_wrap')[0];
var event_time_wrap=document.getElementsByClassName('event_time_wrap')[0];
var dots_wrap=document.getElementsByClassName('dots_wrap')[0];
var hori_line=document.getElementsByClassName('hori_line')[0];

var go_left_name=0;
var go_left_time=0;
var go_left_line=0;
var go_left_dots=0;


next.addEventListener('click',function(){

	if(window.innerWidth<=650 && pos2<4)
	{
		
		pos2=pos2+1;
		go_left_name=go_left_name-107.5;
		go_left_time=go_left_time-107.5;
		go_left_dots=go_left_dots-107.5;
		go_left_line=go_left_line-107.5;
		event_name_wrap.style.marginLeft=go_left_name+"%";
		event_time_wrap.style.marginLeft=go_left_time+"%";
		dots_wrap.style.marginLeft=go_left_dots+"%";
		hori_line.style.marginLeft=go_left_line+"%";

	}


	else if(pos<=3 && pos2<4)
	{
		event_name[pos].style.fontSize="1vw";
		event_name[pos].style.top="0vh";
		event_name[pos].style.margin="0% 0%";
		event_name[pos].style.fontWeight="unset";

		event_time[pos].style.fontSize="1vw";
		event_time[pos].style.top="0vw";
		event_time[pos].style.margin="0% 0%";
		event_time[pos].style.fontWeight="unset";

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


window.addEventListener('resize',function(e){
	if(window.innerWidth>650)
	{
		center_name.style.fontSize="1.5vw";
		center_name.style.fontWeight="bold";
		center_name.style.top="-6vh";
		center_name.style.margin="0% -3%";
		center_name.style.lineHeight="100%";

		center_time.style.fontSize="1.5vw";
		center_time.style.fontWeight="bold";
		center_time.style.top="1vh";
		center_time.style.margin="0% -2%";
		var i;
		for(i=0;i<5;i++)
		{
			if(i!=pos)
			{
				event_name[i].style.top="-2vh";
			}
		}
	}
	else
	{
		center_name.style.fontSize="3vw";
		center_name.style.fontWeight="bold";
		center_name.style.top="-3vh";
		center_name.style.margin="0% 0%";
		center_name.style.lineHeight="50%";
		center_time.style.fontSize="3vw";
		center_time.style.fontWeight="bold";
		center_time.style.top="0vh";
		center_time.style.margin="0% 0%";
	}
});

prev.addEventListener('click',function(){
	
	if(window.innerWidth<=650 && pos2>0)
	{
		
		pos2=pos2-1;
		go_left_name=go_left_name+107.5;
		go_left_time=go_left_time+107.5;
		go_left_dots=go_left_dots+107.5;
		go_left_line=go_left_line+107.5;
		event_name_wrap.style.marginLeft=go_left_name+"%";
		event_time_wrap.style.marginLeft=go_left_time+"%";
		dots_wrap.style.marginLeft=go_left_dots+"%";
		hori_line.style.marginLeft=go_left_line+"%";

	}

	else if(pos>=1 && pos2>=0)
	{
		
		event_name[pos].style.fontSize="1vw";
		event_name[pos].style.top="0vh";
		event_name[pos].style.margin="0% 0%";
		event_name[pos].style.fontWeight="unset";

		event_time[pos].style.fontSize="1vw";
		event_time[pos].style.top="0vw";
		event_time[pos].style.margin="0% 0%";
		event_time[pos].style.fontWeight="unset";

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


