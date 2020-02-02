import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {connect} from 'react-redux'
import Firebase from '../config/Firebase'

class Dashboard extends React.Component {
    static navigationOptions = {
        title: 'Settings',
    }

    handleSignout = () => {
        Firebase.auth().signOut()
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Settings Screen</Text>
                <Text>{this.props.user.email}</Text>
                <Button title='Logout' onPress={this.handleSignout}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Dashboard)
