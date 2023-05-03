let item = document.getElementById("update");
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
item.innerHTML=`Last updated ${new Date(document.lastModified).toLocaleDateString(options)}`;
let copyright=document.getElementById("year");
copyright.innerHTML=new Date(document.lastModified).year;