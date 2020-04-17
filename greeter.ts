class Student{
    fullName:string
    constructor(public firstName:string, public middleInital: string, public lastName: string){
        this.fullName = firstName + middleInital + lastName
    }
}

interface Person{
    firstName:string
    lastName:string
}

function greeter(person: Person){
    return "Hello, " + person.firstName + " " + person.lastName
}
let user = new Student("a", "b", "c")

document.body.textContent = greeter(user)