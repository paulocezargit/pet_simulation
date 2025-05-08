
var pet_button_eat = document.getElementById("pet_button_eat");
var pet_button_drink = document.getElementById("pet_button_drink");
var pet_button_play = document.getElementById("pet_button_play");
var pet_button_sleep = document.getElementById("pet_button_sleep");
var pet_button_bath = document.getElementById("pet_button_bath");

var pet_value_eat = document.getElementById("pet_value_eat");
var pet_value_drink = document.getElementById("pet_value_drink");
var pet_value_play = document.getElementById("pet_value_play");
var pet_value_sleep = document.getElementById("pet_value_sleep");
var pet_value_bath = document.getElementById("pet_value_bath");

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
    pet_value_eat.innerHTML = 100 + "%";

}

function Drink(){

	thirst = 100;
    pet_value_drink.innerHTML = 100 + "%";

}

function Play(){

	happiness = 100;
	pet_value_play.innerHTML = 100 + "%";

}

function Sleep(){

	sleepiness = 100;
	pet_value_sleep.innerHTML = 100 + "%";

}

function Bath(){

	hygiene = 100;
	pet_value_bath.innerHTML = 100 + "%";

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

	hunger -= 1;
	thirst -= 1;
	happiness -= 1;
	sleepiness -= 1;
	hygiene -= 1;
	mood -= 1;

	pet_value_eat.innerHTML = "" + hunger + "%";
	pet_value_drink.innerHTML = "" + thirst + "%";
	pet_value_play.innerHTML = "" + happiness + "%";
	pet_value_sleep.innerHTML = "" + sleepiness + "%";
	pet_value_bath.innerHTML = "" + hygiene + "%";

	is_alive = true;

}


pet_button_eat.addEventListener("click", function() {

	Eat();

});

pet_button_drink.addEventListener("click", function() {

	Drink();

});

pet_button_play.addEventListener("click", function() {
    
    Play();

});

pet_button_sleep.addEventListener("click", function() {
    
    Sleep();

});

pet_button_bath.addEventListener("click", function() {
    
    Bath();

});


setInterval(TimeCycle, 1000);

Start();