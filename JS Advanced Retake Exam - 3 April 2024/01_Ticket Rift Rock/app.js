window.addEventListener("load", solve);

function solve() {
    let ticketsEl = document.querySelector('#num-tickets');
    let seatingPreferenceEl = document.querySelector('#seating-preference');
    let textEl = document.querySelector('#full-name');
    let emailEl = document.querySelector('#email');
    let phoneNumberEl = document.querySelector('#phone-number');
    let purchaseButtonEl = document.querySelector('#purchase-btn');

    purchaseButtonEl.addEventListener('click', e => {
        e.preventDefault();
        if (ticketsEl.value == '' || seatingPreferenceEl.value == '' || textEl.value == '' ||
            emailEl.value == '' || phoneNumberEl.value == '') return;

        let ulEl = document.querySelector('#ticket-preview');
        let liEl = document.createElement('li');
        liEl.classList = 'ticket-purchase';
        let articleEl = document.createElement('article');
        let divEl = document.createElement('div');
        divEl.classList = 'btn-container';

        let ticketsPEl = document.createElement('p');
        let seatingPreferencePEl = document.createElement('p');
        let textPEl = document.createElement('p');
        let emailPEl = document.createElement('p');
        let phoneNumberPEl = document.createElement('p');


        ticketsPEl.textContent = `Count: ${ticketsEl.value}`;
        seatingPreferencePEl.textContent = `Preference: ${seatingPreferenceEl.value}`;
        textPEl.textContent = `To: ${textEl.value}`;
        emailPEl.textContent = `Email: ${emailEl.value}`;
        phoneNumberPEl.textContent = `Phone Number: ${phoneNumberEl.value}`;

        let editButtonEl = document.createElement('button');
        editButtonEl.classList = 'edit-btn';
        editButtonEl.textContent = 'Edit';

        let nextButtonEl = document.createElement('button');
        nextButtonEl.classList = 'next-btn';
        nextButtonEl.textContent = 'Next';

        let editedTickets = ticketsEl.value;
        let editedSeatingPreference = seatingPreferenceEl.value;
        let editedText = textEl.value;
        let editedEmail = emailEl.value;
        let editedPhoneNumber = phoneNumberEl.value;

        ticketsEl.value = '';
        seatingPreferenceEl.value = '';
        textEl.value = '';
        emailEl.value = '';
        phoneNumberEl.value = '';

        articleEl.appendChild(ticketsPEl);
        articleEl.appendChild(seatingPreferencePEl);
        articleEl.appendChild(textPEl);
        articleEl.appendChild(emailPEl);
        articleEl.appendChild(phoneNumberPEl);

        divEl.appendChild(editButtonEl);
        divEl.appendChild(nextButtonEl);

        liEl.appendChild(articleEl);
        liEl.appendChild(divEl);

        ulEl.appendChild(liEl);

        e.currentTarget.disabled = true;

        
        editButtonEl.addEventListener('click', e => {
            ticketsEl.value = editedTickets;
            seatingPreferenceEl.value = editedSeatingPreference;
            textEl.value = editedText;
            emailEl.value = editedEmail;
            phoneNumberEl.value = editedPhoneNumber;

            liEl.remove();

            purchaseButtonEl.disabled = false;
        });

        nextButtonEl.addEventListener('click', e => {
            let newUlEl = document.querySelector('#ticket-purchase');
            let newLiEl = document.createElement('li');
            newLiEl.classList = 'ticket-purchase';
            let newArticleEl = document.createElement('article');
            newArticleEl = articleEl;


            let buyButtonEl = document.createElement('button');
            buyButtonEl.classList = 'buy-btn';
            buyButtonEl.textContent = 'Buy';

            newArticleEl.appendChild(buyButtonEl);
            newLiEl.appendChild(newArticleEl);
            newUlEl.appendChild(newLiEl);

            liEl.remove();

            buyButtonEl.addEventListener('click', e => {
                let divEl = document.querySelector('.bottom-content');
                let h2El = document.createElement('h2');
                h2El.textContent = 'Thank you for your purchase!';

                let backButtonEl = document.createElement('button');
                backButtonEl.classList = 'back-btn';
                backButtonEl.textContent = 'Back';

                divEl.appendChild(h2El);
                divEl.appendChild(backButtonEl);

                newLiEl.remove();

                backButtonEl.addEventListener('click', e => {
                    window.location.reload();
                });
            });
        });
    });
}
