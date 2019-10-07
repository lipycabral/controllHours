import React, { Component } from 'react'
import {
    TextInput,
    StyleSheet,
    View,
    Image
} from 'react-native'

const user = require('../assets/icons/user.png')
const password = require('../assets/icons/password.png')

const regexLogin = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
const regexPassword = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"

export default class TxtInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valueMatch: false
        }
    }
    textChange = (text, type) => {
        if (type !== 'normal') {
            this.regex(text, type) ?
                !this.state.valueMatch ?
                    this.setState({ valueMatch: true }) : null
                : this.state.valueMatch ?
                    this.setState({ valueMatch: false }) : null
        }
    }
    regex = (text, type) => {
        if (text) {
            let regex = new RegExp(type === 'password' ? regexPassword : regexLogin)
            return regex.test(text)
        }
        return false
    }
    render() {
        let type = this.props.type || 'normal'
        let valueMatch = this.state.valueMatch
        return (
            <View style={{
                width: '80%',
                height: 50,
                flexDirection: 'row',
                marginVertical: 5,
                borderRadius: 5,
                alignItems: 'center',
                borderColor: valueMatch ? 'blue' : 'red',
                borderWidth: .5,
                shadowColor: valueMatch ? 'blue' : 'red',
                shadowOffset: {
                    width: 2,
                    height: 2
                },
                shadowOpacity: .5,
                backgroundColor: 'white'
            }}>
                {type !== 'normal' ?
                    <Image
                        source={type === 'login' ? user : type === 'password' ? password : null}
                        style={{ width: 40, height: 40, marginRight: 5 }}
                        resizeMode='contain'
                    /> : null
                }
                <TextInput
                    style={{
                        width: '100%',
                        height: 50,
                        paddingBottom: 0
                    }}
                    placeholderTextColor='rgba(0,0,0,0.54)'
                    secureTextEntry={type === 'password' ? true : false}
                    onChangeText={text => { this.textChange(text, type) }}
                    {...this.props}
                />
            </View>
        )
    }
}
