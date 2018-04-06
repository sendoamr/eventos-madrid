import React from "react";
import { Toolbar as MaterialToolbar } from 'react-native-material-design';


export default class Navigation extends React.Component {

    render() {
        return (
            <MaterialToolbar
            	style={styles.toolbar}
                title='Eventos Madrid'
                icon='menu'
                onIconPress={this.props.onIconPress}
            />
        );
    }
}

const styles = {
    toolbar: {
        backgroundColor: 'red'
    }
};