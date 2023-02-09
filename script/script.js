const formElem = document.forms[0];
const cardBox = document.querySelector('.cardBox')

let cards = [];

function render() {
    cardBox.innerText = '';
    for (let i = 0; i < cards.length; i++) {
        let {name, lastname, mail, img, hide} = cards[i]
        const card = document.createElement('div');
        const cardName = document.createElement('p');
        const cardLastname = document.createElement('p');
        const cardMail = document.createElement('p');
        const cardPhoto = document.createElement('div');
        const deleteCardElem = document.createElement('div');

        cardBox.append(card);
        card.append(cardName, cardLastname, cardMail, cardPhoto, deleteCardElem);

        card.classList.add('card');
        cardPhoto.classList.add('cardPhoto');
        deleteCardElem.classList.add('cardDelete');

        cardName.innerText = cards[i].name;
        cardLastname.innerText = cards[i].lastname;
        cardMail.innerText = cards[i].mail;
        deleteCardElem.innerText = '❌';
        cardPhoto.style.backgroundImage = `url("${formElem.photo.img}")`;

        deleteCardElem.addEventListener('click', () => {
            cards = cards.filter(elem => elem.name !== cards[i].name);
            render()
        });

        card.addEventListener('dblclick', () => {
            for (let i = 0; i < cards.length; i++) {
                if (cards[i].name === name) {
                    cards[i].hide = !cards[i].hide
                };
            };
            render()
        });

        if (hide) {
            cardName.innerText = '*'.repeat(name.length);
            cardLastname.innerText = '*'.repeat(lastname.length);
            cardMail.innerText = '*'.repeat(mail.length);
            cardPhoto.innerText = img;
        } else {
            cardName.innerText = name;
            cardLastname.innerText = lastname;
            cardMail.innerText = mail;
            cardPhoto.innerText = img;
        };
    };
};

formElem.addEventListener('submit', event => {
    event.preventDefault();
    const {name, lastname, mail, photo} = event.target;
    cards.push({
        name: name.value,
        lastname: lastname.value,
        mail: mail.value,
        img: photo.value,
        hide: false
    });
    render();
});
