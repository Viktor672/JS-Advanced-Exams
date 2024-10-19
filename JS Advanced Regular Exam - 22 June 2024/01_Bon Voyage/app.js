window.addEventListener('load', solve);

function solve() {
    let firstNameEl = document.querySelector('#first-name');
    let lastNameEl = document.querySelector('#last-name');
    let fromDateEl = document.querySelector('#from-date');
    let toDateEl = document.querySelector('#to-date');
    let nextButtonEl = document.querySelector('#next-btn');

    nextButtonEl.addEventListener('click', e => {
        e.preventDefault();
        if (firstNameEl.value == '' || lastNameEl.value == '' ||
            fromDateEl.value == '' || toDateEl.value == '' ||
            new Date(fromDateEl.value) >= new Date(toDateEl.value)) {
            return;
        }
        let ulEl = document.querySelector('.info-list');
        let liEl = document.createElement('li');
        liEl.setAttribute('class', 'vacation-content');
        let articleEl = document.createElement('article');

        let fullNameEl = document.createElement('h3');
        let fromDatePEl = document.createElement('p');
        let toDatePEl = document.createElement('p');

        fullNameEl.textContent = `Name: ${firstNameEl.value} ${lastNameEl.value}`;
        fromDatePEl.textContent = `From date: ${fromDateEl.value}`;
        toDatePEl.textContent = `To date: ${toDateEl.value}`;

        let editButtonEl = document.createElement('button');
        editButtonEl.setAttribute('class', 'edit-btn');
        editButtonEl.textContent = 'Edit'

        let continueButtonEl = document.createElement('button');
        continueButtonEl.setAttribute('class', 'continue-btn');
        continueButtonEl.textContent = 'Continue';

        articleEl.appendChild(fullNameEl);
        articleEl.appendChild(fromDatePEl);
        articleEl.appendChild(toDatePEl);
        liEl.appendChild(articleEl);
        liEl.appendChild(editButtonEl);
        liEl.appendChild(continueButtonEl);
        ulEl.appendChild(liEl);

        let editedFirstName = firstNameEl.value;
        let editedLastName = lastNameEl.value;
        let editedFromDate = fromDateEl.value;
        let editedToDate = toDateEl.value;

        firstNameEl.value = '';
        lastNameEl.value = '';
        fromDateEl.value = '';
        toDateEl.value = '';

        nextButtonEl.disabled = true;

        editButtonEl.addEventListener('click', e => {
            firstNameEl.value = editedFirstName;
            lastNameEl.value = editedLastName;
            fromDateEl.value = editedFromDate;
            toDateEl.value = editedToDate;

            liEl.remove();
            nextButtonEl.disabled = false;
        });

        continueButtonEl.addEventListener('click', e => {
            let newUlEl = document.querySelector('.confirm-list');
            let h1El = document.querySelector('#status');
            let newLiEl = document.createElement('li');
            newLiEl.setAttribute('class', 'vacation-content');
            let newArticleEl = document.createElement('article');
            newArticleEl = articleEl;

            let cancelButtonEl = document.createElement('button');
            cancelButtonEl.setAttribute('class', 'cancel-btn');
            cancelButtonEl.textContent = 'Cancel';

            let confirmButtonEl = document.createElement('button');
            confirmButtonEl.setAttribute('class', 'confirm-btn');
            confirmButtonEl.textContent = 'Confirm';

            newLiEl.appendChild(newArticleEl);
            newLiEl.appendChild(confirmButtonEl);
            newLiEl.appendChild(cancelButtonEl);
            newUlEl.appendChild(newLiEl);

            liEl.remove();
            nextButtonEl.disabled = true;

            cancelButtonEl.addEventListener('click', cancel);
            function cancel() {
                newLiEl.remove();
                h1El.classList = 'vacation-cancelled';
                h1El.textContent = 'Cancelled Vacation';
                nextButtonEl.disabled = false;
            }

            function confirm() {
                newLiEl.remove();
                h1El.classList = 'vacation-confirmed';
                h1El.textContent = 'Vacation Requested';
                nextButtonEl.disabled = false;
            }
            confirmButtonEl.addEventListener('click', confirm);

            h1El.addEventListener('click', e => {
                location.reload();
            });
        });
    });
}




