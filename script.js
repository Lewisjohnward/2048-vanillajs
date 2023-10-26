const WIDTH = 5
const HEIGHT = 5
const DELAY = 500

const container = document.querySelector(".container")

const grid = [["1", "", ""]]


for (let i = 0; i < grid.length; i++){
    const rowContainer = document.createElement("div")
    rowContainer.className = "grid-container"

    for (let i = 0; i < grid[0].length; i++){
        const element = document.createElement("div")            
        element.className = "grid"
        if(i == 0)element.innerText = "1"
        rowContainer.append(element)
    }
    container.append(rowContainer)
}


//for (let i = 0; i < 5; i++){
//    const rowContainer = document.createElement("div")
//    rowContainer.className = "grid-container"
//    for (let i = 0; i < 5; i++){
//        const element = document.createElement("div")            
//        element.className = "grid"
//        element.innerText = "1"
//        rowContainer.append(element)
//    }
//    container.append(rowContainer)
//}

const generateStartingPositions = () => {
    const grid = [[],[],[]]
    const nodes = document.querySelectorAll(".grid")
    nodes.forEach((d, i) => {
        grid[i] = d.innerText
    })
    return grid
}

const nextFrame = (grid) => {
    //move everything right by 1
    let previous
    const updatedGrid = grid.map((d) => {
        if (previous == undefined) {
            previous = d
            return ""
        }

        return previous
    })
    console.log(updatedGrid)

}

const handleKeyboardEvent = async (e) => {
    if (e.key == "l") {
        const grid = generateStartingPositions()
        for(let i = 0; i < 1; i++){
            nextFrame(grid)
        }
        //const grid = document.querySelectorAll(".grid")
        await new Promise(resolve => setTimeout(resolve, DELAY))
        grid[0].innerText = ""
        grid[1].innerText = "1"
        await new Promise(resolve => setTimeout(resolve, DELAY))
        grid[1].innerText = ""
        grid[2].innerText = "1"
        await new Promise(resolve => setTimeout(resolve, DELAY))


    }
}

document.body.addEventListener("keydown", handleKeyboardEvent)
container.addEventListener("click", () => console.log("clicked"))



