const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// fetching data
fetch(endpoint)
  .then(res => res.json())
  .then (data => {
    cities.push(...data) // used const fot cities so use the spread oprerator to pull all values in
  })
  .catch(err => console.log(err));

// Search Function
const findMatches = (wordToMatch, cities) => {
  // here we need to figure out if the city or state matches what was searched
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi') // g means global and searches the whole word. i gives you the ability to search d and D

    return place.city.match(regex) || place.state.match(regex);
  })
}
// Display Function
const displayMatches = (event) => {
  const value = event.target.value;
  const matchedArray = findMatches(value, cities);

  const html =  matchedArray.map(place => {
    // highlights matching words
    const regex =  new RegExp(value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${value}</span>`); // check css for better understanding
    const stateName = place.state.replace(regex, `<span class="hl">${value}</span>`);
    return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${place.population}</span>
    </li>
    `
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

