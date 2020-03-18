import React, {Componente} from 'react'
import {createAppContainer, createStackNavigator} from 'react-navigation';

import Login from './Meuapp/Login'

const MainNav = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                header: null
            }
        }
    }

)

export default createAppContainer(MainNav);