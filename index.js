const shareBtn = document.querySelector(".share-icon");
const shareBtnMobile = document.querySelector(".share-icon-mobile");
const shareContainer = document.querySelector(".share-container");
const shareContainerMobile = document.querySelector(".share-container-mobile");

shareBtn.addEventListener("click", ()=> {
    if(shareContainer.classList.contains("hidden")) {
        shareContainer.classList.remove("hidden");
        shareBtn.classList.add("share-icon-open");
    } else {
        shareContainer.classList.add("hidden");
        shareBtn.classList.remove("share-icon-open");

    }

})

shareBtn.addEventListener("click", ()=> {
    if(shareContainerMobile.classList.contains("hidden")) {
        shareContainerMobile.classList.remove("hidden");
        shareBtn.classList.remove("share-icon-open");
    } else {
        shareContainerMobile.classList.add("hidden");
    }
})

shareBtnMobile.addEventListener("click", ()=> {
    if(shareContainerMobile.classList.contains("hidden")) {
        shareContainerMobile.classList.remove("hidden");
    } else {
        shareContainerMobile.classList.add("hidden");
    }

})