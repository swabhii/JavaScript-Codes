function a()
{
	var abc=prompt("Enter");
	for(var i=0;i<abc.length;i++)
	{
		if(96<abc.charCodeAt(i)&&abc.charCodeAt(i)<123)
			abc=abc.replace(abc.charAt(i),String.fromCharCode(abc.charCodeAt(i)+1));
	}
	document.write(abc);
}