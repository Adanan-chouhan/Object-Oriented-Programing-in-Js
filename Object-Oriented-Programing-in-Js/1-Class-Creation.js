// Basic Class and Object Creation:
// Define a class Book with properties title, author, and year. Create an instance of this class and print the details of the book.

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

// Method Definition:
// Extend the Book class by adding a method getSummary() that returns a string containing the book's title and author. Create an instance and add this method prototype call this method 
Book.prototype.getSummary = function name() {
    console.log(`The book tital is ${this.title}  The book author is ${this.author} Book lonce is Year ${this.year}`);
};
const myData = new Book("Js", "###", 2024);
console.log(myData); // Book { title: 'Js', author: '###', year: 2024 }
myData.getSummary();  // The book tital is Js  The book author is ### Book lonce is Year 2024


// Example 2
class student {
    constructor(name, age, subject) {
        this.studentName = name;
        this.studentAge = age;
        this.studentSubject = subject;
        console.log("this is constructore function");
    }

    // add Method Student Detail in class prototype
    detail() {
        console.log(`Student Name is ${this.studentName} Student Age is ${this.studentAge} Student Subject is ${this.studentSubject}`);
    }
}
// create object student1 in call student class
let student1 = new student("Adnan Chouhan",20,"BCA");
console.log(student1);
student1.detail();

// create object student2 in call student class 
let student2 = new student("moodhaise",24,"Nersing");
console.log(student2);
student2.detail();