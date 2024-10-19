class InventoryManager {
    capacity;
    items;
    outOfStock
    constructor(capacity) {
        this.capacity = capacity;
        this.items = new Map();
        this.outOfStock = new Set();
    }
    getInventorySummary() {
        let finalArr = [];
        finalArr.push("Current Inventory:");
        for (const [itemName, quantity] of this.items.entries()) {
            finalArr.push(`${itemName}: ${quantity}`);
        }
        if (this.outOfStock.size > 0) {
            finalArr.push(`Out of Stock: ${[...this.outOfStock].join(", ")}`);
        }
        return finalArr.join("\n");
    }

    addItem(itemName, quantity) {
        if (this.capacity === 0) {
            throw new Error("The inventory is already full.");
        }
        quantity = Number(quantity);
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        if (this.items.has(itemName)) {
            let curValue = this.items.get(itemName) + quantity;
            this.items.set(itemName, curValue);
        } else {
            if (this.items.size >= this.capacity) {
                throw new Error("The inventory is already full.");
            }
            this.items.set(itemName, quantity);
        }
        return `Added ${quantity} ${itemName}(s) to the inventory.`;
    }

    sellItem(itemName, quantity) {
        quantity = Number(quantity);
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        if (!this.items.has(itemName)) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }
        if (quantity > this.items.get(itemName)) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        }
        let curQuantity = this.items.get(itemName) - quantity;
        this.items.set(itemName, curQuantity);
        if (this.items.get(itemName) === 0) {
            this.items.delete(itemName);
            this.outOfStock.add(itemName);
        }
        return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    }

    restockItem(itemName, quantity) {
        if (this.capacity === 0) {
            throw new Error("The inventory is already full.");
        }
        quantity = Number(quantity);
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        if (this.items.has(itemName)) {
            let curQuantity = this.items.get(itemName) + quantity;
            this.items.set(itemName, curQuantity);
        }
        else {
            if (this.items.size < this.capacity) {
                this.items.set(itemName, quantity);
            }
        }
        if (this.outOfStock.has(itemName)) {
            this.outOfStock.delete(itemName);
        }
        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }
}

const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5)); 
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());
