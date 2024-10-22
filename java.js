//1.print all colors in an array 
let car = [	
    {
        id: 1,
        color: "Red",
        capacity: 7
    },
    {
        id: 2,
        color: "Black",
        capacity: 10
    },
    {
        id: 3,
        color: "Blue",
        capacity: 5
    },
    {
        id: 4,
        color: "White",
        capacity: 4
    }   
];

let colors = [];
for (let i = 0; i < car.length; i++) {
    colors.push(car[i].color);
}

console.log(colors);

//2.filter a capacity greater than 5

let car2 = [	
    {
        id: 1,
        color: "Red",
        capacity: 7
    },
    {
        id: 2,
        color: "Black",
        capacity: 10
    },
    {
        id: 3,
        color: "Blue",
        capacity: 5
    },
    {
        id: 4,
        color: "White",
        capacity: 4
    }   
];

let filteredCars = [];
for (let i = 0; i < car.length; i++) {
    if (car2[i].capacity > 5) {
        filteredCars.push(car2[i]);
    }
}
console.log(filteredCars);

//3.Concat first name and last name in an array
let Name = [
    {
        firstName: "Mike",
        lastName: "Sheriden"
    },
    {
        firstName: "Tim",
        lastName: "Loe"
    },
    {
        firstName: "John",
        lastName: "Carte"
    }
];

let fullNames = [];
for (let i = 0; i < Name.length; i++) {
    fullNames.push(Name[i].firstName + " " + Name[i].lastName);
}

console.log(fullNames);

//4.print  last name in an array

let name = [
    {
        firstName: "Mike",
        lastName: "Sheriden"
    },
    {
        firstName: "Tim",
        lastName: "Loe"
    },
    {
        firstName: "John",
        lastName: "Carte"
    }
];

let lastNames = [];
for (let i = 0; i < name.length; i++) {
    lastNames.push(name[i].lastName);
}

console.log(lastNames);

