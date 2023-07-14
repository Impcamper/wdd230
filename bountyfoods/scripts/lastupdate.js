let item = document.getElementById("update");
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let update=new Date(document.lastModified);
item.innerHTML=`Last updated: ${update.toLocaleDateString(options)}`;
let copyright=document.getElementById("year");
copyright.innerHTML=update.getFullYear();