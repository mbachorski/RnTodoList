import React from 'react'
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Dashboard from "../screens/Dashboard";
import Settings from "../screens/Settings";
import AddTodoItem from "../screens/AddTodoItem";

const DashboardStack = createStackNavigator(
    {
        Dashboard: {
            screen: Dashboard,
        },
        Settings: {
            screen: Settings,
        },
        AddTodoItem: {
            screen: AddTodoItem,
        },
    },
    {
        /* Same configuration as before */
    }
);

const SwitchNavigator = createSwitchNavigator(
    {
        Login: {
            screen: Login
        },
        Signup: {
            screen: Signup
        },
        Dashboard: {
            screen: DashboardStack
        }
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(SwitchNavigator)
