const WIDTH = 5
const HEIGHT = 5

const container = document.querySelector(".container")

const grid = [["1", "", ""]]


for (let i = 0; i < grid.length; i++){
    const rowContainer = document.createElement("div")
    rowContainer.className = "grid-container"

    for (let i = 0; i < grid[0].length; i++){
        const element = document.createElement("div")            
        element.className = "grid"
        element.innerText = "1"
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


const handleKeyboardEvent = (e) => {
    console.log(e.key)
}

document.body.addEventListener("keydown", handleKeyboardEvent)
container.addEventListener("click", () => console.log("clicked"))



