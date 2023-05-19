const input=document.getElementById("favchap");
const button=document.querySelector("button");
const list=document.getElementById("list");


button.addEventListener("click",() =>{
    if(input.value!==""){
        let ref=input.value;
        
        const info=document.createElement("li");
        info.innerHTML=ref;
        const dele=document.createElement("button");
        dele.textContent="❌";
        dele.addEventListener("click",() =>{
            list.removeChild(info);
        });
        info.appendChild(dele);
        list.appendChild(info);
    }
    input.value="";
    input.focus();
});