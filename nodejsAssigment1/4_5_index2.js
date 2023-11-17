/*
4.In this coding challenge, you will continue working with the file created in the previous assignments& Here
your task is to access the existing nodejs_architecture&txt file and use the fs module to append additional
data to it& Specifically, add some advantages of Node&js to the file and print the file content to the console&

5. To wind up the fs module walk"through challenges, let’s delete the nodejs_architecture&txt file& On deletion
print "File Deleted SuccessFully" to the console%
*/

const fs=require('fs');

fs.appendFile('nodejs_architecture.txt',' this is appended content',(err)=>{
         if (err){
            console.log('error',err);
         }
         else{
            console.log('file appended successfully')
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


 fs.unlink('nodejs_architecture.txt',(err)=>{
   if(err){
    console.log(err);
   }
   else{
    console.log('file deleted successfully');
   }
 })