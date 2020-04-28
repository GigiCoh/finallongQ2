
let mainNav = document.getElementById('js-menu');

let navBarToggle = document.getElementById('navbar-toggle');

navBarToggle.addEventListener('click', function()
{
	mainNav.classList.toggle('active');
});
