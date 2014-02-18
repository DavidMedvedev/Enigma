//globals
var inventoryPlace = [];
var currentLocationID = 1;
var score = new score(0);

var matrix= [						/* N    S   E   W */         
									/* 0    1   2   3 */								   
         /* nav[0] for well 0 */   [   1,  -1, -1, -1 ],
         /* nav[1] for crash 1 */  [   7,   0,  2,  6 ],
         /* nav[2] for bridge 2 */ [   3,  -1,  5,  1 ],
		 /* nav[3] for ravine 3 */ [  -1,  -1, -1, -1 ],
         /* nav[4] for hut 4 */    [  -1,  -1,  6, -1 ],
         /* nav[5] for lake 5 */   [  -1,  -1, -1,  2 ],
		 /* nav[6] for ruins 6 */  [  -1,  -1,  1,  4 ],
         /* nav[7] for buzzard 7 */[   8,   1, -1, -1 ],
         /* nav[8] for corpse 8 */ [   3,   7, -1, -1 ]
		 ];



function score(points) {
    this.points = points
    return points;
}



// area prototype
function area(name, description, item, id, hasVisited) {
    this.name = name;
    this.description = description;
    this.item = item;
    this.id = id
    this.hasVisited = hasVisited;
}
//	locations
var well = new area("Spooky Well", "You find a spooky well. There isn't much to do here... But it may be worth looking around.", "Worn Canteen", 0, false);
var crashsite = new area("Crash Site", "You return to the Crash Site. The plane wreckage is in front of you. Maybe you should search it? ", "Hatchet", 1, false);
var bridge = new area("Shaky Wooden Bridge", "You find yourself on an old, shaky, wooden rope bridge. You better get moving!", " Cracked Skull ", 2, false);
var ravine = new area("Ravenous Ravine", "You have scaled down the Ravenous Ravine with your collected equipment. Congratulations, you have escaped the ENIGMA", "", 3, false);
var hut = new area("Abandoned Hut", "A small, broken down hut sits to your left. You can see someone's belongings in the hut but you cannot quite make out what it is.", "Climbing Boots", 4, false);
var lake = new area("Lake Eerie", "There is a small raft docked in the lake. To the right of the raft there is a rubble of broken equipment and other various items sitting in a patch of reeds. ", "Rope", 5, false);
var ruins = new area("Crumbling Ruins", "You come across a crumbling stone ruin of what was once a tall barrier. What could it have been protecting? Who knows? Lots of sharp, coarse stones lie among the crumbling ruin. ", "Stone", 6, false);
var buzzard = new area("Perched Buzzard", "A vicious flesh-eating buzzard sits perched upon a branch in your path. You notice a slip of paper sticking out of it's razor-sharp teeth. You decide to throw your stone at the buzzard, you kill it in one blow. Search to take the slip.", "Half of Map", 7, false);
var corpse = new area("Rotting Corpse", "You stumble upon a rotting corpse that smells putrid and makes your skin crawl. It has been dismembered and where an eye should have been, a slip of paper has been lodged in it's place.....", "Final Half of Map", 8, false);


function setName() {
    var playerName = document.getElementById('nameBox').value;
    display();
    document.getElementById('commandBox').style.display = 'block';
    document.getElementById('goBox').style.display = 'block';
    document.getElementById('areaName').innerHTML = crashsite.name;
    document.getElementById('areaDesc').innerHTML = "There was blackness, and then there was a flash of light. " + playerName + ", you awaken in a clearing. You are surrounded by a plane wreckage and 4 paths. They lead north, south, east and west. Type or press help for instructions. Be safe traveler.";
    document.getElementById('page0').style.display = 'block';


}


// onload function
function start() {
    document.getElementById('commandBox').style.display = 'none';
    document.getElementById('goBox').style.display = 'none';
    if (document.getElementById('nameBox').value != null) {
        document.getElementById('areaName').innerHTML = "Before you start....";
        document.getElementById('areaDesc').innerHTML = "Please enter your name and press the enter key....";
    }
}


// item prototype
function item(name, description) {
    this.name = name;
    this.description = description;
}


//	items
var hatchet = new item("Hatchet", "A dull rusty hatchet ");
var boots = new item("Boots", "A pair of climbing boots");
var rope = new item("Rope", "Rope spun from rough sinew");
var stone = new item("Stone", "A fairly large rock, I wonder what I could do with it?");
var first_half = new item("first_half", "Find the buzzard and retrieve the final set of instructions ");
var final_half = new item("final_half", "Congratulations, you have made it this far. Escape through the ravine ");


// eliminate duplicates within array
function eliminateDuplicates(array) {
    var i,
    length = array.length,
        out = [],
        obj = {};

    for (i = 0; i < length; i++) {
        obj[array[i]] = 0;
    }
    for (i in obj) {
        out.push(i);
    }
    return out;
}

