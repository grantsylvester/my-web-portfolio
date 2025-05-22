const hiddenProjects = [];

//Image Gallery Objects

const _minecraftImages = {
    "numImages" : 4,
    "current" : "img0",
    "img0": "minecraft_DFF",
    "img1": "minecraft_SR",
    "img2": "minecraft_7SD_1",
    "img3": "minecraft_7SD_2"
};

const minecraftImages = _minecraftImages;

const _imageMaster = {
    //image id : gallery object
    "minecraftimg" : minecraftImages
};

const imageMaster = _imageMaster;

//Dropdowns
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

//Scroll Button
function topFunction() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

//Image Galleries
function nextImage(id) {
    let image = document.getElementById(id);
    let imgObj = imageMaster[id];
    let numImages = imgObj.numImages;
    if(imgObj.current != `img${numImages - 1}`) {
        let nextNum = String.fromCharCode(imgObj.current.charCodeAt(3) + 1);
        let next = "img" + nextNum;
        image.src = `assets/images/${imgObj[next]}.png`;
        imgObj.current = next;
    } else {
        let next = "img0";
        image.src = `assets/images/${imgObj[next]}.png`;
        imgObj.current = next;
    }
}

function prevImage(id) {
    let image = document.getElementById(id);
    let imgObj = imageMaster[id];
    let numImages = imgObj.numImages;
    if(imgObj.current != "img0") {
        let nextNum = String.fromCharCode(imgObj.current.charCodeAt(3) - 1);
        let next = "img" + nextNum;
        image.src = `assets/images/${imgObj[next]}.png`;
        imgObj.current = next;
    } else {
        let next = `img${numImages - 1}`;
        image.src = `assets/images/${imgObj[next]}.png`;
        imgObj.current = next;
    }
}

function selectImage(id, dest) {
    let image = document.getElementById(id);
    let imgObj = imageMaster[id];
    image.src = `assets/images/${imgObj[dest]}.png`;
    imgObj.current = dest;
}