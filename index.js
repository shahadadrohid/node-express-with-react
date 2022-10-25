const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Express & nodemon')
});

const users = [
    { id: 1, name: 'Selim', email: 'selim@gmail.com', phone: '01600000000' },
    { id: 2, name: 'Habib', email: 'Habib@gmail.com', phone: '01780000000' },
    { id: 3, name: 'Labib', email: 'Labib@gmail.com', phone: '01600008900' },
    { id: 4, name: 'Khabib', email: 'Khabib@gmail.com', phone: '01600000005' },
    { id: 5, name: 'Taleb', email: 'Taleb@gmail.com', phone: '01600035000' }
]

app.get('/users', (req, res) => {
    res.send(users)
})
// input field data
app.post('/user', (req, res) => {
    console.log('Request', req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    console.log(user)
    res.send(user)
})
// Dynamic users 
app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id)
    const user = users.find(u => u.id === id)
    console.log(user)
    res.send(user)
})

// Port 
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})



// Extra 
app.get('/fruits', (req, res) => {
    res.send('mango', 'apple', 'orange')
})
app.get('/fruits/mango/fazle', (req, res) => {
    res.send()
})