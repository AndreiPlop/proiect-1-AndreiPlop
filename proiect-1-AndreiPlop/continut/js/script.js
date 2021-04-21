function incarcareDateSec1()
{
	var currentdate = new Date();
	var data="Data: " + currentdate.getDate() + "/" 
	+ (currentdate.getMonth()+1)  + "/" 
	+ currentdate.getFullYear() + ", Ora: " 
	+ currentdate.getHours() + ":"
	+ currentdate.getMinutes() + ", Adresa URL: "
	+ window.location.href + ", Brower: "
	+ navigator.appVersion; // + ", Sistem de operare: " + window.navigator.oscpu ;
	document.getElementById("sectiunea1").innerHTML=data;		
	console.log(data);
}

function extrage()
{
	var numereIn10=new Array(8);
	var numereIn16=new Array(8);
	var numereUser=new Array(8);
	var countWins=0;
	for(i=0 ; i< 8 ; i++)
	{
		numereIn10[i]=Math.floor((Math.random() * 254) + 1);
		numereIn16[i]=numereIn10[i].toString(16);
	}
	for(i=1 ; i< 9 ; i++)
	{
		numereUser[i-1] = document.getElementById("numarul" + i ).value;
	}
	
	for(i=0 ; i< 8 ; i++)
	for(j=0 ; j< 8 ; j++)
	{
		if(numereUser[i]==numereIn16[j])
			{
				countWins=countWins+1;
			}
	}


	document.getElementById("nrExtrase").innerHTML =
	
	"Numele	Numerele câștigătoare sunt: " + numereIn16 +"<br>" + countWins +" numere sunt caștigătoare!";
	

	
	console.log(numereUser);
}

//lab 7 
function schimbaContinut(resursa)
{
	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("continut").innerHTML = this.responseText;
    }
  };
  //console.log(resursa + '.html');
  xhttp.open("GET", resursa + '.html', true);
 

  xhttp.send();
}