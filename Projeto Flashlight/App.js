import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
//import Torch from 'react-native-torch';
//import RNShake from 'react-native-shake';


const App = () =>{
  const [troca, setTroca] = useState(false);//Para verificação e troca entre o container e o containerYellow
  const mudaValorTroca = () => setTroca(oldTroca => !oldTroca);//Função que inverte valor 'true' para 'false' e vice-versa

  /*useEffect(()=> {
    //Liga lanterna do celular
    Torch.switchState(troca);
  }, [troca])*/

  /*useEffect(() => {
    //Muda os modos e liga a lanterna ao chacoalhar a tela
    const evento = RNShake.addListener(() => {
      mudaValorTroca()
    })

    return () => evento.remove();
  }, []);*/

  return <View style={troca ? style.containerYellow : style.container}>

    <TouchableOpacity onPress={mudaValorTroca}>   
      <Image style={style.pikachu} //If ternário onde se troca = true, Pikachu acordado (blinking); = false Pikachu dormindo (sleeping)
      source= {troca ? require('./assets/icones/pikachu-blinking.webp') 
      : require('./assets/icones/pikachu-sleeping.webp')}
      /> 
    </TouchableOpacity>  
      
      <Image style={style.logotipo} //If ternário onde = true, Logo da Dio colorida; = fase, Logo da Dio branca
      source= { troca ? require('./assets/icones/logo-dio.png')
      : require('./assets/icones/logo-dio-white.png')}
      />
  </View>
}

export default App

const style = StyleSheet.create({
  container: { //Serve para deixar a tela do aplicativo no modo escuro
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerYellow: { //Serve para deixar a tela do aplicativo na cor mostarda
    flex: 1,
    backgroundColor: '#ffdb58',
    alignItems: 'center',
    justifyContent: 'center'
  },

  pikachu:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },

  logotipo:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 100,
    height: 100,
  }
});