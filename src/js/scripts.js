function changeLogoOnLoader() {
	
  const divClasses = ['main-pro', 'main-tec', 'main-sol', 'main-exp', 'main-dir', 'main-gov', 'main-sup'];
  const companyAreas = ['products', 'tech', 'solutions', 'experience', 'directors', 'governance', 'support'];

  const iconContainer = document.querySelector('#load-logo');
  const titleContainer = document.querySelector('#company-area')

  divClasses.map((c, i) => {

    setTimeout(() => {

      iconContainer.classList.remove(divClasses[i-1]);
      iconContainer.classList.add(c);

      titleContainer.innerText = companyAreas[i];

      if(divClasses.length === i+1) document.querySelector('#company-name').classList.add('final');

    }, i * 800);

  })

}

changeLogoOnLoader();