const burgerMenu = document.querySelector('.burger-menu');
const header = document.querySelector('.header');
const mobileMenu = document.createElement('div');
mobileMenu.classList.add('mobile-menu');


burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('active-burger');
    if (burgerMenu.classList.contains('active-burger')) {
        header.appendChild(mobileMenu);
        mobileMenu.innerHTML = `
            <ul class="mobile-list">
                <li><a href="./stories.html">STORIES</a></li>
                <li><a href="./features.html">FEATURES</a></li>
                <li><a href="./pricing.html">PRICING</a></li>
            </ul>
            <hr class="hr">
            <button class="mobile__button">GET AN INVITE</button>
        `;
    } else {
        header.removeChild(mobileMenu);
    }
})

let toggleSwitch = document.querySelector('.toggle-input'); //елементи зміни місячної чи річної ціни
let toggleTextLeft = document.querySelector('.toggle-text--left');
let toggleTextRight = document.querySelector('.toggle-text--right');
let toggleLabel = document.querySelector('.toggle-label');

let basicPlan = document.querySelector('.basic-change-price');
let proPlan = document.querySelector('.pro-change-price');
let businessPlan = document.querySelector('.business-change-price');
let per = document.querySelectorAll('.per');

toggleSwitch.addEventListener('change', function() {
        
    if (toggleSwitch.checked) {
    // вибрано "Yearly", змінюємо всі ціни відповідно до річної підписки
        console.log('Yearly option selected');
        toggleTextLeft.classList.remove('toggle-text-active');
        toggleTextRight.classList.add('toggle-text-active');
        toggleLabel.classList.add('toggle-label-black');

        basicPlan.innerHTML = `$190.00`;

        proPlan.innerHTML = `$390.00`;

        businessPlan.innerHTML = `$990.00`;

        per.forEach(per => {
            per.innerHTML = 'per year';
        })

    } else {
        // "Monthly", змінюємо всі ціни відповідно до місячної підписки
        console.log('Monthly option selected');
        toggleTextLeft.classList.add('toggle-text-active');
        toggleTextRight.classList.remove('toggle-text-active');
        toggleLabel.classList.remove('toggle-label-black');

        basicPlan.innerHTML = `$19.00`;

        proPlan.innerHTML = `$39.00`;

        businessPlan.innerHTML = `$99.00`;

        per.forEach(per => {
            per.innerHTML = 'per month';
        })
    }
});