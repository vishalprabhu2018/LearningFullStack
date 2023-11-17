
/*2 In the same project directory created in the above assignment, your task is to create a new file index&js and
using the fs module add information about Node&js architecture to a new file nodejs_architecture&txt& Below
are the expected files in the project folder

3. Continuing assignment 2& Here, let’s create a new file named index&js and use the fs module to read the
content of nodejs_architecture&txt and print the content to the console&
*/
const fs=require('fs');


 fs.writeFile('nodejs_architecture.txt','This is my first assignment on nodejs', (err)=>{
       if(err){
        console.log('error',err)
       }
       else{
        console.log('file created and data added')
       }
      
 })


fs.readFile('nodejs_architecture.txt',(err,data)=>{
    if(err){
        console.log('error :',err);
    }
    else{
    console.log('file readed',data.toString());
    }
 });