const express = require("express")
const app = express()

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
