const formElem = document.forms[0];
const nameElem = formElem.name;
const lastnameElem = formElem.lastname;
const mailElem = formElem.mail;
const photoElem = formElem.photo;
const cardBox = document.querySelector('.cardBox')

let cards = [];

formElem.addEventListener('submit', event => {
    event.preventDefault();
    cards.push({
        name: nameElem.value,
        lastname: lastnameElem.value,
        mail: mailElem.value,
        img: photoElem.value
    });
    render();
});

function render() {
    cardBox.innerText = '';
    for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('div');
        const cardName = document.createElement('p');
        const cardLastname = document.createElement('p');
        const cardMail = document.createElement('p');
        const cardPhoto = document.createElement('div');
        const deleteCardElem = document.createElement('div');

        deleteCardElem.addEventListener('click', () => {
            cards = cards.filter(elem => elem.name !== cards[i].name);
            render()
        });

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


        card.addEventListener('click', () => {
            cardName.innerText = '*********';
            cardLastname.innerText = '*********';
            cardMail.innerText = '*********';
        });
    };
};
