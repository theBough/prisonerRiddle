var grid =  document.getElementById("theGrid");

function makeButtons(){
  document.getElementById("btnStart").style.visibility = "hidden"
  for(i=0 ; i<100 ; i++){
    var btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("id",i);
    grid.appendChild(btn);
    document.getElementById(i).innerHTML = i+1
  }//end loop
  
  
}//end makeButtons
