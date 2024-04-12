document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid")
    const score = document.getElementById("score")
    const startBtn = document.getElementById("start_btn")
    let squares = Array.from(document.querySelectorAll(".grid div"))
    const width = 12
    console.log(squares)

    //shapes, array of shapes with each shape property including an array of 4 shape positions
    const lShape = [ // L-Shape
        [0, width, width * 2, 1], //shape position -> index 0, 12, 24, 1
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ]

    const bShape = [ // Block Shape
        [0, width, 1, width + 1],
        [0, width, 1, width + 1],
        [0, width, 1, width + 1],
        [0, width, 1, width + 1]
    ]

    const longShape = [ //Long (bar) Shape
        [0, width, width *2, width * 3],
        [width, width + 1, width + 2, width + 3],
        [0, width, width *2, width * 3],
        [width, width + 1, width + 2, width + 3]
    ]

    const zShape = [ //z-Shape
        [0, 1, width + 1, width + 2],
        [1, width + 1, width, width * 2],
        [0, 1, width + 1, width + 2],
        [1, width + 1, width, width * 2]
    ]

    const tShape = [ //T-Shape
        [0, 1, 2, width + 1],
        [0, width, width * 2, width + 1],
        [1, width, width + 1, width + 2],
        [1, width + 1, width * 2 + 1, width]
    ]
    //Array that contains all shapes
    const allShapes = [lShape, longShape, zShape, bShape, tShape]
    // starting location on grid of shapes
    let shapePosition = 5
    //lenght of allShapes array to get total count of shapes
    let maxShapes = allShapes.length
    let ShapeRotation = 0
    console.log(maxShapes);
    // random number: source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
      }
    // selects the current shape randomly, selects rotation
    let currentShape = allShapes[getRandomInt(maxShapes)][ShapeRotation]
    let nextShape = allShapes[getRandomInt(maxShapes)][ShapeRotation]

    console.log(shapePosition)
    console.log(currentShape)

// SHAPE MOVEMENTS
    //draw the shape on grid
    function draw() {
        currentShape.forEach(index => {
            squares[shapePosition + index].classList.add('shapes')
        })
    }
    // removes the shape from the grid
    function remove() {
        currentShape.forEach(index => {
            squares[shapePosition + index].classList.remove('shapes')
        })
    }

    //move shape down 1 row
    function dropShape() {
        remove()
        shapePosition = shapePosition + width
        draw()
        stopShape()
    }
    //drops shape down every second/speed variation
    dropSpeed = setInterval(dropShape, 1000)

    // move shape left
    function left() {
        remove() // removes shape from grid
        const leftSide = currentShape.some(index => (shapePosition + index) % width === 0) //checks if shape is leftmost of grid
        console.log(leftSide)
        if(!leftSide) shapePosition -= 1 //if not leftmost, move shape left by 1
        console.log(shapePosition)
        if (currentShape.some(index => squares[shapePosition + index].classList.contains('blocked'))){
        shapePosition = shapePosition + 1
        }//undoes move if shape moved into a blocked square
        console.log(shapePosition)
        draw() //draws shape on grid
    }

    document.getElementById("moveLeft").addEventListener("click", left)

    //stops shape and generates new shape
    function stopShape() {
    if (currentShape.some(index => squares[shapePosition+index + width].classList.contains('blocked'))) {
        currentShape.forEach(index => squares[shapePosition+index].classList.add('blocked'))
        currentShape = allShapes[getRandomInt(maxShapes)][ShapeRotation]
        shapePosition = 5
        draw()
    }
}

}
)