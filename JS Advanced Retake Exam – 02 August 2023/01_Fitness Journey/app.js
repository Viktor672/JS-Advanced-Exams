window.addEventListener('load', solve);

function solve() {
    let nameEl = document.querySelector('#name');
    let emailEl = document.querySelector('#email');
    let contactNumberEl = document.querySelector('#contact-number');
    let classTypeEl = document.querySelector('#class-type');
    let classTimeEl = document.querySelector('#class-time');
    let nextButtonEl = document.querySelector('#next-btn');

    nextButtonEl.addEventListener("click", event => {
        event.preventDefault();

        if (nameEl.value == '' || emailEl.value == '' || contactNumberEl.value == '' || classTypeEl.value == '' || classTimeEl.value == '') {
            return;
        }

        let ulEl = document.querySelector('.class-info');
        let liEl = document.createElement('li');
        liEl.classList = 'info-item';
        let articleEl = document.createElement('article');
        articleEl.classList = 'personal-info';

        let namePEl = document.createElement('p');
        let emailPEl = document.createElement('p');
        let contactNumberPEl = document.createElement('p');
        let classTypePEl = document.createElement('p');
        let classTimePEl = document.createElement('p');

        namePEl.textContent = nameEl.value;
        emailPEl.textContent = emailEl.value;
        contactNumberPEl.textContent = contactNumberEl.value;
        classTypePEl.textContent = classTypeEl.value;
        classTimePEl.textContent = classTimeEl.value;

        let editButtonEl = document.createElement('button');
        editButtonEl.classList = 'edit-btn';
        editButtonEl.textContent = 'Edit';

        let continueButtonEl = document.createElement('button');
        continueButtonEl.classList = 'continue-btn';
        continueButtonEl.textContent = 'Continue';

        articleEl.appendChild(namePEl);
        articleEl.appendChild(emailPEl);
        articleEl.appendChild(contactNumberPEl);
        articleEl.appendChild(classTypePEl);
        articleEl.appendChild(classTimePEl);
        liEl.appendChild(articleEl);
        liEl.appendChild(editButtonEl);
        liEl.appendChild(continueButtonEl)
        ulEl.appendChild(liEl);

        let editedName = nameEl.value;
        let editedEmail = emailEl.value;
        let editedContactNumber = contactNumberEl.value;
        let editedClassType = classTypeEl.value;
        let editedClassTime = classTimeEl.value;

        nameEl.value = '';
        emailEl.value = '';
        contactNumberEl.value = '';
        classTypeEl.value = '';
        classTimeEl.value = '';
        event.currentTarget.disabled = true;

        editButtonEl.addEventListener('click', event => {
            nameEl.value = namePEl.textContent;
            emailEl.value = emailPEl.textContent;
            contactNumberEl.value = contactNumberPEl.textContent;
            classTypeEl.value = classTypePEl.textContent;
            classTimeEl.value = classTimePEl.textContent;
            
            nextButtonEl.disabled = false;
            
            nameEl.value = editedName;
            emailEl.value = editedEmail;
            contactNumberEl.value = editedContactNumber;
            classTypeEl.value = editedClassType;
            classTimeEl.value = editedClassTime;

            liEl.remove();
        });

        continueButtonEl.addEventListener('click', event => {
            let newNameEl = document.createElement('p');
            let newEmailEl = document.createElement('p');
            let newContacnNumberEl = document.createElement('p');
            let newPreferredTypeEl = document.createElement('p');
            let newPreferredTimeEl = document.createElement('p');

            newNameEl.textContent = namePEl.textContent;
            newEmailEl.textContent = emailPEl.textContent;
            newContacnNumberEl.textContent = contactNumberPEl.textContent;
            newPreferredTypeEl.textContent = classTypePEl.textContent;
            newPreferredTimeEl.textContent = classTimePEl.textContent;

            namePEl.textContent = '';
            emailPEl.textContent = '';
            contactNumberPEl.textContent = '';
            classTypePEl.textContent = '';
            classTimePEl.textContent = '';

            editButtonEl.remove();
            event.currentTarget.remove();
            liEl.remove();


            let cancelButtonEl = document.createElement('button');
            cancelButtonEl.classList = 'cancel-btn';
            cancelButtonEl.textContent = 'Cancel';

            let confirmButtonEl = document.createElement('button');
            confirmButtonEl.classList = 'confirm-btn';
            confirmButtonEl.textContent = 'Confirm';

            let newLiEl = document.createElement('li');
            let newArticleEl = document.createElement('article');
            newLiEl.classList = 'continue-info';
            newArticleEl.classList = 'personal-info';
            newArticleEl.appendChild(newNameEl);
            newArticleEl.appendChild(newEmailEl);
            newArticleEl.appendChild(newContacnNumberEl);
            newArticleEl.appendChild(newPreferredTypeEl);
            newArticleEl.appendChild(newPreferredTimeEl);
            newLiEl.appendChild(newArticleEl);
            newLiEl.appendChild(cancelButtonEl);
            newLiEl.appendChild(confirmButtonEl);
            document.querySelector('.confirm-class').appendChild(newLiEl);

            cancelButtonEl.addEventListener('click', event => {
                newLiEl.remove();
                nextButtonEl.disabled = false;
            });

            confirmButtonEl.addEventListener('click', event => {
                document.querySelector('#main').remove();
                let h1El = document.createElement('h1');
                h1El.setAttribute('id', 'thank-you');
                h1El.textContent = 'Thank you for scheduling your appointment, we look forward to seeing you!';
                let finalButtonEl = document.createElement('button');
                finalButtonEl.setAttribute('id', 'done-btn');
                finalButtonEl.textContent = 'Done';
                document.querySelector('#body').appendChild(h1El);
                document.querySelector('#body').appendChild(finalButtonEl);
                finalButtonEl.addEventListener('click', event => {
                    location.reload();
                });
            });
        });
    });
}