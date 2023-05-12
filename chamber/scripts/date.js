const select= document.getElementById("date");
const now = new Date();
let daynow = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
select.innerHTML=daynow;