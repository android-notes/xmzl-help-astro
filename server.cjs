const express = require('express');
const path = require('path');

const app = express();
const port = 3000;  // 你可以根据需要更改端口号

// 指定静态文件的目录（即Astro生成的静态文件）
app.use(express.static(path.join(__dirname, 'dist')));

// 如果找不到资源，则返回index.html (适用于SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Astro site is running at http://localhost:${port}`);
});
