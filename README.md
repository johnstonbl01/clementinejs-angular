# Clementine.js Beginner Boilerplate

**Note**: Clementine.js is currently being transitioned to a Yeoman generator and has not yet been published. The installation steps below will not work at this time.

## Overview

The beginner version of Clementine.js is meant for those that are new to coding. This is a stripped down version of the boilerplate with fewer featured libaries, fully commented code and a tutorial.

When I first began learning to code, I wish something like this boilerplate existed. There are several tutorials and guides out there that demonstrate functionality of a single part of the MEAN stack, but many of them provide too much detail or functionality too quickly for a beginner.

The beginner version of Clementine.js aims to alleviate some of these issues by providing a simpler, stream-lined experience.

The following features are absent from this version of the boilerplate:

- Jade
- Mongoose
- Gulp
- Sass
- Bower
- Angular custom directive example

I believe that the MEAN stack is a great place for new developers to begin learning. Why? Using this stack, a novice can gain exposure to the entire stack without having to learn another programming langugae. Eventually, it will be useful to pick up additional languages (i.e. SQL), but in the beginning it's really appealing to learn the ropes using a single language.

Also - JavaScript is awesome!

The ubiquity of JavaScript adds to its appeal, and is also a reason for the popularity of the MEAN stack. Each of the platforms and frameworks included in the MEAN stack use JavaScript only. It's easy to see the appeal, and the ease of standing up a new project using this stack makes for an additional bonus.

If you are completely new to programming, and wish to understand how these pieces fit together, there is a tutorial included in this beginner version that will walk you through creating this demo application one step at a time.

## Versions

- [Standard](https://github.com/johnstonbl01/clementinejs): A MEAN stack boilerplate -- this version has the most "bells and whistles."
- [Bare](https://github.com/johnstonbl01/clementinejs-bare): A stripped down version of the boilerplate for quick prototyping
- [FCC](https://github.com/johnstonbl01/clementinejs-fcc): An extension of the beginner version that includes authentication & authorization

## Installation

Installation of the boilerplate has three prerequisites: Node.js / NPM, MongoDB and Yeoman. The instructions for these are detailed below, followed by installation instructions for Clementine.js.

### Node.js & NPM

_Note:_ The Node insallation installs both Node & NPM.

**MAC OSX & Windows**

Head to the [Node.js install page](https://nodejs.org/download/). Download the appropriate file follow the installation instructions.

**Linux**

_Option 1_ - Install via PPA
```
$ sudo add-apt-repository ppa:chris-lea/node.js
$ sudo apt-get update
$ sudo apt-get install nodejs
```

_Option 2_ - Install via LinuxBrew

First, ensure [LinuxBrew](http://brew.sh/linuxbrew/) is installed. Then, enter the below into the Linux terminal:
```
$ brew install node
```

### MongoDB

MongoDB has great installation instructutions for MAC OSX, Windows and Linux. [See this page.](http://docs.mongodb.org/manual/installation/)

### Yeoman

Yeoman is simple to install:

```bash
$ npm install -g yo
```

Note that it should be installed globally.

### Clementine.js

Clementine.js is easy to setup in the project directory of your choice! In the terminal:

```bash
$ npm install -g generator-clementinejs
$ mkdir your-project
$ cd your-project
$ yo clementinejs:beginner
```

It's that easy!

### Starting the App

To start the app, make sure you're in the project directory and type `node server.js` into the terminal. This will start the Node server and connect to MongoDB.

You should the following messages within the terminal window:
```
MongoDB successfully connected on port 27017.
Node.js listening on port 3000...
```
Next, open your browser and enter `http://localhost:3000/`. Congrats, you're up and running!

## Contributing

This is an open-source project, and contributions are always welcome! To see ways to contribute, please review the [contribution guidelines](http://johnstonbl01.github.io/clementinejs/developers/contributing.html).

## Documentation

Complete documentation can be [found here](http://johnstonbl01.github.io/clementinejs).

### Tutorial

You can find a complete step-by-step tutorial on how to create this app from the ground up [here](http://johnstonbl01.github.io/clementinejs/tutorial/tutorial.html).

## Features

| Features 				| Beginner 	| Standard 	| Bare 		| FCC 		|
|:---------				|:--------:	|:--------:	|:---------:|:---------:|
| Commented Code		| _Yes_ 	| _No_ 		| _No_		| _No_		|
| Example Controller 	| _Yes_ 	| _Yes_		| _Yes_		| _Yes_		|
| Example Directive 	| _No_ 		| _Yes_		| _No_		| _No_		|
| Jade					| _No_ 		| _Yes_ 	| _Yes_	 	| _No_		|
| Mongoose				| _No_		| _Yes_		| _Yes_		| _Yes_		|
| Gulp				 	| _No_		| _Yes_		| _Yes_		| _No_		|
| Sass					| _No_		| _Yes_		| _Yes_		| _No_		|
| Bower					| _Yes_		| _Yes_		| _Yes_		| _No_		|
| Authentication		| _No_		| _No_		| _No_		| _Yes_		|

## License

MIT License. [Click here for more information.](LICENSE.md)