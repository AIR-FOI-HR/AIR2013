import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import Icon from 'react-native-vector-icons/Ionicons'

function DetailedRequest(props) {
    return (

        <View style={styles.mainViewContainer}>
            {/*Zaglavlje s prikazom trenutne stranice i ikonom korisničkog profila*/}
            <View style={styles.mainView}>
                <View style={styles.welcomeHeaderView}>
                    <Text style={styles.welcomeText}>Detaljni,</Text>
                    <Text style={styles.welcomeTextName}>pregled zahtjeva</Text>
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
                    <View style={styles.userData}>
                        <Image 
                            source={require('../assets/icons/profile.png')}
                            style={styles.guestImage}
                        />
                    </View>
                    <View style={styles.guestNameView}>
                        <Text style={styles.txtGuestName}>John Doe</Text>
                    </View>
                    <View style={styles.propertyView}>
                        <Text style={styles.txtPropertyName}>Villa Weiss</Text>
                    </View>
                    <View style={styles.timespanView}>
                        <Text style={styles.txtTimespan}>28.11. - 1.12.</Text>
                    </View>
                    <View style={styles.numberOfPeopleView}>
                        <Text style={styles.txtNumberOfPeople}>for 2</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainViewContainer: {
        backgroundColor: "#fff",
        paddingHorizontal:20,
        height:'100%'
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
    welcomeText: {
        fontSize:30,
        fontWeight: "700"
    },
    welcomeTextName: {
        fontSize:30,
        fontWeight: "100"
    },
    profileIconView: {
        width: "20%",
        alignItems: "flex-end"
    },
    profileIconImage: {
        width:50,
        height:50
    },
    mainCardView:{
        borderColor: '#feca57',
        borderWidth: 1,
        width: '100%',
        height: 500,
        borderRadius: 10,
        backgroundColor: '#FFF',
        elevation: 3
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
    guestNameView:{
        flexDirection: 'row',
        justifyContent: 'center'
    },
    propertyView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    timespanView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    numberOfPeopleView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    txtGuestName: {
        fontSize: 30,
        fontWeight: '700',
        marginTop: 10
    },
    txtPropertyName: {
        fontSize: 20
    },
    txtTimespan: {
        fontSize: 20
    },
    txtNumberOfPeople: {
        fontSize: 20
    }
})

export default DetailedRequest;