const { Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config()
const client = new Client()

const connectDb = async () => {
    
    const client = new Client({
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: process.env.PGPORT
    })
}

connectDb()


id_1 = await client.query('SELECT * FROM ipl_data WHERE id = 1')

console.log()