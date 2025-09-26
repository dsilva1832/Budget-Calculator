function register(){
    user={
        username:uname.value,
        email:email.value,
        password:pswd.value
    }
    if(user.username in localStorage){
        alert("User already exist")
    }else{
        localStorage.setItem(user.username,JSON.stringify(user))
        alert("User successfully registered")
        window.location="./index.html"
    }
}

function login(){
    usrname=uname.value;
    localStorage.setItem("USER",usrname)
    window.location='./home.html'
    
}

// welcome user
let loginUser=localStorage.getItem('USER')
welcome.innerHTML=`Welcome ${loginUser}`

function logout(){
    localStorage.clear()
    window.location='index.html'
}