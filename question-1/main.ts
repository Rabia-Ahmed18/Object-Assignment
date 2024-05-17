/*1. Design a type alias named Employee to represent an employee object with properties like 
name (string), department (string), and role (string).
2. Include an optional nested object named contact to hold phone and email information (if 
provided).
3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or 
"Intern".
4. Make the skills property an optional array of strings for listing an employee's skills (if 
any).*/


type Employee={
     name:string;
     department:string;
     role:string;
     contact:{
        phone?:number;
        email?:string;
     };
     employ:"Manager" | "Intern" | "Engineer";
     skills?:string;
     };
     const employee : Employee = {
        name:"rabia",
        department:"giaic",
        role:"student",
        contact:{
            email:"rabia123@gmail.com",
        },
        employ:"Intern"
     }
 
    //  consoling the the property of an object
     console.log(employee.contact , "calling the property of an object");

    //  consoling the whole object with all the properties
     console.log(employee, "calling the whole object here");

