import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Home from '../screens/Home'
import DetailedRequest from '../screens/DetailedRequest'

const stackNavigatorOptions = {
    headerShown: false
}

const AppNavigator = createStackNavigator({
    Home:{
        screen: Home
    },
    DetailedRequest:{
        screen: DetailedRequest
    }
},
    {
        defaultNavigationOptions:stackNavigatorOptions
    }
)

export default createAppContainer(AppNavigator);