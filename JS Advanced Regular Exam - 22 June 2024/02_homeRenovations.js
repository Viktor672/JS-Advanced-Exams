class HomeRenovation {
    budget;
    tasks;
    completedTasks;
    constructor(budget) {
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {//possible error with cost and priority being string
        cost = Number(cost);
        priority = Number(priority);
        if (cost > this.budget) {
            return `Not enough budget to add '${description}' task.`;
        }

        this.budget -= cost;
        this.tasks.push({ description, cost, priority });
        return `The task '${description}' has been successfully added to the renovation plan.`;
    }

    markTaskAsCompleted(description) {
        let curTask = this.tasks.find(curEl => curEl.description == description);
        if (!curTask) {
            throw new Error(`Task '${description}' not found in the renovation plan.`);
        }

        this.completedTasks.push(curTask);
        let indexOf = this.tasks.indexOf(curTask);
        this.tasks.splice(indexOf, 1);
        return `The task '${description}' has been successfully completed.`;

    }

    getPriorityTasksCount(minimalPriority) {
        minimalPriority = Number(minimalPriority);
        if (minimalPriority <= 0) {
            return 'The priority cannot be zero or negative.';
        }

        let curTask = this.tasks.filter(curEl => curEl.priority >= minimalPriority);
        if (curTask.length == 0) {
            return `No tasks found with priority ${minimalPriority} or higher.`;
        }

        return `You have ${curTask.length} tasks to prioritize.`;
    }

    renovationSummary() {
        if (this.completedTasks.length <= 0) {
            throw Error('No tasks have been completed yet!');
        }

        let arr = [];
        arr.push(`Budget left $${this.budget}.`);
        arr.push(`You have completed ${this.tasks.length} tasks.`);
        arr.push(`Pending tasks in the renovation plan:`);
        for (const curEl of this.tasks) {
            arr.push(`${curEl.description} - Cost: ${curEl.cost}, Priority: ${curEl.priority}`);
        }
        return arr.join('\n');
    }
}

const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2));
console.log(renovation.addTask("Install new windows", 5000, 1));
console.log(renovation.markTaskAsCompleted("Paint walls"));
console.log(renovation.renovationSummary());

