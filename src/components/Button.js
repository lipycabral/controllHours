import React, { Component } from 'react'
import {
    Text,
    TouchableOpacity
} from 'react-native'

export default class Button extends Component {
    render() {
        let text = this.props.text || 'Erro'
        let funcDo = this.props.funcDo || (() => console.warn('Erro'))
        return (
            <TouchableOpacity
                onPress={() => funcDo}
                style={{
                    width: '80%',
                    height: 50,
                    flexDirection: 'row',
                    marginVertical: 5,
                    borderRadius: 5,
                    alignItems: 'center',
                    borderColor: '#A6A6A6',
                    borderWidth: .5
                }}
            >
                <Text>{text}</Text>
            </TouchableOpacity>
        )
    }
}
