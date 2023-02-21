var grid =  document.getElementById("theGrid");

function makeButtons(){
  for(i=0 ; i<10 ; i++){
    var btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("id",i);
    grid.appendChild(btn);
  }//end loop
  
  
}//end makeButtons
