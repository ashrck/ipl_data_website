console.log("Hello world")

const rootElement = document.getElementById("root")

const renderHeader = () => {
    const header = document.createElement("div")
    header.classList.add("header")

    const headerText = document.createElement("h1")
    headerText.classList.add("header-text")
    headerText.textContent = "IPL Player Stats"

    header.appendChild(headerText)
    rootElement.appendChild(header)
}

const getStats = () =>  {
    fetch("http://localhost:3000/stats").then((response) => response.json()).then((data) =>{

        data.forEach(stat => {
            const statrow =  createrow(stat)
            table.appendChild(statrow)

        })
 
    })

    rootElement.append(table)
    
}


const tablemaker = () => {
    table = document.createElement("table")
}

const headerLabel = () => {
    const row = document.createElement("tr")

    const header1 = document.createElement("td")
    header1.classList.add("header")
    header1.textContent = "Name"

    const header2 = document.createElement("td")
    header2.classList.add("header")
    header2.textContent = "Total Runs"

    const header3 = document.createElement("td")
    header3.classList.add("header")
    header3.textContent = "Total Outs"

    const header4 = document.createElement("td")
    header4.classList.add("header")
    header4.textContent = "Balls Faced"

    const header5 = document.createElement("td")
    header5.classList.add("header")
    header5.textContent = "Average"

    const header6 = document.createElement("td")
    header6.classList.add("header")
    header6.textContent = "Strike Rate"

    const header7 = document.createElement("td")
    header7.classList.add("header")
    header7.textContent = "Awards"

    row.appendChild(header1)
    row.appendChild(header2)
    row.appendChild(header3)
    row.appendChild(header4)
    row.appendChild(header5)
    row.appendChild(header6)
    row.appendChild(header7)

    table.appendChild(row)
}


const createrow = (statData) => {
    const row = document.createElement("tr")
    row.classList.add("row-container")

    const batsman = document.createElement("td")
    batsman.classList.add("batsman")
    batsman.textContent = statData.batsman

    const runs = document.createElement("td")
    runs.classList.add("runs")
    runs.textContent = statData.total_runs

    const outs = document.createElement("td")
    outs.classList.add("outs")
    outs.textContent = statData.out

    const numberofballs = document.createElement("td")
    numberofballs.classList.add("numberofballs")
    numberofballs.textContent = statData.numberofballs

    const average = document.createElement("td")
    average.classList.add("average")
    average.textContent = statData.average

    const strikerate = document.createElement("td")
    strikerate.classList.add("strikerate")
    strikerate.textContent = statData.strikerate

    const num_of_awards = document.createElement("td")
    num_of_awards.classList.add("num_of_awards")
    num_of_awards.textContent = statData.num_of_awards

    const innerContainer = document.createElement("div")
    innerContainer.classList.add


    row.appendChild(batsman)
    row.appendChild(runs)
    row.appendChild(outs)
    row.appendChild(numberofballs)
    row.appendChild(average)
    row.appendChild(strikerate)
    row.appendChild(num_of_awards)

    return row
}

renderHeader()
tablemaker()
headerLabel()
getStats()
