'use strict'

// Team Project & Personal Project Filtering
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category;

    // When the empty space is clicked, the filter is not displayed
    if(filter == null) {
        return;
    }
    handleActivSelection(event.target);
    filterProjects(filter);
});


function handleActivSelection(target) {
    // Reset the Active Menu (⚠ Use . only inside querySelector)
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    event.target.classList.add('category--selected');
}


function filterProjects(filter) {
    // Logic for Filtering Projects
    projects.forEach((project) => {
        if(filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });

    // Animation Effect When the Project Button is Clicked
    projectsContainer.classList.add('anim-out');
    setTimeout(() => {
        projectsContainer.classList.remove('anim-out');
    }, 250);
}
