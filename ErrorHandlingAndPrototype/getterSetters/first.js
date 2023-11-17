class user{
        constructor(email,password){
            this.email=email;
            this.password=password;

        }
        get password(){
          return this.pass.toUpperCase();
        }
        set password(value){
        this.pass=value
        }
}

const vishal=new user('vishal','vishal@12');
    console.log(vishal.password);