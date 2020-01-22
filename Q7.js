function f()
{
	var ar=[10,20,30,40,50];
	var a=new Array();
	var b=new Array();
	var i=0;
	var k=0;
	var j=0;
	while(i!=5)
	{
		if(i%2==0)
			{
				a[j]=ar[i];
				j++;
				i++;
			}
				else
				{
					b[k]=ar[i];
					k++;
					i++;
				}
	}
	var sum1=0;
	var sum2=0;
	for(var x=0;x<a.length;x++)
		sum1+=a[x];
	for(var y=0;y<b.length;y++)
		sum2+=b[y];
	var arr=new Array();
	arr[0]=sum1;
	arr[1]=sum2;
	for(var i=0;i<arr.length;i++)
		document.write(arr[i]+"<br>");
}