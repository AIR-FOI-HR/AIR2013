import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Home from '../screens/Home'
import SignIn from '../screens/SignIn'

const stackNavigatorOptions = {
    headerShown: false
}

const AppNavigator = createStackNavigator({
    SignIn:{
        screen: SignIn
    },
    Home:{
        screen: Home
    }
},
    {
        defaultNavigationOptions:stackNavigatorOptions
    }
)

export default createAppContainer(AppNavigator);