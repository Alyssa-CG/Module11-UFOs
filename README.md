# UFOs (Unidentified Flying Objects)

## Project Overview

The purpose of this project was to build a dynamic webpage that would display and sort data from UFO sightings between January 1st and 13th 2010. Within the provided JavaScript file, there were 111 recorded sightings of various shapes (disk, circle, triangle etc) in the United States (109 sightings) and Canada (2 sightings).

## Software
* Programs
    * Google Chrome v 83.0.4103.116
    * VS Code v 1.46.1   
    * Bootstrap 4.0.0
    
* Languages
    * Javascript v 1.7 (within Chrome)
    * CSS
    * HTML

## Summary 

We built the code for filtering the table by date of sighting, then later updated it to allow filtering of sightings by Date, City, State, Country and/or Shape of sighting. 

To achieve this update, I kept my buildTable() function and its forEach loop the same, but replaced the previous handleClick() function with a filterTable() function that utilised a variable, filteredData. 

When the button to filter data is clicked, the filterTable() function is run and the filteredData variable is updated by a series of if else statements such that _if_ the condition is entered into the relevant box, the variable would be updated to include only the data that conformed to that condition, _else_ it would remain the same. After considering all the possible filters, the function would pass the filteredData variable through the buildTable() function and the table would be built with the filtered data.

Many bootstrap elements were utilised throughout this module to format the data, including Navigation Bars, Input spaces, Jumbotron etc.

## Recommendations

The data was limited in scope (only two weeks worth) and range (only North American locations) so it would be really interesting to collect more data from a larger time frame, and from around the world for this. 

It would also be worthwhile to clean the data somewhat. Everything was in lower case and there were also some inconsistencies with how data was recorded, such as the cities in Canada, which included the country as well as the city in the city columns.
