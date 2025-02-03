//http://api.weatherapi.com/v1/current.json?key=2aecac72f7bb4591b42163736250302&q=Colombo&aqi=no



document.addEventListener("DOMContentLoaded", () => {
  // Selecting elements
  const temperatureField = document.querySelector(".temp");
  const locationField = document.querySelector(".time_location p");
  const dateandTimeField = document.querySelector(".time_location span");
  const conditionField = document.querySelector(".condition p");
  const searchField = document.querySelector(".search_area");
  const form = document.querySelector(".form");

  // Ensure all elements exist
  if (
    !temperatureField ||
    !locationField ||
    !dateandTimeField ||
    !conditionField ||
    !searchField ||
    !form
  ) {
    console.error("❌ One or more elements not found! Check your HTML.");
    return;
  }

  // Adding event listener to the form
  form.addEventListener("submit", searchForLocation);

  let target = "Kandy";

  // Fetch weather data
  const fetchResults = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=2aecac72f7bb4591b42163736250302&q=${targetLocation}&aqi=no`; //API url

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);

      // Extracting weather details from API
      let locationName = data.location.name; // getting location
      let time = data.location.localtime; // getting date and time
      let temp = data.current.temp_c; // getting temperature
      let condition = data.current.condition.text; // getting condition

      // Update UI
      updateDetails(temp, locationName, time, condition);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to update UI with fetched data
  function updateDetails(temp, locationName, time, condition) {
    //splitting date and time for get the day
    let splitDate = time.split(" ")[0]; 

    let splitTime = time.split(" ")[1];

    let currentDay = getDayName(new Date(splitDate).getDay());

    temperatureField.innerText = `${temp}°C`;
    locationField.innerText = locationName;
    dateandTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`;
    conditionField.innerText = condition;
  }

  // Function to handle form submission
  function searchForLocation(e) {
    e.preventDefault();
    target = searchField.value.trim();
    if (target) {
      fetchResults(target);
    }
  }

  // Initial fetch for default location
  fetchResults(target);

  // Funtion for assign the Day names to the number get by the getDay function (becuase it only gives the number 0 to 6 for the days)
  function getDayName(number) {
    switch (number) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
    }
  }
});
