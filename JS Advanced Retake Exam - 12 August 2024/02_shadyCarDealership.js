class ShadyCarDealership {
    dealerName;
    availableCars;
    soldCars;
    revenue;
    constructor(dealerName) {
        this.dealerName = dealerName;
        this.availableCars = [];
        this.soldCars = [];
        this.revenue = 0;
    }

    addCar(model, year, mileage, price) {
        if (model == '' || year < 1950 || mileage < 0 || price < 0) {
            throw new Error('Invalid car!');
        }

        this.availableCars.push({ model: model, year: year, mileage: mileage, price: price });
        return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredYear) {
        let curCarObj = this.availableCars.find(curEl => curEl.model == model);
        if (!curCarObj) {
            return `${model} was not found!`;
        }

        if (curCarObj.year < desiredYear && Math.abs(curCarObj.year - desiredYear) <= 5) {
            curCarObj.price *= 0.9;
        }
        else if (curCarObj.year < desiredYear && Math.abs(curCarObj.year - desiredYear) > 5) {
            curCarObj.price *= 0.8;
        }
        let indexOf = this.availableCars.indexOf(curCarObj);
        this.availableCars.splice(indexOf, 1);

        this.soldCars.push({ model, year: curCarObj.year, mileage: curCarObj.mileage, price: curCarObj.price });
        this.revenue += curCarObj.price;
        return `${model} (${curCarObj.year}) was sold for ${curCarObj.price.toFixed(2)}$`;
    }

    prepareCarForSale(model) {
        if (!(this.availableCars.find(curEl => curEl.model == model))) {
            return `${model} was not found for preparation!`;
        }

        let curCarObj = this.availableCars.find(curEl => curEl.model == model);
        curCarObj.mileage /= 2;
        curCarObj.price *= 1.3;
        return `${model} (${curCarObj.year}) is prepared for sale with ${curCarObj.mileage} km. - ${curCarObj.price.toFixed(2)}$`;
    }

    salesJournal(criteria) {
        if (criteria != 'year' && criteria != 'model') {
            throw new Error('Invalid criteria!');
        }

        if (criteria == 'year') {
            this.soldCars.sort((a, b) => b.year - a.year);
        }
        else if (criteria == 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }

        let arr = [];
        arr.push(`${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$`);
        arr.push(`${this.soldCars.length} cars sold:`);
        for (const curEl of this.soldCars) {
            arr.push(`${curEl.model} (${curEl.year}) / ${curEl.mileage} km. / ${curEl.price.toFixed(2)}$`);
        }
        return arr.join('\n');
    }
}

const dealership = new ShadyCarDealership('Shady Motors');
console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
console.log(dealership.prepareCarForSale('Honda CR-V'));
console.log(dealership.prepareCarForSale('BMW X3'));
console.log(dealership.sellCar('Honda CR-V', 2012));
console.log(dealership.sellCar('BMW X3', 2012));
console.log(dealership.salesJournal('model'));
