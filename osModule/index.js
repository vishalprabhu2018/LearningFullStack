const os=require('os');

console.log('CPU architecture:', os.arch());
console.log('Free memory:',os.freemem());
console.log('Total memory:',os.totalmem());
console.log('network interfaces:',JSON.stringify(os.networkInterfaces()));
console.log('os default temp dir',os.tmpdir());
console.log('endianess:',os.endianness());
console.log('hostname:',os.hostname());
console.log('OS type:',os.type());
console.log('OS platform: ',os.platform());
console.log('OS release',os.release());