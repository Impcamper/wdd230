const date = new Date();

const datefield = document.getElementById("date");
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
datefield.innerHTML = `<em>${fulldate}</em>`;
if (date.getDay()==1||date.getDay()==2){
    document.getElementById("meet").style.display="block";
}

const local= document.getElementById("lastvisit");
if (local!=null){
    let lastvist = window.localStorage.getItem("visit");
    if (lastvist==null){
        local.textContent=`This is your first visit`;
    }
    else{
        local.textContent=`You last visited ${lastvist}`;
    }
    localStorage.setItem("visit",fulldate);
}