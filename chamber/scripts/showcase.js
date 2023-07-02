const companyurl="json/data.json";

const filtergroup = async (filter = "all") =>{
    let businesses = await getbusiness(companyurl);
    companies=businesses.filter((businesses) => businesses.membership ==="Gold" || businesses.membership ==="Silver")
    display(companies);
    }

async function getbusiness(companyurl){
    const response = await fetch(companyurl);
    const data = await response.json();
    return data.businesses;
}
function display(companies){
    const displaygroup=[];
    for(x=0;x<3;x++){
        number=Math.floor(Math.random()*companies.length);
        if(!displaygroup.includes(companies[number])){
            displaygroup.push(companies[number]);
        }
        else {x--;}
    }
    const holder = document.getElementById("spotlight");
    const ids=[""]
    displaygroup.forEach(business => {
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        let img = document.createElement("img");
        let p = document.createElement("p");
        let hr = document.createElement("hr");
        let p2 = document.createElement("p");

        h2.textContent=business.name;
        img.src=business.icon;
        img.alt=`Icon of ${business.name}`;
        p.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
        p2.textContent=`email@${business.name}.com ${business.phone} ${business.number}`

        div.appendChild(h2);
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(hr);
        div.appendChild(p);
        holder.appendChild(div)
    }); 
}
filtergroup();
/*
const filter = (businesses) => {
    businesses.filter(membership => membership=="Silver" || membership=="Gold");
};
array= getbusiness()*/