window.addEventListener('load', solution);

function solution() {
    let employeeEl = document.querySelector('#employee');
    let categoryEl = document.querySelector('#category');
    let urgencyEl = document.querySelector('#urgency');
    let assignedTeamEl = document.querySelector('#team');
    let descriptionEl = document.querySelector('#description');
    let addButtonEl = document.querySelector('#add-btn');

    addButtonEl.addEventListener('click', e => {
        e.preventDefault();
        if (employeeEl.value == '' || categoryEl.value == '' || urgencyEl.value == '' ||
            assignedTeamEl.value == '' || descriptionEl.value == '') {
            return;
        }
        let liEl = document.createElement('li');
        liEl.setAttribute('class', 'problem-content');
        let articleEl = document.createElement('article');

        let employeePEl = document.createElement('p');
        let categoryPEl = document.createElement('p');
        let urgencyPEl = document.createElement('p');
        let assignedTeamPEl = document.createElement('p');
        let descriptionPEl = document.createElement('p');

        employeePEl.textContent = `From: ${employeeEl.value}`;
        categoryPEl.textContent = `Category: ${categoryEl.value}`;
        urgencyPEl.textContent = `Urgency: ${urgencyEl.value}`;
        assignedTeamPEl.textContent = `Assigned to: ${assignedTeamEl.value}`;
        descriptionPEl.textContent = `Description: ${descriptionEl.value}`;

        let editedEmployeeEl = employeeEl.value;
        let editedCategoryEl = categoryEl.value;
        let editedUrgencyEl = urgencyEl.value;
        let editedTeamEl = assignedTeamEl.value;
        let editedDescriptionEl = descriptionEl.value;

        employeeEl.value = '';
        categoryEl.value = '';
        urgencyEl.value = '';
        assignedTeamEl.value = '';
        descriptionEl.value = '';

        let editButtonEl = document.createElement('button');
        editButtonEl.setAttribute('class', 'edit-btn');
        editButtonEl.textContent = 'Edit';

        let continueEl = document.createElement('button');
        continueEl.setAttribute('class', 'continue-btn');
        continueEl.textContent = 'Continue';

        articleEl.appendChild(employeePEl);
        articleEl.appendChild(categoryPEl);
        articleEl.appendChild(urgencyPEl);
        articleEl.appendChild(assignedTeamPEl);
        articleEl.appendChild(descriptionPEl);
        liEl.appendChild(articleEl);
        liEl.appendChild(editButtonEl);
        liEl.appendChild(continueEl);
        let ulEl = document.querySelector('.preview-list');
        ulEl.appendChild(liEl);

        addButtonEl.disabled = true;

        editButtonEl.addEventListener('click', () => {
            employeeEl.value = editedEmployeeEl;
            categoryEl.value = editedCategoryEl;
            urgencyEl.value = editedUrgencyEl;
            assignedTeamEl.value = editedTeamEl;
            descriptionEl.value = editedDescriptionEl;

            liEl.remove();
            addButtonEl.disable = false;
        });

        continueEl.addEventListener('click', e => {
            let newLiEl = document.createElement('li');
            newLiEl.setAttribute('class', 'problem-content');

            let newArticleEl = document.createElement('artilce');
            newArticleEl = articleEl;

            let resolveButtonEl = document.createElement('button');
            resolveButtonEl.setAttribute('class', 'resolve-btn');
            resolveButtonEl.textContent = 'Resolved';

            newLiEl.appendChild(newArticleEl);
            newLiEl.appendChild(resolveButtonEl);

            let newUlEl = document.querySelector('.pending-list');
            newUlEl.appendChild(newLiEl);

            liEl.remove();
            addButtonEl.disabled = false;

            resolveButtonEl.addEventListener('click', e => {
                let finalLiEl = document.createElement('li');
                finalLiEl.setAttribute('class', 'problem-content');

                let finalArticleEl = document.createElement('artilce');
                finalArticleEl = newArticleEl;

                let clearButtonEl = document.createElement('button');
                clearButtonEl.setAttribute('class', 'clear-btn');
                clearButtonEl.textContent = 'Clear';

                finalLiEl.appendChild(finalArticleEl);
                finalLiEl.appendChild(clearButtonEl);

                let finalUlEl = document.querySelector('.resolved-list');
                finalUlEl.appendChild(finalLiEl);

                newLiEl.remove();

                clearButtonEl.addEventListener('click', e => {
                    finalLiEl.remove();
                    addButtonEl.disabled = false;
                });
            });
        });
    });
}




