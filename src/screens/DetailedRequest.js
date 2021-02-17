import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import { GoogleSignin, Button, statusCodes } from '@react-native-community/google-signin';
import FontIcons from 'react-native-vector-icons/Fontisto';
import { colors } from '../constants/DesignConstants.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { EditDataOnAPI } from '../backend/ApiConnection';
import { SendEmail } from '../backend/SendEmail.js';
import { Alert } from 'react-native';

export default class DetailedRequest extends React.Component {

    constructor(props) {
        const { requestId } = props.navigation.getParam('requestId');
        const { property } = props.navigation.getParam('property');
        const { unit } = props.navigation.getParam('unit');
        const { dateFrom } = props.navigation.getParam('dateFrom');
        const { dateTo } = props.navigation.getParam('dateTo');
        const { priceUponRequest } = props.navigation.getParam('priceUponRequest');
        const { confirmed } = props.navigation.getParam('confirmed');
        const { processed } = props.navigation.getParam('processed');
        const { sent } = props.navigation.getParam('sent');
        const { numberOfPeople } = props.navigation.getParam('numberOfPeople');
        const { responseSubject } = props.navigation.getParam('responseSubject');
        const { responseBody } = props.navigation.getParam('responseBody');
        const { clientId } = props.navigation.getParam('clientId');
        const { client } = props.navigation.getParam('client');
        const { clients } = props.navigation.getParam('clients');
        const { clientEmail } = props.navigation.getParam('clientEmail');

        super(props);
        this.state = {
            requestId: requestId,
            property: property,
            unit: unit,
            dateFrom: dateFrom,
            dateTo: dateTo,
            priceUponRequest: priceUponRequest,
            confirmed: confirmed,
            processed: processed,
            sent: sent,
            numberOfPeople: numberOfPeople,
            responseSubject: responseSubject,
            responseBody: responseBody,
            clientId: clientId,
            client: client,
            clientNameSurname: clients,
            clientEmail: clientEmail,
        }

        this.handleChangedTextResponse = this.handleChangedTextResponse.bind(this)
        this.getCurrentUser();
    }

    urlRequests = 'https://air2020api.azure-api.net/api/Requests';

    handleChangedTextResponse(newText) {
        this.setState({
            responseBody: newText
        })

        console.log(this.state.responseBody)
    }

    getCurrentUser = async () => {
        const currentUser = await GoogleSignin.getCurrentUser();
        this.setState({ currentUser });
        console.log("Ušao u google");

    };

