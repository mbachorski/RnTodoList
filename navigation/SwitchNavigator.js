import React from 'react'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Dashboard from "../screens/Dashboard";

const SwitchNavigator = createSwitchNavigator(
    {
        Login: {
            screen: Login
        },
        Signup: {
            screen: Signup
        },
        Dashboard: {
            screen: Dashboard
        }
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(SwitchNavigator)
