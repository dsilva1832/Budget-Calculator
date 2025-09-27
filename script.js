function register(){
    user={
        username:uname.value,
        email:email.value,
        password:pswd.value,
        income:0,
        expense:0
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
        //     localStorage.setItem("USER",usrname)
        //     localStorage.setItem("PASS",paswrd);
        //     window.location='./home.html'
        // }else{
        //     alert("Wrong credentials!!")
        //     alert("Please register if you're new!!")
        // }

            let newObj=JSON.parse(localStorage.getItem(usrname));
            console.log(newObj);
            if(paswrd===newObj.password){
                localStorage.setItem('loggedobj',JSON.stringify(newObj))
                localStorage.setItem("loggedkey",usrname)

                alert("Login Successful")
                window.location='./home.html';
            }else{
                alert("Wrong Password: login failed")
                document.getElementById("password").value=" "
            }
        }else{
            alert("User does not exist. Please Register")
        }
    }  
}

// welcome user
let loginUser=localStorage.getItem('USER')
welcome.innerHTML=`Welcome ${loginUser}`

function logout(){
    localStorage.clear()
    window.location='index.html'
}

function addIncome(event){
    // event.preventDefault();
    let incometype=document.getElementById('incometype').value
    let incomeamt=document.getElementById('incomeamt').value
   
    if(incomeamt==''||incometype==''){
        alert("Enter all fields");
    }else{
        let newobj=JSON.parse(localStorage.getItem(user.username))
        console.log(newobj);
        
        incomedisplay.innerHTML=`${incomeamt} Rs`
    }
    // incomedisplay.innerHTML=``
}

function addExpense(){

}