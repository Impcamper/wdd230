const date = new Date();

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);

const dateinput = document.getElementById("datetime");
if(dateinput!=null){dateinput.value=fulldate;}