import { cityData } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initial display
  displayCitiesAlphabetically();

  document.getElementById("btnNameReversed").addEventListener("click", () => {
    cityData.reverse(); // Simply reverse the current alphabetical order
    displayTableData(cityData);
    updateTableTitle("Name (Z-A)");
  });

  //dropdown sort options
  document.getElementById("btnNameAsc").addEventListener("click", () => {
    displayCitiesAlphabetically();
    updateTableTitle("Name (A-Z)");
  });
  document.getElementById("btnPopAsc").addEventListener("click", () => {
    window.sortByPopulationASC();
    updateTableTitle("Population (Low to High)");
  });
  document.getElementById("btnPopDesc").addEventListener("click", () => {
    window.sortByPopulationDSC();
    updateTableTitle("Population (High to Low)");
  });
  document.getElementById("btnAgeAsc").addEventListener("click", () => {
    sortByAge(cityData, "asc");
    displayTableData(cityData);
    updateTableTitle("Median Age (Low to High)");
  });
  document.getElementById("btnAgeDesc").addEventListener("click", () => {
    sortByAge(cityData, "desc");
    displayTableData(cityData);
    updateTableTitle("Median Age (High to Low)");
  });
  document.getElementById("btnHouseholdAsc").addEventListener("click", () => {
    cityData.sort((a, b) => a.avg_household_size - b.avg_household_size);
    displayTableData(cityData);
    updateTableTitle("Average Household Size (Low to High)");
  });
  document.getElementById("btnHouseholdDesc").addEventListener("click", () => {
    cityData.sort((a, b) => b.avg_household_size - a.avg_household_size);
    displayTableData(cityData);
    updateTableTitle("Average Household Size (High to Low)");
  });

  updateCopyrightYear();
});

// Get table body
let tbody = document.getElementById("results");
let tableTitle = document.getElementById("tableTitle");

function updateTableTitle(sortType) {
  tableTitle.textContent = `North Carolina Cities by ${sortType}`;
}

function displayTableData(cityData) {
  let trow = "";
  // Create table rows
  cityData.forEach((item) => {
    trow += `<tr>
            <td class="text-center">${item.city}</td>
            <td class="text-center">${item.state_code}</td>
            <td class="text-center">${item.population.toLocaleString(
              "en-US"
            )}</td>
            <td class="text-center">${item.median_age}</td>
            <td class="text-center">${item.avg_household_size}</td>
        </tr>`;
  });
  tbody.innerHTML = trow;
}
function displayCitiesAlphabetically() {
  // Sort cities alphabetically
  sortByName(cityData, "asc");
  displayTableData(cityData);
  updateTableTitle("Name (A-Z)");
}

function sortByPopulation(cityData, sortDir) {
  //numeric sort--anonymous function to compare  two objects//then reverse & compare again
  //positive number, negative number or zero; zero = no action needed
  cityData.sort((a, b) => {
    if (sortDir == "asc") {
      return a.population - b.population; //which one is larger
    } else {
      //descending order
      return b.population - a.population; //which one is larger
    }
  });
}
// Export the functions so they're available globally
window.sortByPopulationASC = function () {
  sortByPopulation(cityData, "asc");
  displayTableData(cityData);
};

window.sortByPopulationDSC = function () {
  sortByPopulation(cityData, "desc");
  displayTableData(cityData);
};

//Sorts array by median age.
function sortByAge(cityData, sortDir) {
  cityData.sort((a, b) => {
    if (sortDir == "asc") {
      return a.median_age - b.median_age;
    } else {
      return b.median_age - a.median_age;
    }
  });
}
//Sort strings
//Sorts array by city name in asc order.
function sortByName(cityData, sortDir) {
  cityData.sort((a, b) => {
    //case sensitive
    let ca = a.city.toLowerCase();
    let cb = b.city.toLowerCase();
    //compare returns =0, -1 || +1
    let compare = 0;
    if (ca > cb) {
      compare = 1;
    } else if (ca < cb) {
      compare = -1;
    }
    return compare;
  });
}
function updateCopyrightYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById("copyrightYear").textContent = currentYear;
}
