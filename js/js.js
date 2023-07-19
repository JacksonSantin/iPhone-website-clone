const colorName = document.querySelector('.colorName');
const colorItems = document.querySelectorAll('.bullets li');
const image = document.querySelector('#product-image');

colorItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    colorItems.forEach((item) => {
      item.querySelector('.color').classList.remove('selected');
    });

    const clickedItem = e.currentTarget;
    const color = clickedItem.getAttribute('id');

    clickedItem.querySelector('.color').classList.add('selected');
    colorName.textContent = getColorName(color);
    changeImage(color);
  });
});

function getColorName(color) {
  switch (color) {
    case 'gold':
      return 'Dourado';
    case 'silver':
      return 'Prateado';
    case 'black':
      return 'Preto Espacial';
    case 'purple':
    default:
      return 'Roxo-profundo';
  }
}

function changeImage(color) {
  image.classList.add('changing');

  setTimeout(() => {
    image.setAttribute('src', `assets/iPhone_${color}.jpg`);

    setTimeout(() => {
      image.classList.remove('changing');
    }, 10);
  }, 500);
}
