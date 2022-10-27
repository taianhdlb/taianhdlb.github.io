let $bar = document.getElementById('fa-bars');
let $headerMenu = document.getElementById('headerMenu');

$bar.addEventListener('click', function () {
    $headerMenu.classList.toggle('toggle-display');
})