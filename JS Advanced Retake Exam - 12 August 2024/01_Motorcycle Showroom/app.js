window.addEventListener("load", solve);

function solve() {
  let colorEl = document.querySelector('#colors');
  let motorcycleEl = document.querySelector('#motorcycles');
  let dateTimeEl = document.querySelector('#datetime');
  let nameEl = document.querySelector('#full-name');
  let emailEl = document.querySelector('#email');
  let testRideBittonEl = document.querySelector('#test-ride-btn');

  testRideBittonEl.addEventListener('click', e => {
    e.preventDefault();
    if (colorEl.value == '' || motorcycleEl.value == '' || dateTimeEl.value == '' ||
      nameEl.value == '' || emailEl.value == '') {
      return;
    }

    let liEl = document.createElement('li');
    let articleEl = document.createElement('article');
    let divEl = document.createElement('div');
    divEl.classList = 'btn-container';
    let ulEl = document.querySelector('#preview-list');


    let colorPEl = document.createElement('p');
    let motorcyclePEl = document.createElement('p');
    let dateTimePEl = document.createElement('p');
    let namePEl = document.createElement('p');
    let emailPEl = document.createElement('p');

    let editButtonEl = document.createElement('button');
    editButtonEl.classList = 'edit-btn';
    editButtonEl.textContent = 'Edit';

    let nextButtonEL = document.createElement('button');
    nextButtonEL.classList = 'next-btn';
    nextButtonEL.textContent = 'Next';

    colorPEl.textContent = `Color: ${colorEl.value}`;
    motorcyclePEl.textContent = `Model: ${motorcycleEl.value}`;
    namePEl.textContent = `For: ${nameEl.value}`;
    emailPEl.textContent = `Contact: ${emailEl.value}`;
    dateTimePEl.textContent = `Test Ride On: ${dateTimeEl.value}`;

    let editedColor = colorEl.value;
    let editedMotorcycle = motorcycleEl.value;
    let editedName = nameEl.value;
    let editedEmail = emailEl.value;
    let editedDateTime = dateTimeEl.value;

    colorEl.value = '';
    motorcycleEl.value = '';
    dateTimeEl.value = '';
    nameEl.value = '';
    emailEl.value = '';

    divEl.appendChild(editButtonEl);
    divEl.appendChild(nextButtonEL);
    articleEl.appendChild(colorPEl);
    articleEl.appendChild(motorcyclePEl);
    articleEl.appendChild(namePEl);
    articleEl.appendChild(emailPEl);
    articleEl.appendChild(dateTimePEl);

    liEl.appendChild(articleEl);
    liEl.appendChild(divEl);
    ulEl.appendChild(liEl);

    testRideBittonEl.disabled = true;

    editButtonEl.addEventListener('click', e => {
      colorEl.value = editedColor;
      motorcycleEl.value = editedMotorcycle;
      nameEl.value = editedName;
      emailEl.value = editedEmail;
      dateTimeEl.value = editedDateTime;

      liEl.remove();

      testRideBittonEl.disabled = false;
    });

    nextButtonEL.addEventListener('click', e => {
      let newUlEl = document.querySelector('#complete-list');
      let newLiEl = document.createElement('li');
      let newArticleEl = document.createElement('article');
      newArticleEl = articleEl;

      let completeButtonEl = document.createElement('button');
      completeButtonEl.classList = 'complete-btn';
      completeButtonEl.textContent = 'Complete';

      newArticleEl.appendChild(completeButtonEl);
      newLiEl.appendChild(newArticleEl);
      newUlEl.appendChild(newLiEl);

      testRideBittonEl.disabled = true;
      liEl.remove();

      completeButtonEl.addEventListener('click', e => {
        let newDivEl = document.querySelector('.data-view')
        newLiEl.remove();
        let confirmButtonEl = document.createElement('button');
        confirmButtonEl.classList = 'confirm-btn';
        confirmButtonEl.textContent = 'Your Test Ride is Confirmed';
        newDivEl.appendChild(confirmButtonEl);

        confirmButtonEl.addEventListener('click', e => {
          location.reload();
        });
      });
    });
  });
}

