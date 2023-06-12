//Basic ex1

var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

let newSandwiches = JSON.parse(sandwiches);
let newFries = JSON.parse(fries);
document.write(`My favorite sandwich is a ${newSandwiches.sandwich} which has approximately ${newSandwiches.calories}  calories, along with it I enjoy eating ${newFries.fries_size} which have about ${newFries.calories} calories.`)

//Intermediate
var employee = `[{
    "iD": "1",
    "firstname": "Marvin",
    "lastname": "van Dyck",
    "email": "marvin.blub@gmail.com",
    "jobTitle": "Gardener",
    "salary": "0"
},{
    "iD": "2",
    "firstname": "Moritz",
    "lastname": "lalala",
    "email": "moritz.blub@gmail.com",
    "jobTitle": "Animal Trainer",
    "salary": "1000"
},{
    "iD": "3",
    "firstname": "Steffi",
    "lastname": "asdhja",
    "email": "steffi.blub@gmail.com",
    "jobTitle": "Web Designer",
    "salary": "3000"
},{
    "iD": "4",
    "firstname": "Emanuel",
    "lastname": "safjd",
    "email": "emanuel.blub@gmail.com",
    "jobTitle": "Game Developer",
    "salary": "2000"
},{
    "iD": "5",
    "firstname": "Chris",
    "lastname": "safjd",
    "email": "chris.blub@gmail.com",
    "jobTitle": "Engineer",
    "salary": "2000"
},{
    "iD": "6",
    "firstname": "Desi",
    "lastname": "asdds",
    "email": "desi.blub@gmail.com",
    "jobTitle": "asd",
    "salary": "1600"
},{
    "iD": "7",
    "firstname": "Stefan",
    "lastname": "asdas",
    "email": "stefan.blub@gmail.com",
    "jobTitle": "Flirter",
    "salary": "500"
},{
    "iD": "8",
    "firstname": "David",
    "lastname": "asd",
    "email": "david.blub@gmail.com",
    "jobTitle": "Sound Manager",
    "salary": "1000"
},{
    "iD": "9",
    "firstname": "Marco",
    "lastname": "sad",
    "email": "marco.blub@gmail.com",
    "jobTitle": "Gardener",
    "salary": "1800"
},{
    "iD": "10",
    "firstname": "Jacky",
    "lastname": "sdfknj",
    "email": "jacky.blub@gmail.com",
    "jobTitle": "Baker",
    "salary": "1200"
}]`
let newEmployee = JSON.parse(employee);
const tableRes=document.getElementById("mytBody");
for(let emp of newEmployee){
    tableRes.innerHTML +=`
    <tr>
      <th scope="row">${emp.iD}</th>
      <td>${emp.firstname}</td>
      <td>${emp.lastname}</td>
      <td>@${emp.email}</td>
      <td>@${emp.jobTitle}</td>
      <td>@${emp.salary}</td>
    </tr>`;
}