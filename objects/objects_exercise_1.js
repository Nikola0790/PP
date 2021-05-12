/* 1. vCreate an object that represents your favourite coffee. 
Please include coffee name, strength, flavour, milk, sugar, … everything you like!*/

var favouriteCoffee = {

    name: 'cappuccino',
    strength: 'hard',
    milk: 'yes',
    sugar: 'yes',
}

console.log(favouriteCoffee);

// REFACTORING use this. and Constructor Functions *********

function FavouriteCoffee (name, strenght, milk, sugar) {

    this.name = name;
    this.strenght = strenght,
    this.milk = milk,
    this.sugar = sugar
    this.howMuchSugar = function (measure) {
        this.sugar = measure;
    }
}

var coffee = new FavouriteCoffee ('cappuccino', 'strong', 'Yes', 'Yes');
console.log(coffee);
coffee.howMuchSugar('little')
console.log(coffee);


/* 2. Create an object that represents your favourite movie. 
Please include title, actors, director, genre, popularity. */

var favouriteMovie = {

    title: 'The Machinst',
    director: 'Brad Anderson',
    actors: ['Christian Bale', 'Jennifer Jason Leigh', 'Aitana Sánchez-Gijón'],
    genre: 'Drama, Thriller',
    popularity: 'Famous',
}

console.log(favouriteMovie);

// REFACTORING use this. and Constructor Functions *********

function FavouriteMovie (title, director, actors, genre, popular) {

    this.title = title,
    this.director = director,
    this.actors = actors,
    this.genre = genre,
    this.popularity = popular
}

console.log(new FavouriteMovie (
        'The Machinist', 'Brad Anderson', 
        ['Christian Bale', 'Jennifer Jason Leigh', 'Aitana Sánchez-Gijón'], 
        'Drama, Thriller', 'Famous')
    );

/*3. Write a function that creates an object that represents a project. 
Each project is described by: description,  programming language, git repository, 
boolean status that says if the project is in development or not. 
Add a method that prints out the project's repository,  
a method that checks if the project is written in JavaScript as well as a method that 
checks if the project is in development or not. */

function createProject (desc, programmingLanguage, gitRep, booleanStatus) {
    
    var project = {

        description: desc,
        programLanguage: programmingLanguage,
        gitRepository: gitRep,
        projectStatus: function () {
            if (booleanStatus === true) {
                return 'The project is finished.'
            } else {
                return 'The project is in development.'
            }
        },
        writtenLanguage: function () {
            if (project.programLanguage === 'JavaScript') {
                return 'Yes, project is written in ' + project.programLanguage + '.'; 
            } else {
                return 'No, project isn\'t written in JS.';
            }
        }
        
    };

    return project;
}

var project_1 = createProject('Project solve problem with ...', 'JavaScript', 'gitURL', false)
console.log(project_1);
console.log(project_1.projectStatus());
console.log(project_1.writtenLanguage());


/* REFACTORING use this. and Constructor Functions*/

function Project (desc, programmingLanguage, gitRep, booleanStatus) {

    this.description = desc,
    this.programLanguage = programmingLanguage,
    this.gitRep = gitRep,
    this.projectStatus = booleanStatus,
    this.printRepository = function () {
        console.log(this.gitRep);
    },
    this.writtenLanguage = function () {
        if (this.programLanguage === 'JavaScript') {
            return 'Yes, project is written in ' + this.programLanguage + '.'; 
        } else {
            return 'No, project isn\'t written in JS.';
        }
    },
    this.checkProjectDev = function () {
        if (this.projectStatus === true) {
            return 'The project is finished.'
        } else {
            return 'The project is in development.'
        }
    }
}

var project_2 = new Project ('Project solve problem with ...', 'JavaScript', 'gitURL', true);
console.log(project_2);
project_2.printRepository();
console.log(project_2.writtenLanguage());
console.log(project_2.checkProjectDev());

/* 4. Write a function that creates an object that represents a culinary recipe. 
Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 

Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients.
*/ 

function createRecipe (name, cuisine, complex, ingrid, time, instruction) {

    var recipe = {

        name: name,
        typeOfCuisine: cuisine,
        complexity: complex,
        ingridients: ingrid,
        preparingTime: time,
        preparingInstruction: instruction,
        printAllIngridients: function () {
            return recipe.ingridients;
        },
        canBePrepareFor15Min: function () {
            if (recipe.time <= 15) {
                return 'Yes, meal can be prepare for 15 min.'
            } else {
                return 'No, meal can\'t be prepare for 15 min.'
            }
        },
        changeCuisine: function (cuis) {
            return recipe.typeOfCuisine = cuis;
        },
        deleteIngridient: function (ing) {

            var newIngrid = [];

            for (i = 0; i < recipe.ingridients.length; i++) {
                if (recipe.ingridients[i] !== ing) {
                    newIngrid[newIngrid.length] = recipe.ingridients[i];
                }   
            }
            recipe.ingridients = newIngrid;
        }

    };
    return recipe;
}

var beanSoup = createRecipe('Bean soup', 'Serbian', 'Hard', ['Bean', 'Water', 'Salt', 'Carrot', 'Pepper', 'Onion'], 150, 'All ingredients add in sickle and cook');

console.log(beanSoup);
console.log(beanSoup.printAllIngridients());
beanSoup.changeCuisine('France');
beanSoup.deleteIngridient('Pepper');
console.log(beanSoup);
console.log(beanSoup.printAllIngridients());
console.log(beanSoup.canBePrepareFor15Min());

/* REFACTORING use this. and Constructor Functions */

function Recipe (name, cuisine, complex, ingrid, time, instruction) {

    this.name = name,
    this.typeOfCuisine = cuisine,
    this.complexity = complex,
    this.ingridients = ingrid,
    this.preparingTime = time,
    this.preparingInstruction = instruction,
    this.printAllIngridients = function () {
        console.log(this.ingridients);
    },
    this.canBePrepareFor15Min = function () {
        if (this.time <= 15) {
            return 'Yes, meal can be prepare for 15 min.'
        } else {
            return 'No, meal can\'t be prepare for 15 min.'
        }
    },
    this.changeCuisine = function (cuis) {
        this.typeOfCuisine = cuis;
    },
    this.deleteIngridient = function (ing) {

        var newIngrid = [];

        for (i = 0; i < this.ingridients.length; i++) {
            if (this.ingridients[i] !== ing) {
                newIngrid[newIngrid.length] = this.ingridients[i];
            }   
        }
        this.ingridients = newIngrid;
    }
}

var beanSoup = new Recipe ('Bean soup', 'Serbian', 'Hard', ['Bean', 'Water', 'Salt', 'Carrot', 'Pepper', 'Onion'], 150, 'All ingredients add in sickle and cook');

console.log(beanSoup);
beanSoup.printAllIngridients();
beanSoup.changeCuisine ('English');
beanSoup.deleteIngridient('Salt');
console.log(beanSoup);
beanSoup.printAllIngridients();
console.log(beanSoup.canBePrepareFor15Min());