
function login(){
        
document.getElementById('form').addEventListener('submit',async function (event){
        event.preventDefault();

const username=document.querySelector('#username').value;
const password=document.querySelector('#password').value;
const  p = document.getElementById('message');



try {
        const response=await fetch('http://127.0.0.1:3000/login',{
        method:'POST',
        credentials: 'include',
          redirect: 'follow',
        headers:{
                'Content-Type':'application/json'
        },
        body:JSON.stringify({username, password}),

});

// console.log(JSON.stringify({username, password}));

const data=await response.json();
console.log(data);


        if(data.success==true){
           p.innerText='User Logged In successfully'
           window.open('../html/home.html')
        }
        else{
         p.innerText= data.message;
        }

        form.reset();
  
      setTimeout(()=>{
        p.innerText='';
      },10000)
      
       
      
      
} catch (error) {
        p.innertext=error.message;
        console.log(error);
}
  

});
}

login();

// const apiReq={
//         method:'POST', 
//         header:{'Content-Type':'application/json' },
//         body: JSON.stringify({username, password})
// }

// fetch('http://localhost:3000/login',apiReq)
// .then((response)=>{return response.json()})
// .then((data)=>{console.log(data)})
// .catch((error)=>console.log(error))