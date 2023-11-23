

document.querySelector('#form').addEventListener('submit',async (e)=>{
        e.preventDefault();

const username=document.querySelector('#username').value;
const password=document.querySelector('#password').value;


const response=await fetch('http://localhost:3000/login',{
        method:'POST',
        header:{
                'Content-Type':'application/json'
        },
        body: JSON.stringify({username, password})
});

const data=await response.json();
console.log(data);

});