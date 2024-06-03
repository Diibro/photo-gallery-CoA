const galleryPhotoContainers = document.querySelectorAll(".gallery-photo-container");



const addHoverClass = (className, element) => {
     if(element != null){
          element.classList.add(className);
     }
}

const removeHoverClass = (className, element) => {
     if(element != null){
          element.classList.remove(className);
     }
}

galleryPhotoContainers.forEach(container => {
     container.addEventListener("mouseenter", () => addHoverClass("gallery-photo-container-hover", container));
     container.addEventListener("mouseleave", () => removeHoverClass("gallery-photo-container-hover", container));

})

