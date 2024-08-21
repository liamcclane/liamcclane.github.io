const compltetedItems = [
    {
        title: "Rainbow Beanie",
        price: 15.00,
        yarn: "loopsAndThreadCotton",
        description: "100% Cotton. Fits most.",
        image: './assests/crochet/rainbowBeanie.jpg'
    },
    {
        title: "Belle Bag",
        price: 3.00,
        yarn: "lionBrand247Cotton",
        description: "Cute dice bag. Approx, 6 inches diamater around the bottom, 7.5 inches tall, and 8 inches flatten out. This was made with 100% mercerized cotton. Loosely based off of Animal Crossing's Bell Bags.",
        image: './assests/crochet/bellBag.jpg'
    },
    {
        title: "Yellow Shoulder Clutch",
        price: 7.00,
        yarn: 1,
        description: "Small yellow clutch. Measures 7.5 inches wide X 5 inches tall X strap is 49 inches long. This fits my iPhone 15 and a pack of gum.",
        image: './assests/crochet/yellowSmallClutch.jpg'
    }
];
const yarns = {
    'loopsAndThreadCotton' : "https://www.michaels.com/product/everyday-cotton-yarn-by-loops-threads-10717419",
    'iLoveThisCotton' : "https://www.hobbylobby.com/yarn-needle-art/yarn-tools/yarn/i-love-this-cotton-yarn/p/96066",
    'lionBrand247Cotton': "https://www.lionbrand.com/collections/all-knitting-crochet-yarn/products/24-7-cotton",
};
const alwaysSellingItems = [
    {
        title: "Chicken Coasters",
        price: "20 for 4 chickens",
        yarn: "loopsAndThreadCotton",
        description: "Mix and Match these cute chicken coasters.",
        image: './assests/crochet/multiChickenCosters.jpg'
    },
    {
        title: "Solid Bandannas",
        price: 15.00,
        yarn: "iLoveThisCotton",
        description: "NOT Bananas, but bandannas. Lots of colors to choose from.",
        image: './assests/crochet/solidBandana.jpg'
    },
    {
        title: "Granny Stitch Bandannas",
        price: 15.00,
        yarn: "iLoveThisCotton",
        description: "I like to use I Love This Cotton yarn for these bandannas. Let me know what colors you would like. Very customizable.",
        image: './assests/crochet/grannyBandana.jpg'
    },
    {
        title: "Dotty Dish Cloths",
        price: 10.00,
        yarn: "loopsAndThreadCotton",
        description: "100% Cotton. Cute lil hand wash cloths.",
        image: './assests/crochet/dottyDishCloths.jpg'
    },
    // {
    //     title: "Emotional Support Pickel",
    //     price: 15.00,
    //     yarn: "loopsAndThreadCotton",
    //     description: "A pickel friend who will always be there for you.",
    //     image: './assests/crochet/pickel.jpg'
    // },
    {
        title: "Rainbow Bucket Hat",
        price: 25.00,
        yarn: "loopsAndThreadCotton",
        description: "Hat that fits most. Sprial 6 colored rainbow hat.",
        image: './assests/crochet/rainbowBucketHat.jpg'
    },
];

function createCardElement(info) {
    let ele = document.createElement('div');
    ele.className = "col row justify-content-center m-2";
    // ele.style = "width: auto;";
    ele.innerHTML =`<div class="card pt-2" style="width: 18rem;"><a href="product.html/?${info.title}"><img class="card-img" src="${info.image}" alt="Card image cap"></a>
        <div class="card-body">
            <h5 class="card-title">${info.title}</h5>
            <p class="card-text">${info.description} <br/><a class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="${yarns[info.yarn]}" target="_blank">Yarn Used</a></p>
        </div><div class="card-footer bg-transparent text-end">$ ${info.price}</div></div>`
    return ele;
}

function fillCompletedItems() {
    let completeItemsDiv = document.getElementById('completeItems');
    
    for(let item of compltetedItems) {
        completeItemsDiv.appendChild(createCardElement(item))
    }

}
function fillAlwaysSellingItems() {
    let alwaysSellingItemsDiv = document.getElementById('alwaysSellingItems');
    
    for(let item of alwaysSellingItems) {
        alwaysSellingItemsDiv.appendChild(createCardElement(item))
    }
}

function onLoadFunction() {
    fillCompletedItems();
    fillAlwaysSellingItems();
}
onLoadFunction();