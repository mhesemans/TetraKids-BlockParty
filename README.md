# Tetra Kids: Block Party - Project Portfolio 2 - HTML, CSS & Javascript

Game can be accessed on: https://mhesemans.github.io/TetraKids-BlockParty/

Move left function not working on button press, console reads:
index.html:332 Uncaught ReferenceError: left is not defined
    at HTMLButtonElement.onclick (index.html:332:44)

added eventlistener in js as per https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_addeventlistener

checking if any elements in array are true: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

checking if an element has a certain class:
https://www.shecodes.io/athena/41733-how-to-check-if-a-class-has-been-added-to-an-element-in-javascript#:~:text=in%208.5%20seconds-,To%20check%20if%20a%20class%20has%20been%20added%20to%20an,exists%20in%20the%20element's%20classList%20.

flipping shapes:
https://stackoverflow.com/questions/47692216/javascript-tetris-how-to-turn-around-the-blocks

The below error occurred randomly when flipping shapes:

Uncaught TypeError: Cannot read properties of undefined (reading 'forEach')
    at remove (app.js:73:22)
    at dropShape (app.js:80:9)

The flipShape function at that time:

  // flip shape
    function flipShape() {
        remove()
        let flipPosition = ShapeRotation === 0 ? 1
                        : ShapeRotation === 1 ? 2
                        : ShapeRotation === 2 ? 3
                        : ShapeRotation === 3 ? 4
                        : 0
        ShapeRotation = flipPosition
        console.log(ShapeRotation)
        currentShape = allShapes[selectShape][ShapeRotation]
        draw()
    }

Initially, it wasn't clear what was causing the issue, but flipShape() seemed to be the cause. The error didn't consistently occur immediately after flipping but appeared later at times, sometimes when a new shape was drawn. I couldn't identify a specific pattern, but flipShape() was involved each time. I ruled out the remove() and draw() functions within flipShape() because they were being used without issues for other functions in the script.

I looked for a different way to change the ShapeRotation variable to select the correct index and thought of the remainder operator, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder which would look like: (ShapeRotation + 1) % 4
But at that stage I realized that the flipShape function I was using had the line : ShapeRotation === 3 ? 4, as there is no index 4, I deleted that line so the function now reads:

    function flipShape() {
        remove()
        let flipPosition = ShapeRotation === 0 ? 1
                        : ShapeRotation === 1 ? 2
                        : ShapeRotation === 2 ? 3
                        : 0
        ShapeRotation = flipPosition
        console.log(ShapeRotation)
        currentShape = allShapes[selectShape][ShapeRotation]
        draw()
    }

I've tested the functionality of the flipShape() function and the error no longer occurs.


Moving an object with arrow keys:

https://www.youtube.com/watch?v=Pg1UqzZ5NQM

Bug: deactivateControls stopped working after the latest function to refresh the page was added.