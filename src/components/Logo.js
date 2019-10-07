import React, { PureComponent } from 'react'
import { Text, View, Image } from 'react-native'

const logo = require('../assets/icons/logo.png')

export default class Logo extends PureComponent {
    render() {
        return (
            <View
                style={[this.props.style ,{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }]}
            >
                <Image
                    source={logo}
                    style={{ width: 80, height: 80 }}
                />
                <Text style={{ color: 'rgba(0,0,0,.54)', fontSize: 30, fontWeight: 'bold' }}>Control Hour</Text>
            </View>
        )
    }
}
