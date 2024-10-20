const express = require ('express')
const app = express();
const mysql = require('mysql')
const cors = require ('cors')

app.use(express.json());
app.use(cors())
|   

app.listen(3006, ()=>{
    console.log('server startend')
})

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'GERMINANDOANDO'
})

app.get('/',(req, res)=>{
    db.query('select * from EXPERIENCIAS',
    (err,result) =>{
        if(err)console.log(err)
        else{
            res.send(result)
            console.log("Metodo Get", result)
        }
    }
    )
})


app.post("/create", (req,res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const sugerencia = req.body.sugerencia;
    const correo = req.body.correo;

    db.query('INSERT INTO EXPERIENCIAS VALUES (?,?,?,?)', [ID,NOMBRE,SUGERENCIA,CORREO],
    (err,result)=>{
        if(err)console.log(err)
        else {
            res.send("Fruta registrado con éxito!!")
            console.log("Fruta registrado con éxito!!")
        }

    });
})
