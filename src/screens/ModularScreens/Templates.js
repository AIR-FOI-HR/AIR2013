import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Switch, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../constants/DesignConstants';
export default class App extends React.Component {
	render() {
		return (
			<ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
				<View style={styles.Naslov}>
					<Text style={styles.settingsText}>Uredi</Text>
					<Text style={styles.settingsTextName}>predložak</Text>
				</View>
				<View style={styles.marginaSlikeIokvir1}>
					<View style={styles.margineTeksta1}>
						<Text style={styles.tekstIzbornika}>Naziv predloška </Text>
					</View>
				</View>

				<View style={styles.marginaSlikeIokvir2}>
					<View style={styles.margineTeksta2}>
						<Text style={styles.tekstIzbornika}>Tekst predloška </Text>
					</View>
				</View>
				<View style={styles.txtButtonIcon}>
					<View style={styles.btn1}>
						<TouchableHighlight style={styles.btnBorder1}>
							<EntypoIcon name="save" size={21}></EntypoIcon>
						</TouchableHighlight>
						<TouchableHighlight>
							<Text style={styles.btnText1}>SPREMI</Text>
						</TouchableHighlight>
					</View>
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
		marginBottom: 0,
		marginTop: 0,
		marginLeft: -15,
		bottom: 30,
	},
	margineTeksta2: {
		marginBottom: 0,
		marginTop: 0,
		marginLeft: -15,
		bottom: 210,
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
		bottom: 60,
	},
	marginaSlikeIokvir2: {
		//marginBottom: 40,
		marginTop: 100,
		borderRadius: 22,
		borderWidth: 2,
		borderColor: 'grey',
		height: 400,
		justifyContent: 'center',
		bottom: 110,
	},
	btn1: {
		left: 245,
		bottom: 120,
		height: 110,
	},
	btnBorder1: {
		top: 32.5,
		borderColor: colors.black,
		backgroundColor: colors.white,
		borderRadius: 8,
		borderWidth: 2,
		padding: 8,
		width: '30%',
		height: '35%',
	},
	btnText1: {
		fontWeight: 'bold',
		fontSize: 14,
		left: 45,
		top: 5,
	},
});