class Student {
    constructor (name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
};

class Bootcamp {
    constructor (name, level, students = [1]) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent (student) {
        //.length allows filter to go through the # of students in the array, not intuitive! 
        if (this.students.filter(s => s.email === student.email).length) {
            console.log(`The student with ${student.email} is already registered. `);
        } else {
            this.students.push(student);
            console.log(`registering ${student.email} to the bootcamp ${this.name}. `);
        }
        return this.students;
    }
};