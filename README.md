<p align="center">
    <img src="_examples_javascript_beginners/assets/images/javascript_logo_4.png" alt="JavaScript logo" title="JavaScript beginners" width="200" />
</p>
    
JavaScript for Beginners
=====================
JavaScript is a `scripting language of the web` allows you to do Interactivity with User-Events, implement Conditions and Validations, Dynamic updates in a Web Page etc.. In this practical course will learn JavaScript basics-programming fundamentals from scratch. Will start with what is JavaScript? its uses, history, how to write JavaScript etc. Will also cover various programming building blocks like variable, functions, array, conditionals, objects and many more.

### Prerequisites for current course / What you need to know
To move forward with JavaScript you must need basic knowledge of XHTML/HTML. Here, you will learn how easy it is to add interactivity to a web page using JavaScript. But, before we begin, make sure that you have some working knowledge, a general understanding of the Internet and the World Wide Web (WWW) [Web Design Development Foundations-Web Technology Fundamentals](https://github.com/dinanathsj29/web-design-development-fundamentals). Good working knowledge of HyperText Markup Language (HTML) [HTML5 Essentials](https://github.com/dinanathsj29/html5-essentials) and its good to know [CSS3 Fundamentals](https://github.com/dinanathsj29/css3-fundamentals).

Topics include
=====================
1. [Course Introduction](#section-01-course-introduction)
2. [Introducing JavaScript](#section-02-introducing-javascript)
3. [JavaScript Getting Started](#section-03-javascript-getting-started)
4. [JavaScript Language Fundamentals](#section-04-javascript-language-fundamentals)
5. [Variables](#section-05-variables)
6. [Data types](#section-06-data-types)
7. [Operators](#section-07-operators)
8. [Functions](#section-08-functions)
9. [Loops](#section-09-loops)
10. [Conditions](#section-10-conditions)
11. [Array](#section-11-array)
12. [Objects](#section-12-objects)
13. [Events](#section-13-events)
14. [DOM-Document-Object-Model](#section-14-dom-document-object-model)
15. [Whats Next Step?](#section-15-whats-next-step) 

Section 01. Course Introduction
=====================
### 01.01. Welcome
Hi All, I'm **`Dinanath Jayaswal, Senior UI/Web Developer and Adobe Certified Expert Professional`**, I wanna welcome you to JavaScript for Beginners. In this course, I will take you through with the ins and outs of learning JavaScript. This course will help you to learn the fundamentals of programming with JavaScript scripting language, from the basic to advanced topics step-by-step.

### 01.02. Who is this for?
This course is for any Web Designer, Developer who is interested in dynamic Web Design and Development / Web Programming with JavaScript. Anyone who wants to make a career in Web Development or planning on being a front-end developer must learn JavaScript.

Section 02. Introducing JavaScript
=====================
### 02.01. Importance
#### 3 pillars / core Languages/technologies used for Frond End Web Design/Development
1. **HTML (HyperText Markup Language)** - Markup language, Essential Page Structure/Content, Redable and convey structure to user, Text Layout Model, page Mark-up, Text, Tags, Data, details for pages, Images, Tables, Anchor Links, Forms
2. **CSS (Cascading Style Sheet)** - Style Sheet language, Page Design / Presentation / Layouts / Styling / Formattings, look and feel, Creative part of Web Pages
3. **`JavaScript (JS) - Scripting language, Dynamic Page Behaviour, Logics, Conditions and Validations, Events (mouse click, hover), Interactivity with User, Dynamic updates in a Web Page`**

> **Syntax & Example**:
```
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>02.01.javascript.intro.html</title>

    <!-- internal style -->
    <style>
    /* css selector: { property:value; } */
    body {
        font-family: arial;
    }
    </style>

    <!-- internal JavaScript - head section -->
    <script>
    // Write all JavaScript code here
    alert('welcome to JavaScript');

    </script>
  
  </head>

  <body>

    Content

    <!-- internal JavaScript - body section -->
    <script>
        /* Write all JavaScript code here */
        console.log('welcome to JavaScript');
        
    </script>

  </body>

</html>
```

### 02.02. What is JavaScript?
- JavaScript is `1 of the 3 core language/layers` of web...(HTML, CSS & JavaScript)
- JavaScript is one of the most popular, widely used, lightweight scripting programming language
- JavaScript is an `Open Source`, `Cross-Platform`, Browser-based Client Side (user computer) programming language of the web
- JavaScript is a dynamic computer programming language. It is an `interpreted (translated)` programming language with `object-oriented capabilities`
- JavaScript is officially maintained by `ECMA (European Computer Manufacturers Association) as ECMAScript`. ECMAScript 6 (or `ES6`) is the latest major version of the ECMAScript standard
- JavaScript is case sensitive language

> **Note**: Now-a- days with the help of `Node` JavaScript is used for `Back-end (Server side)` API development. JavaScript is not compiled language, but it is a translated language (JavaScript Translator (embedded in the browser engine) is responsible for translating the JavaScript code for the web browser.

Section 03. JavaScript Getting Started
=====================
### 03.01. How to write Javascript? JavaScript in HTML
- The HTML `<script>.....</script>` tag is used to embed/insert/implement a JavaScript programs/code into any part of an HTML document/page
- The `<script>.....</script>` tag specifies that we are using JavaScript
- The `<script>.....</script>` element can be placed in the `<head>`, or `<body>` section of an HTML document
- Each `<script>.....</script>` tag blocks the page rendering process until it has fully downloaded and executed the JavaScript code

> **Note**: JavaScript is the default scripting language in HTML. The old HTML standard attributes like `type="text/javascript"` and `language="javascript"` no longer required in modern browser. 

> **Syntax & Example**: 
```
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>03.01.javascript.script.tag.html</title>

    <!-- internal style -->
    <style>
      /* css selector: { property:value; } */
      body {
        font-family: arial;
      }
    </style>

    <!-- internal JavaScript - head section -->
    <script>
      // Write all JavaScript code here
      alert('welcome to JavaScript');

    </script>
    
</head>

<body>
    
    Content

    <!-- internal JavaScript - body section -->
    <script>
      /* Write all JavaScript code here */
      console.log('welcome to JavaScript');
      document.write('This is dyanamic content. Hello All, Lets write something on web page')
      
    </script>
    
</body>
```

Section 04. JavaScript Language Fundamentals
=====================
### 04.01. Generating Output
- JavaScript does not have any `display or built-in print` functions
- Many times we may need to generate output from your JavaScript code like `see the value of variable`, or `write a message to browser console` to help you `debug an issue` in your running JavaScript code, and so on
- That is why you have to use the JavaScript output function to generating output `(browser window or browser console dialog boxes, writing output into an HTML element, etc.)`
- Using different output methods knowledge will help you while debugging or rewriting your code more conveniently

#### Different ways to show output/display data
1. Writing into an alert box with `alert() or window.alert()`
2. Writing into browser console with `console.log()`
3. Writing into the HTML / Browser Window  with `document.write()`
4. Write into an element of HTML / Inserting Output Inside an HTML Element with `innerHTML`

#### 1. Displaying Output in Alert Dialog Boxes: alert() or window.alert()
- One can use `alert dialog boxes` to display the message or output data to the user 
- An alert dialog box is created using the `alert() or window.alert()` method
- A small pop-up box appears with a closing button to close alert-box
- This method is great for short and rapid informative messages which can be instantly closed

> **Syntax & Example**: 
```
// external js file
// Write all JavaScript code here

alert('I am Dinanath Jayaswal');
window.alert('We are learning JavaScript');
```

Section 05. Variables
=====================
### 05.01. Variable
Variables are one of the most fundamental concepts in JavaScript and other all programming languages.

- A variable is `container to store/hold the data/information`
- A variable is a kind of data holder where we can store some value for programming or calculation purpose
- A JavaScript variable is simply a `name of the storage location (named containers/named storage)` for data
- Variables are symbolic names for values 
- Variables are used to store data of different types like a string of text, numbers, boolean values like true/false, an array of data, etc. 
- The data or value stored in the variables can be set, updated, and retrieved whenever needed
- Variables are declared using the keyword `var` keyword
- The `assignment operator (=)` is used to assign value to a variable, like this: `var varName = value;` or `var firstName = 'JavaScript';`
- **Example**: Variables are like `box or an envelope` which we use to `organize various kinds of stuff` and put a `label` on each box or an envelope
- **Example**: Variable declaration and assignment is just `like Maths & Algebra`: `x = 10`; and in JavaScript we write `var x = 10;`

> **Note**: In ES6 'let' and 'const' keywords are used to defined variables

> **Syntax & Example**: 
```
// variables defined to hold different types of data
var techName = 'JavaScript'; // String literal 
var version = 6; // Number literal
var isDone = true; // Boolean literal

console.log('Learning '+techName+version);
```

Section 06. Data types
===================== 
### 06.01. Data types
A variable in JavaScript can contain `any type of data`. Data types basically specify what `kind of data` can be stored and manipulated within variable in a program. In JavaScript different data types are available to hold different types of values/data. There are `two main categories/types` of data types in JavaScript:
1. Primitive (Primary or Value) data type
2. Non-primitive (Reference or Composite) data type

Section 07. Operators
=====================   
### 07.01. What is the Operator?
- We know/use many operators since our initial school days, they are things like addition +, multiplication *, subtraction -, open close round bracket ( ) or square bracket [ ]
- Operators are symbols/keywords that tell the JavaScript engine to `perform some sort of actions`
- JavaScript operators are symbols that are used to perform operations on operands
- Operators used along with our variables and constants to create
expressions to implement logic and algorithms

> **Note**: Let us take a simple expression `var sum = 1 + 2`;
- Here 1 and 2 are called `operands` and 
- `=` & `+` are called the `operator`
- `= is the assignment` operator, `+ is the arithmetic` operator

**JavaScript supports the following types of operators**:
1. Arithmetic Operators
2. Assignment Operators
3. Logical Operators
4. Comparison (or Relational) Operators
5. Conditional (or ternary) Operators
6. String Operators

Section 08. Functions
=====================
### 08.01. Functions
- A function is basically a `group of statements that perform specific tasks/operations`
- Functions provide a way to `create reusable code packages` which are more portable and easier to debug
- Functions allow a programmer to `divide a big program` into a number of small and manageable functions
- It helps programmers in writing `modular codes`
- The function is a kind of reusable tool where we can write code/functionality to reuse whenever we want (Function allow the code to be called many times without repetition)
- Wrapping up / making smaller chunks of statements / reusable codes together for readability or separation of concern/proper organization is functions – (Grouping of repetitive task)
- In other languages, it might be called `MODULES, SUBROUTINES(SUB-ROUTINES)`
- There are two steps to utilize function: 1. create/define a function with `function` keyword  2. call/invoke a function

> **Note:** Best Practice - First Define function than calling it!

Section 09. Loops
=====================   
- Loops are used to execute the `same block of code again, with a different value, until a certain condition is met`
- Loops can execute a block of code a number of times
- The basic idea behind a loop is to `automate the repetitive tasks within a program to save time and effort`
- It makes the `code compact`
- It is mostly used in array or object (to iterate through series)

#### Different Types of Loops in JavaScript:

1. for Loop
2. while Loop
3. do...while Loop
4. for...in Loop
5. for...of Loop (ES6)

Section 10. Conditions
=====================
- Conditional statements are used to perform different action based on different condition
- Conditional statements allow developer to make correct decisions and perform right actions as per condition
- It helps to perform different actions for different decisions
- We can use conditional operator to check our condition: >, <, >=, <=, ==, !=, ===

#### We can use the following conditional statements in JavaScript to make decisions:
1. If Statement
2. If...else Statement
3. If...else if...else Statement
4. Switch...Case Statement

Section 11. Array
=====================   
### 11.01. Array
- An Array is a special type of variable/object which `consists of / stores multiple values`
- Arrays are complex variables that allow us to store more than one value or a group of values under a single variable name
- Arrays are defined with `square brackets [ ]` and with `new` keyword
- Array items are normally separated with `commas,`
- Arrays are zero-indexed i.e. the first element of an array is at index/position 0
- An array is ordered collection, where we have a 0th, 1st, a 2nd, and so on elements
- Each value (an `element`) in an array has a `numeric position`, known as its `index`, `starts from 0`, so that the first array element is `arr[0]` not arr[1]

#### Different ways to create/define an Array
There are 3 main ways to construct an array:
1. By array literal 
2. By creating an instance of Array directly (using new keyword)
3. By using an Array constructor (using new keyword)

Section 12. Objects
=====================   
### 12.01. Objects

- The object is a `special - complex` data type that allows you to `store collections of data`
- Objects are defined with `curly braces`, The properties of an object are written in pairs (`propertyName: value`)
- An object contains properties, defined as a `key-value pair`
- A property `key (name) is always a string`, but the value which it stores can be any data types, like strings, numbers, booleans, or complex data types like arrays, function and other objects

> **Syntax & Example**: 
```
// empty object
var HumanObj = {};

// object with properties
var TechnologyObj = {'name':'JavaScript', 'version':6, 'type':'script', 'isStable':true}

// object properly alignment/arranged for redability
var Vehicle = {
  'type':'LWM',
  'brand':'Maruti',
  'model':'Balino',
  'color':'White',
  'isHighEndModel':true,
  'price':800000
}
```

> **Syntax & Example**: 
```

```

Section 13. Events
=====================   
### 13.01. Events

> **Syntax & Example**: 
```

```

Section 14. DOM (Document Object Model)
=====================   
### 14.01. DOM (Document Object Model)

> **Syntax & Example**: 
```

```

Section 15. What's Next Step?
=====================
Great Job! Thank You for looking into JavaScript for Beginners. I hope you enjoyed and learned a lot out of it. I think Now you have better understandings of how JavaScript works and functions. To learn more about JavaScript visit [Mozilla JavaScript Reference Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript). Your Next step could be looking into advanced topics of [HTML5](#), [CSS3](#) or [JavaScript](#). For detailed view on JavaScript look into [Advanced JavaScript](#), [JavaScript ES6](#) or [JavaScript Professional Tutorials](#). You may move forward with any famous and popular JavaScript Frameworks or Libraries like jQuery.js, Angular, React.js, NPM, Node.js, Vue.js etc. Best of Luck! Happy Learning! 
