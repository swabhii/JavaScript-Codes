function rep()
{
var a=prompt("Enter");
var b=a.substring(0,2);
//document.write(b);
var res="";
if(b==="Js")
	document.write(a);
else
{
res+="Js"+a;
document.write(res);
}
}