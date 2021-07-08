const express = require(`express`)

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static(`public`))


app.get("/", (req,res)=>{
    // res.send("<h1>Hallo from express</h1>")
    res.sendFile("./views/index.html",{root:__dirname})
    
})
app.get("/about", (req,res)=>{
    // res.send("<h1>Hallo from express</h1>")
    res.sendFile("./views/about.html",{root:__dirname})
    
})

app.get("/about", (req,res)=>{
    // res.send("<h1>Hallo from express</h1>")
    res.redirect("/about")
    
})


// app.get("/api", (req,res)=>{
//     res.json([
// {name:"Superman", age:22},
// {name:"Batman", age:22}


//     ])
// })

const heros = [
    { name: "Superman", age: 22 },
    { name: "Batman", age: 42 }
]
app.get('/api', (req, res) => {
    // res.json([
    //     { name: "Superman", age: 22 },
    //     { name: "Batman", age: 42 }
    // ])
    res.json(heros)
})


app.get("/api/:egal",(req,res)=>{
    console.log(req.params.egal)
    // res.send(req.params.egal)
    res.json(heros[req.params.egal])
})
app.use((req, res) => {
    // Status setzten
    // res.status(404)
    // res.sendFile('./views/404.html', { root: __dirname })

    // Verketten von Methoden
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})





app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`))