//image change function
function changeImage(image) {
    document.getElementById("main").src = image;
}


function items(currentLocationID) {

    if (currentLocationID == 0) {
        inventoryPlace.push(well.item);

    } else if (currentLocationID == 1) {
        inventoryPlace.push(crashsite.item);

    } else if (currentLocationID == 2) {
        inventoryPlace.push(bridge.item);

    } else if (currentLocationID == 3) {
        inventoryPlace.push(ravine.item);

    } else if (currentLocationID == 4) {
        inventoryPlace.push(hut.item);

    } else if (currentLocationID == 5) {
        inventoryPlace.push(lake.item);

    } else if (currentLocationID == 6) {
        inventoryPlace.push(ruins.item);

    } else if (currentLocationID == 7) {
        inventoryPlace.push(buzzard.item);

    } else if (currentLocationID == 8) {
        inventoryPlace.push(corpse.item);

    }
}

function place(currentLocationID) {
    if (currentLocationID == 0) {;

    } else if (currentLocationID == 1) {
        inventoryPlace.push(crashsite.item);

    } else if (currentLocationID == 2) {
        inventoryPlace.push(bridge.item);

    } else if (currentLocationID == 3) {
        inventoryPlace.push(ravine.item);

    } else if (currentLocationID == 4) {
        inventoryPlace.push(hut.item);

    } else if (currentLocationID == 5) {
        inventoryPlace.push(lake.item);

    } else if (currentLocationID == 6) {
        inventoryPlace.push(ruins.item);

    } else if (currentLocationID == 7) {
        inventoryPlace.push(buzzard.item);

    } else if (currentLocationID == 8) {
        inventoryPlace.push(corpse.item);

    }
}

