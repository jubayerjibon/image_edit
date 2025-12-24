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

const presets = {
    normal: {
        name: "Normal",
        filters: {
            brightness: 100,
            contrast: 100,
            saturation: 100,
            hueRotation: 0,
            blur: 0,
            grayScale: 0,
            sepia: 0,
            opacity: 100,
            invert: 0
        }
    },

    bright: {
        name: "Bright",
        filters: {
            brightness: 120,
            contrast: 105,
            saturation: 110,
            hueRotation: 0,
            blur: 0,
            grayScale: 0,
            sepia: 0,
            opacity: 100,
            invert: 0
        }
    },

    dark: {
        name: "Dark",
        filters: {
            brightness: 80,
            contrast: 120,
            saturation: 90,
            hueRotation: 0,
            blur: 0,
            grayScale: 0,
            sepia: 0,
            opacity: 100,
            invert: 0
        }
    },

    vivid: {
        name: "Vivid",
        filters: {
            brightness: 110,
            contrast: 130,
            saturation: 150,
            hueRotation: 0,
            blur: 0,
            grayScale: 0,
            sepia: 0,
            opacity: 100,
            invert: 0
        }
    },

    warm: {
        name: "Warm",
        filters: {
            brightness: 105,
            contrast: 110,
            saturation: 120,
            hueRotation: 10,
            blur: 0,
            grayScale: 0,
            sepia: 10,
            opacity: 100,
            invert: 0
        }
    },

    cool: {
        name: "Cool",
        filters: {
            brightness: 100,
            contrast: 110,
            saturation: 110,
            hueRotation: 190,
            blur: 0,
            grayScale: 0,
            sepia: 0,
            opacity: 100,
            invert: 0
        }
    },

    grayscale: {
        name: "Grayscale",
        filters: {
            brightness: 100,
            contrast: 120,
            saturation: 0,
            hueRotation: 0,
            blur: 0,
            grayScale: 100,
            sepia: 0,
            opacity: 100,
            invert: 0
        }
    },

    sepiaTone: {
        name: "Sepia",
        filters: {
            brightness: 105,
            contrast: 110,
            saturation: 90,
            hueRotation: 0,
            blur: 0,
            grayScale: 0,
            sepia: 80,
            opacity: 100,
            invert: 0
        }
    },

    faded: {
        name: "Faded",
        filters: {
            brightness: 110,
            contrast: 80,
            saturation: 85,
            hueRotation: 0,
            blur: 1,
            grayScale: 0,
            sepia: 5,
            opacity: 100,
            invert: 0
        }
    },

    vintage: {
        name: "Vintage",
        filters: {
            brightness: 95,
            contrast: 110,
            saturation: 90,
            hueRotation: 15,
            blur: 0,
            grayScale: 10,
            sepia: 40,
            opacity: 100,
            invert: 0
        }
    },

    inverted: {
        name: "Inverted",
        filters: {
            brightness: 100,
            contrast: 100,
            saturation: 100,
            hueRotation: 0,
            blur: 0,
            grayScale: 0,
            sepia: 0,
            opacity: 100,
            invert: 100
        }
    },

    blurSoft: {
        name: "Soft Blur",
        filters: {
            brightness: 105,
            contrast: 95,
            saturation: 100,
            hueRotation: 0,
            blur: 4,
            grayScale: 0,
            sepia: 0,
            opacity: 100,
            invert: 0
        }
    },

    clarendon: {
        name: "Clarendon",
        filters: {
            brightness: 110,
            contrast: 125,
            saturation: 120,
            hueRotation: 0,
            blur: 0,
            grayScale: 0,
            sepia: 0,
            opacity: 100,
            invert: 0
        }
    },

    juno: {
        name: "Juno",
        filters: {
            brightness: 105,
            contrast: 115,
            saturation: 140,
            hueRotation: 350,
            blur: 0,
            grayScale: 0,
            sepia: 5,
            opacity: 100,
            invert: 0
        }
    },

    valencia: {
        name: "Valencia",
        filters: {
            brightness: 108,
            contrast: 105,
            saturation: 110,
            hueRotation: 10,
            blur: 0,
            grayScale: 0,
            sepia: 25,
            opacity: 100,
            invert: 0
        }
    },

    gingham: {
        name: "Gingham",
        filters: {
            brightness: 105,
            contrast: 90,
            saturation: 90,
            hueRotation: 0,
            blur: 0,
            grayScale: 20,
            sepia: 10,
            opacity: 100,
            invert: 0
        }
    },

    lark: {
        name: "Lark",
        filters: {
            brightness: 115,
            contrast: 110,
            saturation: 100,
            hueRotation: 0,
            blur: 0,
            grayScale: 0,
            sepia: 0,
            opacity: 100,
            invert: 0
        }
    },

    moon: {
        name: "Moon",
        filters: {
            brightness: 110,
            contrast: 120,
            saturation: 0,
            hueRotation: 0,
            blur: 0,
            grayScale: 100,
            sepia: 0,
            opacity: 100,
            invert: 0
        }
    },

    reyes: {
        name: "Reyes",
        filters: {
            brightness: 120,
            contrast: 85,
            saturation: 80,
            hueRotation: 0,
            blur: 1,
            grayScale: 0,
            sepia: 15,
            opacity: 100,
            invert: 0
        }
    },

    hudson: {
        name: "Hudson",
        filters: {
            brightness: 105,
            contrast: 120,
            saturation: 90,
            hueRotation: 200,
            blur: 0,
            grayScale: 0,
            sepia: 0,
            opacity: 100,
            invert: 0
        }
    },

    slumber: {
        name: "Slumber",
        filters: {
            brightness: 110,
            contrast: 90,
            saturation: 85,
            hueRotation: 5,
            blur: 1,
            grayScale: 0,
            sepia: 20,
            opacity: 100,
            invert: 0
        }
    },

    aden: {
        name: "Aden",
        filters: {
            brightness: 115,
            contrast: 90,
            saturation: 85,
            hueRotation: 15,
            blur: 0,
            grayScale: 0,
            sepia: 10,
            opacity: 100,
            invert: 0
        }
    },

    softPastel: {
        name: "Soft Pastel",
        filters: {
            brightness: 112,
            contrast: 85,
            saturation: 90,
            hueRotation: 5,
            blur: 1,
            grayScale: 0,
            sepia: 8,
            opacity: 100,
            invert: 0
        }
    },

    moody: {
        name: "Moody",
        filters: {
            brightness: 85,
            contrast: 135,
            saturation: 80,
            hueRotation: 0,
            blur: 0,
            grayScale: 5,
            sepia: 10,
            opacity: 100,
            invert: 0
        }
    },

    cinematic: {
        name: "Cinematic",
        filters: {
            brightness: 90,
            contrast: 140,
            saturation: 85,
            hueRotation: 200,
            blur: 0,
            grayScale: 0,
            sepia: 5,
            opacity: 100,
            invert: 0
        }
    },

    dreamy: {
        name: "Dreamy",
        filters: {
            brightness: 118,
            contrast: 80,
            saturation: 95,
            hueRotation: 0,
            blur: 3,
            grayScale: 0,
            sepia: 10,
            opacity: 100,
            invert: 0
        }
    },

    beige: {
        name: "Beige Aesthetic",
        filters: {
            brightness: 110,
            contrast: 90,
            saturation: 75,
            hueRotation: 10,
            blur: 1,
            grayScale: 0,
            sepia: 20,
            opacity: 100,
            invert: 0
        }
    },

    coffee: {
        name: "Coffee Tone",
        filters: {
            brightness: 95,
            contrast: 120,
            saturation: 90,
            hueRotation: 15,
            blur: 0,
            grayScale: 0,
            sepia: 35,
            opacity: 100,
            invert: 0
        }
    },

    retro: {
        name: "Retro",
        filters: {
            brightness: 105,
            contrast: 110,
            saturation: 85,
            hueRotation: 25,
            blur: 0,
            grayScale: 10,
            sepia: 40,
            opacity: 100,
            invert: 0
        }
    },

    pastelPink: {
        name: "Pastel Pink",
        filters: {
            brightness: 115,
            contrast: 90,
            saturation: 95,
            hueRotation: 340,
            blur: 1,
            grayScale: 0,
            sepia: 5,
            opacity: 100,
            invert: 0
        }
    },

    coldBlue: {
        name: "Cold Blue",
        filters: {
            brightness: 100,
            contrast: 120,
            saturation: 85,
            hueRotation: 210,
            blur: 0,
            grayScale: 0,
            sepia: 0,
            opacity: 100,
            invert: 0
        }
    },

    fadedFilm: {
        name: "Faded Film",
        filters: {
            brightness: 110,
            contrast: 75,
            saturation: 80,
            hueRotation: 5,
            blur: 1,
            grayScale: 5,
            sepia: 20,
            opacity: 100,
            invert: 0
        }
    }
};


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

// preset buttons rander
const presetContainer = document.querySelector(".preset_container");
Object.keys(presets).forEach(presetName => {
    const presetBtn = document.createElement("button");
    presetBtn.classList.add("preset_btn");
    presetBtn.classList.add("btn");
    presetBtn.innerText = presets[presetName].name;
    presetContainer.appendChild(presetBtn);

    // apply events on the preset buttons
    presetBtn.addEventListener("click", ()=>{
        applyPreset(presetName);
        
    });
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



// preset function
function applyPreset(presetKey) {
    if(image == null) return;
    const preset = presets[presetKey].filters;
    Object.keys(filters).forEach(key => {
        filters[key].value = preset[key];
    });
    applyFilter();
    Object.keys(filters).forEach((key)=>{
        const input = document.querySelector(`#${key}`);
        input.value = filters[key].value;
    });
}
