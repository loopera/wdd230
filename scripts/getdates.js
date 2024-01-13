document.addEventListener('DOMContentLoaded', function () {
    // set the current year
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    //set last modified date
    document.getElementById('lastModified').textContent = document.lastModified;
});