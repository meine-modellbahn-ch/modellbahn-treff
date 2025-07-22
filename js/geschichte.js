const main_divs = document.getElementsByClassName('timeline_row');

function observe_div(element, date, content) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                content.style.opacity = 1;
                content.style.transform = "translateY(0px)";
            } else {
                content.style.opacity = 0;
                content.style.transform = "translateY(20px)";
            }
        });
    }, {
        threshold: 0.3
    });
    observer.observe(date);
}


for (let i = 0; i < main_divs.length; i++) {
    const element = main_divs[i];
    const date = element.getElementsByClassName('timeline_date');
    const content = element.getElementsByClassName('timeline_content');
    //------
    observe_div(element, date[0], content[0]);
}