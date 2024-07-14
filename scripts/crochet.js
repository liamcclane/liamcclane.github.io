const compltetedItems = [
    {
        title: "Rainbow Beanie",
        price: 15.00,
        yarn: 1,
        description: "100% Cotton. Fits most.",
        image: './assests/crochet/rainbowBeanie.jpg'
    },
    {
        title: "Belle Bag",
        price: 3.00,
        yarn: 1,
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

const alwaysSellingItems = [
    {
        title: "Chicken Coaster",
        price: "5 per coaster",
        yarn: 1,
        description: "Mix and Match these cute chicken coasters.",
        image: './assests/crochet/multiChickenCosters.jpg'
    },
    {
        title: "Solid Bandanas",
        price: 15.00,
        yarn: 1,
        description: "NOT Bananas, but bandanas. Lots of colors to choose from.",
        image: './assests/crochet/solidBandana.jpg'
    },
    {
        title: "Granny Stitch Bandanas",
        price: 15.00,
        yarn: 1,
        description: "I like to use I Love This Cotton yarn for these bandanas. Let me know what colors you would like. Very customizable.",
        image: './assests/crochet/grannyBandana.jpg'
    },
    {
        title: "Dotty Dish Cloths",
        price: 10.00,
        yarn: 1,
        description: "100% Cotton. Cute lil hand wash cloths.",
        image: './assests/crochet/dottyDishCloths.jpg'
    },
    {
        title: "Emotional Support Pickel",
        price: 15.00,
        yarn: 1,
        description: "A pickel friend who will always be there for you.",
        image: './assests/crochet/pickel.jpg'
    },
    {
        title: "Rainbow Bucket Hat",
        price: 25.00,
        yarn: 1,
        description: "Hat that fits most. Sprial 6 colored rainbow hat.",
        image: './assests/crochet/rainbowBucketHat.jpg'
    },
];

const customItems = [
    {
        title: "Hedghog",
        price: 30,
        yarn: 1,
        description: "Lil Hedghog made for a friend.",
        image: './assests/crochet/hedghog.jpg'
    },
    {
        title: "Customized Bandana",
        price: 18.00,
        yarn: 1,
        description: "Added a sunflower to the bandan for a friend's birthday gift.",
        image: './assests/crochet/embelishedBandana.jpg'
    },
];

function createCardElement(info) {
    let ele = document.createElement('div');
    ele.className = "card col-4 m-3 pt-2";
    ele.style = "width: 18rem;";
    ele.innerHTML = '<img class="card-img" src="'+ info.image +'" alt="Card image cap">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">'+ info.title +'</h5>' +
                        '<p class="card-text">'+ info.description + '</p>' +
                    '</div><div class="card-footer bg-transparent row justify-content-end">$' + info.price + '</div>';
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
function fillCustomItems() {
    let customItemsDiv = document.getElementById('customItems');
    
    for(let item of customItems) {
        customItemsDiv.appendChild(createCardElement(item))
    }
}

function onLoadFunction() {
    fillCompletedItems();
    fillAlwaysSellingItems();
    fillCustomItems();
}
onLoadFunction();