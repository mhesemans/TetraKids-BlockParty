document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid")
    const score = document.getElementById("score")
    const startBtn = document.getElementById("start_btn")
    let squares = Array.from(document.querySelectorAll(".grid div"))
    const width = 12
    console.log(squares)

    //shapes
    const lShape = [ // L-Shape
        [0, width, width * 2, 1],
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

    let shapePosition = 5
    let currentShape = allShapes[4][0]

    console.log(shapePosition)
    console.log(currentShape)

    //draw the shape on grid
    function draw() {
        currentShape.forEach(index => {
            squares[shapePosition + index].classList.add('shapes')
        })
    }
    
    draw()
}
)