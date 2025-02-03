//http://api.weatherapi.com/v1/current.json?key=2aecac72f7bb4591b42163736250302&q=Colombo&aqi=no


const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dataField = document.querySelector(".time_location span");
const weatherField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
//const searchButton = document.querySelector(".search_button");
const form = document.querySelector(".search-form");



form.addEventListener("submit", searchForLocation);

let target = 'Kandy'

const fetchResults = async (targetLocation)=>{
    let url = `http://api.weatherapi.com/v1/current.json?key=2aecac72f7bb4591b42163736250302&q=${targetLocation}&aqi=no`;

    /*try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }*/

        
    const res = await fetch(url)

    const data = await res.json()

    console.log(data)

    //getting location name 
    let locationName = data.location.name

    let temp = data.current.temp_c //getting temperture

    let condition = data.current.condition.text // getting condition

};

function searchForLocation(e){
    e.preventDefault()

    target = searchField.value //setting ther search value for the target value

    fetchResults(target) 
}

fetchResults(target)


//2----------
/*document.addEventListener("DOMContentLoaded", () => {
    const temperatureField = document.querySelector(".temp");
    const locationField = document.querySelector(".time_location p");
    const dataField = document.querySelector(".time_location span");
    const weatherField = document.querySelector(".condition p");
    const searchField = document.querySelector(".search_area");
    const form = document.querySelector(".form");

    if (!form) {
        console.error("Form element not found!");
        return;
    }

    form.addEventListener("submit", searchForLocation);

    let target = "Kandy";

    const fetchResults = async (targetLocation) => {
        let url = `http://api.weatherapi.com/v1/current.json?key=2aecac72f7bb4591b42163736250302&q=${targetLocation}&aqi=no`;

        /*try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            const data = await res.json();
            console.log(data);

            // Updating the UI with fetched data
            let locationName = data.location.name;
            let temp = data.current.temp_c;
            let condition = data.current.condition.text;

            locationField.textContent = locationName;
            temperatureField.textContent = `${temp}°C`;
            weatherField.textContent = condition;
        } catch (error) {
            console.error("Error fetching data:", error);
        }*/
        /*    const res = await fetch(url)

            const data = await res.json()
        
            console.log(data)
        
            //getting location name 
            let locationName = data.location.name
        
            let temp = data.current.temp_c //getting temperture
        
            let condition = data.current.condition.text // getting condition
    };

    function searchForLocation(e) {
        e.preventDefault();
        target = searchField.value.trim();
        if (target) {
            fetchResults(target);
        }
    }

    fetchResults(target);
});*/
