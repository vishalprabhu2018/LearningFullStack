const path=require('path');

console.log(path.sep);
// console.log(process.env.path)
console.log(path.delimiter);

const filePath1='/public/home/index2.html';

const currentFilePath=__filename;
console.log('currentFilePath',currentFilePath)

console.log('dirname>',__dirname);

let basename=path.basename(currentFilePath);
console.log('basename >',basename);

let basenameWithoutExt=path.basename(currentFilePath, '.js');
console.log('basenameWithoutExt>',basenameWithoutExt);


let dirname=path.dirname(currentFilePath);
console.log('dirname>',dirname);


console.log('extname >',path.extname('index.md.js'));
console.log('extname >',path.extname(currentFilePath));


let pathToFile=path.format({
    dir:'/public/home',
    base:'index.js'
}
)

console.log('pathToFile>',pathToFile);

console.log('normalise >', path.normalize(pathToFile));


console.log('IsAbsolute>',path.isAbsolute(currentFilePath));

console.log('IsAbsolute2>',path.isAbsolute('/index.js'));
console.log('IsAbsolute3>',path.isAbsolute('./index.js'));
console.log('IsAbsolute3>',path.isAbsolute('../index.js'));  

let pathToDir=path.join('/home','js','dist','index.js');
console.log('pathToDir',pathToDir);

console.log('parse>',path.parse(currentFilePath));

console.log('normalise',path.normalize('E:\\PWSKillsPract\\PathModule\\path'));


console.log('relative>',path.relative('/home/user/config','/home/user/js'));

console.log('resolve>',path.resolve());

