const validateEmail = (email) => {
    const exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(exp.test(email)){
        return true
    }
    return false
  };

  export { validateEmail };