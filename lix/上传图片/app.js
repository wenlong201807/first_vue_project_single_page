const fs = require('fs');
const express = require('express');
const multer  = require('multer');
const path = require('path');
const app = express();
const uploadSingle = multer({ dest: path.join(__dirname, 'upload-single/') });
const uploadMulti = multer({ dest: path.join(__dirname,'upload-multi/') });
// var createFolder = function(folder){
//     try{
//         fs.accessSync(folder); 
//     }catch(e){
//         fs.mkdirSync(folder);
//     }  
// };
// var uploadFolder = './upload/';
// createFolder(uploadFolder);
// // 通过 filename 属性定制
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, uploadFolder);    // 保存的路径，备注：需要自己创建
//     },
//     filename: function (req, file, cb) {
//         // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
//         cb(null, file.fieldname + '-' + Date.now());  
//     }
// });

// // 通过 storage 选项来对 上传行为 进行定制化
// var upload = multer({ storage: storage })
// 单图上传
app.post('/upload-single', uploadSingle.single('logo'), function(req, res, next){
	var file = req.file;
    console.log('文件类型：%s', file.mimetype);
    console.log('原始文件名：%s', file.originalname);
	console.log('文件大小：%s', file.size);
	console.log('文件编码类型:%s', file.encoding);
	console.log('表单中指定的字段名称：%s', file.fieldname);
	console.log('保存文件的文件夹：%s', file.destination);
    console.log('文件保存路径：%s', file.path);
    res.json(req.file.path);
});

// 多图上传
app.post('/upload-multi', uploadMulti.array('logos', 2), function(req, res, next){
	res.send({ret_code: '0'});
});

app.get('/form', function(req, res, next){
	var form = fs.readFileSync('./form.html', {encoding: 'utf8'});
	res.send(form);
});

app.listen(3000);