    render() {
        const { requestId } = this.state;

        var imgSrc = "img";
        //var imgSrc = "../assets/icons/profile.png";
        try {
            if (this.state.currentUser.user.photo != undefined) {
                imgSrc = this.state.currentUser.user.photo;
            }
        } catch (error) { };

        return (
            <ScrollView style={styles.mainViewContainer}>
                {/*Zaglavlje s prikazom trenutne stranice i ikonom korisničkog profila*/}
                <View style={styles.mainView}>
                    <View style={styles.welcomeHeaderView}>
                        <Text style={styles.welcomeText}>Detaljni pregled</Text>
                        <Text style={styles.welcomeTextName}>zahtjeva</Text>
                    </View>
                    <View style={styles.profileIconView}>
                        <Image source={{ uri: imgSrc }} style={styles.profileIconImage} />
                    </View>
                </View>

                {/* Glavni prikaz kartice */}

                <View style={styles.mainView}>
                    <View style={styles.mainCardView}>
                        <View style={styles.userData}>
                            <Image
                                source={require('../assets/icons/profile.png')}
                                style={styles.guestImage}
                            />
                        </View>
                        <View style={styles.guestNameView}>
                            <Text style={styles.txtGuestName}>{this.state.clientNameSurname}</Text>
                        </View>
                        <View style={styles.podaciSIkonamaView}>
                            <View>
                                <View style={styles.propertyView}>
                                    <FontAwesomeIcons name="home" size={30}>
                                    </FontAwesomeIcons>
                                </View>
                                <View style={styles.txtVilla}>
                                    <Text style={styles.txtVilla}>{this.state.property}</Text>
                                </View>
                            </View>
                            <View>
                                <View style={styles.propertyView}>
                                    <EntypoIcon name="calendar" size={30}>
                                    </EntypoIcon>
                                </View>
                                <View style={styles.timespanView}>
                                    <Text style={styles.txtTimespan}>{this.state.dateFrom.substring(5, 10) + ' - ' + this.state.dateTo.substring(5, 10)}</Text>
                                </View>
                            </View>
                            <View>
                                <View style={styles.propertyView}>
                                    <MaterialIcons name="people-alt" size={30}>
                                    </MaterialIcons>
                                </View>
                                <View style={styles.numberOfPeopleView}>
                                    <Text style={styles.txtNumberOfPeople}>{this.state.numberOfPeople}</Text>
                                </View>
                            </View>
                        </View>


                        {/*Obavijesti korisniku*/}
                        <View style={styles.messageBodyView}>
                            {/*<Text style={styles.txtObavijesti}>{this.state.responseBody}</Text>*/}
                            <TextInput
                                multiline
                                defaultValue={this.state.responseBody}
                                onChangeText={this.handleChangedTextResponse}
                            ></TextInput>
                        </View>



                        {/*Buttoni u podnožju*/}
                        <View style={styles.buttonsView}>

                            <TouchableOpacity
                                style={styles.btnSendEmail}
                                onPress={async () => {
                                    let bodyEdit = JSON.stringify({
                                        requestId: requestId,
                                        property: this.state.property,
                                        unit: this.state.unit,
                                        dateFrom: this.state.dateFrom,
                                        dateTo: this.state.dateTo,
                                        priceUponRequest: this.state.priceUponRequest,
                                        confirmed: this.state.confirmed,
                                        processed: this.state.processed,
                                        sent: this.state.sent,
                                        numberOfPeople: this.state.numberOfPeople,
                                        responseSubject: this.state.responseSubject,
                                        responseBody: this.state.responseBody,
                                        clientId: this.state.clientId,
                                        client: this.state.client
                                    })
                                    await EditDataOnAPI(this.urlRequests + '/' + requestId, bodyEdit)
                                    Alert.alert("Promjena je spremljena!")
                                }}
                            >

                                <EntypoIcon
                                    name="save"
                                    size={22}
                                    style={styles.SaveIkona}
                                ></EntypoIcon>
                                <Text style={styles.btnText2} >SPREMI</Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.btnSendEmail}
                                onPress={async () => {
                                    let bodyEdit = JSON.stringify({
                                        requestId: requestId,
                                        property: this.state.property,
                                        unit: this.state.unit,
                                        dateFrom: this.state.dateFrom,
                                        dateTo: this.state.dateTo,
                                        priceUponRequest: this.state.priceUponRequest,
                                        confirmed: this.state.confirmed,
                                        processed: this.state.processed,
                                        sent: true,
                                        numberOfPeople: this.state.numberOfPeople,
                                        responseSubject: this.state.responseSubject,
                                        responseBody: this.state.responseBody,
                                        clientId: this.state.clientId,
                                        client: this.state.client
                                    })
                                    await SendEmail(this.state.clientEmail, this.state.responseSubject, this.state.responseBody)
                                    await EditDataOnAPI(this.urlRequests + '/' + requestId, bodyEdit)
                                    this.props.navigation.navigate("Home")
                                }}
                            >

                                <FeatherIcon name="send" size={18} />
                                <Text style={styles.btnText2} >POŠALJI</Text>

                            </TouchableOpacity>
                        </View>


                    </View>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    mainViewContainer: {
        backgroundColor: "#fff",
        paddingHorizontal: 20
    },
    mainView: {
        flexDirection: "row",
        width: "100%",
        marginTop: 40,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: 'space-between'
    },
    welcomeHeaderView: {
        width: "80%"
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: "700",
        fontWeight: "normal",

    },
    podaciSIkonamaView: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-evenly'
    },
    welcomeTextName: {
        fontSize: 30,
        fontWeight: "100",
        fontWeight: "bold",
    },
    profileIconView: {
        width: "20%",
        alignItems: "flex-end"
    },
    profileIconImage: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },
    mainCardView: {
        borderColor: '#feca57',
        borderWidth: 1,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#FFF',
        elevation: 3,
        height: 518
    },
    userData: {
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    guestImage: {
        width: 60,
        height: 60,
        marginTop: 5
    },
    guestNameView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    propertyView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
        bottom: 5,
    },
    timespanView: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    numberOfPeopleView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    txtGuestName: {
        fontSize: 15,
        fontWeight: '700',
        marginTop: 10
    },
    txtPropertyName: {
        fontSize: 20
    },
    txtTimespan: {
        fontSize: 15
    },
    txtNumberOfPeople: {
        fontSize: 20
    },
    txtVilla: {
        alignItems: 'center',
        fontSize: 15,
        fontWeight: "bold",
    },
    btnText1: {
        fontWeight: "bold",
        fontSize: 14,
        left: 47
    },
    btnText2: {
        fontWeight: "bold",
        fontSize: 14,
        color: colors.black,
    },
    buttonsView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        padding: 1,
        marginTop: 15
    },
    btnSendEmail: {
        borderColor: colors.tertiary,
        backgroundColor: colors.white,
        borderRadius: 8,
        borderWidth: 2,
        padding: 8,
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    messageBodyView: {
        margin: 0,
        position: 'relative'
    },
    txtObavijesti: {
        fontSize: 10,
        alignItems: 'center',
        bottom: 140,
        left: 10,
        padding: 5
    }

})