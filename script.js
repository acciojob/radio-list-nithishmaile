//your JS code here. If required.

const body=document.body


for(let i=1;i<=6;i++){
	createRadioButton(i);
}

function createRadioButton(id){
	const radio=document.createElement("input");
	radio.name="options"
	radio.setAttribute("type","radio");
	radio.id=`${id}`
	if(id==2){
		radio.disabled=true;
	}
	if(id==3){
		radio.setAttribute("checked","true");
	}
	const label=document.createElement("label");
	label.innerText=`Option ${id}`
	if(id%2==0){
		label.style.color="red";
		label.classList.add("input")
	}else{
		label.style.color="black";
	}
	label.setAttribute("for",`${id}`);
	body.append(radio,label)
	const br=document.createElement("br");
	body.appendChild(br);
}
