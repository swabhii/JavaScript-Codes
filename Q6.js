function f()
{
	var c=prompt("Enter string");
	var p=prompt("Enter pos");
    var d=c.charAt(p);
    var res="";
    res=c.replace(d,'');
    document.write(res);
}