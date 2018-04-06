import React from "react";

import { Navigator, DrawerLayoutAndroid, ScrollView, View, Text } from 'react-native';

import { Toolbar as MaterialToolbar } from 'react-native-material-design';

import Navigation from './components/Navigation'
import Home from './components/scenes/Home'
import Buscador from './components/scenes/Buscador'
import Cerca from './components/scenes/Cerca'
import Deportes from './components/scenes/Deportes'
import Envio from './components/scenes/Envio'
import Ocio from './components/scenes/Ocio'

import {
  Scene,
  Router,
  Actions,
  Stack,
} from 'react-native-router-flux';

export default class App extends React.Component {
	static childContextTypes = {
		drawer: React.PropTypes.object,
		navigator: React.PropTypes.object
	};

	constructor(props) {
		super(props);
		this.state = {
			drawer: null,
			navigator: null
		};
	}

	getChildContext = () => {
		return {
			drawer: this.state.drawer,
			navigator: this.state.navigator
		}
	};

	setDrawer = (drawer) => {
		this.setState({
			drawer
		});
	};

	setNavigator = (navigator) => {
		this.setState({
			navigator: new Navigate(navigator)
		});
	};

	onIconPress = () => {
		this.state.drawer.openDrawer();
	}
	drawerClose = () => {
		this.state.drawer.closeDrawer()
	}

  render() {
  	const { drawer, navigator } = this.state;
  	var props = { handleClose: this.drawerClose};
		const navView = React.createElement(Navigation,props);

  	
    return (
    	<DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
				renderNavigationView={() => {
                    if (drawer && navigator) {
                        return navView;
                    }
                    return navView;
                }}
				ref={(drawer) => { !this.state.drawer ? this.setDrawer(drawer) : null }}
      		>


		<View style={{flex: 1}}>
      		<View style={{flex: 1}}>
	      		<MaterialToolbar
	                title='Eventos Madrid'
	                icon='menu'
	                onIconPress={this.onIconPress}
	            />
			</View>

			<View style={{flex: 15}}>
		      <Router>
			      <Stack key="root" drawer={true}>
			        <Scene key="home" component={Home} hideNavBar/>
			        <Scene key="buscador" component={Buscador} hideNavBar/>
			        <Scene key="cerca" component={Cerca} hideNavBar/>
			        <Scene key="deportes" component={Deportes} hideNavBar/>
			        <Scene key="envio" component={Envio} hideNavBar/>
			        <Scene key="ocio" component={Ocio} hideNavBar/>
			      </Stack>
			    </Router>
		    </View>
		</View>		      
    </DrawerLayoutAndroid>
    );
  }
}
