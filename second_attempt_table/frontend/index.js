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
        const statContainer = createStatContainer()

        data.forEach(stat => {
            const statNode =  createStat(stat)
            statContainer.appendChild(statNode)

        })
 
        rootElement.append(statContainer)
    })
    
}

const createStatContainer = () => {
    const container = document.createElement("div")
    container.classList.add("stat-container")

    return container;
}

const createStat = (statData) => {
    const stats = document.createElement("a")
    stats.classList.add("Stat")



    const batsman = document.createElement("h2")
    batsman.classList.add("stat-header")
    batsman.textContent = statData.batsman

    const Runs_title = document.createElement("h2")
    Runs_title.classList.add("stat-header")
    Runs_title.textContent = "Runs:"
    const Runs = document.createElement("h3")
    Runs.textContent = statData.total_runs

    const Outs_title = document.createElement("h2")
    Outs_title.classList.add("stat-header")
    Outs_title.textContent = "Outs:"
    const Outs = document.createElement("h3")
    Outs.textContent = statData.out

    const numberofballs_title = document.createElement("h2")
    numberofballs_title.classList.add("stat-header")
    numberofballs_title.textContent = "Balls Faced:"
    const numberofballs = document.createElement("h3")
    numberofballs.textContent = statData.numberofballs

    const average_title = document.createElement("h2")
    average_title.classList.add("stat-header")
    average_title.textContent = "Average:"
    const average = document.createElement("h3")
    average.textContent = statData.average

    const strikerate_title = document.createElement("h2")
    strikerate_title.classList.add("stat-header")
    strikerate_title.textContent = "Strike Rate:"
    const strikerate = document.createElement("h3")
    strikerate.textContent = statData.strikerate

    const num_of_awards_title = document.createElement("h2")
    num_of_awards_title.classList.add("stat-header")
    num_of_awards_title.textContent = "Awards:"
    const num_of_awards = document.createElement("h3")
    num_of_awards.textContent = statData.num_of_awards

    const innerContainer = document.createElement("div")
    innerContainer.classList.add


    stats.appendChild(batsman)
    stats.appendChild(Runs_title)
    stats.appendChild(Runs)
    stats.appendChild(Outs_title)
    stats.appendChild(Outs)
    stats.appendChild(numberofballs_title)
    stats.appendChild(numberofballs)
    stats.appendChild(average_title)
    stats.appendChild(average)
    stats.appendChild(strikerate_title)
    stats.appendChild(strikerate)
    stats.appendChild(num_of_awards_title)
    stats.appendChild(num_of_awards)

    return stats
}


renderHeader()
getStats()
