function login() {
    let user = document.getElementById('usrName').value
    let pass = document.getElementById('psw').value
    let userLoc = localStorage.getItem("username")
    let passLoc = localStorage.getItem("password")
    // let name = document.getElementsByClassName("user-name")

    // localStorage.getItem('account[password]')
    if(user==="admin"&& pass==="admin"){
        document.getElementById('popup-1').style.display = "none"
        document.getElementById('container').style.display = "block"
        document.getElementById("main").style.background = "white"
        // name.innerHtml = `<p>${localStorage.getItem("admin")} </p>>`

    }else
    if (user === userLoc && pass === passLoc) {
        document.getElementById('popup-1').style.display = "none"
        document.getElementById('container').style.display = "block"
        document.getElementById("main").style.background = "white"
        // name.innerHtml = `<p>${ localStorage.getItem("username")} </p>>`

    } else {
        alert("wrong username or password")
    }
}

function signUp() {
    document.getElementById("signIn").style.display = "none"
    document.getElementById("signUp").style.display = "block"
}

function cancel() {
    document.getElementById("signIn").style.display = "block"
    document.getElementById("signUp").style.display = "none"
}

// class Account {
//     constructor (username, password){
//         this.username = username;
//         this.password = password
//     }
//     getUsername(){
//         return this.username
//     } getPassword(){
//         return this.password
//     }
//     setUsername(username){
//         this.username=username
//     }
//     setPassword(password){
//         this.password=password
//     }
// }
function addAccount (){
    let password = document.getElementById('psw-create').value;
    let repass = document.getElementById('repeat-psw').value;
    if (password === repass) {
     if (password.length >= 6) {
         // const User = new Account(username, password)
         localStorage.setItem( "username" ,document.getElementById('userName').value)
         localStorage.setItem( "password" ,document.getElementById('psw-create').value)
         alert("done")
         document.getElementById("signIn").style.display = "block"
         document.getElementById("signUp").style.display = "none"
     } else {
         alert("password should be longer")
     }
    } else {
        alert("password are not match")
    }
}


