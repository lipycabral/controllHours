import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import Logo from '../components/Logo'
import moment from 'moment'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lstSprint: [
                {name: 'Sprint 1', squad: 'Gerdau', createdBy: 'Felipy', dateCreate: moment().format("DD-MM-YYYY")},
                {name: 'Sprint 2', squad: 'Opah', createdBy: 'João', dateCreate: moment().subtract(2, "days").format("DD-MM-YYYY")},
                {name: 'Sprint 3', squad: 'Gerdau', createdBy: 'Felipy', dateCreate: moment().subtract(3, "days").format("DD-MM-YYYY")},
            ]
        }
    }

    __lstSprint = lstSprint => {
        let lstView = lstSprint.map((sprint, i) => {
            return (
                <TouchableOpacity key={i}>
                    <Text>
                        {sprint.name}
                    </Text>
                    <Text>
                        {sprint.squad}
                    </Text>
                    <Text>
                        {sprint.createdBy}
                    </Text>
                    <Text>
                        {sprint.dateCreate}
                    </Text>
                </TouchableOpacity>
            )
        })
        return lstView
    }
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView />
                <ScrollView>
                    <Logo style={{ marginVertical: 30 }} />
                    <View >
                        <View style={styles.boxLstSprint}>
                            <Text style={{ textAlign: 'center' }}>Sprints em andamento</Text>
                            {this.__lstSprint(this.state.lstSprint)}
                        </View>
                        <TouchableOpacity
                            style={styles.btn}>
                            <Text>Criar sprint</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btn: {
        marginHorizontal: '10%',
        width: '80%',
        height: 50,
        flexDirection: 'row',
        marginVertical: 5,
        borderRadius: 5,
        alignItems: 'center',
        borderColor: '#A6A6A6',
        borderWidth: .5,
        shadowColor: '#A6A6A6',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: .5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxLstSprint: {
        width: '100%',
        marginVertical: 10
    }
})