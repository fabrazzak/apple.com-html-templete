
  





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