// navigation function
function move(cl, dir) {
    var playerName = document.getElementById('nameBox').value;
    var newLocation = matrix[cl][dir];


    if (newLocation >= 0) {
        currentLocationID = newLocation;
        display();
    }


    if (currentLocationID == 0 && (well.hasVisited == false)) {
        score.points = score.points + 5;
        display();
        well.hasVisited = true;
        changeImage("images/start_1.png");
        document.getElementById('west').disabled = true;
        document.getElementById('north').disabled = false;
        document.getElementById('south').disabled = true;
        document.getElementById('east').disabled = true;
        document.getElementById('areaName').innerHTML = well.name;
        document.getElementById('areaDesc').innerHTML = well.description;

    } else if (currentLocationID == 0 && (well.hasVisited == true)) {
        display();
        changeImage("images/start_1.png");
        document.getElementById('west').disabled = true;
        document.getElementById('north').disabled = false;
        document.getElementById('south').disabled = true;
        document.getElementById('east').disabled = true;
        document.getElementById('areaName').innerHTML = well.name;
        document.getElementById('areaDesc').innerHTML = well.description;

    } else if (currentLocationID == 1 && (crashsite.hasVisited == false)) {
        score.points = score.points + 5;
        display();
        crashsite.hasVisited = true;
        changeImage("images/start.png");
        document.getElementById('west').disabled = false;
        document.getElementById('north').disabled = false;
        document.getElementById('south').disabled = false;
        document.getElementById('east').disabled = false;
        document.getElementById('areaName').innerHTML = crashsite.name;
        document.getElementById('areaDesc').innerHTML = crashsite.description;

    } else if (currentLocationID == 1 && (crashsite.hasVisited == true)) {
        display();
        document.getElementById('west').disabled = false;
        document.getElementById('north').disabled = false;
        document.getElementById('south').disabled = false;
        document.getElementById('east').disabled = false;
        changeImage("images/start.png");
        document.getElementById('areaName').innerHTML = crashsite.name;
        document.getElementById('areaDesc').innerHTML = crashsite.description;

    } else if (currentLocationID == 2 && (bridge.hasVisited == false)) {
        score.points = score.points + 5;
        display();
        bridge.hasVisited = true;
        document.getElementById('west').disabled = false;
        document.getElementById('north').disabled = true;
        document.getElementById('south').disabled = true;
        document.getElementById('east').disabled = false;
        changeImage("images/start_2.png");
        document.getElementById('areaName').innerHTML = bridge.name;
        document.getElementById('areaDesc').innerHTML = bridge.description;

    } else if (currentLocationID == 2 && (bridge.hasVisited == true)) {
        display();
        document.getElementById('west').disabled = false;
        document.getElementById('north').disabled = true;
        document.getElementById('south').disabled = true;
        document.getElementById('east').disabled = false;
        changeImage("images/start_2.png");
        document.getElementById('areaName').innerHTML = bridge.name;
        document.getElementById('areaDesc').innerHTML = bridge.description;

    } else if (currentLocationID == 3) {
        document.getElementById('west').disabled = true;
        document.getElementById('north').disabled = true;
        document.getElementById('south').disabled = true;
        document.getElementById('east').disabled = true;
        changeImage("images/victory.png");
        document.getElementById('areaName').innerHTML = ravine.name;
        document.getElementById('areaDesc').innerHTML = ravine.description;
        youWin();

    } else if (currentLocationID == 4 && (hut.hasVisited == false)) {
        score.points = score.points + 5;
        display();
        hut.hasVisited = true;
        document.getElementById('west').disabled = true;
        document.getElementById('north').disabled = true;
        document.getElementById('south').disabled = true;
        document.getElementById('east').disabled = false;
        changeImage("images/start_5.png");
        document.getElementById('areaName').innerHTML = hut.name;
        document.getElementById('areaDesc').innerHTML = hut.description;

    } else if (currentLocationID == 4 && (hut.hasVisited == true)) {
        display();
        document.getElementById('west').disabled = true;
        document.getElementById('north').disabled = true;
        document.getElementById('south').disabled = true;
        document.getElementById('east').disabled = false;
        changeImage("images/start_5.png");
        document.getElementById('areaName').innerHTML = hut.name;
        document.getElementById('areaDesc').innerHTML = hut.description;



    } else if (currentLocationID == 5 && (lake.hasVisited == false)) {
        score.points = score.points + 5;
        display();
        document.getElementById('west').disabled = false;
        document.getElementById('north').disabled = true;
        document.getElementById('south').disabled = true;
        document.getElementById('east').disabled = true;
        changeImage("images/start_6.png");
        document.getElementById('areaName').innerHTML = lake.name;
        document.getElementById('areaDesc').innerHTML = lake.description

    } else if (currentLocationID == 5 && (lake.hasVisited == true)) {
        display();
        document.getElementById('west').disabled = false;
        document.getElementById('north').disabled = true;
        document.getElementById('south').disabled = true;
        document.getElementById('east').disabled = true;
        changeImage("images/start_6.png");
        document.getElementById('areaName').innerHTML = lake.name;
        document.getElementById('areaDesc').innerHTML = lake.description;

    } else if (currentLocationID == 6 && (ruins.hasVisited == false)) {
        score.points = score.points + 5;
        display();
        ruins.hasVisited = true;
        document.getElementById('west').disabled = false;
        document.getElementById('north').disabled = true;
        document.getElementById('south').disabled = true;
        document.getElementById('east').disabled = false;
        changeImage("images/start_7.png");
        document.getElementById('areaName').innerHTML = ruins.name;
        document.getElementById('areaDesc').innerHTML = ruins.description;

    } else if (currentLocationID == 6 && (ruins.hasVisited == true)) {
        display();
        document.getElementById('west').disabled = false;
        document.getElementById('north').disabled = true;
        document.getElementById('south').disabled = true;
        document.getElementById('east').disabled = false;
        changeImage("images/start_7.png");
        document.getElementById('areaName').innerHTML = ruins.name;
        document.getElementById('areaDesc').innerHTML = ruins.description;

    } else if (currentLocationID == 7 && inventoryPlace.indexOf(ruins.item) > -1 && (buzzard.hasVisited == false)) {
        score.points = score.points + 15;
        buzzard.hasVisited = true;
        document.getElementById('west').disabled = true;
        document.getElementById('north').disabled = false;
        document.getElementById('south').disabled = false;
        document.getElementById('east').disabled = true;
        changeImage("images/start_9.png");
        document.getElementById('areaName').innerHTML = buzzard.name;
        document.getElementById('areaDesc').innerHTML = buzzard.description;

    } else if (currentLocationID == 7 && inventoryPlace.indexOf(ruins.item) > -1 && (buzzard.hasVisited == true)) {
        display();
        document.getElementById('west').disabled = true;
        document.getElementById('north').disabled = false;
        document.getElementById('south').disabled = false;
        document.getElementById('east').disabled = true;
        changeImage("images/start_9.png");
        document.getElementById('areaName').innerHTML = buzzard.name;
        document.getElementById('areaDesc').innerHTML = buzzard.description;

    } else if (currentLocationID == 7 && inventoryPlace.indexOf(ruins.item) != 1) {
        currentLocationID = 1;
        display();
        changeImage("images/start.png");
        document.getElementById('areaName').innerHTML = crashsite.name;
        document.getElementById('areaDesc').innerHTML = "As you went ahead, you saw a Buzzard perched upon a branch. It looked like it hadn't eaten in days and stared at you deliciously. You turned and ran as fast as you could and found yourself back at the Crash Site.";



    } else if (currentLocationID == 8 && inventoryPlace.indexOf(buzzard.item) > -1 && (corpse.hasVisited == false)) {
        score.points = score.points + 15
        corpse.hasVisited = true;
        document.getElementById('west').disabled = true;
        document.getElementById('north').disabled = false;
        document.getElementById('south').disabled = false;
        document.getElementById('east').disabled = true;
        changeImage("images/start_10.png");
        document.getElementById('areaName').innerHTML = corpse.name;
        document.getElementById('areaDesc').innerHTML = corpse.description;

    } else if (currentLocationID == 8 && inventoryPlace.indexOf(buzzard.item) > -1 && (corpse.hasVisited == true)) {
        display();
        document.getElementById('west').disabled = true;
        document.getElementById('north').disabled = false;
        document.getElementById('south').disabled = false;
        document.getElementById('east').disabled = true;
        changeImage("images/start_10.png");
        document.getElementById('areaName').innerHTML = corpse.name;
        document.getElementById('areaDesc').innerHTML = corpse.description;

    } else if (currentLocationID == 8 && inventoryPlace.indexOf(buzzard.item) != 1) {
        currentLocationID = 7;
        display();
        changeImage("images/start.png");
        document.getElementById('areaName').innerHTML = buzzard.name;
        document.getElementById('areaDesc').innerHTML = "You have been returned to where the Buzzard once stood. Thank you " + playerName + ", you are a hero.";

    }
}





