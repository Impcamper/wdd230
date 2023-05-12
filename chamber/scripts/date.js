
const select= document.getElementById("date");
const now = new Date();

const daynow = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);

select.innerText=`<em>${fulldate}</em>`;