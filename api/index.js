const express = require('express')
const app = express()
const router = express.Router()
const port = 3000

let data = require('./data.js')
const bodyParser = require('body-parser')
const { response } = require('express')
app.use(express.json())

const addStat = (newItem) => {
    data = [...data, newItem]
}

const findStat = id => data.find(item => item.id === id)


app.get("/stats", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8000");
    res.send(data)
})

app.post("/stats", (req,res) => {
    addStat(req.body)
    res.status(201).send(data)
})

router.delete("/hello", (req, res) =>{
    res.status(404).send("I don't want to say hello")
})

app.post("/stats", (req,res)=>{
    addStat(req.body)
    res.status(201).send(data)
})

app.get("/stats/:id", (req,res) => {
    const id = Number(req.params.id)
    const stat = findStat(id)

    if (typeof stat !== 'undefined'){

        return res.send(stat); 
    }

    res.status(404).send("No listing found with that id")
})

app.put("/stats/:id", (req,res) => {
    const id = Number(req.params.id)
    const stat = findStat(id)
    
    if (typeof stat !== 'undefined'){
        const body = req.body;

        console.log(req.body);
        console.log(stat);
        Object.keys(body).forEach(key => {
            stat[key] = body[key]

        })

        return res.send(stat); 
    }

    res.status(404).send("No listing found with that id")

})

app.delete("/stats/:id", (req,res) => {
    const id = Number(req.params.id)
    const stat = findStat(id)

    if(stat){
        const index = data.findIndex(Item => item.id === Number(id) )
        console.log(index);
        const item = data[index]
        const before = data.slice(0, index)
        const after = data.slice(index + 1)
        const newData = [...before, ...after]
        data = newData

        return res.send(item)
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}`)
})

const logResult = result => label => {
    console.log("\u001b[36m", label, "\u001b[33mResult", result, "\u001b[0m")
    return result
}

app.use("/api", router)
