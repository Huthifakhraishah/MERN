class Ninja {
    constructor(name, health=0, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log("The ninja name" + this.name);
    }

    showStats(){
        this.sayName();
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("strength: " + this.strength);
    }

    drinkSake(){
        this.health += 10;
    }
}
    