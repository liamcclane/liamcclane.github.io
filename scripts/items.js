export const compltetedItems = [
    {
        title: "Rainbow Beanie",
        price: 15.00,
        yarn: 1,
        images: []
    },
];
export class Yarn {
    constructor(id = 0, store = "Micheals", material = "100% cotton", color = ""){
        this.id = id;
        this.store = "Micheals";
        this.material = "100% cotton",
        this.color = "";
    }
}
export class CrochetItem {
    constructor(title = "", price = 20.00, yarnId = 0, images = []) {
        this.title = title;
        this.price = price;
        this.yarnId = yarnId;
        this.images = images;
    }
}