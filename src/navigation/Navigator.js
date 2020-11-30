import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Home from '../screens/Home'
import SignIn from '../screens/SignIn'
import DetailedRequest from '../screens/DetailedRequest'

const stackNavigatorOptions = {
    headerShown: false
}

const AppNavigator = createStackNavigator({
     
    Home:{
        screen: Home
    }, 
    SignIn:{
        screen: SignIn
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