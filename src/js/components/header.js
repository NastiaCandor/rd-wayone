const countiesDropdown = document.querySelector('.header__countries-select');
const countriesBox = document.querySelector('.header__countries-dropdown');
const countriesList = document.querySelector('.header__countries-list');
const currCountry = document.querySelector('.countries-selected');

const countriesItems = document.querySelectorAll('.header__countries-item');
const telItems = document.querySelectorAll('.header__link-tel');

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
    });
    telItems.forEach((tel) => {
      tel.classList.add('hidden');
      if (tel.getAttribute('data-country') == newCountryID) {
        tel.classList.remove('hidden');
      }
    });

    e.target.classList.add('hidden');

    currCountry.setAttribute('data-country', newCountryID);

    toogleCountriesDropdown();
  }
});

const catalogItems = document.querySelectorAll('.catalog__drop-item');
const secondDropCatalogMenus = document.querySelectorAll('.catalog__drop-second');
const hideSecondDropMenus = () => {
  secondDropCatalogMenus.forEach((item, ind) => {
    catalogItems[ind].classList.remove('active');
    item.classList.remove('visible');
  });
}
catalogItems.forEach((item, ind) => {
  item.addEventListener('mouseover', () => {
    if (!secondDropCatalogMenus[ind]) return;
    hideSecondDropMenus();
    item.classList.add('active');
    secondDropCatalogMenus[ind].classList.add('visible');
  });
});

// mobile burger catalog dropdown
const mobileCatalogItems = document.querySelectorAll('.catalog__drop-link-mobile');
const closeAllMobileCatalog = () => {
  mobileCatalogItems.forEach((item) => {
    item.classList.remove('active');
  });
}
mobileCatalogItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.toggle('active');
    } else {
      closeAllMobileCatalog();
      item.classList.add('active');
    }
  });
});