const compltetedItems = [
    {
        title: "Rainbow Beanie",
        price: 15.00,
        yarn: 1,
        description: "",
        image: './assests/awana.png'
    },
    {
        title: "Rainbow Beanie",
        price: 15.00,
        yarn: 1,
        description: "",
        image: './assests/awana.png'
    },
    {
        title: "Rainbow Beanie",
        price: 15.00,
        yarn: 1,
        description: "",
        image: './assests/awana.png'
    },
    {
        title: "Rainbow Beanie",
        price: 15.00,
        yarn: 1,
        description: "",
        image: './assests/awana.png'
    },
    {
        title: "Rainbow Beanie",
        price: 15.00,
        yarn: 1,
        description: "",
        image: './assests/awana.png'
    },
];

class CrochetItem {
    constructor(title = "", price = 20.00, yarnId = 0, images = []) {
        this.title = title;
        this.price = price;
        this.yarnId = yarnId;
        this.images = images;
    }
}

function createCardElement(info) {
    let ele = document.createElement('div');
    ele.className = "card col-4";
    ele.style = "width: 18rem;";
    ele.innerHTML = '<img class="card-img-top" src="'+ info.image +'" alt="Card image cap">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">'+ info.title +'</h5>' +
                        '<p class="card-text">'+ info.description + '</p>' +
                        '<a href="#" class="btn btn-primary">$' + info.price + '</a>' +
                    '</div>';
    return ele;
}

function something() {
    let completeItemsDiv = document.getElementById('completeItems');
    
    for(let item of compltetedItems) {
        completeItemsDiv.appendChild(createCardElement(item))
    }

    console.log('somethign');
}
something();