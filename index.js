//task1

const greetings = {
    greet: function (hello) {
        return hello + " " + this.firstName + ", " + "Welcome To The Club.";
    }
}
const person1 = {
    firstName: "Tonny"
}
console.log(greetings.greet.call(person1, "Hello"));

//task2
const person = {
    owns: function (car, laptop) {
        return this.firstName + " " + "owns" + " " + car + " " + laptop;
    }
}
const person2 = {
    firstName: "Irakli"
}
console.log(person.owns.call(person1, "Mclaren", "Asus"));
// task3
console.log(person.owns.apply(person2, ["Mclaren", "Asus"]));
// task4
const allSongs = [
    {
        id: 0,
        title: "Scratching The Surface",
        artist: "Quincy Larson",
        duration: "4.25",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3",
    },
    {
        id: 1,
        title: "Can't Stay Down",
        artist: "Quincy Larson",
        duration: "4.15",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3",
    },
    {
        id: 2,
        title: "Still Learning",

        artist: "Quincy Larson",
        duration: "3.51",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3",
    }
];



