// ************************** PROJECTS **************************************
const javascriptGameProjectNo = 10;
const phpTelemetryAppProjectNo = 20;
const initgmaITWebAppProjevtNo = 30
const numberOfProjects = 3;
nextProjectButton.addEventListener('click', toNextProject);

function toNextProject() {
  let currentProjectNo = currentProjectIndicator.textContent;
  if (currentProjectNo < numberOfProjects) {
    currentProjectNo++;
  }
  currentProjectIndicator.textContent = currentProjectNo;
  // as each new project starts at multiple of 10
  // we need to subtract one because the first project starts at 0
  // in the projectSlidesArray
  setSlide(`${(currentProjectNo-1)*10}`);
}
prevProjectButton.addEventListener('click', toPrevProject);

function toPrevProject() {
  let currentProjectNo = currentProjectIndicator.textContent;
  if (currentProjectNo > 1) {
    currentProjectNo--;
  }
  currentProjectIndicator.textContent = currentProjectNo;
  // as each new project starts at multiple of 10
  // we need to subtract one because the first project starts at 0
  // in the projectSlidesArray
  setSlide(`${(currentProjectNo-1)*10}`);
}
// get the section elements with id='slides'
const projectSlidesArray = document.querySelectorAll('#projectSlides section');
//set the first and last slides index values
let first_projectSlide = 0;
let last_projectSlide = projectSlidesArray.length - 1;

function setSlide(projectSlide_number) {
  // slideSection gets section which has'currentSlide' class associated
  let projectSlideSection = document.querySelector('#projectSlides section.currentSlide');
  // it will error if the slide number does not exist in the slides range
  if ((projectSlide_number >= first_projectSlide) && (projectSlide_number <= last_projectSlide)) {
    // remove the class 'current' on currentSlide (all associated sections)
    projectSlideSection.classList.remove('currentSlide');
    // then add the 'current' class to the slide (slide_number)
    // slides.item is an array of the slides
    projectSlidesArray.item(projectSlide_number).classList.add('currentSlide');
  }
  // the displayed slide is always 1 greater than the indexing values
  // used to index the slide in projectSlidesArray, because array index start at 0.
  // we need to use parseInt so it does not concatenate string
  currentSlideIndicator.textContent = parseInt(projectSlide_number) + 1;
}
nextSlideButton.addEventListener('click', nextProjectSlide);

function nextProjectSlide() {
  // as we are getting the value from the currentSlideIndicator, and it is
  // one greater than the index, we need to decrement to get original value
  let chosen_projectSlide = parseInt(currentSlideIndicator.textContent) - 1;
  if (chosen_projectSlide < last_projectSlide) {
    chosen_projectSlide++;
    setSlide(chosen_projectSlide);
  }
  setProjectNo();
}
prevSlideButton.addEventListener('click', prevProjectSlide);

function prevProjectSlide() {
  // as we are getting the value from the currentSlideIndicator, and it is
  // one greater than the index, we need to decrement to get original value
  let chosen_projectSlide = parseInt(currentSlideIndicator.textContent) - 1;
  if (chosen_projectSlide > first_projectSlide) {
    chosen_projectSlide--;
    setSlide(chosen_projectSlide);
  }
  setProjectNo();
}
// there are 10 slides for each project, makes sure project number matches project slide numbers
function setProjectNo() {
  currentProjectIndicator.innerHTML = parseInt((parseInt(currentSlideIndicator.innerHTML) - 1) / 10) + 1;
}
setSlide(first_projectSlide);
