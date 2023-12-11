document.addEventListener('DOMContentLoaded', function () {
    var mobileMenuButton = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });
});

function scrollToHome() {
    console.log("Clicked on 'Home'");
    var homeSection = document.getElementById("home");

    homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToAbout() {
    console.log("Clicked on 'About'");
    var aboutSection = document.getElementById("about");

    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToProjects() {
    console.log("Clicked on 'Projects'");
    var projectsSection = document.getElementById("projects");

    projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToFooter() {
    console.log("Clicked on 'Contact'");
    var footerSection = document.getElementById("footer");

    footerSection.scrollIntoView({ behavior: "smooth", block: "start" });
}