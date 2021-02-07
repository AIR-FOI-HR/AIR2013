import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Switch,
	Button,
	TouchableHighlight,
	ActivityIndicator
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../constants/DesignConstants';
import { RadioButton } from 'react-native-paper';
import { FetchDataFromAPI } from '../../backend/ApiConnection'

export default class App extends React.Component {

	state = {
		checked: 'first',
		dataSourceTemplates: null,
		isLoading: true
	};

	urlTemplates = 'https://air2020api.azure-api.net/api/EmailTemplates'

	async componentDidMount() {
		this.setState({
			dataSourceTemplates: await FetchDataFromAPI(this.urlTemplates),
			isLoading: false
		})
	}

	render() {
		const { checked } = this.state;

		if (this.state.isLoading) {
			return (
				<View style={styles.mainView}>
					<ActivityIndicator />
				</View>
			);
		} else {

			var dataTemplates = this.state.dataSourceTemplates;

			let templates = dataTemplates.map((requestVal, keyRequest) => {

				var emailTemplateId = requestVal.emailTemplateId;
				var name = requestVal.name;
				var templateContent = requestVal.templateContent;

				return <View key={keyRequest}>
					<View style={styles.marginaSlikeIokvir1}>
						<View style={styles.margineTeksta1}>
							<View style={styles.radioButton}>
								<RadioButton
									value={emailTemplateId}
									status={checked === emailTemplateId ? 'checked' : 'unchecked'}
									onPress={() => {
										this.setState({ checked: emailTemplateId });
									}}
								/>
							</View>
							<Text style={styles.tekstIzbornika}>{name}</Text>
							<View>
								<View style={styles.arrow}>
									<TouchableOpacity onPress={() => this.props.navigation.navigate('Templates', {emailTemplateId: {emailTemplateId}, name: {name}, templateContent: {templateContent}})}>
										<MaterialIcons name="arrow-forward-ios" size={25}></MaterialIcons>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
				</View>
			});

			return (
				<View>
					<ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
						<View style={styles.Naslov}>
							<Text style={styles.settingsText}>Dodaj/ukloni/uredi</Text>
							<Text style={styles.settingsTextName}>predložak odgovora</Text>
						</View>

						{templates}

					</ScrollView>
					<View style={styles.txtButtonIcon}>
						<View style={styles.btn1}>
							<TouchableHighlight style={styles.btnBorder1}>
								<MaterialCommunityIcons name="plus" size={23}></MaterialCommunityIcons>
							</TouchableHighlight>
							<TouchableHighlight>
								<Text style={styles.btnText1}>DODAJ</Text>
							</TouchableHighlight>
						</View>

						<View style={styles.btn2}>
							<TouchableHighlight style={styles.btnBorder2}>
								<IonIcon name="trash" size={20} />
							</TouchableHighlight>
							<TouchableHighlight>
								<Text style={styles.btnText2}>OBRIŠI</Text>
							</TouchableHighlight>
						</View>
					</View>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		paddingBottom: 310,
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
		bottom: -61,
	},
	margineTeksta2: {
		marginBottom: 40,
		marginTop: 0,
		marginLeft: 12,
		bottom: 11,
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
	txtButtonIcon: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	btn1: {
		right: 60,
		bottom: 50,
	},
	btn2: {
		right: 20,
		bottom: 50,
	},
	btnBorder1: {
		top: 35,
		borderColor: colors.black,
		backgroundColor: colors.white,
		borderRadius: 8,
		borderWidth: 2,
		padding: 8,
		width: '285%',
		height: '22%',
	},
	btnBorder2: {
		top: 35,
		borderColor: colors.black,
		backgroundColor: colors.white,
		borderRadius: 8,
		borderWidth: 2,
		padding: 8,
		width: '285%',
		height: '22%',
	},
	btnText1: {
		fontWeight: 'bold',
		fontSize: 14,
		left: 55,
		top: 0,
	},
	btnText2: {
		fontWeight: 'bold',
		fontSize: 14,
		left: 55,
		top: 0,
	},
	arrow: {
		left: 300,
		bottom: 30,
	},
	radioButton: {
		top: 25,
		left: -10,
	},
	radioButton2: {
		top: 25,
		left: -10,
	},
});
