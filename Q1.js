function findSign(a,b,c)
{
	if(a>0&&b>0&&c>0)
		return 1;
	else if(a<0&&b<0&&c<0)
		return -1;
	else if((a<0&&b<0&&c>0)||(a>0&&b<0&&c<0)||(a<0&&b>0&&c<0))
		return 1;
	else if((a>0&&b>0&&c<0)||(a<0&&b>0&&c>0)||(a>0&&b<0&&c>0))
		return -1;
	else
		return -1;
}
var one=prompt("One:");
var two=prompt("Two:");
var three=prompt("Three:");
var x=abc(one,two,three);
if(x==1)
document.write("The product pf these numbers is positive");
else
document.write("The product pf these numbers is negative");