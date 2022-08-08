
  





document.getElementById("toggle-open").addEventListener("click",myFunction);
document.getElementById("toggle-close").addEventListener("click",closeFunction);

function myFunction(){
    console.log("working")
    document.getElementById('mobile-list').style.marginLeft="100%"
    document.getElementById('mobile-list').style.transition="1s"
}
function closeFunction(){
    console.log("working")
    document.getElementById('mobile-list').style.marginLeft="-100%"
    document.getElementById('mobile-list').style.transition="1s"
}



// iphone - 13 - pro - list - item - dropdown
// iphone - 13 - pro - list - item - dropdown
// iphone - 13 - pro - list - item - dropdown
// iphone - 13 - pro - list - item - dropdown


document.getElementById("iphone-13-dropdown-open").addEventListener("click",myDropdownFunction);
document.getElementById("iphone-13-dropdown-close").addEventListener("click",closeDropdownFunction);

function myDropdownFunction(){
    console.log("working")
    document.getElementById('iphone-13-pro-list-item-dropdown').style.marginTop="-100%"
    document.getElementById('iphone-13-pro-list-item-dropdown').style.transition="2s"
    document.getElementById("iphone-13-dropdown-open").style.display = "none"
    document.getElementById("iphone-13-dropdown-close").style.display = "block"
}
function closeDropdownFunction(){
    console.log("working")
    document.getElementById('iphone-13-pro-list-item-dropdown').style.marginTop="0%"
    document.getElementById('iphone-13-pro-list-item-dropdown').style.transition="1s"
    document.getElementById("iphone-13-dropdown-open").style.display="block"
    document.getElementById("iphone-13-dropdown-close").style.display="none"
}


// iphone-13-pro-page script 
// iphone-13-pro-page script 
// iphone-13-pro-page script 
// iphone-13-pro-page script 
// iphone-13-pro-page script 


document.getElementById("hero-green-btn").addEventListener("click", greenFunction);


function greenFunction() {
    console.log("working")
    document.getElementById('hero-gold-btn').style.border = "none"
    document.getElementById('hero-green-btn').style.border = "2px solid #0071e3"
    document.getElementById('hero-blue-btn').style.border = "none"
    document.getElementById('hero-silva-btn').style.border = "none"
    document.getElementById('hero-graphite-btn').style.border = "none"

    document.getElementById('green-text').style.display = "block"
    document.getElementById('gold-text').style.display = "none"
    document.getElementById('blue-text').style.display = "none"
    document.getElementById('silva-text').style.display = "none"
    document.getElementById('graphite-text').style.display = "none"




    document.getElementById('hero-green-btn').style.transition = "1s"
    document.getElementById('hero-green-img').style.display = "block"
    document.getElementById('hero-graphite-img').style.display = "none"
    document.getElementById('hero-blue-img').style.display = "none"
    document.getElementById('hero-silva-img').style.display = "none"
    document.getElementById('hero-gold-img').style.display = "none"
    document.getElementById('hero-blue-img').style.display = "none"
}



document.getElementById("hero-gold-btn").addEventListener("click", goldFunction);


function goldFunction() {
    console.log("working")
    document.getElementById('hero-gold-btn').style.border = "2px solid #0071e3"
    document.getElementById('hero-green-btn').style.border = "none"
    document.getElementById('hero-blue-btn').style.border = "none"
    document.getElementById('hero-silva-btn').style.border = "none"
    document.getElementById('hero-graphite-btn').style.border = "none"

    document.getElementById('gold-text').style.display = "block"
    document.getElementById('green-text').style.display = "none"
    document.getElementById('blue-text').style.display = "none"
    document.getElementById('silva-text').style.display = "none"
    document.getElementById('graphite-text').style.display = "none"



    document.getElementById('hero-gold-btn').style.transition = "1s"
    document.getElementById('hero-green-img').style.display = "none"
    document.getElementById('hero-graphite-img').style.display = "none"
    document.getElementById('hero-blue-img').style.display = "none"
    document.getElementById('hero-silva-img').style.display = "none"
    document.getElementById('hero-gold-img').style.display = "block"
    document.getElementById('hero-blue-img').style.display = "none"
}

document.getElementById("hero-graphite-btn").addEventListener("click", graphiteFunction);


function graphiteFunction() {
    console.log("working")
    document.getElementById('hero-gold-btn').style.border = "none"
    document.getElementById('hero-green-btn').style.border = "none"
    document.getElementById('hero-blue-btn').style.border = "none"
    document.getElementById('hero-silva-btn').style.border = "none"
    document.getElementById('hero-graphite-btn').style.border = "2px solid #0071e3"

    document.getElementById('gold-text').style.display = "none"
    document.getElementById('green-text').style.display = "none"
    document.getElementById('blue-text').style.display = "none"
    document.getElementById('silva-text').style.display = "none"
    document.getElementById('graphite-text').style.display = "block"



    document.getElementById('hero-gold-btn').style.transition = "1s"
    document.getElementById('hero-green-img').style.display = "none"
    document.getElementById('hero-graphite-img').style.display = "block"
    document.getElementById('hero-blue-img').style.display = "none"
    document.getElementById('hero-silva-img').style.display = "none"
    document.getElementById('hero-gold-img').style.display = "none"
    document.getElementById('hero-blue-img').style.display = "none"
}

document.getElementById("hero-blue-btn").addEventListener("click", blueFunction);


function blueFunction() {
    console.log("working")
    document.getElementById('hero-gold-btn').style.border = "none"
    document.getElementById('hero-green-btn').style.border = "none"
    document.getElementById('hero-blue-btn').style.border = "2px solid #0071e3"
    document.getElementById('hero-silva-btn').style.border = "none"
    document.getElementById('hero-graphite-btn').style.border = "none"


    document.getElementById('gold-text').style.display = "none"
    document.getElementById('green-text').style.display = "none"
    document.getElementById('blue-text').style.display = "block"
    document.getElementById('silva-text').style.display = "none"
    document.getElementById('graphite-text').style.display = "none"


    document.getElementById('hero-green-img').style.display = "none"
    document.getElementById('hero-graphite-img').style.display = "none"
    document.getElementById('hero-blue-img').style.display = "none"
    document.getElementById('hero-silva-img').style.display = "none"
    document.getElementById('hero-gold-img').style.display = "none"
    document.getElementById('hero-blue-img').style.display = "block"
}

document.getElementById("hero-silva-btn").addEventListener("click", silvaFunction);


function silvaFunction() {
    console.log("working")
    document.getElementById('hero-gold-btn').style.border = "none"
    document.getElementById('hero-green-btn').style.border = "none"
    document.getElementById('hero-blue-btn').style.border = "none"
    document.getElementById('hero-silva-btn').style.border = "2px solid #0071e3"
    document.getElementById('hero-graphite-btn').style.border = "none"


    document.getElementById('gold-text').style.display = "none"
    document.getElementById('green-text').style.display = "none"
    document.getElementById('blue-text').style.display = "none"
    document.getElementById('silva-text').style.display = "block"
    document.getElementById('graphite-text').style.display = "none"

    document.getElementById('hero-green-img').style.display = "none"
    document.getElementById('hero-graphite-img').style.display = "none"
    document.getElementById('hero-blue-img').style.display = "none"
    document.getElementById('hero-silva-img').style.display = "block"
    document.getElementById('hero-gold-img').style.display = "none"
    document.getElementById('hero-blue-img').style.display = "none"
}




