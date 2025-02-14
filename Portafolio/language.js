document.addEventListener("DOMContentLoaded", function () {
  const languageSwitch = document.getElementById("language-switch");

  function setLanguage(language) {
    const elementsEs = document.querySelectorAll('.es');
    const elementsEn = document.querySelectorAll('.en');

    if (language === 'en') {
      elementsEs.forEach(element => element.style.display = 'none');
      elementsEn.forEach(element => element.style.display = 'block');
    } else {
      elementsEs.forEach(element => element.style.display = 'block');
      elementsEn.forEach(element => element.style.display = 'none');
    }
  }

  // Set initial language based on switch state
  if (languageSwitch.checked) {
    setLanguage('en');
  } else {
    setLanguage('es');
  }

  // Add event listener to switch
  languageSwitch.addEventListener('change', function () {
    if (this.checked) {
      setLanguage('en');
    } else {
      setLanguage('es');
    }
  });
});