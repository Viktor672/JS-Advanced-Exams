window.addEventListener('load', solve);

function solve() {
    let modelEl = document.querySelector('#car-model');
    let yearEl = document.querySelector('#car-year');
    let partNameEl = document.querySelector('#part-name');
    let partNumberEl = document.querySelector('#part-number');
    let conditionEl = document.querySelector('#condition');
    let nextButtonEl = document.querySelector('#next-btn');

    nextButtonEl.addEventListener('click', e => {
        e.preventDefault();
        if (modelEl.value == '' || yearEl.value == '' || partNameEl.value == '' ||
            partNumberEl.value == '' || conditionEl.value == '') return;

        if (yearEl.value < 1980 || yearEl.value > 2023) return;

        let ulEl = document.querySelector('.info-list');
        let liEl = document.createElement('li');
        liEl.setAttribute('class', 'part-content');
        let articleEl = document.createElement('article');

        let modelPEl = document.createElement('p');
        let yearPEl = document.createElement('p');
        let partNamePEl = document.createElement('p');
        let partNumberPEl = document.createElement('p');
        let conditionPEl = document.createElement('p');

        modelPEl.textContent = `Car Model: ${modelEl.value}`;
        yearPEl.textContent = `Car Year: ${yearEl.value}`;
        partNamePEl.textContent = `Part Name: ${partNameEl.value}`;
        partNumberPEl.textContent = `Part Number: ${partNumberEl.value}`;
        conditionPEl.textContent = `Condition: ${conditionEl.value}`;

        let editButtonEl = document.createElement('button');
        editButtonEl.setAttribute('class', 'edit-btn');
        editButtonEl.textContent = 'Edit';

        let continueButtonEl = document.createElement('button');
        continueButtonEl.setAttribute('class', 'continue-btn');
        continueButtonEl.textContent = 'Continue';

        let editedModel = modelEl.value;
        let editedYear = yearEl.value;
        let editedPartName = partNameEl.value;
        let editedPartNumber = partNumberEl.value;
        let editedCondition = conditionEl.value;

        modelEl.value = '';
        yearEl.value = '';
        partNameEl.value = '';
        partNumberEl.value = '';
        conditionEl.value = '';

        document.querySelector('#complete-img').style.visibility = 'hidden';
        document.querySelector('#complete-text').textContent = '';


        articleEl.appendChild(modelPEl);
        articleEl.appendChild(yearPEl);
        articleEl.appendChild(partNamePEl);
        articleEl.appendChild(partNumberPEl);
        articleEl.appendChild(conditionPEl);

        liEl.appendChild(articleEl);
        liEl.appendChild(editButtonEl);
        liEl.appendChild(continueButtonEl);
        ulEl.appendChild(liEl);

        e.currentTarget.disabled = true;

        editButtonEl.addEventListener('click', e => {
            modelEl.value = editedModel;
            yearEl.value = editedYear;
            partNameEl.value = editedPartName;
            partNumberEl.value = editedPartNumber;
            conditionEl.value = editedCondition;

            liEl.remove();
            nextButtonEl.disabled = false;
        });

        continueButtonEl.addEventListener('click', e => {
            let newUlEl = document.querySelector('.confirm-list');
            let newLiEl = document.createElement('li');
            newLiEl.setAttribute('class', 'part-content');
            let newArticleEl = document.createElement('article');
            newArticleEl = articleEl;

            let confirmButtonEl = document.createElement('button');
            confirmButtonEl.setAttribute('class', 'confirm-btn');
            confirmButtonEl.textContent = 'Confirm';

            let cancelButtonEl = document.createElement('button');
            cancelButtonEl.setAttribute('class', 'cancel-btn');
            cancelButtonEl.textContent = 'Cancel';

            newLiEl.appendChild(newArticleEl);
            newLiEl.appendChild(confirmButtonEl);
            newLiEl.appendChild(cancelButtonEl);
            newUlEl.appendChild(newLiEl);

            liEl.remove();

            confirmButtonEl.addEventListener('click', e => {
                newLiEl.remove();
                document.querySelector('#complete-img').style.visibility = 'visible';
                document.querySelector('#complete-text').textContent = 'Part is Ordered!';
                nextButtonEl.disabled = false;
            });

            cancelButtonEl.addEventListener('click', e => {
                newLiEl.remove();
                nextButtonEl.disabled = false;
            });
        });
    });
}




