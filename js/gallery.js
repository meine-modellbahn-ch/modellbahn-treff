
let galleryImages = document.querySelectorAll(".gallery-img");
let lastOpenImg;


// SVG-Pfeile erstellen
function createArrowSvg(direction) {
    const svgNS = "http://www.w3.org/2000/svg";

    let svg = document.createElementNS(svgNS, "svg");

    svg.setAttribute("xmlns", svgNS);
    svg.setAttribute("height", "24px");
    svg.setAttribute("viewBox", "0 -960 960 960");
    svg.setAttribute("width", "24px");
    svg.setAttribute("fill", "#e3e3e3");

    let path = document.createElementNS(svgNS, "path");

    if (direction === "right") {
        path.setAttribute(
            "d",
            "M579-480 285-774q-15-15-14.5-35.5T286-845q15-15 35.5-15t35.5 15l307 308q12 12 18 27t6 30q0 15-6 30t-18 27L356-115q-15 15-35 14.5T286-116q-15-15-15-35.5t15-35.5l293-293Z"
        );
    } else {
        path.setAttribute(
            "d",
            "m142-480 294 294q15 15 14.5 35T435-116q-15 15-35 15t-35-15L57-423q-12-12-18-27t-6-30q0-15 6-30t18-27l308-308q15-15 35.5-14.5T436-844q15 15 15 35t-15 35L142-480Z"
        );
    }

    svg.appendChild(path);

    return svg;
}


// Galerie-Bilder
if (galleryImages.length > 0) {
    galleryImages.forEach(function (image, index) {
        image.onclick = function () {
            let imgFullUrl = image.src;

            lastOpenImg = index;

            // Bildtitel auslesen
            let galleryDiv = image.closest(".gallery-div");

            let galleryTitle = galleryDiv
                ? galleryDiv.querySelector(".gallery-title")
                : null;

            let imgTitle = galleryTitle
                ? galleryTitle.textContent.trim()
                : "";

            // Bildfenster erstellen
            let container = document.body;
            let newImgWindow = document.createElement("div");

            container.appendChild(newImgWindow);

            newImgWindow.setAttribute("class", "img-window");
            container.setAttribute("style", "overflow-y: hidden;");

            // Klick auf Hintergrund schliesst das Bildfenster
            newImgWindow.addEventListener("click", function (event) {
                if (event.target === newImgWindow) {
                    closeImg();
                }
            });

            // Linker Pfeil
            let PrevBtn = document.createElement("span");

            PrevBtn.appendChild(createArrowSvg("left"));
            newImgWindow.appendChild(PrevBtn);

            PrevBtn.setAttribute("class", "change-btn");
            PrevBtn.setAttribute("onclick", "changeImg(0)");

            // Container für Bild und Titel
            let imgWindowContent = document.createElement("div");

            imgWindowContent.setAttribute(
                "class",
                "img-window-content"
            );

            newImgWindow.appendChild(imgWindowContent);

            // Bild
            let newImgTag = document.createElement("img");

            newImgTag.setAttribute("src", imgFullUrl);
            newImgTag.setAttribute("id", "curent-img");

            imgWindowContent.appendChild(newImgTag);

            // Titel unter dem Bild
            if (imgTitle !== "") {
                let newTitleTag = document.createElement("p");

                newTitleTag.setAttribute(
                    "class",
                    "img-window-title"
                );

                newTitleTag.textContent = imgTitle;

                imgWindowContent.appendChild(newTitleTag);
            }

            // Rechter Pfeil
            let nextBtn = document.createElement("span");

            nextBtn.appendChild(createArrowSvg("right"));
            newImgWindow.appendChild(nextBtn);

            nextBtn.setAttribute("class", "change-btn");
            nextBtn.setAttribute("onclick", "changeImg(1)");

            // Schliessen-Button
            let closeBtn = document.createElement("span");
            let closeBtnText = document.createTextNode("close");

            closeBtn.appendChild(closeBtnText);
            newImgWindow.appendChild(closeBtn);

            closeBtn.setAttribute(
                "class",
                "material-symbols-outlined close-btn"
            );

            closeBtn.setAttribute("onclick", "closeImg()");
        };
    });
}


// Bildfenster schliessen
function closeImg() {
    let imgWindow = document.querySelector(".img-window");

    if (imgWindow) {
        imgWindow.remove();
    }

    document.body.setAttribute("style", "overflow-y: scroll;");
}


// Bild wechseln
function changeImg(changeDir) {
    let newImg = document.querySelector("#curent-img");

    // Falls kein Bildfenster geöffnet ist
    if (!newImg) {
        return;
    }

    let calcNewImg;

    if (changeDir === 1) {
        calcNewImg = lastOpenImg + 1;

        if (calcNewImg > galleryImages.length - 1) {
            calcNewImg = 0;
        }
    } else if (changeDir === 0) {
        calcNewImg = lastOpenImg - 1;

        if (calcNewImg < 0) {
            calcNewImg = galleryImages.length - 1;
        }
    }

    // Neues Bild setzen
    newImg.setAttribute(
        "src",
        galleryImages[calcNewImg].src
    );

    // Titel des neuen Bildes auslesen
    let galleryDiv = galleryImages[calcNewImg].closest(".gallery-div");

    let galleryTitle = galleryDiv
        ? galleryDiv.querySelector(".gallery-title")
        : null;

    let newTitle = galleryTitle
        ? galleryTitle.textContent.trim()
        : "";

    let titleElement = document.querySelector(".img-window-title");

    let imgWindowContent = document.querySelector(
        ".img-window-content"
    );

    // Titel aktualisieren oder entfernen
    if (titleElement) {
        if (newTitle !== "") {
            titleElement.textContent = newTitle;
        } else {
            titleElement.remove();
        }
    } else if (newTitle !== "" && imgWindowContent) {
        let newTitleTag = document.createElement("p");

        newTitleTag.setAttribute(
            "class",
            "img-window-title"
        );

        newTitleTag.textContent = newTitle;

        imgWindowContent.appendChild(newTitleTag);
    }

    lastOpenImg = calcNewImg;
}


// Tastatursteuerung
document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowLeft") {
        changeImg(0);
    } else if (event.code === "ArrowRight") {
        changeImg(1);
    }
});


// Escape zum Schliessen
document.addEventListener("keydown", function (event) {
    if (event.code === "Escape") {
        closeImg();
    }
});