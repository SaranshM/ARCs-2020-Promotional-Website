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



