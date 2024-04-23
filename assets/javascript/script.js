document.addEventListener("DOMContentLoaded", () => {
  const score = document.getElementById("score"); //displays the score above the grid
  const gameRules = document.getElementById("game_rules"); //id for game-rules, a div that displays controls and game rules
  const width = 12; // width of each row within the grid, 24 rows, 12 squares wide
  const startBtn = document.getElementById("start_btn"); //Start button, starts the game
  const playAgainBtn = document.getElementById("play_again"); //play again button, refreshes page and restarts game

  //shapes, array of shapes with each shape property including an array of 4 shape positions
  const lShape = [
    // L-Shape
    [0, width, width * 2, 1], //shape position -> index 0, 12, 24, 1
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2],
  ];

  const bShape = [
    // Block Shape
    [0, width, 1, width + 1],
    [0, width, 1, width + 1],
    [0, width, 1, width + 1],
    [0, width, 1, width + 1],
  ];

  const longShape = [
    //Long (bar) Shape
    [0, width, width * 2, width * 3],
    [width, width + 1, width + 2, width + 3],
    [0, width, width * 2, width * 3],
    [width, width + 1, width + 2, width + 3],
  ];

  const zShape = [
    //z-Shape
    [0, 1, width + 1, width + 2],
    [1, width + 1, width, width * 2],
    [0, 1, width + 1, width + 2],
    [1, width + 1, width, width * 2],
  ];

  const tShape = [
    //T-Shape
    [0, 1, 2, width + 1],
    [0, width, width * 2, width + 1],
    [1, width, width + 1, width + 2],
    [1, width + 1, width * 2 + 1, width],
  ];

  const mirrorLShape = [
    [0, 1, width + 1, width * 2 + 1],
    [2, width + 2, width + 1, width],
    [width * 2 + 1, width * 2, width, 0],
    [width, 0, 1, 2],
  ];

  const mirrorZShape = [
    [1, width, width + 1, width * 2],
    [0, 1, width + 1, width + 2],
    [1, width, width + 1, width * 2],
    [0, 1, width + 1, width + 2],
  ];

  const singleSquare = [[0], [0], [0], [0]];

  const doubleSquare = [
    [0, 1],
    [0, width],
    [0, 1],
    [0, width],
  ];

  const tripleSquare = [
    [0, 1, 2],
    [0, width, width * 2],
    [0, 1, 2],
    [0, width, width * 2],
  ];

  const numberFive = [
    [0, 1, width, width + 1, width + 2],
    [0, 1, width, width + 1, width * 2],
    [0, 1, 2, width + 1, width + 2],
    [1, width, width + 1, width * 2, width * 2 + 1],
  ];

  const numberFiveLong = [
    [0, 1, 2, 3, 4],
    [0, width, width * 2, width * 3, width * 4],
    [0, 1, 2, 3, 4],
    [0, width, width * 2, width * 3, width * 4],
  ];

  //Array that contains all shapes
  const allShapes = [
    lShape,
    longShape,
    zShape,
    bShape,
    tShape,
    mirrorLShape,
    mirrorZShape,
    singleSquare,
    doubleSquare,
    tripleSquare,
    numberFive,
    numberFiveLong,
  ];

  let squares = Array.from(document.querySelectorAll(".grid div")); //array of all squares in the game grid
  let scoredPoints = 0; //var that tracks points scored
  let dropSpeed;
  let speed = 1000; //interval duration at which a shape moves
  let shapePosition = 5; // starting location on grid of shapes
  let maxShapes = allShapes.length; //length of allShapes array to get total count of shapes
  let ShapeRotation = 0; //var that defines the index for the individual shapes array that stores location indexes, default is the first rotation
  let selectShape; //var that is assigned a random index for the allshapes array
  let currentShape; //selects the shape to be displayed on the grid using the selectshape index and the shaperotation index
  let shapeColour; //var is assigned a colour in the changeColour function to be used to colour in the shape

  // random number: source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // change shape colour
  function changeColour() {
    shapeColour =
      selectShape === 7
        ? "red" //checks index of ShapeRotation and provides value to flipPosition
        : selectShape === 8
        ? "orange"
        : selectShape === 9
        ? "yellow"
        : selectShape === 10
        ? "blue"
        : selectShape === 11
        ? "blue"
        : "green";
  }

  // SHAPE MOVEMENTS
  //draw the shape on grid
  function draw() {
    currentShape.forEach((index) => {
      squares[shapePosition + index].classList.add("shapes");
      const square = squares[shapePosition + index];
      square.classList.add(shapeColour); // Add the new color class
    });
  }
  // removes the shape from the grid
  function remove() {
    currentShape.forEach((index) => {
      squares[shapePosition + index].classList.remove("shapes");
      const square = squares[shapePosition + index];
      square.classList.remove("red", "orange", "yellow", "green", "blue"); // Remove any existing color class
    });
  }
  //move shape down 1 row
  function dropShape() {
    remove();
    shapePosition = shapePosition + width;
    draw();
    stopShape();
  }

  // move shape left
  function left() {
    remove(); // removes shape from grid
    const leftSide = currentShape.some(
      (index) => (shapePosition + index) % width === 0
    ); //checks if shape is leftmost of grid
    if (!leftSide) shapePosition = shapePosition - 1; //if not leftmost, move shape left by 1
    if (
      currentShape.some((index) =>
        squares[shapePosition + index].classList.contains("blocked")
      )
    ) {
      shapePosition = shapePosition + 1;
    } //undoes move if shape moved into a blocked square
    draw(); //draws shape on grid
    stopShape();
  }

  // move shape right
  function right() {
    remove(); // removes shape from grid
    const rightSide = currentShape.some(
      (index) => (shapePosition + index) % width === width - 1
    ); //checks if shape is rightmost of grid
    if (!rightSide) shapePosition = shapePosition + 1; //if not rightmost, move shape right by 1
    if (
      currentShape.some((index) =>
        squares[shapePosition + index].classList.contains("blocked")
      )
    ) {
      shapePosition = shapePosition - 1;
    } //undoes move if shape moved into a blocked square
    draw(); //draws shape on grid
    stopShape();
  }

  //flips shape
  function flipShape() {
    remove();
    let flipPosition =
      ShapeRotation === 0
        ? 1 //checks index of ShapeRotation and provides value to flipPosition
        : ShapeRotation === 1
        ? 2
        : ShapeRotation === 2
        ? 3
        : 0;
    ShapeRotation = flipPosition; // gives ShapeRotation the flipPosition value
    currentShape = allShapes[selectShape][ShapeRotation]; //updates currentShape with rotation index
    draw();
  }

  // Event handler functions for movement controls based on https://www.youtube.com/watch?v=Pg1UqzZ5NQM
  function dropShapeHandler(e) {
    if (e.keyCode === 40) {
      dropShape();
    }
  }

  function leftHandler(e) {
    if (e.keyCode === 37) {
      left();
    }
  }

  function rightHandler(e) {
    if (e.keyCode === 39) {
      right();
    }
  }

  function flipShapeHandler(e) {
    if (e.keyCode === 38) {
      flipShape();
    }
  }

  // calls event handler functions based on https://codehs.gitbooks.io/introcs/content/Animation-and-Games/key-events.html
  function activateControls() {
    document.getElementById("drop_shape").addEventListener("click", dropShape);
    document.addEventListener("keydown", dropShapeHandler);

    document.getElementById("move_left").addEventListener("click", left);
    document.addEventListener("keydown", leftHandler);

    document.getElementById("move_right").addEventListener("click", right);
    document.addEventListener("keydown", rightHandler);

    document.getElementById("flip_shape").addEventListener("click", flipShape);
    document.addEventListener("keydown", flipShapeHandler);
  }

  function deactivateControls() {
    document
      .getElementById("drop_shape")
      .removeEventListener("click", dropShape);
    document.removeEventListener("keydown", dropShapeHandler);

    document.getElementById("move_left").removeEventListener("click", left);
    document.removeEventListener("keydown", leftHandler);

    document.getElementById("move_right").removeEventListener("click", right);
    document.removeEventListener("keydown", rightHandler);

    document
      .getElementById("flip_shape")
      .removeEventListener("click", flipShape);
    document.removeEventListener("keydown", flipShapeHandler);
  }

  //stops shape and generates new shape
  function stopShape() {
    if (
      currentShape.some(
        (index) =>
          squares[shapePosition + index + width].classList.contains("blocked") //executes if any squares below moving shape are blocked
      )
    ) {
      currentShape.forEach((index) => {
        const square = squares[shapePosition + index];
        square.classList.add("blocked"); //stops block, changes colour to grey
        square.classList.remove(
          "shapes",
          "red",
          "orange",
          "yellow",
          "green",
          "blue"
        ); //removes colours from blocks
      });
      scorePoints(); //calls to check if points are scored
      //
      //generates new shape on grid, sets colour and position
      //
      selectShape = getRandomInt(maxShapes);
      currentShape = allShapes[selectShape][ShapeRotation];
      changeColour();
      shapePosition = 5;
      draw();
      endGame(); // calls to check if new shape position colided with any blocked squares and ends game
    }
  }

  // increases scored points
  function scorePoints() {
    for (let row = 23; row >= 0; row--) {
      // Start from the bottom row
      const rowIndexes = Array.from(
        { length: width },
        (unused, i) => row * width + i
      );
      if (
        rowIndexes.every((index) =>
          squares[index].classList.contains("blocked")
        )
      ) {
        //checks if all squares have the class of blocked
        scoredPoints++;
        score.innerHTML = scoredPoints;
        rowIndexes.forEach((index) => {
          squares[index].classList.remove("blocked");
          squares[index].classList.remove("shapes"); //undraws the squares from the grid
        });
        // Move non-blocked cells down
        for (let i = row - 1; i >= 0; i--) {
          const currentRowIndexes = Array.from(
            { length: width },
            (unused, j) => i * width + j
          ); //generates an array of indexes of current row (i)
          currentRowIndexes.forEach((index) => {
            const cell = squares[index];
            const cellBelow = squares[index + width]; //increases current squares index by width to get 1 row lower
            if (!cellBelow.classList.contains("blocked")) {
              //if square below row is not blocked
              cellBelow.className = cell.className; // Move class to the cell below
              cell.className = ""; // Clear current cell's class
            }
          });
        }
        row++; // Recheck the same row since cells have moved down
      }
    }
  }
  // End game if starting position is blocked
  function endGame() {
    if (
      currentShape.some((index) =>
        squares[shapePosition + index].classList.contains("blocked")
      )
    ) {
      deactivateControls();
      clearInterval(dropSpeed);
      showEndScore();
    }
  }

  // Function to refresh the browser page from https://stackoverflow.com/questions/3715047/how-to-reload-a-page-using-javascript
  function refreshPage() {
    location.reload();
  }
  // Button calls refreshPage function
  playAgainBtn.addEventListener("click", () => {
    refreshPage();
  });

  // Function to make the game_end div visible
  function showEndScore() {
    let setScore = document.getElementById("final_score");
    setScore.textContent = scoredPoints;
    let endScore = document.getElementById("game_end");
    endScore.style.display = "block";
  }

  //start functionality for start button to drop the shapes
  startBtn.addEventListener("click", () => {
    draw(); //draws first shape on grid
    dropSpeed = setInterval(dropShape, speed); //Shape starts moving down every second
    activateControls(); // enables the movement inputs
    startBtn.classList.add("hide"); // hides the start button
    gameRules.classList.add("hide"); // hides the game rules
  });

  // selects the current shape randomly, selects rotation
  selectShape = getRandomInt(maxShapes);
  currentShape = allShapes[selectShape][ShapeRotation];
  //sets initial colour of starting block
  changeColour();
});
