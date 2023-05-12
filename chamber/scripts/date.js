const date = new Date();

const datefield = document.getElementById("date");
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
datefield.innerHTML = `<em>${fulldate}</em>`;