const countiesDropdown = document.querySelector('.footer__countries-select');
const countriesBox = document.querySelector('.footer__countries-dropdown');
const countriesList = document.querySelector('.footer__countries-list');
const currCountry = document.querySelector('.countries-selected');

const countriesItems = document.querySelectorAll('.footer__countries-item');

const toogleCountriesDropdown = () => {
  countriesList.classList.toggle('active');
  countriesBox.classList.toggle('active');
};

countiesDropdown.addEventListener('click', (e) => {
  toogleCountriesDropdown();
});

countriesList.addEventListener('click', (e) => {
  if (countriesList.classList.contains('active')) {
    const newCountry = e.target.textContent;
    const newCountryID = e.target.getAttribute('data-country');
    currCountry.textContent = newCountry;

    countriesItems.forEach((item) => {
      item.classList.remove('hidden');
    })

    e.target.classList.add('hidden');

    currCountry.setAttribute('data-country', newCountryID);

    toogleCountriesDropdown();
  }
});