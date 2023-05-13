# TTT Project

# Live link-> https://ttt-wc.netlify.app/

# Libraries used


## axios
axios  is a library for making HTTP requests . I fetch the data from the provided api link with fetch method through axios.

## chart.js
chart.js is a library used for creating interactive maps on web pages. The library provides an API for creating and manipulating maps, markers, and other geographical elements.I used this for showing the pictorial representation of the fetched (sorted) data .

## react-router-dom
It is a library that provides routing capabilities to React applications, allowing developers to navigate between different views and pages in a single-page application (SPA).

## react-csv
react-csv is a library that provides an easy way to generate and download CSV (Comma-Separated Values) files from a React application.


# Code Components 

## Basically whole project is devided among three component 


### Button.jsx

There is a button present here which will route to '/comtent' page on click with the help of react router dom elements (Link,Routes,Route,BrowserRouter) which all are mentioned inside app.js and button.js is acting as home page '/' , neumorphism is applies for the user interface .

### Content.jsx

This component will be render when user will come '/content' page basically what it does it fetches the data from the provided link for assignment with help of fetch method through axios inside useEffect hook then for storing the top 20 words most repeating I am shorting them in descending order then with slice mwethod I took top 20 elements and store them in state which I created with the help of useState and sending that data with the help of probes to Sample.jsx

### Sample.jsx

Inside this component I am using various libraries like chat.js, react-csv . With the help of destructure method I destructured the prob and store them into variable then with the help of chart.js and bar chart from chart.js I implemented a bar graph for showcasing the sorted data of top 20 most repeating words in which labels of chart contains the words from the prob and data contains the counts from the which i destructured it . Then with the help of react-csv I am allowing user to download the csv file of the graphical data by storing data as the prob data and header as the label and key of word and count because this is getting implemented with CSVLink and it takes two things data and header and there is aexport button inside when user will click on it a csv file of histogram data will be downloaded.
