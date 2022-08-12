//add state to track item number
let numberOfItems = 0;

// step 1 grab element from DOM

const soda = document.getElementById('soda');
const cheese = document.getElementById('cheese');
const grapes = document.getElementById('grapes');
const bread = document.getElementById('bread');
const watermelon = document.getElementById('watermelon');
const items = document.getElementById('items');

// add event listener
soda.addEventListener('click', () => {
    if (!soda.classList.contains('picked') && numberOfItems === 3) return;
    soda.classList.toggle('picked');

    //updating tracker
    if (soda.classList.contains('picked')) {
        numberOfItems++;
    } else {
        numberOfItems--;
    }
    items.textContent = numberOfItems;
});

cheese.addEventListener('click', () => {
    if (!cheese.classList.contains('picked') && numberOfItems === 3) return;
    cheese.classList.toggle('picked');
    //updating tracker
    if (cheese.classList.contains('picked')) {
        numberOfItems++;
    } else {
        numberOfItems--;
    }
    items.textContent = numberOfItems;
});

grapes.addEventListener('click', () => {
    if (!grapes.classList.contains('picked') && numberOfItems === 3) return;
    grapes.classList.toggle('picked');
    //updating tracker
    if (grapes.classList.contains('picked')) {
        numberOfItems++;
    } else {
        numberOfItems--;
    }
    items.textContent = numberOfItems;
});

bread.addEventListener('click', () => {
    if (!bread.classList.contains('picked') && numberOfItems === 3) return;
    bread.classList.toggle('picked');
    //updating tracker
    if (bread.classList.contains('picked')) {
        numberOfItems++;
    } else {
        numberOfItems--;
    }
    items.textContent = numberOfItems;
});

watermelon.addEventListener('click', () => {
    if (!watermelon.classList.contains('picked') && numberOfItems === 3) return;
    watermelon.classList.toggle('picked');
    //updating tracker
    if (watermelon.classList.contains('picked')) {
        numberOfItems++;
    } else {
        numberOfItems--;
    }
    items.textContent = numberOfItems;
});
