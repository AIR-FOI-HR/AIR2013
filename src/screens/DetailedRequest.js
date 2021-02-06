import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    Button,
    TouchableHighlight,
    ActivityIndicator,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import {GoogleSignin, GoogleSigninButton, statusCodes} from '@react-native-community/google-signin';

import Icon from 'react-native-vector-icons/Ionicons'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import FontIcons from 'react-native-vector-icons/Fontisto';
import { colors } from '../constants/DesignConstants.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default class DetailedRequest extends React.Component {

    constructor(props) {
        const { requestId } = props.navigation.getParam('requestId');
        const { property } = props.navigation.getParam('property');
        const { dateFrom } = props.navigation.getParam('dateFrom');
        const { dateTo } = props.navigation.getParam('dateTo');
        const { numberOfPeople } = props.navigation.getParam('numberOfPeople');
        const { responseBody } = props.navigation.getParam('responseBody');
        const { clients } = props.navigation.getParam('clients');
        
        super(props);
        this.state = {
            requestId: requestId,
            property: property,
            dateFrom: dateFrom,
            dateTo: dateTo,
            numberOfPeople: numberOfPeople,
            responseBody: responseBody,
            clients: clients,
        }
        this.getCurrentUser();

    }
    getCurrentUser = async () => 
    {
        const currentUser = await GoogleSignin.getCurrentUser();
        this.setState({ currentUser });
        console.log("Ušao u google");

    };

    render() {
        console.log("Detailed request");
        console.log(this.state.currentUser); 
        return (
            <ScrollView style={styles.mainViewContainer}>
                {/*Zaglavlje s prikazom trenutne stranice i ikonom korisničkog profila*/}
                <View style={styles.mainView}>
                    <View style={styles.welcomeHeaderView}>
                        <Text style={styles.welcomeText}>Detaljni pregled</Text>
                        <Text style={styles.welcomeTextName}>zahtjeva</Text>
                    </View>
                    <View style={styles.profileIconView}>
                        <Image
                            source={require('../assets/icons/profile.png')}
                            style={styles.profileIconImage}
                        />
                    </View>
                </View>

                {/* Glavni prikaz kartice */}

                <View style={styles.mainView}>
                    <View style={styles.mainCardView}>
                        <View style={styles.podaciSIkonamaView}>
                            <View style={styles.userData}>
                                <Image
                                    source={require('../assets/icons/profile.png')}
                                    style={styles.guestImage}
                                />
                            </View>
                            <View style={styles.guestNameView}>
                                <Text style={styles.txtGuestName}>{this.state.clients}</Text>
                            </View>
                            <View style={styles.propertyView}>
                                <FontAwesomeIcons name="home" size={30}>
                                </FontAwesomeIcons>
                            </View>
                            <View style={styles.txtVilla}>
                                <Text style={styles.txtVilla}>{this.state.property}</Text>
                            </View>
                            <View style={styles.propertyView}>
                                <EntypoIcon name="calendar" size={30}>
                                </EntypoIcon>
                            </View>
                            <View style={styles.timespanView}>
                                <Text style={styles.txtTimespan}>{this.state.dateFrom.substring(5, 10) + ' - ' + this.state.dateTo.substring(5, 10)}</Text>
                            </View>
                            <View style={styles.propertyView}>
                                <MaterialIcons name="people-alt" size={30}>
                                </MaterialIcons>
                            </View>
                            <View style={styles.numberOfPeopleView}>
                                <Text style={styles.txtNumberOfPeople}>{this.state.numberOfPeople}</Text>
                            </View>
                        </View>

                         
                         {/*Obavijesti korisniku*/}
                         <View style={styles.messageBodyView}>
                            {/*<Text style={styles.txtObavijesti}>{this.state.responseBody}</Text>*/}
                            <TextInput multiline>{this.state.responseBody}</TextInput>
                        </View>


                        {/*Buttoni u podnožju*/}
                        <View style={styles.buttonsView}>
                            <View style={styles.btn1}>
                                <TouchableHighlight style={styles.btnBorder1}>
                                    <MaterialCommunityIcons name="pencil" size={18}></MaterialCommunityIcons>
                                </TouchableHighlight>
                                <TouchableHighlight>
                                    <Text style={styles.btnText1}>UREDI</Text>
                                </TouchableHighlight>
                            </View>


                            <View style={styles.btn2}>
                                <TouchableHighlight style={styles.btnBorder2}>
                                    <FeatherIcon name="send" size={18} />
                                </TouchableHighlight>
                                <TouchableHighlight>
                                    <Text style={styles.btnText2} >POŠALJI</Text>
                                </TouchableHighlight>
                            </View>
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
        height: 50
    },
    mainCardView: {
        borderColor: '#feca57',
        borderWidth: 1,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#FFF',
        elevation: 3,
        height: 700
    },
    userData: {
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    guestImage: {
        width: 80,
        height: 80,
        marginTop: 10
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
        left: 47,
    },
    btnText2: {
        fontWeight: "bold",
        fontSize: 14,
        left: 3,
        color: colors.black,
    },
    btnBorder1: {
        borderColor: colors.black,
        backgroundColor: colors.white,
        borderRadius: 8,
        borderWidth: 2,
        padding: 8,
        width: '300%',
        height: '25%',
    },

    btnBorder2: {
        borderColor: colors.tertiary,
        backgroundColor: colors.white,
        borderRadius: 8,
        borderWidth: 2,
        padding: 8,
        width: '218%',
        height: '25%',
        right: 41
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 0

    },
    btn1: {
        right: 54

    },
    btn2: {
        left: 27
    },
    messageBodyView: {
        margin: 0,
        position:'relative'
    },
    txtObavijesti: {
        fontSize: 10,
        alignItems: 'center',
        bottom: 140,
        left: 10,
        padding: 5
    }

})