# TypeScript 

TypeScript extends Javascript with many new functionalities
without comprosing old standards.   
**Every JavaScript-File is also a TypeScript-File**  
With the addition of the many new features, TypeScript 
becomes a more competitive language than JavaScript alone could
ever be. 

It allows **optional type specifications** as well as an **advanced class concept**
and therefore gives JavaScript an extended and more specific object-orientation,
which not only improves readability for developers, but also additonal tools.

Many of typescripts functionalities, like classes, inheritance or anonymus functions, 
have been implemented in the newest JavaScript version, ECMAScript 6.  
Anyway it still holds other extensions to ECMAScript 6.

## What is TypeScript?

TypeScript was developed by Microsoft and first released in October 2012.
By now, every common IDE supports TypeScript-Linting.
Version 1.0 was released in 2014.  
The current version (2.0) was released in 2016 .

Microsoft developed it to support large-scale projects and help with complex
tooling issues.

## TypeScript Features

TypeScript helps with developing websites with more resistance against unexpected inputs
and more variable but safer types.

### Type Specifications

For every variable a **type** can be specified which restricts the values that can be assigned to it.
This does not restrict it on runtime but only while developing.
Examples for this can be found in the main.ts file in the functions 
`greetWarningWrongType1` and `greetWarningWrongType2`.  
These functions violate the types of variables by writing "wrong" data types into
the variables.
When trying to c

### Classes and Interfaces  

Classes and interfaces can be useful to make sure that the format of a complicated variable will be used consistently.
In standard JavaScript, a long, complicated variable with an anonymus function which in turn returns an object with 
the declared attributes, has to be declared.

In Typescript it is as easy as creating a class with attributes and a constructor which can be easily called with `new ClassName`.

### Dependency Injection

When adding predefined classes to another class, the **dependecy injection** helps with easily
defining and creating an object of this class.  
Instead of complicatedly adding identifiers with a static `get parameters()` function to get the injections,
it is possible to simply declare the type and have the import somewhere at the start of the file (like `constructor(student: Student)`).

## Example

To see the "website" in action, open the index.html file.  
All corresponding logic is in the file main.ts or in the main.js file.  
To be able to compile the the project, install all required Node_Modules by opening the command line in the project and
running the command `npm i`. 

As TypeScript cannot be directly used by the website, it has to be compiled to JavaScript.  
To compile the TypeScript-File (.ts) into a JavaScript-File (.js), open the command line in the project folder 
and type `tsc app/main.ts`. This will cause errors (**which is intended**) and shows how the type safety of TypeScript
works.

The app uses the already compiled `main.js`. This file was compiled by force and shows, that - in theory - the not compilable
TypeScript-File still generates valid JavaScript-Code.  
It is just not intended and TypeScript tries to stop those potential errors, because that is what it is for.

## References

[Microsoft takes the wraps off TypeScript (2012)](http://www.zdnet.com/article/microsoft-takes-the-wraps-off-typescript-a-superset-of-javascript/)  
[TypeScript in 5 minutes](http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)  
[TypeScript vs. ECMAScript 6](https://www.joshmorony.com/ionic-2-typescript-vs-ecmascript-6/)