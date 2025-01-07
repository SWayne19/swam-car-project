//variable and space concat
const firstname = "Swam";
const lastname = "Paing";
const fullname = firstname + " " + lastname;

// same
const tuunyi = 10;
tuunyi === 10;

// toe (can't const just let)
let numbertoe = 10;
numbertoe += 10;

// 2 htet kane
let doublenumber = 20;
doublenumber ** 2;

// logical operators
// and logical operaters (both mush correct)
const andnum1 = 5;
const andnum2 = 10;

andnum1 > 10 && andnum2 >7;
andnum1 < 6 && andnum2 >8;

// or logical operators (one correct all correct)

const ornum1 = 2;
const ornum2 = 9;

ornum1 < 4 || ornum2 < 4;
ornum1 < 1 || ornum2 > 10;

// Conditional statement
const mytown = "Yangon";
let number = 0;

if (mytown === "Mandalay"){
    alert("Oh you are from Mandalay?")
}else if(mytown === "Ye"){
    alert("Oh you are from Ye?")
}else{
    alert("My man you're guy from Yangon")
}

//switch conditional statement
switch (mytown) {
    case "Naypyitaw":
        number += 2;
        break;
    case "Mandalay":
        number += 10;
        break;
    default :
        number += 50;
}

// object
const man1 = {
    manname : "sayar swam",
    manage : 20,
    manIsMale : true,
}
// add property to the object
    man1.manHaveGirlfriend = true;
    //dynamic value
    man1[totalIncome]=income;

// add method to the object
    man1.manIsWalking = () => {
        alert("Man sayar swam is walking now...")
    }
// dynamic value
const incomeFrom = "GaliveryMyanmar";
const income = "5lakhs";
const totalIncome = "IncomeFrom" + incomeFrom;

// Object in the Object
const sayarswamcar = {
    carBrand : "Mitsubishi",
    carModel : "2020",
    carPrice : "400lakhs",
    carIsDriveing : () => {
        alert ("Car is driving Now...")
    }
}
// Using console.log function (Just Out put )
const myname = "Swam Pyae Paing"
window.console.log(myname)

// Array
const myrank = ["warrior","elite","master","grandmaster","epic","legend","mythic","mythic glory"]

// using property for knowing array length
myrank.length

// accessing array
myrank [1]
myrank [7]
myrank [4]

// adding element into an array (last)
myrank.push("bronze")

// removing element from an array (last)
myrank.pop()

// adding element into an array (first)
myrank.unshift("bronze")

// removing element into an array (first)
myrank.shift ()

// To know the last index element
const index = myrank.length - 1;
myrank[index]

// To remove element at once (first is start point, second is "A yay a twat" first ma pr)
myrank.splice(1,7)

// To know the number of index using element
myrank.indexOf("mythic")

// Object in the Array
myrank.push(sayarswamcar)


// for loop (normal)
for (let i = 0; i < 5; i++){
    window.console.log("Hello World",i)
}

// for looping with using array

const cities = ["Yangon","Mawlanyine","Mandalay","Naypyidaw","Myitkyina"]

for (let i = 0; i < cities.length; i++){
    window.console.log(cities[i])
}

// for loop (sending email)

const company = [
    {custommerName:"Kyaw Kyaw" , Contact:'0912345' , Email:'kyawkyaw123@gmail.com', dateOfBirth:'1.1.2000'},
    {custommerName:"Min Min" , Contact:'0954321' , Email:'minmin456@gmail.com', dateOfBirth:'11.6.2003'},
    {custommerName:"Aye Aye" , Contact:'0945678' , Email:'ayeaye56@gmail.com', dateOfBirth:'6.3.2002'},
    {custommerName:"Nandar" , Contact:'0998887' , Email:'dardar45@gmail.com', dateOfBirth:'1.11.2005'},
    {custommerName:"Soe San" , Contact:'0956789' , Email:'SoeSan12@gmail.com', dateOfBirth:'26.12.2001'},
]

    for (let i = 0; i < company.length; i++){
        let customermail = company[i].Email;
        sendmail(customermail);
    }

const sendmail = (Email) => {
    console.log("Sending email to:",Email)
}

// for in loop

const student = {studentname: "Mg Mg", studentage :20 , studentgrade: "A+",studentnation: "Myanmar"}

for (let studentobj in student){
    window.console.log(studentobj,student[studentobj]);
}

// while loop 

let i = true;
while (i){
    let numbervalue = prompt("Please enter number between 1 and 100");
    const parsedvalue = parseInt(numbervalue,10);
    if (parsedvalue > 1 && parsedvalue < 100){
        window.console.log("Enter Value is",parsedvalue)
        i = false; // exit condition (danger!)
    }
}

// Error handling (try,catch...)

const myfriends = ["Mg Mg","Lin Lin","Dar Dar","Gar Gar"];

const showsidebar = () => {
    for (const i = 0; i < myfriends.length;i++){
        window.console.log(myfriends[i]);
    }
}

const showmiddlepage = () => {
    window.console.log ("This is the middle page");
}

const showmenubar = () => {
    window.console.log ("This is menu my friends")
}

try{
    showsidebar();// add error syntax
}
catch(err){ //error variable delare
    window.console.log("This is error my friends",err); //and use it
}

showmiddlepage();
showmenubar();

















const member1 = {
    membername : "swampyaepaing",
}
member1.age=20
member1.height=165
member1[suSuPoundMotePhoe] = amount

const motephoepaythu = "Ma Thin Swe";
const amount = 100000;
const suSuPoundMotePhoe = "Get From" + motephoepaythu;

const carinfo = {}

