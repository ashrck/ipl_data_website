const innerContainer = document.createElement("div")
innerContainer.classList.add("Stat-inner-container")

const id_title = document.createElement("h1")
id_title.textContent = "ID:"
const id = document.createElement("h3")
id.textContent = statData.id

const batsman_title = document.createElement("h2")
batsman_title.textContent = "Name:"

//for each row display each players values and name 

const table = document.createElement("table")
stats.classList.add("table")

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
}

table.appendChild(headerLabel())




const createStat = (statData) => {
    const row = document.createElement("tr")

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

    return stats
}