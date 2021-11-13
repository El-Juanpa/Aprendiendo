const express = require('express')

const app = express()

app.set('port', 5000)

app.get('/' , (req,res)=>{

    res.send('Bienvenido')
})

app.listen(app.get('port'), () =>{
     console.log(`Bienvenido a la aplicacion mas fachera pa donde esta el node ${app.get('port')}`)
})
