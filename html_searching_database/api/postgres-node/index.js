const express = require('express')
const app = express()
const router = express.Router()
const port = 3000

const findStat = batsman => data.find(item => item.batsman === batsman)

const { response } = require('express')
app.use(express.json())

const { Client } = require("pg")
const dotenv = require("dotenv")
const stats = require('../../../IPL_getting_json/api/data')
dotenv.config()
const client = new Client()


const connectDb_all_data = async () => {
    try {
        const client = new Client({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT
        })

        await client.connect()
        const res = await client.query('SELECT * FROM ipl_data')
        data = res.rows
        await client.end()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

data = connectDb_all_data()

app.get("/stats", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8000");
    res.send(data)
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}`)
})

app.get("/stats/:batsman", (req,res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8000");
    bat = req.params.batsman.replace(/_/, ' ');
    console.log(bat)
    const batsman = Number(bat)
    const stat = findStat(batsman)
    console.log(stat)

    if (typeof stat !== 'undefined'){

        return res.send(stat); 
    } 

    res.status(404).send("No listing found with that id")
})