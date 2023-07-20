const url ="https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getdata(){
    const response = await fetch(url);
    const data = await response.json();
    displayfruit(data);
}
const displayfruit=(data) =>{
    const menues=document.querySelectorAll(".fruit");
    menues.forEach(option =>{
        data.forEach((fruit) => {
            let item =document.createElement("option")
            item.value=fruit.name;
            item.textContent=fruit.name;
            option.appendChild(item);
            
        });
    });
}
getdata();
const button=document.getElementById("submit");
button.onclick = addinfo()
function addinfo(){
    const holder =document.getElementById("info");
    holder.display="block";
    holder.innerText="lorem"
}