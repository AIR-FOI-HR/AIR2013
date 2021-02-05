import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Switch,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {GoogleSignin, GoogleSigninButton, statusCodes} from '@react-native-community/google-signin';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome'; 


export default class App extends React.Component {
    constructor(props) { //Konstruktor za switch 1 i 2
        super(props);
        this.state = {
            toggle: false,
            toggle2: false,
        };
        this.getCurrentUser();
    }

    getCurrentUser = async () => 
    {
        const currentUser = await GoogleSignin.getCurrentUser();
        this.setState({ currentUser });
        console.log("Ušao u google");

	};

	//proba
	//proba 2

    render(){
        return (
			<ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
				<View style={styles.Naslov}>
					<Text style={styles.settingsText}>Dodaj/ukloni</Text>
					<Text style={styles.settingsTextName}>stavke</Text>
				</View>

				<View style={styles.marginaSlikeIokvir1}>
					<TouchableOpacity
						style={styles.dodajUkloniStavke}
						onPress={() => this.props.navigation.navigate('AddEditApartments')}
					>
						<View style={styles.margineTeksta1}>
							<FontAwesomeIcons name="home" size={24}>
								<Text style={styles.tekstIzbornika}> Dodaj ili ukloni apartmane i sobe </Text>
							</FontAwesomeIcons>
							<View style={styles.arrow}>
								<MaterialIcons name="arrow-forward-ios" size={25}></MaterialIcons>
							</View>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.marginaSlikeIokvir2}>
					<TouchableOpacity						
						onPress={() => this.props.navigation.navigate('AddEditTemplate')}>
						<View style={styles.margineTeksta2}>
							<FontAwesomeIcons name="envelope" size={19}>
								<Text style={styles.tekstIzbornika}> Dodaj ili ukloni predložak </Text>
							</FontAwesomeIcons>
							<View style={styles.arrow}>
								<MaterialIcons name="arrow-forward-ios" size={25}></MaterialIcons>
							</View>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
    }
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: '#fff',
		paddingHorizontal: 20,
	},
	Naslov: {
		width: '80%',
	},
	mainView: {
		flexDirection: 'row',
		width: '100%',
		marginTop: 40,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	settingsText: {
		fontSize: 30,
		fontWeight: 'normal',
	},
	settingsTextName: {
		fontSize: 30,
		fontWeight: '700',
	},
	tekstIzbornika: {
		fontWeight: 'bold',
		fontSize: 18,
		left: 28,
		top: -5,
	},
	margineTeksta1: {
		marginBottom: 187,
		marginTop: 0,
		marginLeft: 12,
		bottom: -90,
	},
	margineTeksta2: {
		marginBottom: 40,
		marginTop: 0,
		marginLeft: 12,
		bottom: -20,
	},
	arrow: {
		left: 300,
		bottom: 22,
	},
	marginaSlikeIokvir1: {
		//marginBottom: 40,
		marginTop: 125,
		borderRadius: 22,
		borderWidth: 2,
		borderColor: 'grey',
		height: 40,
		justifyContent: 'center',
		bottom: 50,
	},
	marginaSlikeIokvir2: {
		//marginBottom: 40,
		marginTop: 100,
		borderRadius: 22,
		borderWidth: 2,
		borderColor: 'grey',
		height: 40,
		justifyContent: 'center',
		bottom: 120,
	},
});