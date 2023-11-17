//This is a low level api

const fs=require('fs');


//Read> Open+read;   r+= read and write
 
/*
fd: joh data hum pass kr rahai hai open mai;
buffer: ekh aisai storage jah pai data ko rakengai
offset: buffer mai mai kis position sai likunga
buffer.length: buffer file kai length 
position: kaha sai read karna chatai ho file mai 


*/

const buf=new Buffer(1024);

fs.open('input.txt','r+',function(err, fd){
    if(err){
        console.log('Error in opening file:',err);
    }
    console.log('File open successfully!');
    fs.read(fd,buf,0,buf.length,0, function(er, bytes){
       if(er){
        console.log('Error in reading file!')
       }
       console.log('Data: ', bytes);
       console.log('Data ', buf.slice(0, bytes).toString())
       fs.close(fd,function(err){
        if(err){
            console.log('error in closing file')
        }
        else{
            console.log('file closed successfully')
        }
       })
    })
})


