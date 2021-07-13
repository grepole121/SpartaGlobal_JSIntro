// Basic Variables

// var name = "qwe";
// var surname = "asd";
// var age = 111;
//
// console.log(name + " " + surname + " is " + age);

// Functions

// function addNumbers(num1, num2){
//   var result = num1 + num2;
//   return result;
// }
//
// console.log(addNumbers(2,5);
//
//
//
// // Function Exercise
//
// var answer = addNumbers(addNumbers(5,8), addNumbers(addNumbers(2, 9), 2));

// Data Types
window.onload = function(){
    getJokeFromApi();
};

function getJokeFromApi() {
    var count = document.getElementsByClassName("nodes").length + 1;
    var node = document.createElement("tr");
    var innerNode = document.createElement("th");
    var jokeNode = document.createElement("td");
    var categoryNode = document.createElement("td");


    var request = new XMLHttpRequest();
    request.open(
      "GET",
      "https://api.chucknorris.io/jokes/random?category=animal,career,celebrity,dev,fashion,food,history,money,movie,music,political,religion,science,sport,travel",
      false
    );
    request.send(null);
    var parsedResponse = JSON.parse(request.responseText);

    innerNode.scope = "row";
    node.className = "nodes";

    innerNode.textContent = count;
    categoryNode.textContent = parsedResponse['categories'];
    jokeNode.textContent = parsedResponse['value'];

    node.append(innerNode);
    node.append(categoryNode);
    node.append(jokeNode);
    document.getElementById("tdbody").append(node);
}
