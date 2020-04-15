//Help obtained from walkthrough by Aladdin Hub on youtube

/**
 * Define Global Variables
 * 
 */
// navigation global variable
const navigation = document.getElementById('navbar__list');
// sections global variable
const sections = document.querySelectorAll('section');

// build the nav

const navBldr = () => {

    let navInt = '';
    // for Each section loop
    sections.forEach(sect => {

        const sectID = sect.id;
        const sectDataNav = sect.dataset.nav;

        navInt += `<li><a class="menu__link" id = section${sectID} href="#${sectID}">${sectDataNav}</a></li>`;

    });
    // add all elements to the navigation
    navigation.innerHTML = navInt;


};

navBldr();

// Add class 'active' to section when near top of viewport

// getting the largest value that's less or equal to the number
const offset = (sect) => {
    return Math.floor(sect.getBoundingClientRect().top);
};

// remove the active class
const killActive = (sect) => {
    const sectID = sect.id;

    sect.classList.remove('your-active-class');
    sect.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
    document.getElementById(`section${sectID}`).classList.remove('active__link');
    document.getElementById(`section${sectID}`).style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};
// adding the active class
const active = (cond, sect) => {
    const sectID = sect.id;

    if(cond){
        console.log(sect.id);
        console.log(document.getElementById("sectionsection1").classList);
        sect.classList.add('your-active-class');
        sect.style.cssText = "background-color: lightBlue;";
        document.getElementById(`section${sectID}`).classList.add('active__link');
        document.getElementById(`section${sectID}`).style.cssText = "background-color: lightBlue;";
    };
};

//implementating the actual function

const sectHighlight = () => {
    sections.forEach(sect => {
        const elemOffset = offset(sect);

        inViewport = () => elemOffset < 400 && elemOffset >= -100;

        killActive(sect);
        active(inViewport(),sect);
    });
};

window.addEventListener('scroll' ,sectHighlight);

// Scroll to anchor ID using scrollTO event

const scroll = () => {

    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0 ; i<sections ; i++){
                sections[i].addEventListener("click",sectionScroll(link));
            }
        });
    });

};

scroll();