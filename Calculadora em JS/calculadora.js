function calculadora(){
	const OPERACAO = prompt('Escolha uma operação: \n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão(/) \n 5 - Divisão Inteira(%) \n 6 - Potenciação (**)')
	console.log(OPERACAO)

	if(!OPERACAO || OPERACAO > 6){
		//Será verificado se foi digitado um número maior do que disponível ou se foi imputado letra
		alert('Operação inexistente')
		calculadora() //Retornará para o ínicio caso seja digitado valores diferentes de números
	} else {
		//Valores a serem digitados pelo usuário para as operações		
		let n1 = Number(prompt('Digite um número: '))
		let n2 = Number(prompt('Digite outro número: '))
		let resultado

		if (!n1 || !n2){
			//Mais uma verificação para identificar se foi digitado alguma letra
			alert('Digite apenas números')
			calculadora() //Retorno para o início da calculadora
		} else{
			function soma() {
				resultado = n1 + n2
				alert(`${n1} +  ${n2} = ${resultado}`)
				novaOperacao() //Ao finalizar a operação, perguntará se quer fazer uma nova operação
				}

			function subtracao(){
				resultado = n1 - n2
				alert(`${n1} -  ${n2} = ${resultado}`)	
				novaOperacao()
				}

			function multi(){
				resultado = n1 * n2
				alert(`${n1} X  ${n2} = ${resultado}`)		
				novaOperacao()
				}

			function divisao(){
				resultado = n1 / n2
				alert(`${n1} /  ${n2} = ${resultado}`)		
				novaOperacao()
			}

			function divisaoInt(){
				resultado = n1 % n2
				alert(`${n1} %  ${n2} = ${resultado}`)		
				novaOperacao()
			}

			function pot(){
				resultado = n1 ** n2
				alert(`${n1} **  ${n2} = ${resultado}`)		
				novaOperacao()
			}

			function novaOperacao() {
				//Função a ser exibida ao final de cada uma das operações
				let repetir = prompt('Deseja fazer uma nova operação? \n 1 - Sim \n 2 - Não')
				if(repetir == 1){
					calculadora()
				} else if (repetir == 2){
					alert('Operação encerrada')
				} else {
					alert('Digite uma opção válida')
					novaOperacao()
				}
			}
			//Calculadora usando estrutura de repetição If e Else if
			
			if (OPERACAO == 1){
				soma()
			} else if (OPERACAO == 2){
				subtracao()
			} else if (OPERACAO == 3){
				multi()
			} else if (OPERACAO == 4){
				divisao()
			} else if (OPERACAO == 5){
				divisaoInt()
			} else if (OPERACAO == 6){
				pot()
			} 
			
		}
	}
}
calculadora()


var a = 1

switch (a){
	case 1:
		console.log ('Tudo certo, jovem!')
		break
	case 2:
		console.log('Algo de errado aconteceu')
		break
	default:
		console.log('Esperando...')
}