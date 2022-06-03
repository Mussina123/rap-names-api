const express = require('express');
const app = express();
// const PORT = process.env.PORT 
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph', 
        'birthLocation': 'London, England', 
    },
   'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett', 
        'birthLocation': 'Chicago, IL', 
   }, 
   'unknown': {
    'age': 0,
    'birthName': 'Unknown', 
    'birthLocation': 'Unknown', 
   }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html') // server knows where to look in current directory for index.html //
    
})

app.get('/api', (req, res) =>{
    res.json(rappers)
})

app.get('/api/:name', (req, res) => {
    const rapperName= req.params.name.toLowerCase()
    if (rappers[rapperName]) {
        res.json(rappers[rapperName])
    } else {
        res.json(rappers['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})