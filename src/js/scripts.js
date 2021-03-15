function changeLogoOnLoader() {
	
  const iconContainer = document.querySelector('#load-logo');
  const titleContainer = document.querySelector('#company-area');

  const companyAreas = ['products', 'directors', 'governance', 'experience', 'solutions', 'support', 'tech'];

  companyAreas.map((c, i) => {

    const area = c.substring(0, 3);

    setTimeout(() => {

      i > 0 ? iconContainer.classList.remove(`main-${companyAreas[i-1].substring(0, 3)}`) : ''
      iconContainer.classList.add(`main-${area}`);

      titleContainer.innerText = companyAreas[i];

      if(companyAreas.length === i+1) {
        document.querySelector('#company-name').classList.add('final');

        setTimeout(() => {
          document.querySelector('#loader').classList.add('closed');
        }, 2000);
      };

    }, i * 800);

  });

}

const filledItemsToGenerate = (gridTotalItems) => {
  Math.floor(Math.random() * (gridTotalItems * 0.08)) + 1
}

const inlineItemsToGenerate = (gridTotalItems) => {
  Math.floor(Math.random() * (gridTotalItems * 0.02)) + 1
}

function populateGrid() {
  const grid = document.querySelector('.square-grid');
  const items = (grid.offsetWidth / 50) * (grid.offsetHeight / 50);
  const squareDiv = `<div class='grid-item'></div>`;

  const numbers = Array(items).fill().map((_, index) => index + 1);
  numbers.sort(() => Math.random() - 0.5);  

  const filledItems = numbers.slice(0, 8);
  const inlineItems = numbers.slice(8, 16);

  Array(items).fill().map((_, index) => {
    grid.insertAdjacentHTML('afterbegin', squareDiv);    
  });

  setTimeout(() => {
    numbers.slice(0, 5).forEach(item => grid.childNodes[item].classList.add('gov-sup'));
    numbers.slice(5, 10).forEach(item => grid.childNodes[item].classList.add('sol'));
    numbers.slice(10, 15).forEach(item => grid.childNodes[item].classList.add('exp'));
    numbers.slice(15, 20).forEach(item => grid.childNodes[item].classList.add('gov-sup', 'filled'));
    numbers.slice(20, 25).forEach(item => grid.childNodes[item].classList.add('sol', 'filled'));
    numbers.slice(25, 30).forEach(item => grid.childNodes[item].classList.add('exp', 'filled'));
  }, 300);
  
}

changeLogoOnLoader();

populateGrid();