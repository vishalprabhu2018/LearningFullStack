const form=document.querySelector('.form');

form.addEventListener('submit',async (e)=>{

    e.preventDefault();

    const name=document.getElementById('name').value;
    const username=document.getElementById('username').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const bio=document.getElementById('bio').value;


    const response=await fetch('http://127.0.0.1:3000/signup', {
       method:'POST',
       header:{
        'Content-Type':'application/json'
       },
       body: JSON.stringify({name,username,email,password,bio}),
    })
    const data=await response.json();
    console.log(data);

      //display the message of json in the website.
      if(data.success){
        if(data.success==true){
           p.innerText='User Registered successfully'
        }
        else{
         p.innerText= data.message;
        }
       
      }
      else{
        p.innerText=data.error;
      }
  
      //resetting the form
    form.reset();

    setTimeout(()=>{
      p.innerText='';
    },10000)
    

  });
   
