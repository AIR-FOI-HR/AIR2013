import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    ActivityIndicator,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import {GoogleSignin, GoogleSigninButton, statusCodes} from '@react-native-community/google-signin';

import Request from '../components/Request'

import RequestObject from '../models/Request'

import ClientObject from '../models/Property'

import Icon from 'react-native-vector-icons/Ionicons'

import { colors } from '../constants/DesignConstants'


const Ispis =(nacinIspisa)=>{
	console.log("Trenutna boja je:"+nacinIspisa);
}


export default class App extends React.Component {
	constructor(props) {
		super(props);
		BojeEnum = {
			obicna: 'obicna',
			narancasta: 'narancasta',
			zelena: 'zelena',
			crvena: 'crvena',
		};
		var zahtjevi;
		this.state = {
			isLoading: true,
			dataSourceRequests: null,
			dataSourceClients: null,
			trenutnaBoja: BojeEnum.obicna,
			zahtjevi:null,
		};

		/*
            this.state.currentUser je googleov zapis korisnika. 
            Za pristup emailu koristiti this.state.currentUser.user.email
            Za pristup korisničkom imenu koristiti this.state.currentUser.user.name
            Za pristup izvoru slike koristiti this.state.currentUser.user.photo
            Za više informacija unijeti console.log(this.state.currentUser) ili posjetiti
            https://github.com/react-native-google-signin/google-signin i pogledati 3. naslov
        */

		this.getCurrentUser();
	}

	getCurrentUser = async () => {
		const currentUser = await GoogleSignin.getCurrentUser();
		this.setState({ currentUser });
		console.log('Ušao u google');
	};

