window.addEventListener('load', solve);

function solve() {
    let timeEl = document.querySelector('#time');
    let dateEl = document.querySelector('#date');
    let placeEl = document.querySelector('#place');
    let eventEl = document.querySelector('#event-name');
    let emailEl = document.querySelector('#email');
    let addButtonEl = document.querySelector('#add-btn');

    addButtonEl.addEventListener('click', e => {
        e.preventDefault();
        if (timeEl.value == '' || dateEl.value == '' || placeEl.value == '' ||
            eventEl.value == '' || emailEl.value == '') {
            return;
        }

        let ulEl = document.querySelector('#check-list');
        let liEl = document.createElement('li');
        liEl.classList = 'event-content';
        let articleEl = document.createElement('article');

        let timeAndDatePEl = document.createElement('p');
        let placePEl = document.createElement('p');
        let eventPEl = document.createElement('p');
        let emailPEl = document.createElement('p');

        let editButtonEl = document.createElement('button');
        editButtonEl.classList = 'edit-btn';
        editButtonEl.textContent = 'Edit';

        let continueEl = document.createElement('button');
        continueEl.classList = 'continue-btn';
        continueEl.textContent = 'Continue';

        timeAndDatePEl.textContent = `Begins: ${dateEl.value} at: ${timeEl.value}`;
        placePEl.textContent = `In: ${placeEl.value}`;
        eventPEl.textContent = `Event: ${eventEl.value}`;
        emailPEl.textContent = `Contact: ${emailEl.value}`;

        let editedTimeEl = timeEl.value;
        let editedDateEl = dateEl.value;
        let editedPlaceEl = placeEl.value;
        let editedEventEl = eventEl.value;
        let editedEmailEl = emailEl.value;

        timeEl.value = '';
        dateEl.value = '';
        placeEl.value = '';
        eventEl.value = '';
        emailEl.value = '';

        articleEl.appendChild(timeAndDatePEl);
        articleEl.appendChild(placePEl);
        articleEl.appendChild(eventPEl);
        articleEl.appendChild(emailPEl);
        liEl.appendChild(articleEl);
        liEl.appendChild(editButtonEl);
        liEl.appendChild(continueEl);
        ulEl.appendChild(liEl);

        addButtonEl.disabled = true;

        editButtonEl.addEventListener('click', e => {
            liEl.remove();
            timeEl.value = editedTimeEl;
            dateEl.value = editedDateEl;
            placeEl.value = editedPlaceEl;
            eventEl.value = editedEventEl;
            emailEl.value = editedEmailEl;

            addButtonEl.disabled = false;
        });

        continueEl.addEventListener('click', e => {
            let newUlEl = document.querySelector('#upcoming-list');
            let newLiEl = document.createElement('li');
            newLiEl.classList = 'event-content';
            let newArticleEl = document.createElement('article');
            newArticleEl = articleEl;

            let finishedButtonEl = document.createElement('button');
            finishedButtonEl.classList = 'finished-btn';
            finishedButtonEl.textContent = 'Move to Finished';

            liEl.remove();
            newLiEl.appendChild(newArticleEl);
            newLiEl.appendChild(finishedButtonEl);
            newUlEl.appendChild(newLiEl);
            addButtonEl.disabled = false;


            finishedButtonEl.addEventListener('click', e => {
                let finalUlEl = document.querySelector('#finished-list');
                let finalLiEl = document.createElement('li');
                let finalArticleEl = document.createElement('article');
                finalArticleEl = newArticleEl;
                let clearButtonEl = document.querySelector('#clear');

                finalLiEl.appendChild(finalArticleEl);
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




