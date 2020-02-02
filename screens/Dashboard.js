import React from 'react'
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Image} from 'react-native'
import {connect} from 'react-redux'
import Firebase from '../config/Firebase'
import Card from "../components/Card";
import {CardSection} from "../components/CardSection";
import {bindActionCreators} from "redux";
import {signup, updateEmail, updatePassword} from "../actions/user";

class Dashboard extends React.Component {
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return {
            title: 'Dashboard',
            headerTitleStyle: {color: '#fff'},
            headerStyle: {backgroundColor: '#00f'},
            headerRight: <TouchableOpacity title='Settings' onPress={params.handleSave}>
                <Image source={require('../assets/settings.png')}/>
            </TouchableOpacity>
        };
    };

    _saveDetails = () => {
        this.props.navigation.navigate('Settings')
    }

    componentDidMount() {
        this.props.navigation.setParams({handleSave: this._saveDetails});
    }

    constructor(props) {
        super(props)

        // const list = []
        //
        //
        // for (let i = 0; i < 100; i++) {
        //     list[i] = {
        //         key: i,
        //         text: 'TodoItem',
        //         checked: false,
        //     }
        // }
        //
        // this.state = {
        //     list: list
        // }
    }


    handleSignout = () => {
        Firebase.auth().signOut()
        this.props.navigation.navigate('Login')
    }

    checkThisBox = (id) => {
        alert(`Checkbox clicked ${id}`)

        let list = this.props.list
        list[id].checked = !list[id].checked
        this.setState({list: list})
    }

    addTodoItem = () => {
        // alert('FAB clicked')
        this.props.navigation.navigate('AddTodoItem')
    }

    render() {

        console.log('PROPS', this.props.list)

        return (
            <View style={styles.container}>
                <Card>
                    <CardSection>
                        <Text>User: {this.props.user.email}</Text>
                    </CardSection>
                </Card>

                <View style={styles.list}>
                    <FlatList
                        data={this.props.list}
                        renderItem={({item}) =>
                            <View
                                style={styles.item}>
                                <Text style={styles.itemText}>
                                    {item.text}
                                </Text>
                                <TouchableOpacity
                                    style={styles.checkButton}
                                    title=''
                                    onPress={() => this.checkThisBox(item.key)}
                                />
                            </View>}
                    />
                </View>

                <TouchableOpacity onPress={() => this.addTodoItem()} style={styles.fab}>
                    <Text style={styles.fabIcon}>+</Text>
                </TouchableOpacity>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    list: {
        flex: 1,
        margin: 5,
        backgroundColor: 'white',
        height: 80,
        justifyContent: 'flex-end',
        paddingLeft: 10,
        elevation: 1
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        // flex: 1,
        padding: 10,
        fontSize: 18,
        height: 84,
        borderWidth: 2,
    },
    itemText: {
        flex: 1,
    },
    fab: {
        position: 'absolute',
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: '#03A9F4',
        borderRadius: 30,
        elevation: 8
    },
    fabIcon: {
        fontSize: 40,
        color: 'white'
    },
    checkButton: {
        width: 25,
        height: 25,
        backgroundColor: '#fff',
        borderColor: '#000000',
        borderWidth: 2,
    },
});

const mapStateToProps = state => {
    console.log('state', state)
    return {
        user: state.user,
        list: state.todosReducer.items,
    }
}



export default connect(mapStateToProps)(Dashboard)
