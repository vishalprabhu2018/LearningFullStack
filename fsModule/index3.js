const fs=require('fs');

// It will overwrite file : Writing to file
fs.writeFile('input2.txt','PW skills lect', function(err){
    if(err){
        console.log('error in writing file')
    }
    else{
        console.log('Successfully completed file writing')
    }
})


//Append to file

fs.appendFile('input2.txt',' --vishal Prabhu','utf8', function(err){
    if(err){
        console.log('err in appending file');
    }
    else{
        console.log('successfully appended file')
    }

})


//Deleting file

// fs.unlink('input2.txt', function(err){
//     if(err){
//         console.log('eror in deleting file');
//     }
//     else{
//         console.log('success in deleting file');
//     }
// })