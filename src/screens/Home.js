import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableHighlight, ActivityIndicator } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';

import Request from '../components/Request';

import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../constants/DesignConstants';
import { FetchDataFromAPI } from '../backend/ApiConnection';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			dataSourceRequests: null,
			dataSourceClients: null,
			dataSourceProperties: null,
			clientEmail: null,
			requestFilter: undefined,
			propertyFilter: undefined,
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

	urlClients = 'https://air2020api.azure-api.net/api/Clients';
	urlRequests = 'https://air2020api.azure-api.net/api/Requests';
	urlProperties = 'https://air2020api.azure-api.net/api/Properties';

	async componentDidMount() {
		this.setState({
			dataSourceRequests: await FetchDataFromAPI(this.urlRequests),
			dataSourceClients: await FetchDataFromAPI(this.urlClients),
			dataSourceProperties: await FetchDataFromAPI(this.urlProperties),
			isLoading: false,
			requestFilter: undefined,
			propertyFilter: undefined,
		});
		

		this.didFocusSubscription = this.props.navigation.addListener('willFocus', async () => {
			this.setState({
				dataSourceRequests: await FetchDataFromAPI(this.urlRequests),
				dataSourceClients: await FetchDataFromAPI(this.urlClients),
				dataSourceProperties: await FetchDataFromAPI(this.urlProperties),
				isLoading: false,
				requestFilter: undefined,
				propertyFilter: undefined,
			});
		});
	}

	componentWillUnmount() {
		this.didFocusSubscription.remove();
		clearInterval(this.interval);
	}

	getCurrentUser = async () => {
		const currentUser = await GoogleSignin.getCurrentUser();
		this.setState({ currentUser });
		console.log('Ušao u google');
	};

	render() {
		var imgSrc='';
		var user = '';
		try {
			user = this.state.currentUser.user.name;
			if (this.state.currentUser.user.photo != undefined)
			{
				imgSrc = this.state.currentUser.user.photo;
			}
		} catch (error) {}
		if (this.state.isLoading) {
			return (
				<View style={styles.mainView}>
					<ActivityIndicator />
				</View>
			);
		} else {
			var dataRequests = this.state.dataSourceRequests;
			var dataClients = this.state.dataSourceClients;
			var dataProperties = this.state.dataSourceProperties;

			var statusNew = 0;
			var statusApproved = 0;
			var statusRejected = 0;

			let properties = dataProperties.map((propertyVal, keyProperty) => {
				var propertyName = propertyVal.name;

				return (
					<View key={keyProperty}>
						<TouchableOpacity
							style={styles.btnPropertyFilter}
							onPress={() => {
								if (this.state.propertyFilter === propertyName) {
									this.setState({
										propertyFilter: undefined,
									});
									console.log(this.state.propertyFilter);
								} else {
									this.setState({
										propertyFilter: propertyName,
									});
									console.log(this.state.propertyFilter);
								}
							}}
						>
							<Text style={styles.btnText2}>{propertyName}</Text>
						</TouchableOpacity>
					</View>
				);
			});

			let requests = dataRequests.map((requestVal, keyRequest) => {
				var sentThrough = '';
				var status = null;

				if (requestVal.sent === true && requestVal.confirmed === true) {
					sentThrough = 'email';
					status = 'approved';
					statusApproved++;
				}
				if (requestVal.sent === false) {
					sentThrough = 'email';
					status = 'new';
					statusNew++;
				} else if (requestVal.sent === true && requestVal.confirmed === false) {
					sentThrough = 'email';
					status = 'rejected';
					statusRejected++;
				}

				var requestId = requestVal.requestId;
				var property = requestVal.property;
				var unit = requestVal.unit;
				var dateFrom = requestVal.fromDate;
				var dateTo = requestVal.toDate;
				var priceUponRequest = requestVal.priceUponRequest;
				var confirmed = requestVal.confirmed;
				var processed = requestVal.processed;
				var sent = requestVal.sent;
				var numberOfPeople = requestVal.numberOfPeople;
				var responseSubject = requestVal.responseSubject;
				var responseBody = requestVal.responseBody;
				var clientId = requestVal.clientId;
				var client = requestVal.client;
				var clientEmail = '';

				console.log(dateFrom)
				console.log(dateTo)

				let clients = dataClients.map((clientVal, keyClient) => {
					var clientNameSurname = '';
					if (clientVal.clientId === clientId) {
						var clientNameSurname = clientVal.name + ' ' + clientVal.surname;
						clientEmail = clientVal.email;
					}

					return clientNameSurname;
				});

				if (this.state.requestFilter === undefined) {
					if (this.state.propertyFilter === undefined) {
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
											unit: { unit },
											dateFrom: { dateFrom },
											dateTo: { dateTo },
											priceUponRequest: { priceUponRequest },
											confirmed: { confirmed },
											processed: { processed },
											sent: { sent },
											numberOfPeople: { numberOfPeople },
											responseSubject: { responseSubject },
											responseBody: { responseBody },
											clientId: { clientId },
											client: { client },
											clients: { clients },
											clientEmail: { clientEmail },
										});
									}}
								/>
							</View>
						);
					} else if (requestVal.property === this.state.propertyFilter) {
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
											unit: { unit },
											dateFrom: { dateFrom },
											dateTo: { dateTo },
											priceUponRequest: { priceUponRequest },
											confirmed: { confirmed },
											processed: { processed },
											sent: { sent },
											numberOfPeople: { numberOfPeople },
											responseSubject: { responseSubject },
											responseBody: { responseBody },
											clientId: { clientId },
											client: { client },
											clients: { clients },
											clientEmail: { clientEmail },
										});
									}}
								/>
							</View>
						);
					}
				} else if (status === this.state.requestFilter) {
					if (this.state.propertyFilter === undefined) {
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
											unit: { unit },
											dateFrom: { dateFrom },
											dateTo: { dateTo },
											priceUponRequest: { priceUponRequest },
											confirmed: { confirmed },
											processed: { processed },
											sent: { sent },
											numberOfPeople: { numberOfPeople },
											responseSubject: { responseSubject },
											responseBody: { responseBody },
											clientId: { clientId },
											client: { client },
											clients: { clients },
											clientEmail: { clientEmail },
										});
									}}
								/>
							</View>
						);
					} else if (requestVal.property === this.state.propertyFilter) {
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
											unit: { unit },
											dateFrom: { dateFrom },
											dateTo: { dateTo },
											priceUponRequest: { priceUponRequest },
											confirmed: { confirmed },
											processed: { processed },
											sent: { sent },
											numberOfPeople: { numberOfPeople },
											responseSubject: { responseSubject },
											responseBody: { responseBody },
											clientId: { clientId },
											client: { client },
											clients: { clients },
											clientEmail: { clientEmail },
										});
									}}
								/>
							</View>
						);
					}
				}
			});

			return (
				<ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
					{/*Zaglavlje s pozdravnom porukom i ikonom korisničkog profila*/}
					<View style={styles.mainView}>
						<View style={styles.welcomeHeaderView}>
							<Text style={styles.txtWelcome}>Dobrodošao,</Text>
							<Text style={styles.txtWelcomeName}>{user}</Text>
						</View>

						<View style={styles.profileIconView}>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
								<Image source={{ uri: imgSrc }} 
								style={styles.profileIconImage} />
							</TouchableOpacity>
						</View>
					</View>

					{/*Polje za pretraživanje i gumb za sortiranje*/}
					{/*<View style={styles.mainView}>
						<View style={styles.searchBoxView}>
							<Icon name="search" size={15} color="#789789" />
							<TextInput placeholder="Pretraži..." style={styles.searchBoxInputField} />
						</View>
						<TouchableOpacity style={styles.sortView}>
							<Icon name="funnel-outline" size={15} color="#789789" />
						</TouchableOpacity>
					</View>*/}

					{/*Color boxes*/}
					<View style={styles.mainView}>
						<TouchableOpacity
							style={styles.colorBoxOrange}
							onPress={() => {
								if (this.state.requestFilter === 'new') {
									this.setState({
										requestFilter: undefined,
									});
								} else {
									this.setState({
										requestFilter: 'new',
									});
								}
							}}
						>
							<Text style={styles.colorBoxesTextLabel}>novi</Text>
							<Text style={styles.colorBoxesTextNumber}>{statusNew}</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.colorBoxGreen}
							onPress={() => {
								if (this.state.requestFilter === 'approved') {
									this.setState({
										requestFilter: undefined,
									});
								} else {
									this.setState({
										requestFilter: 'approved',
									});
								}
							}}
						>
							<Text style={styles.colorBoxesTextLabel}>odobreni</Text>
							<Text style={styles.colorBoxesTextNumber}>{statusApproved}</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.colorBoxRed}
							onPress={() => {
								if (this.state.requestFilter === 'rejected') {
									this.setState({
										requestFilter: undefined,
									});
								} else {
									this.setState({
										requestFilter: 'rejected',
									});
								}
							}}
						>
							<Text style={styles.colorBoxesTextLabel}>odbijeni</Text>
							<Text style={styles.colorBoxesTextNumber}>{statusRejected}</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.requestView}>{properties}</View>

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
		height: '100%',
	},
	mainView: {
		flexDirection: 'row',
		width: '100%',
		marginTop: 40,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	welcomeHeaderView: {
		width: '80%',
	},
	txtWelcome: {
		fontSize: 30,
		fontWeight: '700',
	},
	txtWelcomeName: {
		fontSize: 30,
		fontWeight: '100',
	},
	profileIconView: {
		width: '20%',
		alignItems: 'flex-end',
	},
	profileIconImage: {
		width: 50,
		height: 50,
		borderRadius: 50 / 2,
	},
	searchBoxView: {
		flexDirection: 'row',
		alignItems: 'center',
		elevation: 3,
		width: '83%',
		backgroundColor: colors.white,
		paddingHorizontal: 20,
		height: 35,
		borderRadius: 10,
		marginLeft: 1,
	},
	searchBoxInputField: {
		paddingHorizontal: 10,
		fontSize: 12,
	},
	sortView: {
		alignItems: 'center',
		elevation: 2,
		width: 50,
		backgroundColor: colors.white,
		marginLeft: 3,
		height: 35,
		borderRadius: 10,
		marginRight: 5,
		justifyContent: 'center',
	},
	btnPropertyFilter: {
		borderColor: colors.tertiary,
		backgroundColor: colors.white,
		borderRadius: 8,
		borderWidth: 2,
		padding: 8,
		width: '40%',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	btnText2: {
		fontWeight: 'bold',
		fontSize: 14,
		color: colors.black,
	},
	colorBoxOrange: {
		backgroundColor: colors.yellow,
		height: 100,
		width: 100,
		borderRadius: 10,
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 5,
	},
	colorBoxGreen: {
		backgroundColor: colors.green,
		height: 100,
		width: 100,
		borderRadius: 10,
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 5,
	},
	colorBoxRed: {
		backgroundColor: colors.red,
		height: 100,
		width: 100,
		borderRadius: 10,
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 5,
	},
	colorBoxesTextLabel: {
		color: colors.white,
		fontSize: 17,
	},
	colorBoxesTextNumber: {
		color: colors.white,
		fontSize: 45,
	},
	requestView: {
		flexDirection: 'column',
		width: '100%',
		marginTop: 40,
		justifyContent: 'space-between',
	},
});
