import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Home from '../screens/Home'
<<<<<<< HEAD
import SignIn from '../screens/SignIn'
=======
import DetailedRequest from '../screens/DetailedRequest'
>>>>>>> Home

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
    }
},
    {
        defaultNavigationOptions:stackNavigatorOptions
    }
)

export default createAppContainer(AppNavigator);