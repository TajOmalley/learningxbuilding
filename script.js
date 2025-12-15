document.addEventListener('DOMContentLoaded', function() {

    // get nav links
    const profileLink = document.querySelector('.profile');
    const passportLink = document.querySelector('.projects');
    const mapLink = document.querySelector('.code');
    const logoLink = document.querySelector('.nav img');

    // get content sections
    const heroContent = document.getElementById('hero-content');
    const profileContent = document.getElementById('profile-content');
    const passportContent = document.getElementById('projects-content');
    const mapContent = document.getElementById('code-content');

    function hideAllSections() {
        heroContent.classList.remove('active');
        profileContent.classList.remove('active');
        projectsContent.classList.remove('active');
        codeContent.classList.remove('active');
    }

    function showSection(section) {
        hideAllSections();
        section.classList.add('active');
    }

    profileLink.addEventListener('click', function () {
        showSection(profileContent);
    });

    projectsLink.addEventListener ('click', function() {
        showSection(passportContent);
    });

    codeLink.addEventListener ('click', function() {
        showSection(mapContent);
    });

    logoLink.addEventListener ('click', function() {
        showSection(heroContent);
    })


})