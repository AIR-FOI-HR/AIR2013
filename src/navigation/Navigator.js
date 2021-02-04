import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Home from '../screens/Home'
import SignIn from '../screens/SignIn'
import Settings from '../screens/Settings'
import DetailedRequest from '../screens/DetailedRequest'
import AddAparOrTemp from '../screens/ModularScreens/AddAparOrTemp'
import AddEditApartments from '../screens/ModularScreens/AddEditApartments'
import Apartments from '../screens/ModularScreens/Apartments'
import AddEditTemplate from '../screens/ModularScreens/AddEditTemplate'
import Templates from '../screens/ModularScreens/Templates'
const stackNavigatorOptions = {
    headerShown: false
}

const AppNavigator = createStackNavigator(
	{
		SignIn: {
			screen: SignIn,
		},
		Home: {
			screen: Home,
		},
		DetailedRequest: {
			screen: DetailedRequest,
		},
		Settings: {
			screen: Settings,
		},
		AddAparOrTemp: {
			screen: AddAparOrTemp,
		},
		AddEditApartments: {
			screen: AddEditApartments,
		},
		AddEditTemplate: {
			screen: AddEditTemplate,
		},
		Apartments: {
			screen: Apartments,
		},
		Templates: {
			screen: Templates,
		}
	},
	{
		defaultNavigationOptions: stackNavigatorOptions,
	}
);

export default createAppContainer(AppNavigator);