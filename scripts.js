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
function nextImage(imgid, buttonid) {
    let image = document.getElementById(imgid);
    let imgObj = imageMaster[imgid];
    let numImages = imgObj.numImages;
    let buttons = document.getElementById(buttonid).getElementsByTagName("button"); //array of the buttons
    
    if(imgObj.current != `img${numImages - 1}`) { //no loop back
        //Change Image
        let nextNum = String.fromCharCode(imgObj.current.charCodeAt(3) + 1);
        let next = "img" + nextNum;
        let nextTitle = "title" + nextNum;
        image.src = `assets/images/${imgObj[next]}.png`;
        image.title = imgObj["title" + nextNum];
        imgObj.current = next;

        //Update Button Colors
        buttons[nextNum].style.color = 'black';
        buttons[nextNum - 1].style.color = 'rgb(149, 113, 23)';
    } else { //loop back
        //Change Image
        let next = "img0";
        let nextTitle = "title0";
        image.src = `assets/images/${imgObj[next]}.png`;
        image.title = imgObj["title0"];
        imgObj.current = next;

        //Update Button Colors
        buttons[0].style.color = 'black';
        buttons[numImages - 1].style.color = 'rgb(149, 113, 23)';
    }
}

function prevImage(imgid, buttonid) {
    let image = document.getElementById(imgid);
    let imgObj = imageMaster[imgid];
    let numImages = imgObj.numImages;
    let buttons = document.getElementById(buttonid).getElementsByTagName("button"); //array of the buttons

    if(imgObj.current != "img0") { //no loop back
        //Change Image
        let nextNum = String.fromCharCode(imgObj.current.charCodeAt(3) - 1);
        let next = "img" + nextNum;
        image.src = `assets/images/${imgObj[next]}.png`;
        image.title = imgObj["title" + nextNum];
        imgObj.current = next;

        //Update Button Colors
        buttons[nextNum].style.color = 'black';
        buttons[parseInt(nextNum) + 1].style.color = 'rgb(149, 113, 23)';
    } else { //loop back
        //Change Image
        let next = `img${numImages - 1}`;
        image.src = `assets/images/${imgObj[next]}.png`;
        image.title = imgObj[`title${numImages - 1}`];
        imgObj.current = next;

        //Update Button Colors
        buttons[numImages - 1].style.color = 'black';
        buttons[0].style.color = 'rgb(149, 113, 23)';
    }
}

function selectImage(imgid, buttonid, dest) {
    let image = document.getElementById(imgid);
    let imgObj = imageMaster[imgid];
    let buttons = document.getElementById(buttonid).getElementsByTagName("button"); //array of the buttons

    //Change Image
    image.src = `assets/images/${imgObj[dest]}.png`;
    image.title = imgObj["title" + dest[3]];
    imgObj.current = dest;

    //Update Button Colors
    for(let i = 0; i < imgObj.numImages; i++) { //set all to gold before setting desired button to black
        buttons[i].style.color = 'rgb(149, 113, 23)';
    }
    buttons[dest[3]].style.color = 'black';
}