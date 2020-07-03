// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 (a JS library that produces 
// sophisticated and highly dynamic graphics in an HTML webpage)
var tbody = d3.select("tbody");

function buildTable(data) {
    // this clears the data from the table
    tbody.html(""); 

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
	});
}

function filterTable() {
  // Grab the values from the appropriate filters
  let date = d3.select("#datetime").property("value");
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");

  let filteredData = tableData;
  
  // Check to see if date was entered and filter data using that date.
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }
    else 
      filteredData = filteredData

  if (city){
    filteredData = filteredData.filter(row => row.city === city);
  }
    else 
      filteredData = filteredData

  if (state){
    filteredData = filteredData.filter(row => row.state === state);
  }
    else 
      filteredData = filteredData

  if (country){
    filteredData = filteredData.filter(row => row.country === country);
  }
    else 
      filteredData = filteredData

  if (shape){
    filteredData = filteredData.filter(row => row.shape === shape);
  }
    else 
      filteredData = filteredData

  // If nothing is added, filteredData = tableData, ie all the data
  buildTable(filteredData);
}

// Attach an event to listen for the form button and run the function
d3.selectAll("#filter-btn").on("click", filterTable);

// Build table when page loads
buildTable(tableData);