const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get('/jsonp', (req, res) => {
  // 返回一种jsonp格式的数据，带有callback name
  // 还需要设置允许跨域头，允许携带cookie
  
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
//  res.header('Content-Type', 'application/javascript; charset=utf-8');
  res.header('X-Powered-By', ' 3.2.1');
  // header里面有set-cookie字段，需要设置一个值
  // res.cookie('testa', 'b', {
  //   httpOnly: true
  // })
  res.header('Set-Cookie', 'testa=b;domain=.stackblitz.com;path=/;');
  // 返回一段js代码的字符串
  res.send(`window.jsonpCallback({
    code: 0,
    msg: 'success',
  })`);
  
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
