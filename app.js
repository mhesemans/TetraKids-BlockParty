document.addEventListener ("DOMContentLoaded", () =>{
    const grid = document.querySelector(".grid")
    const score = document.getElementById("score")
    const startBtn = document.getElementById("start_btn")
    let squares = Array.from(document.querySelectorAll(".grid"))
    const width = 12
    console.log(squares)

    //shapes
    const lShape = [
        [1, width+1,width*2+1,2],
        [width, width+1, width+2, width*2+2],
        [1, width+1,width*2+1,width*2],
        [width, width*2, width*2+1, width*2+2]
    ]
    
    const 
}
)