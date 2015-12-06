Game of Life!
===================


Hey! This is the **Game of Life**. 

The game consists on an infinite grid, where each **Cell** can be either **Live** or **Dead**.

It has 3 simple rules:

 1. A dead cell with exactly three live neighbors becomes a live cell (birth).
 2. A live cell with two or three live neighbors stays alive (survival).
 3. In all other cases, a cell dies or remains dead (overcrowding or loneliness).

In this implementation the world is said to be infinite because it's connected, that means whenever a cell is at a border, the opposite border is considered neighbor too.

----------
Versions
-------------
For this implementation I made two versions, a Command Line version based on **Node.js** 
> **Node.js:**

> - Run ```user@computer:~/path/to/life$ node index.js``` in the root folder.
> - You can modify the world size modifying the proper variables in the index.js file.

and a HTML5 version  with HTML5's **Canvas**.

> **HTML5:**

> - Open ```life/html_version/index.html``` in your favorite browser.
> - Alternatively you can see a live version [here](http://yknx4.github.io/lifebyjorge/).
> - You can modify the world size modifying canvas width and height in the```index.html``` file, be careful of choosing a size that is divisible by 10, so there's no visual glitches or unexpected behavior.

Both versions have the seed (or initial) world generated randomly automatically.


### Made by: Jorge Figueroa


