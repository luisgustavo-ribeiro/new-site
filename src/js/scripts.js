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

      if(companyAreas.length === i+1) document.querySelector('#company-name').classList.add('final');

    }, i * 800);

  });

}

changeLogoOnLoader();