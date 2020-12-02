import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import Request from '../components/Request'

import Icon from 'react-native-vector-icons/Ionicons'

import { colors } from '../constants/DesignConstants'

export default class App extends React.Component {
    render(){
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                {/*Zaglavlje s pozdravnom porukom i ikonom korisničkog profila*/}
                <View style={styles.mainView}>
                    <View style={styles.welcomeHeaderView}>
                        <Text style={styles.txtWelcome}>Dobrodošao,</Text>
                        <Text style={styles.txtWelcomeName}>Ante</Text>
                    </View>
                    <View style={styles.profileIconView}>
                        <Image 
                            source={require('../assets/icons/profile.png')}
                            style={styles.profileIconImage}
                        />
                    </View>
                </View>

                {/*Polje za pretraživanje i gumb za sortiranje*/}
                <View style={styles.mainView}>
                    <View style={styles.searchBoxView}>
                        <Icon name="search" size={15} color="#789789" />
                        <TextInput placeholder="Pretraži..." style={styles.searchBoxInputField}/>
                    </View>
                    <View style={styles.sortView}>
                        <Icon name="funnel-outline" size={15} color="#789789"/>
                    </View>
                </View>

                {/*Color boxes*/}
                <View style={styles.mainView}>
                    <View style={styles.colorBoxOrange}>
                        <Text style={styles.colorBoxesTextLabel}>novi</Text>
                        <Text style={styles.colorBoxesTextNumber}>50</Text>
                    </View>
                    <View style={styles.colorBoxGreen}> 
                        <Text style={styles.colorBoxesTextLabel}>odobreni</Text>
                        <Text style={styles.colorBoxesTextNumber}>20</Text>
                    </View>
                    <View style={styles.colorBoxRed}>
                        <Text style={styles.colorBoxesTextLabel}>odbijeni</Text>
                        <Text style={styles.colorBoxesTextNumber}>10</Text>
                    </View>
                </View>


                {/*Requests*/}
                <View style={styles.requestView}>
                    <Text style={styles.txtWelcome}>Request overview</Text>
                    <Request     
                        GuestName={"John Doe"} 
                        PropertyName={"Villa Weiss"} 
                        NumberOfGuests={2}
                        Status={'rejected'}
                        Channel={'email'}
                        onPress={() => this.props.navigation.navigate('DetailedRequest')}
                    />

                    <Request     
                        GuestName={"John Doe"} 
                        PropertyName={"Villa Weiss"} 
                        Status={'approved'}
                        Channel={'webform'}
                        onPress={() => this.props.navigation.navigate('DetailedRequest')}
                    />

                    <Request     
                        GuestName={"John Doe"} 
                        PropertyName={"Villa Weiss"} 
                        Status={'new'}
                        Channel={'email'}
                        onPress={() => this.props.navigation.navigate('DetailedRequest')}
                    />

<Request     
                        GuestName={"John Doe"} 
                        PropertyName={"Villa Weiss"} 
                        NumberOfGuests={2}
                        Status={'rejected'}
                        Channel={'email'}
                        onPress={() => this.props.navigation.navigate('DetailedRequest')}
                    />

                    <Request     
                        GuestName={"John Doe"} 
                        PropertyName={"Villa Weiss"} 
                        Status={'approved'}
                        Channel={'webform'}
                        onPress={() => this.props.navigation.navigate('DetailedRequest')}
                    />

                    <Request     
                        GuestName={"John Doe"} 
                        PropertyName={"Villa Weiss"} 
                        Status={'new'}
                        Channel={'email'}
                        onPress={() => this.props.navigation.navigate('DetailedRequest')}
                    />

                    {/* TODO - Link https://medium.com/@alialhaddad/fetching-data-in-react-native-d92fb6876973 */}
        
                </View>
            


            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: colors.white,
        paddingHorizontal:20,
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
        fontSize:30,
        fontWeight: "700"
    },
    txtWelcomeName: {
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
    searchBoxView: {
        flexDirection:"row",
        alignItems:"center",
        elevation:3,
        width:"85%",
        backgroundColor:colors.white,
        paddingHorizontal:20,
        height:35,
        borderRadius:10,
        marginLeft:1
    },
    searchBoxInputField: {
        paddingHorizontal:10,
        fontSize:12
    },
    sortView: {
        alignItems:"center",
        elevation:2,
        width:"15%",
        backgroundColor: colors.white,
        marginLeft:5,
        height:35,
        borderRadius:10,
        marginLeft:1,
        justifyContent:"center"
    },
    colorBoxOrange: {
        backgroundColor: colors.yellow,
        height:100,
        width:100,
        borderRadius:10,
        padding:15,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
    },
    colorBoxGreen: {
        backgroundColor:colors.green,
        height:100,
        width:100,
        borderRadius:10,
        padding:15,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
    },
    colorBoxRed: {
        backgroundColor: colors.red,
        height:100,
        width:100,
        borderRadius:10,
        padding:15,
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