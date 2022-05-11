			/* Page Careers Us*/
function showdata(){
	var labl1 = window.full1.value;
	var labl2 = window.full2.value;
	if(labl1=='')
	{
		window.lblnd1.style.fontSize="30px";
		window.lblnd1.style.color="red";
	}
	else{
		window.lblnd1.style.fontSize="15px";
		window.lblnd1.style.color="black";
	}
	if(labl2==''){
		window.lblnd2.style.fontSize="30px";
		window.lblnd2.style.color="red";
	}
	else{
		window.lblnd2.style.fontSize="15px";
		window.lblnd2.style.color="black";
	}
	if(labl1 !='' && labl2 !=''){
		alert("EveryThing Is Very Nice!♥..."+"\n\n"+window.full2.value+"  "+window.full1.value);
	}
}
function showprompt(){
	prompt("Veiw Relative Policy is very important...!")
}
		/* Page Contact Us*/
function showdata2(){
	var allInput = [window.i1.value,window.i2.value,window.i3.value,window.i4.value,window.i5.value];
	var allShow  = [document.getElementById("i1").getAttribute("placeholder"),
					document.getElementById("i2").getAttribute("placeholder"),
					document.getElementById("i3").getAttribute("placeholder"),
					document.getElementById("i4").getAttribute("placeholder"),
					document.getElementById("i5").getAttribute("placeholder")]
	for(x=0;x<allInput.length;x++){
		if(allInput[x]==''){
			alert("Enter Your "+allShow[x]);
			break;
		}
	}
}