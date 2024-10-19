window.addEventListener("load", solve);

function solve() {
    let nameEl = document.querySelector('#gem-name');
    let colorEl = document.querySelector('#color');
    let caratsEl = document.querySelector('#carats');
    let priceEl = document.querySelector('#price');
    let typeEl = document.querySelector('#type');
    let addButtonEl = document.querySelector('#add-btn');

    addButtonEl.addEventListener('click', e => {
        e.preventDefault();
        if (nameEl.value == '' || colorEl.value == '' || caratsEl.value == '' || priceEl.value == '' ||
            typeEl.value == '') return;



        let ulEl = document.querySelector('#preview-list');
        let liEl = document.createElement('li');
        liEl.setAttribute('class', 'gem-info');
        let articleEl = document.createElement('article');

        let nameH3El = document.createElement('h4');
        let colorPEl = document.createElement('p');
        let caratsPEl = document.createElement('p');
        let pricePEl = document.createElement('p');
        let typePEl = document.createElement('p');

        nameH3El.textContent = nameEl.value;
        colorPEl.textContent = `Color: ${colorEl.value}`;
        caratsPEl.textContent = `Carats: ${caratsEl.value}`;
        pricePEl.textContent = `Price: ${priceEl.value}$`;
        typePEl.textContent = `Type: ${typeEl.value}`;

        let editedName = nameEl.value;
        let editedColor = colorEl.value;
        let editedCarats = caratsEl.value;
        let editedPrice = priceEl.value;
        let editedType = typeEl.value;

        nameEl.value = '';
        colorEl.value = '';
        caratsEl.value = '';
        priceEl.value = '';
        typeEl.value = '';

        let saveButtonEl = document.createElement('button');
        saveButtonEl.setAttribute('class', 'save-btn');
        saveButtonEl.textContent = 'Save to Collection';

        let editButtonEl = document.createElement('button');
        editButtonEl.setAttribute('class', 'edit-btn');
        editButtonEl.textContent = 'Edit Information';

        let cancelButtonEl = document.createElement('button');
        cancelButtonEl.setAttribute('class', 'cancel-btn');
        cancelButtonEl.textContent = 'Cancel';

        articleEl.appendChild(nameH3El);
        articleEl.appendChild(colorPEl);
        articleEl.appendChild(caratsPEl);
        articleEl.appendChild(pricePEl);
        articleEl.appendChild(typePEl);
        liEl.appendChild(articleEl);
        liEl.appendChild(saveButtonEl);
        liEl.appendChild(editButtonEl);
        liEl.appendChild(cancelButtonEl);
        ulEl.appendChild(liEl);

        e.currentTarget.disabled = true;

        editButtonEl.addEventListener('click', e => {
            nameEl.value = editedName;
            colorEl.value = editedColor;
            caratsEl.value = editedCarats;
            priceEl.value = editedPrice;
            typeEl.value = editedType;

            liEl.remove();
            addButtonEl.disabled = false;
        });

        saveButtonEl.addEventListener('click', e => {
            let newUlEl = document.querySelector('#collection');
            let newLiEl = document.createElement('li');
            let newPEl = document.createElement('p');
            newPEl.setAttribute('class', 'collection-item');
            newPEl.textContent = `${editedName} - Color: ${editedColor}/ Carats: ${editedCarats}/ Price: ${editedPrice}$/ Type: ${editedType}`;
            newLiEl.appendChild(newPEl);
            newUlEl.appendChild(newLiEl);

            liEl.remove();
            addButtonEl.disabled = false;
        });
        cancelButtonEl.addEventListener('click', e => {
            liEl.remove();
            addButtonEl.disabled = false;
        });
    });
}