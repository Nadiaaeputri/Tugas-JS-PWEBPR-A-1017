const IYA = document.querySelector('#iya');
const TIDAK = document.querySelector('#tidak');

const action = (color, text, occupation, img) => {
    document.querySelectorAll('button').forEach((button) => {
        button.remove();
    });
    const wrapperDiv = document.querySelector('.wrapper > div');
    const h1Element = document.querySelector('.wrapper h1');
    const pElement = document.querySelector('.wrapper > div > div > div:first-child > p');
    const imgElement = document.querySelector('.wrapper > div > img');

    wrapperDiv.style.backgroundColor = color;
    h1Element.innerText = text;
    pElement.innerText = occupation;
    imgElement.setAttribute('src', img);
};

TIDAK.addEventListener('click', () => {
    action('#6FD240', 'Anda Benar!', 'Anda adalah seorang Mahasiswa', 'mahasiswa.png');
});

IYA.addEventListener('click', () => {
    action('#E12E2E', 'Anda Berbohong!', 'Anda adalah seorang Teknisi', 'teknisi.png');
});
