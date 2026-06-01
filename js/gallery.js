let galleryImages = document.querySelectorAll(".gallery-img");
let lastOpenImg;

if(galleryImages) {
    galleryImages.forEach(function(image, index) {
        image.onclick = function() {
            let imgFullUrl = image.src;
            let imgSplitUrl = imgFullUrl.split("/img/gallery/");
            let imgNameUrl = imgSplitUrl[1];

            lastOpenImg = index;

            //img window
            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window")
            container.setAttribute("style", "overflow-y: hidden;");

            //back button
            let PrevBtn = document.createElement("span");
            let PreBtnText = document.createTextNode("arrow_back_ios");
            PrevBtn.appendChild(PreBtnText);
            newImgWindow.appendChild(PrevBtn);
            PrevBtn.setAttribute("class", "material-symbols-outlined change-btn");
            PrevBtn.setAttribute("onclick", "changeImg(0)");
            
            //img
            let newImgTag = document.createElement("img");
            newImgWindow.appendChild(newImgTag);
            newImgTag.setAttribute("src", imgFullUrl);
            newImgTag.setAttribute("id", "curent-img");

            //forward button
            let nextBtn = document.createElement("span");
            let nextBtnText = document.createTextNode("arrow_forward_ios");
            nextBtn.appendChild(nextBtnText);
            newImgWindow.appendChild(nextBtn);
            nextBtn.setAttribute("class", "material-symbols-outlined change-btn");
            nextBtn.setAttribute("onclick", "changeImg(1)");

            //close button
            let closeBtn = document.createElement("span");
            let closeBtnText = document.createTextNode("close");
            closeBtn.appendChild(closeBtnText);
            newImgWindow.appendChild(closeBtn);
            closeBtn.setAttribute("class", "material-symbols-outlined close-btn");
            closeBtn.setAttribute("onclick", "closeImg()");
        }
    });
}

function closeImg() {
    document.querySelector(".img-window").remove();
    document.body.setAttribute("style", "overflow-y: scroll;");
}

function changeImg(changeDir) {
    let newImg = document.querySelector("#curent-img");

    let calcNewImg;
    if (changeDir === 1) {
        calcNewImg = lastOpenImg + 1;
        if(calcNewImg > galleryImages.length - 1){
            calcNewImg = 0;
        }
    }
    else if(changeDir === 0){
        calcNewImg = lastOpenImg - 1;
        if(calcNewImg < 0){
            calcNewImg = galleryImages.length - 1;
        }
    }
    newImg.setAttribute("src", galleryImages[calcNewImg].src);
    newImg.setAttribute("id", "curent-img");

    lastOpenImg = calcNewImg
}

document.addEventListener("keydown", function(event) {
    if (event.code === "ArrowLeft") {
        changeImg(0);
    } else if (event.code === "ArrowRight") {
        changeImg(1);
    }
  });
  
document.addEventListener("keydown", function(event) {
    if (event.code === "Escape") {
        closeImg();
    }
  });