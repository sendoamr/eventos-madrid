import React from "react";
import { PropTypes, ScrollView, StyleSheet, View, Text, Image, IntentAndroid } from 'react-native';

export default class Home extends React.Component {

    constructor(props) {
	    super(props);
	    this.state = {data: {
	    	"@graph": [
	    		{ title: 'Cargando ...'}
	    	]
	    }}
	    that = this
		
		fetch('https://datos.madrid.es/egob/catalogo/300107-0-agenda-actividades-eventos.json?latitud=40.44633571353733&longitud=-3.664120099999991&distancia=1000')
	    .then((response) => response.json())
	    .then((responseJson) => {
	      	that.setState({'data': responseJson})
	    })
	    .catch((error) => {
	      console.error(error);
	    });
	}

	componentDidMount() {
		
	}


    render() {

        return (
            <View style={{padding: 5, paddingTop: 30}}>
            	<ScrollView>              
                	{
					  this.state.data['@graph'].map(( item, key ) =>
					  (
					    <View key = { key }>
			                <Text style = { styles.text }>{ item.title }</Text>
			                <View style = { styles.separator }/>
			            </View>
					  ))
					 }
				</ScrollView>
             </View>
        );
    }

}

const styles = StyleSheet.create(
{
  
  separator:
  {
    height: 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%'
  },

  text:
  {
    fontSize: 18,
    color: 'black',
    padding: 15
  }
});