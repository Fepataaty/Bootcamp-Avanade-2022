function validaArray (arr, num){
	try{
		if (!arr && !num) throw new ReferenceError('Envie os parâmetros!')
			//verificação onde se não exite array e número, que retorne um erro ReferenceError	
	
		if(typeof arr !== 'object') throw new TypeError('Array não é considerada como um objeto!')
			//verificação do tipo da array, que deve ser considerada do tipo objeto
	
		if(typeof num !== 'number') throw new TypeError('Tenha certeza de enviar um número!')
			//verificação do tipo do número que será imputado
	
		if(arr.length !== num) throw new RangeError('Tamanho não deve exceder o valor do número indicado!')
			//verificação do tamanho da array com o número que foi informado
		
		return arr
	}
	catch(e){
		if (e instanceof ReferenceError){
			console.log('Esse se trata de um ReferenceError.')
			console.log(e.message)
		} else if (e instanceof TypeError){
			console.log('Esse se trata de um TypeError.')
			console.log(e.message)
		} else if (e instanceof RangeError){
			console.log('Esse se trata de um RangeError.')
			console.log(e.message)
		} else {
			console.log('Ocorreu um tipo de erro não esperado.' + e)
		}
	}
}	

console.log(validaArray())