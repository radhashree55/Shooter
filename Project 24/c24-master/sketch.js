// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

var engine,world;
var ground;
function setup() {
    // Setup the canvas, the ground ,the tanker, the shooting ball and the bubble balls.
var canvas = createCanvas(1300,600);

engine = Engine.create();
world = engine.world;

ground = new Ground(650,585,1300,20);
part1 = new Tanker(150,549,240,50,0);
part2 = new Tanker(150,504,210,40,0);
part3 = new Tanker(210,425,120,30,PI/3);
part4 = new Tanker(90,425,120,30,-PI/3);
part5 = new Tanker(150,425,35,115,0);
part6 = new Tanker(230,365,50,30,0);
part7 = new Tanker(150,315,30,50,0);
part8 = new Tanker(150,365,130,60,0);

}

function draw() {
// Remember to update the Matter Engine and set the background.
background(255);
Engine.update(engine);

ground.display();
part1.display();
part2.display();
part3.display();
part4.display();
part5.display();
part6.display();
part7.display();
part8.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}