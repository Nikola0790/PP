'use strict';

// 1) EMPLOYEES and MANAGERS


// PART 1 PERSON *******************************************************
function Person (name, surname) {
    this.name = name;
    this.surname = surname;
}
Person.prototype.getFullName = function () {
    return this.name + ' ' + this.surname;
}



// PART 2 EMPLOYEE *******************************************************
function Employee (name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}
Employee.prototype = Object.create (Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.getData = function () {
    return this.getFullName() + ' salary: ' + this.getSalary();
}
Employee.prototype.getSalary = function () {
    return this.salary;
}
Employee.prototype.increaseSalary = function () {
    return this.salary * 10 /100 + this.getSalary();
}


var employee = new Employee('Mitar', 'Mitrovic', 'Frontend developer', 1500)



// PART 3 DEVELOPER *******************************************************
function Developer (name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}
Developer.prototype = Object.create (Employee.prototype);
Developer.prototype.constructor = Developer;
Developer.prototype.getSpecialization = function () {
    return this.specialization;
};

var dev = new Developer ('Mika', 'Zikic', 'Backend developer', 2500, 'Angular');
console.log(dev.getData());


// PART 4 MANAGER *******************************************************
function Manager (name, surname, job, salary, department) {
    Employee.call (this, name, surname, job, salary);
    this.department = department;
}
Manager.prototype = Object.create (Employee.prototype);
Manager.prototype.constructor = Manager;
Manager.prototype.getDepartment = function () {
    return this.department;
};
Manager.prototype.changeDepartment = function (newDepartment) {
    return this.department = newDepartment;
};

var manager = new Manager ('Zivan', 'Raosavljevic', 'Project manager', 4000, 'QA');
var newDepartment = manager.changeDepartment('OP')
console.log(manager);
console.log(manager.department);
console.log(manager.getSalary());
console.log(manager.getData());
console.log(manager.increaseSalary());




/* ***************************************************************************************************************************** */

// 2) APPLICATIONS

// APP

function App (name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

App.prototype.isCCLicence = function () {
    var cc = this.licence === 'CC';
    if (cc === true) {
        return 'Licence is CC (Creative Commons).'
    } else {
        return 'Licence isn\'t CC.'
    }
}
App.prototype.increaseStars = function () {
    this.stars += 1;
}
App.prototype.showStars = function () {
    return 'Stars number: ' + this.stars;
}

// WEBAPP

function WebApp (name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars)
    this.url = url;
    this.technologies = technologies;
}

WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;
WebApp.prototype.getData = function () {
    return 'NAME: ' + this.name + ', URL: ' + this.url + ', TECH: ' + this.technologies + ', LICENCE: ' + this.licence + ', STARS: ' + this.stars;
};
WebApp.prototype.reactBased = function () {
    var tech = this.technologies === 'React';
    if (tech === true) {
        return 'Technologies is REACT.';
    }else {
        return 'Technologies isn\'t React.'
    }
};

var webapp = new WebApp ('Skype', 'url111', 'React', 'CC', 3);
console.log(webapp);
//webapp.increaseStars();
console.log(webapp.getData());
console.log(webapp.isCCLicence());
console.log(webapp.reactBased());
console.log(webapp.showStars());

// MOBILEAPP

function MobileApp (name, platforms, licence, stars) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;
}

MobileApp.prototype = Object.create (App.prototype);
MobileApp.prototype.constructor = MobileApp;
MobileApp.prototype.getData = function () {
    return 'Name: ' + this.name + ', Platform: ' + this.platforms + ', Licence: ' + this.licence + ', Stars: ' + this.stars;
};
MobileApp.prototype.forAndroid = function () {
    var plat = this.platforms === 'Android';
    if (plat === true) {
        return 'Platform is ANDROID.'
    } else {
        return 'Platform isn\'t ANDROID.'
    }
};

var mobapp = new MobileApp ('Store', 'Android', 'AA', 4);
console.log(mobapp);
mobapp.increaseStars();
console.log(mobapp.getData());
console.log(mobapp.forAndroid());
console.log(mobapp.isCCLicence());
console.log(mobapp.showStars());

// ***************************************************************

