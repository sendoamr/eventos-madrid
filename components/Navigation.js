import React from "react";
import { Component, PropTypes, View, Text, Image } from 'react-native';

import { Avatar, Drawer, Divider, COLOR, TYPO } from 'react-native-material-design';

import {
  Actions
} from 'react-native-router-flux';

export default class Navigation extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            route: null
        }
    }

    changeScene = (path, name) => {

        switch(path) {
		    case 'home':
		        Actions.home()
		        break;
		    case 'buscador':
		        Actions.buscador()
		        this.props.handleClose()
		        break;
		    case 'cerca':
		        Actions.cerca()
		        Actions.drawerOpen()
		        this.props.handleClose()
		        break;
		    case 'deportes':
		        Actions.deportes()
		        this.props.handleClose()
		        break;
		    case 'envia':
		        Actions.envio()
		        this.props.handleClose()
		        break;
		    case 'ocio':
		        Actions.ocio()
		        this.props.handleClose()
		        break;		    
		    default:
		       Actions.home()
		       this.props.handleClose()
		}
		        //drawer.closeDrawer();
    };
    openDrawer = () => {
        drawer.openDrawer();
    };

    opne

    render() {
        const { route } = this.state;

        return (
            <Drawer theme='light'>
                <Drawer.Header>
                    <View style={styles.header}>
                        <Text style={[styles.text, COLOR.paperGrey50, TYPO.paperFontSubhead]}>Eventos Madrid</Text>
                    </View>
                </Drawer.Header>

                <Drawer.Section
                    items={[{
                        icon: 'home',
                        value: 'Inicio',
                        active: !route || route === 'inicio',
                        onPress: () => this.changeScene('inicio'),
                        onLongPress: () => this.changeScene('inicio')
                    }]}
                />
                <Drawer.Section
                    items={[{
                        icon: 'map',
                        value: 'Cerca de mi',
                        active: !route || route === 'cerca',
                        onPress: () => this.changeScene('cerca'),
                        onLongPress: () => this.changeScene('cerca')
                    }]}
                />
                <Drawer.Section
                    items={[{
                        icon: 'search',
                        value: 'Buscador',
                        active: !route || route === 'buscador',
                        onPress: () => this.changeScene('buscador'),
                        onLongPress: () => this.changeScene('buscador')
                    }]}
                />
				<Drawer.Section
                    items={[{
                        icon: 'people',
                        value: 'Ocio y cultura',
                        active: !route || route === 'ocio',
                        onPress: () => this.changeScene('ocio'),
                        onLongPress: () => this.changeScene('ocio')
                    }]}
                />
                <Drawer.Section
                    items={[{
                        icon: 'people',
                        value: 'Deportes',
                        active: !route || route === 'deportes',
                        onPress: () => this.changeScene('deportes'),
                        onLongPress: () => this.changeScene('desportes')
                    }]}
                />

                <Divider style={{ marginTop: 8 }} />
                <Drawer.Section
                    title="Colabora"
                    items={[{
                        icon: 'mail',
                        value: 'Envia tus eventos',
                        label: '24',
                        active: route === 'envia',
                        onPress: () => this.changeScene('envia'),
                        onLongPress: () => this.changeScene('envia')
                    }]}
                />

            </Drawer>
        );
    }
}

const styles = {
    header: {
        paddingTop: 16
    },
    text: {
        marginTop: 20
    }
};