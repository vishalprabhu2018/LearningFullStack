
function login(){
        
document.getElementById('form').addEventListener('submit',async function (event){
        event.preventDefault();

const username=document.querySelector('#username').value;
const password=document.querySelector('#password').value;


const response=await fetch('http://127.0.0.1:3000/login',{
        method:'POST',
        headers:{
                'Content-Type':'application/json'
        },
        body:JSON.stringify({username, password}),

});

// console.log(JSON.stringify({username, password}));

const data=await response.json();
console.log(data);


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