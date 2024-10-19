class FashionRetailInventory {
    storehouse;
    location;
    productStock;
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {
        let curObj = this.productStock.find(curEl => curEl.productName == productName && curEl.size == size);
        if (curObj) {
            curObj.quantity += quantity;
            return `You added ${quantity} more pieces of product ${productName} size ${size}`;
        }
        else {
            this.productStock.push({ productName, size, quantity, price });
            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        }
    }

    sendProduct(productName, size) {
        let curObj = this.productStock.find(curEl => curEl.productName == productName && curEl.size == size);
        if (!curObj) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        }
        //possible error
        let indexOf = this.productStock.findIndex(curEl => curEl.productName == productName && curEl.size == size);
        this.productStock.splice(indexOf, 1);
        return `The product ${productName}, size ${size} was successfully removed from the inventory`;
    }

    findProductsBySize(size) {
        let filteredStockArr = this.productStock.filter(curEl => curEl.size == size);
        let resultArr = [];
        if (filteredStockArr.length > 0) {
            for (const curEl of filteredStockArr) {
                resultArr.push(`${curEl.productName}-${curEl.quantity} pieces`);
            }
        }
        else {
            return 'There are no products available in that size';
        }
        return resultArr.join(', ');
    }

    listProducts() {
        if (this.productStock.length == 0) {
            return `${this.storehouse} storehouse is empty`;
        }

        let resultArr = [];
        let sortedArr = this.productStock.sort((a, b) => a.productName.localeCompare(b.productName));
        resultArr.push(`${this.storehouse} storehouse in ${this.location} available products:`);
        for (const curEl of sortedArr) {
            resultArr.push(`${curEl.productName}/Size:${curEl.size}/Quantity:${curEl.quantity}/Price:${curEl.price}$`);
        }
        return resultArr.join('\n');
    }
}

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.sendProduct("T-Shirt", "M"));
console.log(storeHouse.sendProduct("Sweather", "M"));
