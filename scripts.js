let scrollButton;

const hiddenProjects = [];

function descDropdown(id) {
    const itemsToToggle = document.getElementById(id).getElementsByTagName("p");
    const button = document.getElementById(id).getElementsByTagName("button")[0];
    if(hiddenProjects.includes(id)) {
        for(let i = 0; i < itemsToToggle.length; i++) {
            itemsToToggle[i].style.display = "block";
            button.innerHTML = "Hide";
        }
        removeHiddenProj(id);
    } else {
        for(let i = 0; i < itemsToToggle.length; i++) {
            itemsToToggle[i].style.display = "none";
            button.innerHTML = "Show";
        }
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