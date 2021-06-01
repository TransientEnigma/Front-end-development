menuTogglerControl.addEventListener('click', ev => {
  menu.classList.toggle('hideTogglerControl');
});
contrastImage.addEventListener('click', ev => {
  // hide the brightnessSlider
  brightnessSlider.classList.add('hideBrightnessControl')
  //toggle the contrastSlider
  contrastSlider.classList.toggle('hideContrastControl');
});
brightnessImage.addEventListener('click', ev => {
  // hide the contrastSlider
  contrastSlider.classList.add('hideContrastControl');
  // toggle the brightnessSlider
  brightnessSlider.classList.toggle('hideBrightnessControl');
});
// contrast can be changed
contrastSlider.addEventListener('input', ev => {
  document.documentElement.style.setProperty('--setContrast', `${contrastSlider.value}%`);
});
// brightness control can be used to change brightness of both text and background
brightnessSlider.addEventListener('input', ev => {
  document.documentElement.style.setProperty('--bgBrightness', `${brightnessSlider.value}%`);
  document.documentElement.style.setProperty('--txtBrightness', `${brightnessSlider.value}%`);
})
// need to check if the search button exists on page, as it errors on
if (document.querySelector('#searchButton')) {
  searchButton.addEventListener('click', ev => {
    // get a list of all the sections
    // pick out  sections in main and not  header
    const sections = document.querySelectorAll('main section[data-search]');
    //check it can find the sections
    // console.log(sections);
    //loop through  sections
    sections.forEach(element => {
      //get the search box value
      const searchBoxValue = searchBox.value
      // test it can read the value from searchbox
      // console.log(searchBox.value);
      // if there is searchBox text match in data-search
      if (element.dataset.search.includes(searchBoxValue.toLowerCase())) {
        // lets log  value from dataset we assigned in index.html
        // console.log(`${element.dataset.search} - includes`)
        // make the section visible
        element.classList.remove("hideElement");
      } else {
        // else if it doesnt include then log it
        console.log(`${element.dataset.search} - doesn't include`)
        // make the section invisible
        element.classList.add("hideElement");
      }
    });
  });
}
if (document.querySelector('#searchBox')) {
  searchBox.addEventListener('keydown', ev => {
    if (ev.key == "Enter") {
      searchButton.click();
    }
  });
}
