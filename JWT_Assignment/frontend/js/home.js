async function  userDetail(){
try {
    
const response=await fetch('http://127.0.0.1:3000/', {
    method: 'GET',
    credentials:"include"
    }
)

const data=await response.json();
console.log(data);

const email=document.getElementById('email');
email.innerText=data.data.email;  //email name set

const name=document.getElementById('name');
name.innerText=data.data.name;


} catch (error) {
  
        console.log(error.message)
        window.open('../html/login.html')
   }
}


userDetail();