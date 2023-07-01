const list =document.getElementById("list");
const grid =document.getElementById("grid");
const section=document.getElementById("directory").getElementsByTagName("div");

list.onclick=listorg;

function listorg(){
    for (x=0;x<section.length;x++){
    section[x].style.width="100%";}
}
grid.onclick=gridorg;
function gridorg(){
    if(window.innerWidth<450){
        for (x=0;x<section.length;x++){
            section[x].style.width="30%";}
        }
    else{
        for (x=0;x<section.length;x++){
            section[x].style.width="16%";}
        }
}
//margin: 10px;
//width: 30%;
//overflow-wrap: break-word;