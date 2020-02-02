import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {connect} from 'react-redux'
import Firebase from '../config/Firebase'
import {bindActionCreators} from "redux";
import {addItem} from "../actions/todosActions";

class AddTodoItem extends React.Component {
    static navigationOptions = {
        title: 'Add new Todo Item',
    }

    add = () => {
        this.props.addItem({
            key: 123,
            text: 'TodoItem ' + 123,
            checked: false,
        })
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Settings Screen</Text>
                <Text>{this.props.user.email}</Text>
                <Button title='Add' onPress={this.add}/>
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

const mapDispatchToProps = dispatch => {
    return bindActionCreators({addItem}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodoItem)
