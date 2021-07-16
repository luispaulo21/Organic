const opcaoLogin = document.querySelector('.cabecalho__principal .cabecalho__banner .cabecalho__menuTopo .menu-desktop a.login');
const formularioLogin = document.querySelector('.cabecalho__principal .cabecalho__banner .cabecalho__menuTopo .menu-desktop .popup-login')

opcaoLogin.addEventListener('click', () => {
	console.log(formularioLogin.classList.toggle('habilitado'));
});