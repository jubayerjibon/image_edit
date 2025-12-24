let filters = {
    brightness: {
        name: "Brightness",
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    contrast: {
        name: "Contrast",
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    saturation: {
        name: "Saturation",
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    hueRotation: {
        name: "Hue Rotation",
        value: 0,
        min: 0,
        max: 200,
        unit: "deg"
    },
    blur: {
        name: "Blur",
        value: 0,
        min: 0,
        max: 20,
        unit: "px"
    },
    grayScale: {
        name: "Gray Scale",
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    sepia: {
        name: "Sepia",
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    opacity: {
        name: "Opacity",
        value: 100,
        min: 0,
        max: 100,
        unit: "%"
    },
    invert: {
        name: "Invert",
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
}

let resetFilters = structuredClone(filters);
// create element

function createFilterElement(key, name, unit="%", value, min, max) {
    const div = document.createElement("div");
    div.classList.add("filter");

    const p = document.createElement("p");
    p.innerText = name;

    const input = document.createElement("input");
    input.type = "range";
    input.min = min;
    input.max = max;
    input.value = value;
    input.id = key;
    input.name = key;

    div.appendChild(p);
    div.appendChild(input);
    // event on input
    input.addEventListener("input", (e)=>{
        filters[key].value = input.value;
        applyFilter();
        
    });
    
    return div;
}

// iterating the object and rander the filters
const filterContainer = document.querySelector(".filters_container");
Object.keys(filters).forEach((key) => {
    const filterElement = createFilterElement(key, filters[key].name, filters[key].unit, filters[key].value, filters[key].min, filters[key].max);
    filterContainer.appendChild(filterElement);
});


// change event for image selection
const imgInput = document.querySelector("#choose_img");
const placeHolder = document.querySelector(".place_holder");
const imgCanvas = document.querySelector("#image_canvas");
const canvasCtx = imgCanvas.getContext("2d");
let image = null;
imgInput.addEventListener("change", (e)=>{
    if(e.target.files[0] == null) return;
    placeHolder.style.display = "none";
    imgCanvas.style.display = "initial";
    const file = e.target.files[0];
    console.log(file);
    

    const img = new Image();
    img.src = URL.createObjectURL(file); 

    img.onload = () => {
        image = img;
        imgCanvas.width = img.width;
        imgCanvas.height = img.height;
        canvasCtx.drawImage(img, 0, 0);
    };
});

// filter applying function
function applyFilter(){
    if(image == null) return;
    canvasCtx.clearRect(0,0,imgCanvas.width, imgCanvas.height);    
    canvasCtx.filter = `
    brightness(${filters.brightness.value}${filters.brightness.unit})
    contrast(${filters.contrast.value}${filters.contrast.unit})
    saturate(${filters.saturation.value}${filters.saturation.unit})
    hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
    blur(${filters.blur.value}${filters.blur.unit})
    grayscale(${filters.grayScale.value}${filters.grayScale.unit})
    sepia(${filters.sepia.value}${filters.sepia.unit})
    opacity(${filters.opacity.value}${filters.opacity.unit})
    invert(${filters.invert.value}${filters.invert.unit})
    `;
    canvasCtx.drawImage(image, 0, 0);
}

// reseting the canvas
const resetBtn = document.querySelector("#reset_btn");
resetBtn.addEventListener("click", ()=>{
    if(image == null){
        alert("No image in the canvas!");
        return;
    }    
    // alert("filter reset");
    filters = structuredClone(resetFilters);    
    applyFilter();
    Object.keys(filters).forEach((key)=>{
        const input = document.querySelector(`#${key}`);
        input.value = filters[key].value;
    });
    
});


// downloading the file
const downloadBtn = document.querySelector("#download_btn");
downloadBtn.addEventListener("click", ()=>{
    const link = document.createElement("a");
    link.download = "edited-image.png";
    link.href = imgCanvas.toDataURL();
    link.click();
});