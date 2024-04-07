document.addEventListener ("DOMContentLoaded", () =>{
    const grid = document.querySelector(".grid")
    const score = document.getElementById("score")
    const startBtn = document.getElementById("start_btn")
    let squares = Array.from(document.querySelectorAll(".grid"))
    const width = 12
    console.log(squares)

    //shapes
    const lShape = [ // L-Shape
        [1, width+1,width*2+1,2],
        [width, width+1, width+2, width*2+2],
        [1, width+1,width*2+1,width*2],
        [width, width*2, width*2+1, width*2+2]
    ]

    const bShape = [ // Block Shape
        [1,width+1,2,width+2],
        [1,width+1,2,width+2],
        [1,width+1,2,width+2],
        [1,width+1,2,width+2]
    ]

    const longShape = [ //Long (bar) Shape
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3]
    ]

    const zShape = [ //z-Shape
        [1,2,width+1,width+2],
        [1,width+1,width,width*2],
        [1,2,width+1,width+2],
        [1,width+1,width,width*2]
    ]

    const tShape = [ //T-Shape
        [1,2,3,width+2],
        [1,width+1, width*2+1,width+2],
        [2,width+1,width+2, width+3],
        [2,width+2,width*2+2, width+1]
    ]
    //Array that contains all shapes
    const allShapes = [lShape,longShape, zShape, bShape, tShape]
}
)