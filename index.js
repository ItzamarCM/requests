const express = require("express")
const app = express()


app.use(express.json())
// req=requests   res: response

// http://localhost:3000/itzamar/789
app.get("/:user/:password", (req,res) => { // :/ es el segmento de valor dinamico
    const {user, password} =req.params //desestructuración
    if(user === 'itzamar' & password === '789'){

    res.json({msg: 'Inicio de sesión exitoso'}) //ponerlo una vez hace que el atributo se llame igual a la variable
        return
}
    res.json({msg: 'Fallo en el usuario o contraseña'})
}) 

// http://localhost:3000/login?fullname=Itzamar&password=123
app.get('/login', (req,res) => {
    const {user, password} = req.query
if(!user || !password){
    res.status(400).json({msg: 'You need to provide <user> an <password> params'})
}

    if(user === 'itzamar' & password === '789'){

        res.json({msg: 'Inicio de sesión exitoso'}) //ponerlo una vez hace que el atributo se llame igual a la variable
            return
    }
        res.status(400).json({msg: 'Fallo en el usuario o contraseña'})
})



app.post('/login', (req,res) => {
    const {user, password} = req.body
if(!user || !password){
    res.status(400).json({msg: 'You need to provide <user> an <password> params'})
}

    if(user === 'itzamar' & password === '789'){

        res.json({msg: 'Inicio de sesión exitoso'}) //ponerlo una vez hace que el atributo se llame igual a la variable
            return
    }
        res.status(400).json({msg: 'Fallo en el usuario o contraseña'})
})




app.post('/login',(req,res) => {
    const body = req.body

    res.json(body)
})



app.post("/", (req,res) => {
    res.json({msg:'Hola POST!'})
})

app.put("/", (req,res) => {
    res.send("Hola PUT!")
})

app.patch("/", (req,res) => {
    res.json({msg:"Hola PATCH!"})
})

app.delete("/", (req,res) => {
    res.json({msg:"Hola DELETE!"})
})
/**
 * 
 * Funcionalidad
 * 
 */
// http://localhost:3000
app.listen(3000,() => {
    console.log("listening on port 3000")
})
