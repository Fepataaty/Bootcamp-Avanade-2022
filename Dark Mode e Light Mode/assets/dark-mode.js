const botao = document.getElementById('mode-selector')
const corpo = document.getElementsByTagName('body')[0]
const rodape = document.getElementsByTagName('footer')[0]
const header = document.getElementById('header1')

botao.addEventListener('click', mudarModo)

function mudarModo(){
	botao.classList.toggle('dark-mode')
	corpo.classList.toggle('dark-mode')
	rodape.classList.toggle('dark-mode')
	header.classList.toggle('dark-mode')
	mudarTexto()
}

function mudarTexto(){
	if (corpo.classList.contains('dark-mode')){
		botao.innerHTML = 'Light Mode'
		header.innerHTML = 'Dark Mode LIGADO'
	} else {
		botao.innerHTML = 'Dark Mode'
		header.innerHTML = 'Light Mode LIGADO'
	}
}