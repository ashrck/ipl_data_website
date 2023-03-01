app.get("/stats/:id", (req,res) => {
    const id = req.params.id
    const listing = findListing(id)
})

app.get("/stats", (req, res) => {
    res.send(data)
})

app.post("/stats", (req,res) => {
    addStat(req.body)
    res.status(201).send(data)
})

app.get("/stats/:id", (req,res) => {
    const id = req.prams.id
    const stat = findListing(id)
    
    if (stat){
        const body = req.body;

        console.log(req.body)
        console.log(stat)
        Object.keys(body).forEach(key => {
            stat[key] = body[key]

        })

        res.send(stat); 
    }

    res.status(404).send("No listing found with that id")
})

router.post("/stats/:id", (req,res) => {
    const id = req.prams.id
    const stat = findStat(id)
    
    if (stat){

        res.send(stat); 
    }

    res.status(404).send("No listing found with that id")
})

router.puts("/stats/:id", (req,res) => {
    const id = req.params.id
    const stat = findStat(id)

    res.send(id)
})

