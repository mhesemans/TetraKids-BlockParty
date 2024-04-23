# Tetra Kids: Block Party - Project Portfolio 2 - HTML, CSS & Javascript
<div align="center">
  <img src="https://github.com/mhesemans/TetraKids-BlockParty/blob/main/assets/images/responsive-design.webp" alt="Home Page">
</div>

Hey there, fellow game enthusiasts!

Welcome to TetraKids: Block Party – a delightful twist on the timeless classic! This game was born out of a special bond between a father and his 5-year-old autistic son, who just can't get enough of numbers and blocks. When traditional Tetris proved to be a bit too fast-paced and overwhelming, this dad took matters into his own hands.

In TetraKids: Block Party, we've dialed down the speed, cranked up the fun, and added a sprinkle of magic! Say goodbye to frantic gameplay and repetitive music – we're all about creating a relaxing and enjoyable experience here. Plus, we've super-sized the grid to give you plenty of room to play.

But wait, there's more! We've thrown in some special blocks. Get ready for a whimsical adventure filled with colorful shapes and endless possibilities. Can you recognize these blocks?

So, gather your family and friends, and let's dive into the ultimate block party!

You can access the game through the following link: <a href="https://mhesemans.github.io/TetraKids-BlockParty/" target="_blank" alt="TetraKids-BlockParty"> TetraKids-BlockParty </a>

# contents


# Objective

The project offers a soothing and enjoyable take on a classic game, providing users with a relaxed gaming experience free from the pressure of game speed or intrusive sounds. Whether on mobile, tablet, or PC, players can immerse themselves in the game at their own pace. With no built-in audio, players can don their headphones and groove to their favorite tunes while playing to their heart's content.

[Back to top](<#contents>)
---
# UX

## Target Audience
- **Parents of Young Children:** Targeting parents who want to introduce their young children, particularly those with special interests like numbers and blocks, to a classic game in a more accessible and engaging way, while also enhancing their dexterity and problem-solving abilities.
- **Children with Special Needs:** Aimed at children with autism or other special needs who may benefit from a slower-paced and sensory-friendly gaming experience, tailored to their interests and preferences, while promoting the development of fine motor skills and cognitive abilities.
- **Casual Gamers:** Catering to casual gamers of all ages who prefer a relaxed gaming experience without the pressure of time constraints or competitive gameplay, allowing them to unwind and enjoy the game at their own pace.
- **Educators and Therapists:** Appealing to educators and therapists who work with children with special needs, providing them with a tool to incorporate into their teaching or therapy sessions that promotes engagement and skill development in a fun and accessible way.
- **Fans of Educational Content:** Attracting fans of educational content, especially those familiar with popular YouTube videos like "Numberblocks," by incorporating elements inspired by these videos into the game, adding an extra layer of appeal and familiarity.

## User Stories

- As a parent, I seek a game that offers a slower-paced and simplified gameplay experience for my young child.
- As a child with autism, I desire a game devoid of internal stressors and overwhelming elements, allowing for focused and enjoyable gameplay.
- As a casual gamer, I appreciate games that provide a relaxed gaming experience without time constraints or competitive pressure.
- As an educator or therapist, I aim to utilize games as a tool for promoting motor skills and spatial thinking in children with special needs, integrating fun and accessible gameplay into teaching or therapy sessions.

## Site Objectives

- **Provide an Enjoyable and Accessible Gaming Experience:** The primary objective of the site is to offer users, particularly children and their families, an enjoyable and accessible gaming experience inspired by a popular block-based game. This experience should be inclusive and easy to understand for users of all ages and backgrounds.
- **Support Learning and Development:** The site aims to support cognitive development, particularly in areas such as spatial thinking and problem-solving skills, through engaging gameplay. By presenting a simplified and relaxed version of the game, it encourages players to explore and develop their abilities in a stress-free environment.
- **Foster Creativity and Imagination:** Another objective is to foster creativity and imagination in young players by introducing fun and colorful blocks inspired by popular educational content. The game encourages players to experiment with different block arrangements and strategies, sparking their creativity and critical thinking skills.
- **Promote Family Bonding and Interaction:** The site seeks to promote family bonding and interaction by providing a shared gaming experience that can be enjoyed by both children and adults. Through collaborative play and friendly competition, family members can spend quality time together and create lasting memories.
- **Accessible Across Devices:** Ensuring accessibility across various devices, including mobile phones, tablets, and desktop computers, is a key objective. This allows users to enjoy the game seamlessly across different platforms, accommodating their preferences and convenience.

[Back to top](<#contents>)
---
## Visual Design

### Wireframes

<div align="center">
  <img src="https://github.com/mhesemans/TetraKids-BlockParty/blob/main/assets/images/wireframe.webp" alt="Wireframe">
</div>

The game's visual aspects were designed in Balsamiq Wireframes following the principles of mobile-first design. The wireframes were initially structured for mobile devices to prioritize usability and functionality on smaller screens. This approach helps ensure that the website is accessible and user-friendly across various devices, from smartphones to desktop computers.


### Site Structure Overview

Tetra Kids: Block Party has a straightforward design, the player is presented with the game objectives and the controls. After starting the game, the interactive elements are visually clear as to what their function is. Upon game end, the player is presented with their score and the option to play again.

In case the player lands on a nonexistent page, the player is presented with a 404 page that will direct them back to the game.

### Fonts   

**EB Garamond:** This is a clasic serif typeface selected for its elegant capitalization and rounded "a" and "e" giving the lowercase text a playful feel, it's meant to evoke a sense of whimsical playfulness. The font was selected from [google fonts](https://fonts.google.com/specimen/EB+Garamond 'Google Fonts').

### Colours

<div align="center">
  <img src="https://github.com/mhesemans/TetraKids-BlockParty/blob/main/assets/images/colour-palette.webp" alt="Colour palette">
</div>

- The red hues were selected to draw attention to game controls.
- The blue hues give a sense of openess and freedom to contrast the grid itself.

### Images

<div align="center">
  <img src="https://github.com/mhesemans/TetraKids-BlockParty/blob/main/assets/images/bgimg.webp" alt="Background Image">
</div>

The background image is fun and bright and the colourful cubes represent the various colours used for the shapes within the game.

[Back to top](<#contents>)
---

# Features

## Game Instructions

<div align="center">
  <img src="https://github.com/mhesemans/TetraKids-BlockParty/blob/main/assets/images/game-instructions.webp" alt="Game Instructions">
</div>

The instructions explain the game objectives and the buttons used to control the movements of the blocks in the game grid to the player.
Visuals are added for the players so that they can recognize the game elements before the game has started.

## Game view and controls

<div align="center">
  <img src="https://github.com/mhesemans/TetraKids-BlockParty/blob/main/assets/images/game-view.webp" alt="Game View"> <br>
  <img src="https://github.com/mhesemans/TetraKids-BlockParty/blob/main/assets/images/game-controls.webp" alt="Game Controls">
</div>

The score and the game grid are centered on top of the screen with the game controls directly below. Any other elements are avoided to minimize distractions or sensory overload. The controls are hand-drawn to add to the whimsical relaxed nature of the game.

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

Responsive image created using
https://ui.dev/amiresponsive?