const exec = require('child_process');
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
    res.send('hi home work')
})

app.post('/hook', (req, res) => {
    const r = req.body;
    console.log(r);
    exec.execSync('bash deploy.sh');
})

const port = process.env.PORT || 6500;
app.listen(port, error => console.log('http://localhost:' + port));