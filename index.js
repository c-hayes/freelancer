// template_bcgz8aw
// service_5krgatp
// key jECY0IM7sQ262RF4z5fh7

// Emailjs.com


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs.sendForm(
            'service_5krgatp',
            'template_bcgz8aw',
            event.target,
            'jECY0IM7sQ262RF4z5fh7'
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact us directly at phconstruction@sbcglobal.net"
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
