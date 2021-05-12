const cprocess = require('child_process');
const express = require('express');
const morgan = require("morgan");
const cors = require('cors');
const app = express();

app.use(morgan("dev"));
app.use(cors());

// Used body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('hi hook')
})

app.get('/home', (req, res) => {
    res.send('hi home')
})

app.post('/hook', (req, res) => {
    const r = req.body;
    console.log(r)
    // let ip = '1.1.1.1';
    // let username = 'test';
    // let password = 'pwd';
    // let newpassword = 'newpwd';
    // cprocess.execFile('change_password.sh', ['-H', ip, '-U', username, '-P', password, '-N', newpassword], null, function (err, stdout, stderr) {
    //     callback(err, stdout, stderr);
    // });
    cprocess.execFile('deploy.sh', [], null, (err, stdout, stderr) => {
        console.log(err, stdout, stderr)
        return res.json({ success: true });
    });
})

const port = process.env.PORT || 6500;
app.listen(port, error => console.log('http://localhost:' + port));