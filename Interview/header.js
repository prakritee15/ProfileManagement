// change header icon text color and image when mouse over it
function headerchange(check)
{
	if(check==1)
	{
		var text=document.getElementById('p1').style.color="white";
		var img=document.getElementById('my-home').src="home-hover.png";
	}
	else if(check==2)
	{
		var text=document.getElementById('p2').style.color="white";
		var img=document.getElementById('my-profile').src="profile-hover.png";
	}
}


// change header icon text color and image to origin when mouseout
function headerorigin(check)
{
	if(check==1)
	{
		var text=document.getElementById('p1').style.color="black";
		var img=document.getElementById('my-home').src="home.png";
	}
	else if(check==2)
	{
		var text=document.getElementById('p2').style.color="black";
		var img=document.getElementById('my-profile').src="profile.png";
	}
}	