
const url="json/data.json";
async function getbusiness(){
    const response = await fetch(url);
    const data = await response.json();
    displaybusinesses(data.businesses);
}

const displaybusinesses = (businesses) => {
    const holder = document.getElementById("directory");

    businesses.forEach((business)=>{
    let card = document.createElement("div");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    let a = document.createElement("a");
    let pic = document.createElement("img");
    let p = document.createElement("p");
    let p2 = document.createElement("p");

    h2.textContent=business.name;
    h3.textContent=business.membership;
    a.textContent=business.website;
    a.href=business.website;
    p.textContent=business.address;
    p2.textContent=business.phone;

    pic.src=business.icon;
    pic.alt=`Icon of ${business.name}`;

    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(pic);
    card.appendChild(a);
    card.appendChild(p);
    card.appendChild(p2);
    holder.appendChild(card);
    });
    
}

getbusiness();