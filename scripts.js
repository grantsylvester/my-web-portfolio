let scrollButton;

const hiddenProjects = [];

function descDropdown(id) {
    const itemToToggle = document.getElementById(id).getElementsByClassName("projentrycontent")[0];
    const button = document.getElementById(id).getElementsByTagName("button")[0];
    if(hiddenProjects.includes(id)) {
        itemToToggle.style.display = "block";
        button.innerHTML = "Hide";
        removeHiddenProj(id);
    } else {
        itemToToggle.style.display = "none";
        button.innerHTML = "Show";
        hiddenProjects.push(id);
    }
}

function removeHiddenProj(id) {
    let ind = hiddenProjects.indexOf(id);
    hiddenProjects.splice(ind, 1);
}

function topFunction() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}