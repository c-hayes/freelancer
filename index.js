// template_soofpy8
// service_o3qlhbk
// key GGimt4Uzyq8T5Zhzn

// advanced JS portfolio 2:00 timestamp
// addressed in Discord JS channel 11/12/22 around 1:30pm


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
      .sendForm(
            'service_o3qlhbk',
            'template_soofpy8',
            event.target,
            'GGimt4Uzyq8T5Zhzn'
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on chayes.editing@ gmail(dot)com"
        );
      });
  }

let isModalOpen = false;
function toggleModal(){
    if (isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}

let contrastLightMode = true;
function toggleContrast(){
    contrastLightMode = !contrastLightMode;
    if(!contrastLightMode){
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}
