function logOut(){
    if (confirm("bạn muốn đăng xuất?")===true){
        document.getElementById("container").style.display="none"
        document.getElementById("popup-1").style.display="block"
        document.getElementById("main").style.background = "url(/img/photos/Image.jpg)"
    }
}