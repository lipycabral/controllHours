import React, { Component } from 'react'

import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image
} from 'react-native'

import TxtInput from '../components/TxtInput'
import Logo from '../components/Logo'

const login = require('../assets/icons/login.png')

export default class Login extends Component {
    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <SafeAreaView />
                <Logo style={{marginVertical: 30}} />
                <TxtInput placeholder='Email' type='login' />
                <TxtInput placeholder='******' type='password' />
                <TouchableOpacity
                    style={{
                        borderRadius: 180,
                        borderColor: '#A6A6A6',
                        borderWidth: .5,
                        width: 100,
                        height: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 30
                    }}
                    onPress={() => navigate('DrawerNavigator')}
                >
                    <Image
                        source={login}
                        style={{ width: 50, height: 50 }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center'
    }
})

