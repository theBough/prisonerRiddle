var grid =  document.getElementById("theGrid");
var randomNumbers = [];

function makeButtons(){
  fillArray()
  document.getElementById("btnStart").style.visibility = "hidden"
  for(i=0 ; i<100 ; i++){
    var btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("id",i);
    grid.appendChild(btn);
    document.getElementById(i).innerHTML = i+1
  }//end loop
}//end makeButtons
function fillArray(){
  while(randomNumbers.length < 99){
    var rndNum = Math.random()*100;
    rndNum = Math.ceil(rndNum);
    if(!randomNumbers.includes(rndNum)){
      randomNumbers.push(rndNum);
    }
  }//end loop
  console.log(randomNumbers)
}
