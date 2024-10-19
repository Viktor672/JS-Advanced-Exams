class JobOffers {
    employer;
    position;
    jobCandidates;
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        let nameSet = new Set();
        for (const curEl of candidates) {
            let tokens = curEl.split('-');
            let [name, education, yearsExperience] = tokens;
            yearsExperience = Number(yearsExperience);
            let curObj = this.jobCandidates.find(el => el.name == name);

            if (curObj) {
                if (yearsExperience > curObj.yearsExperience) {
                    curObj.yearsExperience = yearsExperience;
                }
            }
            else {
                this.jobCandidates.push({ name, education, yearsExperience });
            }

            nameSet.add(name);
        }
        let nameArr = [...nameSet];

        return `You successfully added candidates: ${nameArr.join(', ')}.`;
    }

    jobOffer(chosenPerson) {
        let tokens = chosenPerson.split('-');
        let [name, minimalExperience] = tokens;
        minimalExperience = Number(minimalExperience)
        let curObj = this.jobCandidates.find(curEl => curEl.name === name);

        if (!curObj) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (minimalExperience > curObj.yearsExperience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        }

        curObj.yearsExperience = 'hired';

        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        let curObj = this.jobCandidates.find(curEl => curEl.name === name);

        if (!curObj) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (curObj.education === 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        }
        else if (curObj.education === 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        }
        else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
        }
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error('Candidate Database is empty!');
        }

        let resultArr = [];
        resultArr.push('Candidates list:');

        let sortedCanditatesArr = [...this.jobCandidates];
        sortedCanditatesArr.sort((a, b) => a.name.localeCompare(b.name));
        for (const curEl of sortedCanditatesArr) {
            resultArr.push(`${curEl.name}-${curEl.yearsExperience}`);
        }

        return resultArr.join('\n');
    }
}

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());
