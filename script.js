const counts = {
    tops: 14,
    lowers: 17,
    dresses: 22,
    shoes: 7,
    bags: 10,
    glasses: 7,
    necklace: 11,
    earrings: 8,
    hair: 15
};

function loadCategory(category) {

    const container = document.getElementById("itemsContainer");
    container.innerHTML = "";

    let prefix = "";

    if (category === "tops") prefix = "top";
    if (category === "lowers") prefix = "lower";
    if (category === "dresses") prefix = "dress";
    if (category === "shoes") prefix = "shoe";
    if (category === "bags") prefix = "bag";
    if (category === "glasses") prefix = "glass";
    if (category === "necklace") prefix = "necklace";
    if (category === "earrings") prefix = "earring";
    if (category === "hair") prefix = "hair";

    for (let i = 1; i <= counts[category]; i++) {

        const img = document.createElement("img");
        img.src = `images/${category}/${prefix}${i}.png`;
        img.classList.add("item-thumb");

        img.onclick = () => equipItem(category, img.src);
        img.ondblclick = () => removeItem(category);

        container.appendChild(img);
    }
}

function equipItem(category, src) {

    let layerId = "";

    if (category === "tops") layerId = "top";
    if (category === "lowers") layerId = "lower";
    if (category === "dresses") layerId = "dress";
    if (category === "shoes") layerId = "shoes";
    if (category === "bags") layerId = "bag";
    if (category === "glasses") layerId = "glassesLayer";
    if (category === "necklace") layerId = "necklaceLayer";
    if (category === "earrings") layerId = "earringsLayer";
    if (category === "hair") layerId = "hair";

    const layer = document.getElementById(layerId);

    // TOGGLE REMOVE
    if (layer.src === src) {
        layer.src = "";
        updateEquipped();
        return;
    }

    // Dress logic
    if (category === "dresses") {
        document.getElementById("top").src = "";
        document.getElementById("lower").src = "";
    }

    if (category === "tops" || category === "lowers") {
        document.getElementById("dress").src = "";
    }

    layer.src = src;

    updateEquipped();
}

function removeItem(category) {

    if (category === "dresses") {
        document.getElementById("dress").src = "";
    }
    else if (category === "tops") {
        document.getElementById("top").src = "";
    }
    else if (category === "lowers") {
        document.getElementById("lower").src = "";
    }
    else if (category === "bags") {
        document.getElementById("bag").src = "";
    }
    else if (category === "glasses") {
        document.getElementById("glassesLayer").src = "";
    }
    else if (category === "necklace") {
        document.getElementById("necklaceLayer").src = "";
    }
    else if (category === "earrings") {
        document.getElementById("earringsLayer").src = "";
    }
    else if (category === "hair") {
        document.getElementById("hair").src = "";
    }
    else if (category === "shoes") {
        document.getElementById("shoes").src = "";
    }

    updateEquipped();
}

function updateEquipped() {

    const equipped = document.getElementById("equippedList");
    equipped.innerHTML = "";

    const layers = [
        "hair",
        "dress",
        "top",
        "lower",
        "shoes",
        "bag",
        "glassesLayer",
        "necklaceLayer",
        "earringsLayer"
    ];

    layers.forEach(id => {
        const img = document.getElementById(id);
        if (img.src && img.src.includes("images")) {
            const preview = document.createElement("img");
            preview.src = img.src;
            equipped.appendChild(preview);
        }
    });                                                           

}                                                                                     

