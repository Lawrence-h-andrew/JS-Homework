// from data.js
var tableData = data;

console.log(data);
var tbody = d3.select("tbody");

// YOUR CODE HERE!
tableData.forEach(function(ufoReport) {

   var row = tbody.append("tr");
   Object.entries(ufoReport).forEach(function([key, value]) {
     // Append a cell to the row for each value
//     // in the ufo report object
     var cell = tbody.append("td");
     cell.text(value);
   });
 });


 // Select the submit button
//var filtertable = d3.select("#filter-btn");
//submit.on("click", function(){

  // Prevent the page from refreshing 
    //d3.event.preventDefault();

  // Select the input element and get the raw HTML node
    //var inputElement = d3.select("#filters");

  // Get the value property of the input element
 // var inputValue = inputElement.property("value");
//see what it returns
  //console.log(inputValue);
  //console.log(datetime);
//filter the UFO data set by date
  //var filteredData = filtertable.filter(filtertable => filtertable.datetime === inputValue);

//show in console what you asked to be filtered
 // console.log(filteredData);
