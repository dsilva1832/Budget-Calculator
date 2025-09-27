function register(){
    user={
        username:uname.value,
        email:email.value,
        password:pswd.value
    }
    console.log(user.username,user.email,user.password);
    if(user.username==''||user.email==''||user.password==''){
        alert("Enter all fields")
    }else{
        if(user.username in localStorage){
            alert("Username already exist")
        }else{
            localStorage.setItem(user.username,JSON.stringify(user))
            alert("User successfully registered")
            window.location="./index.html"
        }
    }
}

function login(){
    usrname=uname.value;
    paswrd=lpswd.value;
    if(usrname==''||paswrd==''){
        alert("Enter all fields");
    }else{
        if(usrname in localStorage){
            localStorage.setItem("USER",usrname)
            window.location='./home.html'
        }else{
            alert("User does not exist! Please Register")
        }
    }

    // if(pswd==user.password){
    //     localStorage.setItem("Password",pswd);
    //     alert("Login Success");
    // }else{
    //     alert("Wrong password");
    // }
    
}

// welcome user
let loginUser=localStorage.getItem('USER')
welcome.innerHTML=`Welcome ${loginUser}`

function logout(){
    localStorage.clear()
    window.location='index.html'
}