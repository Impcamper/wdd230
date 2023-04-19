var item = document.getElementById("update");
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
item.innerHTML=`Last updated ${new Date(document.lastModified).toLocaleDateString(options)}`;