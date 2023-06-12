"use strict"
import mydata from '/data.json' assert{type:'json'};

const booksRes=document.getElementById("books");
for(let data of mydata){
    if(data.read){
        booksRes.innerHTML +=`
        <img src="${data.picture}" alt="bookImg.png">
        <h1>${data.title}</h1>
        <h1>${data.author}</h1>
        <h1>${data.read}</h1>
        `;
    }
    else{
    booksRes.innerHTML +=`
    <img src="${data.picture}" alt="bookImg.png">
    <p>${data.title}</p>
    <p>${data.author}</p>
    <p>${data.read}</p>
    `;}
}