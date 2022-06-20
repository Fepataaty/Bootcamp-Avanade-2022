const botao = document.getElementById('mode-selector')
const h1 = document.getElementById('header1')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]
const classeDarkMode = 'dark-mode'
function mudarClasses(){
	botao.classList.toggle(classeDarkMode)
	h1.classList.toggle(classeDarkMode)
	body.classList.toggle(classeDarkMode)
	footer.classList.toggle(classeDarkMode)
}

botao.addEventListener('click', mudarModo)

function mudarModo(){
	mudarClasses()
	mudarTexto()
}

function mudarTexto(){
	const lightMode = 'Light Mode'
	const darkMode = 'Dark Mode'

	if (body.classList.contains(classeDarkMode)) {
		botao.innerHTML = lightMode
		h1.innerHTML = darkMode + ' LIGADO'
		return	
	} else {
		botao.innerHTML = darkMode
		h1.innerHTML = lightMode + ' LIGADO'
	}

}


