//References
const menuButton = document.querySelector(".button-menu");
const menuList = document.querySelector(".hide");
const gallery = document.querySelector('.gallery');
const popUpImage = document.querySelector('dialog');
const modalImage = document.querySelector('.modal-image');
const modalButton = document.querySelector('.modal-button');

//Function to make the button work!
function menuVisibility() {
    menuList.classList.toggle('hide');
}

//Fixes the resize issue
function handleResize() {
    if (window.innerWidth > 1000){
        menuList.classList.remove('hide');
    } else {
        menuList.classList.add('hide');
    }
}

//Shows the modal
function openModal (e){
    const imageSelected = e.target.closest('img');
    const imageSrc = imageSelected.src;
    const imageAlt = imageSelected.alt;
    const fullImageSrc = imageSrc.split('-')[0] + '-full.jpeg';
    modalImage.src = fullImageSrc;
    modalImage.alt = imageAlt;
    popUpImage.showModal();
}

function closeModal() {
    popUpImage.close();
}

popUpImage.addEventListener('click', (event) => {
  if (event.target === popUpImage) {
    popUpImage.close();
  }
})


//Event listeners
menuButton.addEventListener("click", menuVisibility);
window.addEventListener("resize", handleResize);
//Makes sure it show the menu when it opens directly in a screen that is < 1000px
handleResize();

gallery.addEventListener('click', openModal);
modalButton.addEventListener('click', closeModal);