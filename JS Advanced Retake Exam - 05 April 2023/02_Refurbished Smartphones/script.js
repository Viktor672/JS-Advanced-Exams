class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartPhones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if (model == '' || storage < 0 || !Number.isInteger(storage) || price < 0 || condition == '') {
            throw new Error('Invalid smartphone!');
        }

        this.availableSmartPhones.push({ model, storage, price, condition });
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }
    sellSmartphone(model, desiredStorage) {
        let curObj = this.availableSmartPhones.find(curEl => curEl.model == model);
        if (!curObj) {
            throw new Error(`${model} was not found!`);
        }

        if (curObj.storage < desiredStorage && Math.abs(curObj.storage - desiredStorage) <= 128) {
            curObj.price -= curObj.price * 0.1;
        }
        else if (curObj.storage < desiredStorage && Math.abs(curObj.storage - desiredStorage) > 128) {
            curObj.price -= curObj.price * 0.2;
        }

        this.soldSmartphones.push({ model: curObj.model, storage: curObj.storage, price: curObj.price });
        let indexOf = this.availableSmartPhones.findIndex(curEl => curEl.model == model);
        this.availableSmartPhones.splice(indexOf, 1);

        this.revenue += curObj.price;
        return `${model} was sold for ${curObj.price.toFixed(2)}$`;
    }

    upgradePhones() {
        let resultArr = [];
        resultArr.push('Upgraded Smartphones:');
        if (this.availableSmartPhones.length <= 0) {
            throw new Error(`There are no available smartphones!`);
        }

        for (const curObj of this.availableSmartPhones) {
            curObj.storage *= 2;
            resultArr.push(`${curObj.model} / ${curObj.storage} GB / ${curObj.condition} condition / ${curObj.price.toFixed(2)}$`);
        }
        return resultArr.join('\n');
    }

    salesJournal(criteria) {
        if (criteria == 'storage') {
            this.soldSmartphones.sort((a, b) => b.storage - a.storage);
        }
        else if (criteria == 'model') {
            this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
        }
        else {
            throw new Error('Invalid criteria!');
        }
        let resultArr = [];
        resultArr.push(`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`);
        resultArr.push(`${this.soldSmartphones.length} smartphones sold:`);
        if (this.soldSmartphones.length > 0) {
            for (const curObj of this.soldSmartphones) {
                resultArr.push(`${curObj.model} / ${curObj.storage} GB / ${curObj.price.toFixed(2)}$`);
            }
        }
        return resultArr.join('\n');
    }
}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));
