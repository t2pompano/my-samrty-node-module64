const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from my over smarty smarty pant!!!');
});

const users = [
    { id: 1, name: "shabana", email: 'shabana@gmail.com', phone: '017885599' },
    { id: 2, name: "shuchorita", email: 'shuchorita@gmail.com', phone: '017885590' },
    { id: 3, name: "shuchanda", email: 'shuchanda@gmail.com', phone: '017885591' },
    { id: 4, name: "shabnor", email: 'shabnor@gmail.com', phone: '017885592' },
    { id: 5, name: "srabonti", email: 'srabonti@gmail.com', phone: '017885593' },
    { id: 6, name: "sohana", email: 'sohana@gmail.com', phone: '017885594' },
    { id: 7, name: "srilekha", email: 'srilekha@gmail.com', phone: '017885595' },
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
    res.send(users);
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
});


app.listen(port, () => {
    console.log('Listening to port', port);
})