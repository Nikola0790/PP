//'use strict';

// EMPLOYEES and MANAGERS

class Person {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName () {
        return this.name + ' ' + this.surname;
    }
}


class Employee extends Person {
    constructor (name, surname, job, salary) {
        super (name, surname)

        this.job = job;
        this.salary = salary;
    }

    getData () {
        return this.getFullName() + ' salary: ' + this.salary;
    }
    getSalary () {
        return this.salary;
    }
    increaseSalary () {
        return this.salary * 10/100 + this.getSalary();
    }
}


class Developer extends Employee {
    constructor (name, surname, job, salary, specialization) {
        super (name, surname, job, salary)

        this.specialization = specialization;
    }

    getSpec () {
        return this.specialization;
    }
}

var devel = new Developer ('Mika', 'Bulic', 'Frontend developer', 1500, 'CCC');
console.log(devel);
console.log(devel.getFullName());

class Manager extends Employee {
    constructor (name, surname, job, salary, specialization, department) {
        super (name, surname, job, salary, specialization)

        this.department = department;
    }

    getDepartment () {
        return this.department;
    }

    changeDepartment (newDepartment) {
        return this.department = newDepartment;
    }
}

var manager = new Manager ('Nikola', 'Drcalic', 'Front', 2000, 'AAA', 'BBB');
console.log(manager);
console.log(manager.getSalary());
console.log(manager.getFullName());
console.log(manager.increaseSalary());
console.log(manager.getDepartment());
console.log(manager.changeDepartment('QA'));
console.log(manager.getData());




// APP

class App {
    constructor (name, licence, stars) {
        this.name = name;
        this.licence = licence;
        this.stars = stars;
    }
    
    isCClicence () {
        if (this.licence === 'CC') {
            return 'Licence is CC (Creative Commons).'
        } else {
            return 'Licence isn\'t CC.'
        }
    }
    incraseStars () {
        return this.stars += 1;
    }
    showStars () {
        return 'Stars number: ' + this.stars;
    }
}

class WebApp extends App {
    constructor (name, url, tech, licence, stars) {
        super (name, licence, stars) 

        this.url = url;
        this.tech = tech;
        this.licence = licence;
    }

    getData () {
        return 'NAME: ' + this.name + ', URL: ' + this.url + ', TECH: ' + this.technologies + ', LICENCE: ' + this.licence + ', STARS: ' + this.stars;
    }

    reactBased () {
        if (this.tech === 'React') {
            return 'Technologies is REACT.';
        }else {
            return 'Technologies isn\'t React.'
        }
    }

}


class MobileApp extends App {
    constructor (name, platforms, licence, stars) {
        super (name, licence, stars)

        this.platforms = platforms;
    }

    getData () {
        return 'NAME: ' + this.name + ', PLATFORM: ' + this.platforms + ', LICENCE: ' + this.licence + ', STARS: ' + this.stars;
    }

    forAndroid () {
        if (this.platforms === 'Android') {
            return 'Platform is ANDROID.'
        } else {
            return 'Platform isn\'t ANDROID.'
        }
    }
}

web = new WebApp ('APA PA', 'URL12345', 'Angular', 'CC', 4);
console.log(web);
console.log(web.showStars());
console.log(web.reactBased());
console.log(web.getData());

mob = new MobileApp ('Viber', 'Android', 'CC', 5);
console.log(mob);
console.log(mob.getData());
console.log(mob.showStars());
console.log(mob.forAndroid());