/* 1. vCreate an object that represents your favourite coffee. 
Please include coffee name, strength, flavour, milk, sugar, … everything you like!*/

var favouriteCoffe = {

    name: 'cappuccino',
    strength: 'hard',
    milk: 'yes',
    sugar: 'yes',
}

console.log(favouriteCoffe);
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

/*3. Write a function that creates an object that represents a project. 
Each project is described by: description,  programming language, git repository, 
boolean status that says if the project is in development or not. 
Add a method that prints out the project's repository,  
a method that checks if the project is written in JavaScript as well as a method that 
checks if the project is in development or not. */

var createProject = function (desc, programmingLanguage, gitRep, booleanStatus) {
    
    var project = {

        description: desc,
        programLanguage: (function () {
                            if (programmingLanguage === 'Java Script') {
                                return 'Yes, project is written in ' + programmingLanguage + '.'; 
                            } else {
                                return 'No, project is not written in JS.';
                            }
                        })(),
        gitRepository: gitRep,
        projectStatus: (function () {
                        if (booleanStatus === true) {
                            return 'The project is finished.'
                        } else {
                            return 'The project is in development.'
                        }
                    })(),
    };

    return project;
}

console.log(createProject('Project solve problem with ...', 'Java Script', 'BBBBB', false));

/* 4. Write a function that creates an object that represents a culinary recipe. 
Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 

Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients.
*/ 

function createRecipe (name, cuisine, complex, ingrid, time, instruction, cuisine_change, ingridForDel) {

    var recipe = {

        name: name,
        typeOfCuisine: (function () {
            if (typeof cuisine_change === 'string') {
                return cuisine_change;
            } else {
                return cuisine;
            }
        })(),
        complexity: complex,
        ingridients: (function () {
            if (typeof ingridForDel === 'string') {
                var newIngrid = [];
                for (i = 0; i < ingrid.length; i++) {
                    if (i !== ingrid.indexOf(ingridForDel)) {
                        newIngrid[newIngrid.length] = ingrid[i];
                    }
                }
                return newIngrid; 
            } else {
                return ingrid;
            }
        })(),
        preparingTime: (function () {
            if (time <= 15) {
                return 'Meal can be prepared for 15 min.'
            } else {
                return 'Meal can\'t be prepared for 15 min. Need more time.'
            }
        })(),
        preparingInstruction: instruction,

    };

    return recipe;
}

console.log(createRecipe ('Bean soup', 'Serbian', 4, ['Bean', 'Water', 'Salt', 'Carrot', 'Pepper', 'Onion'], 150, 'All ingredients add in sickle and cook', 'Domestic', 'Pepper'));