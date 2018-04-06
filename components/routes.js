export default {

    home: {
        initialRoute: true,

        title: 'Inicio',
        component: require('./scenes/Welcome').default,

    },

    avatars: {
        title: 'Dividers',
        component: require('./scenes/Dividers').default
    }
}