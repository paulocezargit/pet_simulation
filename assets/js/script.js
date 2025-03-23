
var name;
var age;
var months;
var days;
var hours;
var minutes;
var hunger;
var thirst;
var happiness;
var sleepiness;
var hygiene;
var mood;

var stage; //"baby", "child", "adult"
var is_alive;

function Start(){

	name = "Nico";
	age = 1;
	months = 1;
	days = 1;
	hours = 1;
	minutes = 1;
	hunger = 100;
	thirst = 100;
	happiness = 100;
	sleepiness = 100;
	hygiene = 100;
	mood = 100;
	stage = "baby";
	is_alive = true;

}

function Eat(){

	hunger = 100;

}

function Drink(){

	thirst = 100;

}

function Play(){

	happiness = 100;

}

function Sleep(){

	sleepiness = 100;

}

function Bath(){

	hygiene = 100;

}

function TimeCycle(){
	
	minutes += 1;

	if(minutes > 60){

		minutes = 0;
		hours += 1;
	}

	if(hours > 24){

		hours = 0;
		days += 1;

	}

	if(days > 30){

		days = 0;
		months += 1;

	}

	if(months > 12){

		months = 1;
		age += 1;

	}


	if(minutes > 60){

		hunger -= 1;
		thirst -= 1;
		happiness -= 1;
		sleepiness -= 1;
		hygiene -= 1;
		mood -= 1;

	}
    
	
	is_alive -= true;

}


Start();