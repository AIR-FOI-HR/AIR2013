import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Home from '../screens/Home'
import SignIn from '../screens/SignIn'
import Settings from '../screens/Settings'
import DetailedRequest from '../screens/DetailedRequest'

const stackNavigatorOptions = {
    headerShown: false
}

const AppNavigator = createStackNavigator({
     SignIn:{
        screen: SignIn
    },
    Home:{
        screen: Home
    },
    DetailedRequest:{
        screen: DetailedRequest
    },
    Settings:{
        screen: Settings
    },
},
    {
        defaultNavigationOptions:stackNavigatorOptions
    }
)

export default createAppContainer(AppNavigator);