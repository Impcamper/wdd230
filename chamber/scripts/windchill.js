const temp=parseFloat(document.getElementById('temp').innerHTML);
const speed=parseFloat(document.getElementById('speed').innerHTML);
const chill=35.74+0.6215*temp-35.75*speed**.16+0.4275*temp*speed**.16;
document.getElementById('chill').innerHTML=parseInt(chill)+"°F";