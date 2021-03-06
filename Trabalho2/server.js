const express = require('express');
const app = express();
const port = 9001;
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.use(express.static('./'));

app.listen(port, () => { console.log('Process PID ' + process.pid) });