// commands
function command() {

    if (document.getElementById("commandBox").value.toLowerCase() == 'north') {

        move(currentLocationID, 0);

    } else if (document.getElementById("commandBox").value.toLowerCase() == 'south') {

        move(currentLocationID, 1);

    } else if (document.getElementById("commandBox").value.toLowerCase() == 'leethax') {

        inventoryPlace.push(bridge.item, crashsite.item, ruins.item, hut.item, lake.item, well.item, buzzard.item, corpse.item);


    } else if (document.getElementById("commandBox").value.toLowerCase() == 'east') {

        move(currentLocationID, 2);

    } else if (document.getElementById("commandBox").value.toLowerCase() == 'west') {


        move(currentLocationID, 3);

    } else if (document.getElementById("commandBox").value.toLowerCase() == 'search') {

        items(currentLocationID);
        document.getElementById('areaDesc').innerHTML = "Your inventory now contains: " + eliminateDuplicates(inventoryPlace) + " .";


    } else if (document.getElementById("commandBox").value.toLowerCase() == 'help') {

        helpMe();

    } else if (document.getElementById("commandBox").value.toLowerCase() == 'inventory') {
        var playerName = document.getElementById('nameBox').value;
        document.getElementById('areaName').innerHTML = playerName + '\'s' + ' Inventory:';
        document.getElementById('areaDesc').innerHTML = 'Items: ' + eliminateDuplicates(inventoryPlace);

    } else {
        var playerName = document.getElementById('nameBox').value;
        document.getElementById('areaName').innerHTML = ('Error!');
        document.getElementById('areaDesc').innerHTML = ('You have mistyped something, ' + playerName + '. Please refer to "help" for commands');
    }
}


// yet to be implemented (score)
function display() {
    document.getElementById("display").innerHTML = "Score:" + score.points;
}


// functions that blank out input on click and focus
function blank(This) {
    if (This.value == This.defaultValue) This.value = "";
}

function unblank(This) {
    if (This.value == "") This.value = This.defaultValue;
}

function search() {
    items(currentLocationID);
    document.getElementById('areaDesc').innerHTML = "Your torn knapsack now contains: " + eliminateDuplicates(inventoryPlace) + " .";
}

function noGo() {
    var playerName = document.getElementById('nameBox').value;
    alert('You can\'t go that way ' + playerName + '!')

}

// show inventory function for button
function showInv() {
    eliminateDuplicates(inventoryPlace);
    document.getElementById('areaName').innerHTML = "Your torn knapsack contains:";
    document.getElementById('areaDesc').innerHTML = eliminateDuplicates(inventoryPlace);
}

//what happens when you win
function youWin() {

    if (inventoryPlace.indexOf("first_half", "final_half", "boots", "rope", "stone") > -1) { // when you have all the items you win
        changeImage("images/victory.png");
    }
}


function helpMe() {

    var help = {
        name: "Mangled Instructions",
        description: "Are you in trouble? Here's a few tips: Use the command bar to type commands or the directional buttons to navigate the island. Your commands are North, South, East, West, Search, Inventory, and Help."
    };

    document.getElementById('areaName').innerHTML = help.name;
    document.getElementById('areaDesc').innerHTML = help.description;
}