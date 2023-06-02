const images = document.querySelectorAll("[data-src]");


function preloadImage(img){
    const src = img.getAttribute("data-src");
    if(!src){
        return;
    }
    img.src=src;
}

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 300px 0px"
};

const obsv= new IntersectionObserver((entries, obsv) => {
    entries.forEach(entry =>{
        if (!entry.isIntersecting){
            return;
        }
        else{
            preloadImage(entry.target);
            obsv.unobserve(entry.target);
        }
    });
}, imgOptions);

images.forEach(image => {
    obsv.observe(image);
});