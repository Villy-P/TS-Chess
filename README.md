# TS-Chess

Chess game in TypeScript. For Logic class

1186 lines of non-autogenerated code

2359 lines of code total (Without the .md file)

## Sources Used

---

[W3Schools](https://www.w3schools.com/) for HTML and CSS stuff.

[Wikipedia](https://www.wikipedia.org/) for computer stuff.

[Stack Overflow](https://stackoverflow.com/) for answers to stuff.

[SebLague](https://github.com/SebLague) for some FEN handling.

---

## Languages Used

---

- **TypeScript** for the majority of the code.
- **JavaScript** (TypeScript compiles into JavaScript, so about half of the code will be JavaScript)
- **SASS/CSS** For styling the webpage
- **HTML** for making the webpage
- **Git** for source control
- **JSON** for the tsconfig file

---

## HTML

---

HTML (Hyper Text Markup Language) is a language used for creating webpages.
All webpages on the internet has an HTML page.
HTML uses tags to create webpages.

Each page needs to start with a `DOCTYPE` tag like this:

``` html
<!DOCTYPE html>
```

This tells the browser to expect a HTML type when it loads in the page.

Next you can specify the language as such:

``` html
<html lang="en">
```

The `<html>` tag needs to have an ending. In fact, most tags in HTML need endings.
Here is an example of the *paragraph* tag, which tells the browser to load in text:

``` html
<p>This is a paragraph tag with an ending --></p>
```

The `<html>` tags ending will be located at the end of the file.
All code within these two tags will be loaded into the webpage.

Next we specify a `<head>` tag like so:

``` html
<head>
    <title>Chess</title>
    <link rel="stylesheet" href="src/CSS/style.css">
</head>
```

This tag is used for storing data about the webpage.
That `<title>` tag tells the browser what name to give the webpage so it can display it to the user.

We'll come back to what the `<link>` tag does later.

Right after the `<head>` tag we have our `<body>` tag, which tells the webpage what to display to the screen.

The first the in out `<body>` is `<ul>`, which specifies a new unordered list.
Within the `<ul>` tag we give it an `id` of `"header"`, so that in the CSS and TypeScript/JavaScript we can access it by that id.

Within the unordered list we have the `<li>` tag which is a list item.

Here is an example of the `<ul>` tag and the `<li>` tag.

``` html
<ul>
    <li>This</li>
    <li>Is</li>
    <li>An</li>
    <li>Unordered</li>
    <li>List</li>
</ul>
```

This returns:

- This
- Is
- An
- Unordered
- List

Within the `<li>`, there is a `<a>` tag with a `href` of `javascript:void(0)` and a class of `dropdown`.
The class is sort of the same as an id, and the `href` attribute specifies what the link's destination will be.  
When we set that value to `javascript:void(0)`, it basically says *do nothing*.

Then we have this long `<div>` tag:

``` html
<div class="dropdown-content">
    <a href="#"><input type="color" value="#FFFFFF" id="colorWell1"> White Square</a>
    <a href="#"><input type="color" value="#006400" id="colorWell2"> Black Square</a>
    <a href="#"><input type="color" value="#5f9ea0" id="colorWell3"> Canvas Background</a>
    <a href="#"><input type="color" value="#25383C" id="colorWell4"> Background Color</a>
    <a href="#"><input type="color" value="#38444d" id="colorWell5"> Header Color</a>
    <a href="#"><input type="color" value="#FFFFFF" id="colorWell6"> History Canvas Background</a>
</div>
```

The `<div>` tag itself specifies a certain section of the webpage and it has a class name of `dropdown-content`.
Each item within the `<div>` tag has an `<a>` tag with a href of `"#"` (do nothing) and an `<input>` tag that specifies the type of input.
We set the `type` attribute to `color` so the webpage knows we will be making a color selector.
Then we give the base color value as a certain color value, which is a very fancy way of specifying different color (Like an RGBA value).
The `#FFFFFF` color is white, specifyed by the 3 pairs of `FF`, which means full values of Red, Green, and White (255, 255, 255).
Next we assign each value an `id` so we can access it in the TypeScript/JavaScript.
The White Text is what we will actually be displaying to the user.

When you look at the unordered list in the webpage it does not look like a list, but rathers a bar with dropdowns.
This is due to styling in CSS, which we will go over later.

Next, we create two canvases with the `<canvas>` tag.
A canvas is a box that we can draw things on, such as shapes and images.
The `historyCanvas` will be used for displaying the game history, and the `mainCanvas` will be used for the actual chess game.

Next we have many `<script>` tags with an `src` attribute.
Whatever we put into `src`, the program will read whatever file and load that in. The `<script>` tag is for JavaScript, so we load in many Javascript pages.
We'll go over all these files later.

---

## SASS & CSS

---

In our HTML file, within the `<head>` tag, we have a `<link>` tag with a `rel` of `stylesheet` and a `href` of `src/CSS/style.css`.
`rel` stands for *relationship* and is used to tell what *type* of link it will be.
Then we assign it a link that points to our stylesheet.

Now, within our `src/CSS` we have three files:

- `style.css`
- `style.css.map`
- `style.scss`

The first two were autogenerated by the third one. The third one is a `Sass` file, which compiles to CSS.
CSS (Cascading Style Sheets) is *the worst thing to ever be made by humans*, and is used to style `HTML` elements.
SASS is a way of making CSS less garbage.
You set attributes to values in three ways:

``` css
/* By tag*/
body {}
/* By Id*/
#idName {}
/* By class name*/
.className {}
```

You will put the style elements within the braces.

Let's look at the first element: `body`.

Since there is no `#` or `.`, we know that we will be changing the attributes of a tag.
This means whatever changes we make will apply to all `<body>` tags.

This is our `body` part in the `style.scss` file:

``` css
body {
    background-color: #25383C;
}
```

In `<body>` we only have one attribute: `background-color`, which sets the background color of the body to a color code of `#25383C`.

Next we have two canvas values, but let's only look at the first one.

``` css
#mainCanvas  {
    background-color: cadetblue;
    border: 1px solid black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);               
}
```

We have a title of `#mainCanvas`, which means whichever tags in the `HTML` file have an id of `mainCanvas`, apply these attributes to them.
In this case we are setting the attributes of the main canvas where our chess game will run on.

The first tag (`background-color`) sets the background of the canvas to `cadetblue` (HTML can also read plain text as colors too).
Then we set the `border` attribute to `1px solid black`.
This sets the border of the canvas to be one pixel wide and have a boldened, black look to it.
The four next attributes have to do with setting the canvas to be centered on the screen.
Lets look at each of them.

- `position: absolute`
  - This means that the canvas will be positioned to be relative to the body. The next two properties will determine that.
- `top: 50%`
  - This sets the postition relative to the top to 50%. For example, if the screen was 1000px tall, then the canvas would be placed 500px away from the top.
- `left: 50%`
  - This sets the position relative to the left to 50%. For example, if the screen was 1000px wide, then the canvas would be placed 500px away from the left.
- The two properties above cause the canvas to shift to the middle of the screen, however the top left corner of the screen will be at the center, so we will need to place the center of the canvas to the center of the screen.
- `transform: translate(-50%, -50%)`
  - The `transform` property will move the canvas to the place provided.
  - The `translate` function will move it in whichever direction specified.
    - In this case, we translate it -50% in both directions because we want to shift if left and up by half of the canvas width and height. This causes the center of the canvas to be in the very center of the screen.

Next we have a bunch of properties for the navigation bar at the top of the screen. The rest of the code is used to make unordered lists look like that.

First we need to set the properties of the unordered list itself.

``` css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #38444d;
}
```

Lets go over these properties one by one.

- `list-style-type: none`
  - If we were to create an unordered list in HTML without any CSS it would look like a normal, bulleted list. What we do with this tag is remove the bullet points.
- `margin: 0` and `padding: 0`
  - We'll go over these later.
- `overflow: hidden`
  - This says that if any of the value overflow (cannot be fit on the screen) to hide them from the user.
- `background-color`
  - Sets the background color

Now for `margin: 0` and `padding: 0`.

To understand these, first we have to understand the **box model**.

This is a box model:

``` text
╔═══════════════════════════╗
║           Margin          ║
║  ╔═════════════════════╗  ║
║  ║        Border       ║  ║
║  ║  ╔═══════════════╗  ║  ║
║  ║  ║    Padding    ║  ║  ║
║  ║  ║  ╔═════════╗  ║  ║  ║
║  ║  ║  ║ Content ║  ║  ║  ║
║  ║  ║  ╚═════════╝  ║  ║  ║
║  ║  ╚═══════════════╝  ║  ║
║  ╚═════════════════════╝  ║
╚═══════════════════════════╝
```

These are the parts of a box model:

- Margin
  - A transparent area around the border.
- Border
  - A border that surrounds the padding.
- Padding
  - A transparent area around the content.
- Content
  - The actual content (In this case an unordered list)

When we set the `margin` and `padding` to `0`, we are saying that there is no margin or padding.

Next we have `li`.

``` css
li {
  float: left;    
}
```

`li` is a list element, so out unordered list contains `li` tags.
The `float` property tells all `li` tags to float to the left of the list, so in our navigation bar it will look like this:

``` text
╔═══════╦═══════════════════╗
║ Item  ║ Item              ║
╚═══════╩═══════════════════╝
```

If `float` were right, our navigation bar would look like this:

``` text
╔════════════════════╦══════╗
║               Item ║ Item ║
╚════════════════════╩══════╝
```

After this we have this block of code:

``` css
li a, .dropbtn {
  display: inline-block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
```

The `li a` tells the HTML that we are looking for `<a>` tags within `<li>` tags.
The `.dropbtn` says we are also looking for a tag with the class name of `dropbtn`.

Lets go over all these attributes:

- `display: inline-block`
  - Set the display type to an inline block element.
- `color: black`
  - Unlike `background-color`, `color` sets the color of the text, so any text displayed on an `a` tag within a `li` tag with a class name of `dropbtn` will be `black`.
- `text-align: center`
  - Centers any text at the middle of that element.
- `padding: 14px 16px`
  - This sets the top and bottom padding to 14px and the left and right padding to 16px.
- `text-decoration: none`
  - Tells the HTML that the text should have no decoration applied to it.

Next we have another block:

``` css
li a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}
```

This says whenever we hover over an `a` tag within a `li` tag with a class name of `dropbtn` within an element that has a class name of `dropdown`, change the background color to `red`.

Here are some more blocks (With their explanations in green)

``` css
/* Find a <li> tag with a class of dropdown */
li.dropdown {
  display: inline-block;
}

/* When you hover over a dropdown-content class and an <a> tag, change the background color to gray */
.dropdown-content a:hover {
  background-color: gray;
}

/* When you hover over a dropdown class and with a class of dropdown-content */
.dropdown:hover .dropdown-content {
  display: block;
}
```

Now we have another block:

``` css
.dropdown-content {
  display: none;
  position: absolute;
  background-color: black;
  min-width: 160px;
  z-index: 1;
}
```

- `display: none`
  - Hides the display (While you are not hovering over it)
- `position: absolute`
  - This means that the canvas will be positioned to be relative to the body.
- `background-color: black`
  - Sets the background color to black.
- `min-width: 160px`
  - The width of the element will never be less than 160px.
- `z-index: 1`
  - Sets the z-order of the element (So this element will be on top of all others)

Most of the other elements have attributes that we have seen before, so we don't need to view other elements.
Now SASS, CSS, and HTML are *not* exactly programming languages.
You could call them programming languages because they all provide instructions to the computer, but none of them are turing complete.
In order to be turing complete it needs to be able to run programs efficiently. HTML doesn't have if statements and SASS/CSS don't have functions so they can't do recursion.
In order to have a turing complete language in the trio, we need *JavaScript*, but before we dive into that mess, we need to talk about other programs that this project uses.

---

## Git

---

[Git](https://git-scm.com/) is a version control software designed to track changes within files.
Git is often used with [Github](https://github.com/) to make version control even easier.
This project uses Git and Github to help track when changes were made and revert changes.

### Using Git for projects on Windows

> *You can skip this part if you are not interested in Git*

Visit [this](https://git-scm.com/downloads) website and install Git.
Next, follow all the instuctions in the installer.
Once you are finished you need to add GIT to your path. Click on the windows button on your keyboard and type in "PATH".
After that click on the "Edit the system environment variables."
Then click the button that says "Environment variables."
After that click on the path in the top box and click the button below that which reads "Edit."
Then you will see a list of all programs on your PATH.
Then click a blank rectangle and click "Edit."
After that enter the path in which Git is installed (Usually C:/Programs/Git).
The reason we put Git on our path is so we an use the `git` command in the command line.

Press Windows Key + R on your keyboard to open "Run." Then type in `cmd`.
You are now in your command line.

> Another option is to use Windows Powershell, which comes intalled on your computer.

Whenever you open the command line it should look like this:

``` text
Microsoft Windows [Version version_here]
(c) copyright_year Microsoft Corporation. All rights reserved.

C:\Users\your_user_name_here>
```

From here type in `git` and this should pop up:

``` text
usage: git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           [--super-prefix=<path>] [--config-env=<name>=<envvar>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone     Clone a repository into a new directory
   init      Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add       Add file contents to the index
   mv        Move or rename a file, a directory, or a symlink
   restore   Restore working tree files
   rm        Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect    Use binary search to find the commit that introduced a bug
   diff      Show changes between commits, commit and working tree, etc
   grep      Print lines matching a pattern
   log       Show commit logs
   show      Show various types of objects
   status    Show the working tree status

grow, mark and tweak your common history
   branch    List, create, or delete branches
   commit    Record changes to the repository
   merge     Join two or more development histories together
   rebase    Reapply commits on top of another base tip
   reset     Reset current HEAD to the specified state
   switch    Switch branches
   tag       Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch     Download objects and refs from another repository
   pull      Fetch from and integrate with another repository or a local branch
   push      Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
See 'git help git' for an overview of the system.
```

All of these are thing you can do in git.

To set up Git for you, type in these commands:

``` text
> git config --global user.name "John Doe"
> git config --global user.email "email@provider.com"
```

This configurates Git for you specifically.

In order to make Git easier go to [Github](https://github.com/) and sign up.
Then click on the plus sign in the top right and create a new repository.
From there, give it a name and make it private.
You can also add a README file.
Then hit create.
This is your new repository.

You can `clone` this repository by running `git clone` from the command line and then a link to your project.

Then when you finish what you are doing you can `git commit` to commit those changes.
Be sure to always give your commits descriptive names.
Then you can `git push` to push those changes to Github.

Now we can finally get into TypeScript and JavaScript.

---

## JavaScript

---

In order to understand TypeScript we first need to understand JavaScript.
JavaScript is a programming language used to make webpages with CSS and HTML.

Here is some example JavaScript.

``` javascript
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] == target)
      return middle;
    else if (array[middle] < target>)
      left = middle + 1;
    else
      right = middle - 1;
  }
  throw `Target ${target} was not found in array!`;
}
```

Now JavaScript is dynamically typed, which means that it infers the types of variables and allows variables to change types.
Here is an example of that:

``` javascript
let variable = "variable"; // Variable is an string.
variable = 0;              // Variable is a number.
variable = false;          // Variable is a boolean.
console.log(variable);     // Prints false.
```

In statically typed languages such as C++, C, C#, and Java, variables need type names.
Here is the same code but in C++.

``` cpp
#include <string>
#include <iostream>

using namespace std; // Import STANDARD library

int main(void) {
  // Create a variable with type string and assigns the value "variable" to it
  string variable = "variable";
  // This throws an error because type "int" is not assignable to std::string
  variable = 0;
  // The program will stop due to the error so none of the code below will run
  variable = false;
  cout << variable << endl;
  return 0;
}
```

One may think that having a dynamically typed language is worse, however take this code:

``` javascript
class Point {
  constructor(x) {
    this.x = x;
  }
}

let point = new Point(100);
console.log(point.x);
console.log(point.y);
```

The first `console.log` will log `100` but the second one `undefined` because point.y does not exist.
This is unexpected behavior and defiently something we don't want.
This is that same code in C++:

``` cpp
// main.h

#ifndef MAIN_H
#define MAIN_H

class Point {
  public:
    int x;

    Point(int x);
}

#endif

// main.cpp

#include "main.h"

#include <iostream>

using namespace std;

Point::Point(int x) {
  this->x = x;
}

int main(void {
  Point point(100);
  cout << point.x << endl;
  cout << point.y << endl; // Point doesn't have a y value!
}
```

It will give you the warning before you run the code because it knows that the point class has no attribute y.
This is one of the reasons that Javascript is bad. Another reason is how weird it is.

Here are some examples (You can try them yourself by pressing ctrl + shift + i within Google Chrome and clicking on Console):

``` javascript
// What is the type of not a number
typeof NaN; // Number
// Maximum number
Math.max(); // -Infinity
// Minimum Number
Math.min(); // Infinity
// Empty array plus empty array
[] + []; // Empty array
// Does 0.1 + 0.2 equal 0.3?
0.1 + 0.2 === 0.3; // false
// Empty array plus an empty object 
[] + {}; // "[object Object]"
// Empty Object plus an empty array
{} + []; // 0
// False plus empty array
false + []; // "false"
// This mess
++[[]][+[]]; // 1
```

And there are *many* more examples of this.
To counter this, we can use TypeScript.

---

## TypeScript

---

TypeScript is a statically typed, superset of JavaScript.
It adds types to JavaScript and access modifiers for class variables and functions.
It also adds all these things:

- Generics
- Namespaces
- Intefaces
- Union Types

Here is how the code above would work in TypeScript:

``` javascript
let variable: string = "variable"; // Variable is an string.
variable = 0; // Error: Type number cannot be assigned to 
variable = false;
console.log(variable);
```

To fix this, we can do two things.

``` javascript
// Option 1: Give variable type any
let variable: any = "variable"; // Variable is an string.
variable = 0; // Varaible is a number
variable = false; // Variable is a boolean
console.log(variable); // Prints false

// Option 2: Use Union Types

// varaible has three types that can be assigned to it 
let variable: string | number | boolean = "variable"; // Variable is an string.
variable = 0; // Variable is a number
variable = false; // Variable is a boolean
console.log(variable); // Prints false
```

In order to use TypeScript in HTML, we need to compile it first.
To do this, we run the `tsc` command in the command line (We'll go over this later) so the TypeScript will be compiled to JavaScript.
We can then use the JavaScript files in the html like this:

``` html
<script src="src/Style/colorInput.js"></script>
<script src="src/Style/history.js"></script>
<script src="src/Style/historyComponent.js"></script>
<script src="src/main.js"></script>
<script src="src/Board Utilities/fenHandling.js"></script>
<script src="src/Functions/functions.js"></script>
<script src="src/Board Utilities/board.js"></script>
<script src="src/Pieces/piece.js"></script>
<script src="src/Events/keyEvents.js"></script>
<script src="src/Pieces/black.js"></script>
<script src="src/Move Validation/move.js"></script>
<script src="src/Move Validation/check.js"></script>
<script src="src/Settings/userSettings.js"></script>
<script src="src/Settings/devSettings.js"></script>
<script src="src/init.js"></script>
```

When the TypeScript compiles it call the `tsconfig.json` file.
This is a "settings" file for the TypeScript compiler, so you can tell it what to do.
For example we can change the target JavaScript version using `"target"`.

### Starting With TypeScript

---

> Skip this part if you are uninterested

Step 1: Install [Node JS](https://nodejs.org/en/)

Step 2: Run `npm install -g typescript` to install TypeScript.

Step 3: Run `tsc init` to generate a `tsconfig.json` file.

Step 4: Run `tsc` or `tsc filename.ts` to compile TypeScript to JavaScript.

---

## Going through the files

---

### The Main.ts file

Here is our `main.ts` file:

``` typescript
class World {
  public static readonly canvas : HTMLCanvasElement        = <HTMLCanvasElement> document.getElementById("mainCanvas");
  public static readonly context: CanvasRenderingContext2D = World.canvas.getContext("2d")!;
  public static readonly boundingClient: DOMRect = World.canvas.getBoundingClientRect();
  public static readonly offsetX: number = World.boundingClient.left;
  public static readonly offsetY: number = World.boundingClient.top;
  public static readonly colorPickers: ColorInput = new ColorInput();
  public static readonly history: HistoryCanvas = new HistoryCanvas();
  public static drawCounter: number = 0;
  public static dragging: boolean = false;
  public static isWhiteTurn: boolean = true;

  public readonly board: Board = new Board();

  public constructor() {
    World.canvas.width  = (DevSettings.boxDimensions * 8) + DevSettings.numberLetterDimensions;
    World.canvas.height = (DevSettings.boxDimensions * 8) + DevSettings.numberLetterDimensions;
    World.canvas.onmousedown = KeyEvents.mouseDown;
    World.canvas.onmouseup = KeyEvents.mouseUp;
    World.canvas.onmousemove = KeyEvents.mouseMove;
  }
}
```

The first thing we do in our `main.ts` file is create a new `class` called `World`.

A `class` is a sort of `blueprint` for an object.
In a class, you can have member `variables` and member `functions`.
Each member item has an `access modifier` that specifies what other classes can do.
Here are all `access modifiers`:

- `public`
  - The object can be used anywhere.
- `private`
  - The object can only be used within the class it is in.
- `protected`
  - The object can only be used by the class it is in and any classes that inherit from it.

The very first variable of the `World` class is called `canvas`.
We give it a `public` access modifier.
We also use the `readonly` keyword.
The `readonly` keyword makes it so that the variable cannot be changed, and if you try to change it, the program will throw an error.

We also set the `canvas` to `static`.
This means that any class can access that variable.
For example: if we were in `Move.ts` and needed the canvas, we could call `World.canvas`.
This looks into the `World` class and finds the variable named `canvas`.

After this we give our canvas a type of `HTMLCanvasElement`.
After the equals sign we *cast* a value.
Casting is telling the TypeScript compiler that *I know what I'm doing and i know that this value is of this type.*
We set the value of `World.canvas` to `document.getElementById("mainCanvas")`. Here is what that does:

- `document` calls the HTML body.
- Within the `document`, we get an element by it's ID.
- We get the ID of `mainCanvas`.
- Then, we tell the compiler that we know that we just got an `HTMLCanvasElement`, so it sets the type to that.

Next, we create the `context` of the `canvas`.
The `context` will be used to draw shapes and text to the canvas.
Whenever we call `getContext` on a canvas, it has a chance to return `null`, which is the German word for zero, because it does not know that the canvas has a context.
We can put a `!` after the value to tell the compiler that *I, the developer have specifically checked this variable and have confermed that it does not equal null*.

Next we get the bounding rectangle of the canvas by calling `World.cavas.getBoundingClientRect()`.
This gets the position of the canvas relative to the body.
We use this later to get info about where the user clicked their mouse.

Since we only need two values from the bounding rectangle, we can give the values to variables called `xOffset` and `yOffset`.

Next we have two variables that create new classes, however we will go over these when we get to their respective files.

After those two, we have a `drawCounter` set to 0. Later, we will check if that value has hit 100 to end the game due to a draw.

Next, we have a variable that is a `boolean` (`true` or `false`) that checks if we are currently dragging a piece.
We also have another `boolean` to check if it is white's turn.

Then we initialize the board, which we will go over when we reach he `board.ts` file.

Next we have our `constructor`.
A `constructor` is called whenever a class is created.
For example, we have this program (in C#)::

``` csharp
public class Item {
  // In most languages, constructros are made by using the class name as a function. Javascript used the constructor keyword.
  public Item() {
    Console.WriteLine("Constructor Called");
  }
}

public class Program {
  // Program.Main will be called when the Program is run.
  public static void Main(string[] args) {
    Console.WriteLine("Program Started");
    Item item = new Item();
    Console.WriteLine("Program Ended");
  }
}
```

If we run this program, this is the output:

``` text
Program Started
Constructor Called
Program Ended
```

This is because the `Console.WriteLine("Constructor Called")` was within the constructor, which was called when the variable `item` is initialized.
It's the same deal in TypeScript.
Within the constructor, we usually initialize class variables, but since `World` has no class variables, we don't.
Instead, we set some properties of the `World` variables.

The first thing we do is set the width and height of our canvas.
We do this by calling two static variables from another class, `DevSettings`.
We won't go over the `DevSettings` class, but all you need to know is it is settings that the developer (me) can set for debugging and playtesting.
We calculate the width and height, and then we set some more properties.
We'll go over the values later, but what this does is it maps functions to events.
So when the mouse goes down, it calls `KeyEvents.mouseDown()` (We don't need the parenthesis).

Now that we have finished the `main.ts` file, we should go into some of the UI files before getting into the actuall chess game.

### The ColorInput.ts file

Here is our `colorInput.ts` file:

``` typescript
class ColorInput {
  public static colorWell1: any = document.getElementById("colorWell1")!;
  public static colorWell2: any = document.getElementById("colorWell2")!;
  public static colorWell3: any = document.getElementById("colorWell3")!;
  public static colorWell4: any = document.getElementById("colorWell4")!;
  public static colorWell5: any = document.getElementById("colorWell5")!;
  public static colorWell6: any = document.getElementById("colorWell6")!;

  public constructor() {
    ColorInput.colorWell1.addEventListener("change", this.watchColorPickerOnePicker);
    ColorInput.colorWell2.addEventListener("change", this.watchColorPickerTwoPicker);
    ColorInput.colorWell3.addEventListener("change", this.watchColorPickerThreePicker);
    ColorInput.colorWell4.addEventListener("change", this.watchColorPickerFourPicker);
    ColorInput.colorWell5.addEventListener("change", this.watchColorPickerFivePicker);
    ColorInput.colorWell6.addEventListener("change", this.watchColorPickerSixPicker);
  }

  public watchColorPickerOnePicker(event: any) {
      ColorInput.colorWell1.style.color = event.target.value;
      UserSettings.whiteSquareColor = event.target.value;
  }

  public watchColorPickerTwoPicker(event: any) {
      ColorInput.colorWell1.style.color = event.target.value;
      UserSettings.blackSquareColor = event.target.value;
  }

  public watchColorPickerThreePicker(event: any) {
      ColorInput.colorWell3.style.color = event.target.value;
      World.canvas.style.backgroundColor = event.target.value;
  }

  public watchColorPickerFourPicker(event: any) {
      ColorInput.colorWell4.style.color = event.target.value;
      document.body.style.backgroundColor = event.target.value;
  }

  public watchColorPickerFivePicker(event: any) {
      ColorInput.colorWell5.style.color = event.target.value;
      document.getElementById("header")!.style.backgroundColor = event.target.value;
  }

  public watchColorPickerSixPicker(event: any) {
      ColorInput.colorWell6.style.color = event.target.value;
      World.history.canvas.style.backgroundColor = event.target.value; 
  }
}
```

OK, so first thing we do is create a class with a name of `ColorInput`.
The we create six color wells by calling their ID's from the HTML.
These color wells are what you see when you hover over the `Colors` icon in the top navigation bar.
This file will be used to facilitate everything with those color wells.

Next, we have our constructors.
For each of our color wells, we add an event listiner too them.
addEventListener has two arguments, and here they are:

- `type`
  - The type of input we are looking for. For the color wells, we are looking for changes in the color.
- `listener`
  - What to call when the item changes. This does not need to have parenthesis even though we are calling a function. This is because the function will only have one argument, the event, which JavaScript automatically assigns it.

So now we will check for changes in the color wells and if we find one we call the `listener`.

After this we have six functions, one for each well.
Each function has one argument, `event`, which can be anything.
I won't go through each one, but what you need to know is that it first updates the color picker value, then updates whatever color it is actually used for.

### The History file and the HistoryComponent file

Here is the `history.ts` file:

``` typescript
class HistoryCanvas {
  public readonly canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("historyCanvas");
  public readonly context: CanvasRenderingContext2D = this.canvas.getContext("2d")!;

  public components: HistoryComponent[] = [];

  public constructor() {
    this.canvas.width = 200;
    this.canvas.height = 0;
  }

  public addComponent(component: HistoryComponent): void {
    this.canvas.height += 20;
    this.components.push(component);
  }

  public print(): void {
    Functions.drawLine(20, 0, 20, this.canvas.height, undefined, this.context);
    Functions.drawLine(110, 0, 110, this.canvas.height, undefined, this.context);
    for (let i = 1; i <= this.components.length; i++) {
      Functions.drawText(i + ":", 2, ((i) * 20 - 5), "black", "Arial", 10, undefined, undefined, this.context);
      Functions.drawText(this.components[i - 1].move1, 22, ((i) * 20 - 5), "black", "Arial", 10, undefined, undefined, this.context);
      Functions.drawLine(0, (i * 20), this.canvas.width, (i * 20), undefined, this.context);
    }
  }
}
```

And here is our `historyComponent.ts` file:

``` typescript
class HistoryComponent {
  public move1: string;
  public move2: string;

  public constructor(move1: string, move2: string) {
    this.move1 = move1;
    this.move2 = move2;
  }
}
```

Let's go over the `historyComponent.ts` file first, as it is much further.

The first thing we do in our `HistoryComponent` class is create two public variables, `move1`, and `move2` (Which goes unused, but YOU can do it!).

Then we create our constructor and have two arguments that match our variable names, and then within the constructor, we set our class variables to the parameters.

Here is how this works:

``` typescript
// Create a new HistoryComponent and pass in move1 and move2, which must be strings
let historyComponent: HistoryComponent = new HistoryComponent("move1", "move2");
// In the constructor, we set the values of the class too what we passed in.
// When we are outside of the class instead of using 'this' we use the class name instead.
// This prints out "move1" because when we initialized the history component we set move1 to "move1"
console.log(historyComponent.move1);
```

Now to our `history.ts` file.
First thing we do is grab our `historyCanvas` and set the `context` (Just like me did in `main.ts`).
Next we create a class variable called components, which will be an array of `HistoryComponent`'s.
This is how arrays work:

``` typescript
// Create a new variable called array and set its value to an empty array.
// The type is string[], which means that it must be an array with only string types.
let array: string[] = [];
// We can also let an array contain string or ints by doing this:
let array2: (int|string)[] = [];
// Now array is just an empty array:
// []
// We can add items to it:
array.push("String1");
// Now array is this:
// ["String1"]
// We can also add many values:
for (let i = 2; i < 10; i++)
  array.push("String" + i.toString());
// Now out array is this:
// ["String1", "String2", "String3", "String4", "String5", "String6", "String7", "String8", "String9"]
// We can also remove items:
array.pop();
// Now our array is this:
// ["String1", "String2", "String3", "String4", "String5", "String6", "String7", "String8"]
// We can call values by their index.
// In TypeScript and JavaScript, arrays start at index 0.
// Here is a visulaization:

// ["bannana", "squash", "carrot"]
//     ^          ^          ^
//   Index 0     Index 1    Index 2

// This returns "String5"
array[4];
```

---
