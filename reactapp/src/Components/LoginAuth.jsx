function LoginAuth(values){
    
    let error = {}
    const pwd_pattern = /^[a-zA-Z0-9]{2,}$/
    //const pwd_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === "") {
        error.email="Email should not be empty"
    }
     else {
        error.email=""
    }
    //email authentication
    if(values.pwd === ""){
        error.pwd = "Pwd should not be empty"
    }
    else if(!pwd_pattern.test(values.pwd)) {
        error.pwd = "Pwd should be 2 letters long."
    } else {
        error.pwd=""
    }
    //password authentication

    return error;
}

export default LoginAuth