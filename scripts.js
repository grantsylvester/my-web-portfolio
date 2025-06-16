const hiddenProjects = [];

//Image Gallery Objects

const _switchImages = {
    "numImages" : 4,
    "current" : "img0",
    "img0" : "switch_dock_pcb",
    "img1" : "switch_dock_pcb_cad",
    "img2" : "switch_dock_interior_front_cad",
    "img3" : "switch_dock_LED_demo",
    "title0" : "The Switch dock's internal PCB",
    "title1" : "My 3D Model of the dock PCB",
    "title2" : "3D model of the interior portion of the front of the switch dock",
    "title3" : "NeoPixel LED breadboard setup and demonstration"
}

const _minecraftImages = {
    "numImages" : 4,
    "current" : "img0",
    "img0": "minecraft_DFF",
    "img1": "minecraft_SR",
    "img2": "minecraft_7SD_1",
    "img3": "minecraft_7SD_2",
    "title0" : "My design for the digital flip-flop",
    "title1" : "8 bit register",
    "title2" : "My 7 segment display face",
    "title3" : "7 segment display decoding logic",
};

const _emrickImages = {
    "numImages" : 2,
    "current" : "img0",
    "img0" : "emrick_1",
    "img1" : "emrick_2",
    "title0" : "Close-up shot of the lights on a uniform",
    "title1" : "Photo of the lights on the band at the 2024 Lafayette Christmas Parade"
}

const switchImages = _switchImages;
const minecraftImages = _minecraftImages;
const emrickImages = _emrickImages;

const _imageMaster = {
    //image id : gallery object
    "switchimg" : switchImages,
    "minecraftimg" : minecraftImages,
    "emrickimg" : emrickImages
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
        let nextTitle = "title" + nextNum;
        image.src = `assets/images/${imgObj[next]}.png`;
        image.title = imgObj["title" + nextNum];
        imgObj.current = next;
    } else {
        let next = "img0";
        let nextTitle = "title0";
        image.src = `assets/images/${imgObj[next]}.png`;
        image.title = imgObj["title0"];
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
        image.title = imgObj["title" + nextNum];
        imgObj.current = next;
    } else {
        let next = `img${numImages - 1}`;
        image.src = `assets/images/${imgObj[next]}.png`;
        image.title = imgObj[`title${numImages - 1}`];
        imgObj.current = next;
    }
}

function selectImage(id, dest) {
    let image = document.getElementById(id);
    let imgObj = imageMaster[id];
    image.src = `assets/images/${imgObj[dest]}.png`;
    image.title = imgObj["title" + dest[3]];
    imgObj.current = dest;
}