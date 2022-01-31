const getCountries = () => {
    console.log("Getting countries");
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";  
    xhr.onload = () => {
        const countries = xhr.response; 
        console.log("Full Countries Data:",countries);
        //---------------------------(a)------------------------------------------
        const AsiaRegionCountriesNames = countries
        .filter((country)=>country.region=='Asia')
        .map((countery)=>countery.name.common);
        console.log("Asia Region Countries Names:",AsiaRegionCountriesNames);       
        //---------------------------(b)-----------------------------------------------
        const Populationless2LcountriesNames = countries
        .filter((country)=>country.population<20_00_00)
        .map((country)=>country.name.common);
        console.log("Population Lessthan 2Lakhs Countries Names:",Populationless2LcountriesNames);
        //----------------------------(c)---------------------------------------------------
       countries.forEach(country => console.log("Country Name:",country.name.common,"Capital Name:",country.capital,"Country Flag:",country.flag));
        //----------------------------(d)---------------------------------------------------
        const TotalpopulationOfCountries = countries
        .map((country)=>country.population)
        .reduce((sum,curr)=>sum+curr,0);
        console.log("Total population Of Countries:",TotalpopulationOfCountries);
        //-----------------------------(e)----------------------------------------------
        const USDollersUsingCountriesNames = countries
        .filter((country)=>country.currencies && country.currencies.USD)
        .map((country)=>country.name.common);
        console.log("USDollers Using Countries Names:",USDollersUsingCountriesNames);
    }

};



 getCountries();
