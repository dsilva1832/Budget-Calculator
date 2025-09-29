function register(){
    user={
        uname:uname.value,
        email:email.value,
        password:pswd.value,
        income:0,
        expense:0
    }
    console.log(user.uname,user.email,user.password);
    if(user.uame==''||user.email==''||user.password==''){
        alert("Enter all fields")
    }else{
        if(user.uname in localStorage){
            alert("Username already exist")
        }else{
            localStorage.setItem(user.uname,JSON.stringify(user))
            alert("User successfully registered")
            window.location="./index.html"
        }
    }
}

displayIncomeExpense();


function login(){
    usrname=uname.value;
    paswrd=lpswd.value;
    if(usrname==''||paswrd==''){
        alert("Enter all fields");
    }else{
        if(usrname in localStorage){
     

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
let loginUser=localStorage.getItem('loggedkey')
welcome.innerHTML=`Welcome ${loginUser.toUpperCase()}`

function logout(){
    let log=confirm("Confirm Logout?")
    if(log)
    {
        localStorage.clear()
        window.location='index.html'
    }
}

function displayIncomeExpense(){
    let loggedkey = localStorage.getItem("loggedkey");
    let obj=JSON.parse(localStorage.getItem(loggedkey));
    let originalobj=JSON.parse(localStorage.getItem(obj.uname))
    let incomedisplay=document.getElementById("incomedisplay")
    let expensedisplay=document.getElementById("expensedisplay")
    incomedisplay.innerHTML=`Rs ${originalobj.income}/-`
    expensedisplay.innerHTML=`Rs ${originalobj.expense}/-`
}

function addIncome(event){
    event.preventDefault();
    let incometype=document.getElementById('incometype').value
    let incomeamt=document.getElementById('incomeamt').value
   
    if(incomeamt==''||incometype==''){
        alert("Enter all fields");
    }else{
        let loggedkey = localStorage.getItem("loggedkey");
        let newobj=JSON.parse(localStorage.getItem(loggedkey))
        newobj.income=newobj.income+parseFloat(incomeamt)
        console.log(newobj);
        
        localStorage.setItem(newobj.uname,JSON.stringify(newobj))
        alert("Income added successfully")
        displayIncomeExpense();
        document.getElementById('incomeform').reset()

    }
}


function addExpense(event){
    event.preventDefault();
    let expensetype=document.getElementById("expensetype").value
    let expenseamt=document.getElementById("expenseamt").value
    if(expensetype==''|| expenseamt==''){
        alert("Enter All Fields")
    }
    else{
        let loggedkey = localStorage.getItem("loggedkey");
        let newobj=JSON.parse(localStorage.getItem(loggedkey))
        if(expenseamt >newobj.income){
            alert("Insufficient amount")
        }
        else{
            newobj.income=newobj.income-parseFloat(expenseamt)
            newobj.expense=newobj.expense+parseFloat(expenseamt)
            localStorage.setItem(newobj.uname,JSON.stringify(newobj))
            alert("expense added successfully")
            document.getElementById("expenseform").reset();
            displayIncomeExpense();
        }
    }
}


function clearAll(){
    let clear = confirm("Are you sure to clear all data?")
    if(clear){
        let loggedkey=localStorage.getItem('loggedkey')
        let newobj=JSON.parse(localStorage.getItem(loggedkey))
        newobj.income=0;
        newobj.expense=0;
        localStorage.setItem(newobj.uname,JSON.stringify(newobj))
        displayIncomeExpense();
    }

}