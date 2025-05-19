let scrollButton;

const hiddenProjects = [];

function descDropdown(id) {
    const itemsToToggle = document.getElementById(id).getElementsByTagName("p");
    if(hiddenProjects.includes(id)) {
        for(let i = 0; i < itemsToToggle.length; i++) {
            itemsToToggle[i].style.display = "block";
        }
        removeHiddenProj(id);
    } else {
        for(let i = 0; i < itemsToToggle.length; i++) {
            itemsToToggle[i].style.display = "none";
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