	async componentDidMount() {
		await fetch('https://jsonkeeper.com/b/R2BS')
			.then((responseRequests) => responseRequests.json())
			.then((responseRequestsJson) => {
				this.setState({
					dataSourceRequests: responseRequestsJson,
				});
			})
			.catch((error) => {
				console.log(error);
			});

		await fetch('https://jsonkeeper.com/b/6LCM')
			.then((responseClients) => responseClients.json())
			.then((responseClientsJson) => {
				this.setState({
					isLoading: false,
					dataSourceClients: responseClientsJson,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	ProvjeriNarancastu = async () => {
		if (this.state.trenutnaBoja != BojeEnum.narancasta) {
			this.setState({
				trenutnaBoja: BojeEnum.narancasta,
			});
		} else {
			this.setState({
				trenutnaBoja: BojeEnum.obicna,
			});
		}
		console.log(this.state.trenutnaBoja);
	};

	ProvjeriZelenu = async () => {
		if (this.state.trenutnaBoja != BojeEnum.zelena) {
			this.setState({
				trenutnaBoja: BojeEnum.zelena,
			});
		} else {
			this.setState({
				trenutnaBoja: BojeEnum.obicna,
			});
		}
		console.log(this.state.trenutnaBoja);
	};

	ProvjeriCrvenu = async () => {
		if (this.state.trenutnaBoja != BojeEnum.crvena) {
			this.setState({
				trenutnaBoja: BojeEnum.crvena,
			});
		} else {
			this.setState({
				trenutnaBoja: BojeEnum.obicna,
			});
		}
		console.log(this.state.trenutnaBoja);
	};


	render() {
		//console.log(this.state.currentUser);
		console.log(this.state.trenutnaBoja);
		Ispis(this.state.trenutnaBoja);
		if (this.state.isLoading) {
			return (
				<View style={styles.mainView}>
					<ActivityIndicator />
				</View>
			);
		} else {
			var dataRequests = this.state.dataSourceRequests;
			var dataClients = this.state.dataSourceClients;

			var statusNew = 0;
			var statusApproved = 0;
			var statusRejected = 0;

			let requests = dataRequests.map((requestVal, keyRequest) => {
				var sentThrough = '';
				var status = null;
				if (requestVal.sent === true) {
					sentThrough = 'email';
				}
				if (requestVal.processed === false) {
					status = 'new';
					statusNew++;
				} else if (requestVal.confirmed === true) {
					status = 'approved';
					statusApproved++;
				} else if (requestVal.confirmed === false) {
					status = 'rejected';
					statusRejected++;
				}

				var clientId = requestVal.clientId;
				var requestId = requestVal.requestId;
				var property = requestVal.property;
				var dateFrom = requestVal.fromDate;
				var dateTo = requestVal.toDate;
				var numberOfPeople = requestVal.numberOfPeople;
				var responseBody = requestVal.responseBody;

				let clients = dataClients.map((clientVal) => {
					var clientNameSurname = '';
					if (clientVal.clientId === clientId) {
						var clientNameSurname = clientVal.name + ' ' + clientVal.surname;
					}

					return clientNameSurname;
				});

				return (
					<View key={keyRequest}>
						<Request
							GuestName={clients}
							PropertyName={requestVal.property}
							NumberOfGuests={requestVal.numberOfPeople}
							Status={status}
							Channel={sentThrough}
							onPress={() => {
								this.props.navigation.navigate('DetailedRequest', {
									requestId: { requestId },
									property: { property },
									dateFrom: { dateFrom },
									dateTo: { dateTo },
									numberOfPeople: { numberOfPeople },
									responseBody: { responseBody },
									clients: { clients },
								});
							}}
						/>
					</View>
				);
			});
			requests.forEach(element => {
				//console.log(element);
			});
			return (
				<ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
					{/*Zaglavlje s pozdravnom porukom i ikonom korisničkog profila*/}
					<View style={styles.mainView}>
						<View style={styles.welcomeHeaderView}>
							<Text style={styles.txtWelcome}>Dobrodošao,</Text>
							<Text style={styles.txtWelcomeName}>{this.state.currentUser.user.name}</Text>
						</View>

						<View style={styles.profileIconView}>
							<TouchableHighlight onPress={() => this.props.navigation.navigate('Settings')}>
								<Image
									source={require('../assets/icons/profile.png')}
									style={styles.profileIconImage}
								/>
							</TouchableHighlight>
						</View>
					</View>

					{/*Polje za pretraživanje i gumb za sortiranje*/}
					<View style={styles.mainView}>
						<View style={styles.searchBoxView}>
							<Icon name="search" size={15} color="#789789" />
							<TextInput placeholder="Pretraži..." style={styles.searchBoxInputField} />
						</View>
						<View style={styles.sortView}>
							<Icon name="funnel-outline" size={15} color="#789789" />
						</View>
					</View>

					{/*Color boxes*/}
					<View style={styles.mainView}>
						<TouchableHighlight onPress={this.ProvjeriNarancastu}>
							<View style={styles.colorBoxOrange}>
								<Text style={styles.colorBoxesTextLabel}>novi</Text>
								<Text style={styles.colorBoxesTextNumber}>{statusNew}</Text>
							</View>
						</TouchableHighlight>

						<TouchableHighlight onPress={this.ProvjeriZelenu}>
							<View style={styles.colorBoxGreen}>
								<Text style={styles.colorBoxesTextLabel}>odobreni</Text>
								<Text style={styles.colorBoxesTextNumber}>{statusApproved}</Text>
							</View>
						</TouchableHighlight>

						<TouchableHighlight onPress={this.ProvjeriCrvenu}>
							<View style={styles.colorBoxRed}>
								<Text style={styles.colorBoxesTextLabel}>odbijeni</Text>
								<Text style={styles.colorBoxesTextNumber}>{statusRejected}</Text>
							</View>
						</TouchableHighlight>
					</View>

					{/*Requests*/}
					<View style={styles.requestView}>
						<Text style={styles.txtWelcome}>Request overview</Text>

						{requests}
					</View>
				</ScrollView>
			);
		}
	}
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        height: '100%'
    },
    mainView: {
        flexDirection: "row",
        width: "100%",
        marginTop: 40,
        alignItems: "center",
        justifyContent: 'space-between'
    },
    welcomeHeaderView: {
        width: "80%"
    },
    txtWelcome: {
        fontSize: 30,
        fontWeight: "700"
    },
    txtWelcomeName: {
        fontSize: 30,
        fontWeight: "100"
    },
    profileIconView: {
        width: "20%",
        alignItems: "flex-end"
    },
    profileIconImage: {
        width: 50,
        height: 50
    },
    searchBoxView: {
        flexDirection: "row",
        alignItems: "center",
        elevation: 3,
        width: "85%",
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        height: 35,
        borderRadius: 10,
        marginLeft: 1
    },
    searchBoxInputField: {
        paddingHorizontal: 10,
        fontSize: 12
    },
    sortView: {
        alignItems: "center",
        elevation: 2,
        width: "15%",
        backgroundColor: colors.white,
        marginLeft: 5,
        height: 35,
        borderRadius: 10,
        marginLeft: 1,
        justifyContent: "center"
    },
    colorBoxOrange: {
        backgroundColor: colors.yellow,
        height: 100,
        width: 100,
        borderRadius: 10,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
    },
    colorBoxGreen: {
        backgroundColor: colors.green,
        height: 100,
        width: 100,
        borderRadius: 10,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
    },
    colorBoxRed: {
        backgroundColor: colors.red,
        height: 100,
        width: 100,
        borderRadius: 10,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
    },
    colorBoxesTextLabel: {
        color: colors.white,
        fontSize: 17,
    },
    colorBoxesTextNumber: {
        color: colors.white,
        fontSize: 45
    },
    requestView: {
        flexDirection: "column",
        width: "100%",
        marginTop: 40,
        justifyContent: 'space-between'
    }
})