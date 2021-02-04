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
import {GoogleSignin, Button, statusCodes} from '@react-native-community/google-signin';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
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


    signOut = async () => {
    try 
    {
        //proba prijave na račun lukamrko
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        this.setState({ currentUser: null }); // Remember to remove the user from your app's state as well
		this.props.navigation.navigate('SignIn');

    } catch (error) {
        console.error(error);
    }
};
    render(){
        console.log("Settings");
        console.log(this.state.currentUser); 
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                {/*Zaglavlje s pozdravom i implementacija slike*/}
                <View style={styles.mainView}>
                    <View style={styles.postavkeIKonf}>
                        <Text style={styles.settingsText}>Postavke i</Text>
                        <Text style={styles.settingsTextName}>konfiguracija</Text>
                    </View>
                    <View style={styles.profileIconView}>
                        <Image 
                            source={require('../assets/icons/profile.png')}
                            style={styles.profileIconImage}
                        />
                    </View>
                {/*Profilna fotografija, ime i prezime korisnika*/}
                </View>
                        <View style={styles.marginaSlikeIokvir}>
                            <View style={styles.imeISlika}>
                                <Image 
                                        source={require('../assets/icons/profile.png')}
                                        style={styles.imageCenter}
                                    />
                                <Text style={styles.tekstImena}> John Joe </Text>
                            </View>
                        <View style={styles.velicinaFonta}>

                {/*Izbornik sa switchem i ikonicama*/}
                        </View>
                            <View style={styles.margineTeksta}>
                            <EntypoIcon name="light-up" size={22} style={styles.lightUp}></EntypoIcon> 
                                <View>
                                <View style={styles.darkMode}>
                                    <Text style={styles.tekstIzbornika}> Tamna tema </Text>
                                </View>
                                    <View style={styles.switchPlace1}>
                                        <Switch
                                            trackColor={{false: 'gray', true: 'teal'}}
                                            thumbColor="white"
                                            ios_backgroundColor="gray"
                                            onValueChange={(value) => this.setState({toggle: value})}
                                            value={this.state.toggle}
                                        />
                                    </View> 
                                </View>                                                           
                            </View>
                        <View style={styles.margineTeksta}>
                            <View style={styles.notificationIcon}>
                                    <IonIcon name="notifications" size={22}></IonIcon>
                            </View>
                            <View style={styles.notificationTxt}>
                                <Text style={styles.tekstIzbornika}> Obavijesti </Text>
                            </View>
                            <View style={styles.switchPlace2}>
                                <Switch
                                    trackColor={{false: 'gray', true: 'teal'}}
                                    thumbColor="white"
                                    ios_backgroundColor="gray"
                                    onValueChange={(value) => this.setState({toggle2: value})}
                                    value={this.state.toggle2}
                                /> 
                            </View>                                   
                        </View>


                        <View style={styles.emailStavke}>
                            <View style={styles.margineTeksta}>
                                <EntypoIcon name="email" size={20}>
                                    <Text style={styles.tekstIzbornika}> E-mail </Text>
                                </EntypoIcon>          
                            </View>

                            <View style={styles.margineTeksta} >
                                <TouchableOpacity style={styles.dodajUkloniStavke} 
                                onPress={() => this.props.navigation.navigate('AddAparOrTemp')}>                                    
                                    <FontAwesomeIcons name="home" size={24}> 
                                        <Text style={styles.tekstIzbornika} > Dodaj ili ukloni stavke      </Text> 
                                    </FontAwesomeIcons>
                                <View style={styles.arrow}>
                                    <MaterialIcons name="arrow-forward-ios" size={25}></MaterialIcons> 
                                </View>           
                                </TouchableOpacity> 
                            </View>

                            <View style={styles.margineTeksta}>
                                <TouchableOpacity onPress={() => {
                                    this.signOut()
                                }}>
                                    <View style={styles.logoutIcon}>
                                        <MaterialIcons name="logout" size={24}></MaterialIcons>
                                    </View>
                                        <Text style={styles.tekstIzbornika}> Odjavi se </Text>                         
                                </TouchableOpacity>
                            </View>
                        </View>    
                            <View style={styles.foi}>
                                <Text style={styles.foiText}>Made @</Text>
                                <Image source={require('../assets/images/foiLogo.png')}></Image>
                            </View>
                        </View>
                    
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: "#fff",
        paddingHorizontal:20
    },
    mainView: {
        flexDirection: "row",
        width: "100%",
        marginTop: 40,
        alignItems: "center",
        justifyContent: 'space-between'
        
    },
    postavkeIKonf: {
        width: "80%"
    },
    settingsText: {
        fontSize:30,
        fontWeight: "normal"
    },
    settingsTextName: {
        fontSize:30,
        fontWeight: "700"
    },
    profileIconView: {
        width: "20%",
        alignItems: "flex-end"
    },
    profileIconImage: {
        width:50,
        height:50
    },
    sortView: {
        alignItems:"center",
        elevation:2,
        width:"15%",
        backgroundColor:"#FFF",
        marginLeft:5,
        height:35,
        borderRadius:10,
        marginLeft:1,
        justifyContent:"center"
    },
    requestView: {
        flexDirection: "column",
        width: "100%",
        marginTop: 40,
        justifyContent: 'space-between'
    },
    imageCenter: {
        alignItems:"center",
        justifyContent:"center",
        width:55,
        height:55,
        

    },
    imeISlika:{
        alignItems:"center",
        justifyContent:"center", 
        
         
    },
    margineTeksta:{
        marginBottom:0,
        marginTop:20,
        marginLeft:20,
        bottom:40
    },
    marginaSlikeIokvir:{
        marginBottom:40,
        marginTop:80,
        borderRadius:22,
        borderWidth:2,
        borderColor:"grey",
        height:610,
        justifyContent: "center",
        bottom:50,
    },
    tekstImena:{
        marginBottom:20,
        marginTop:4,
        fontSize:25,
        fontWeight: "700",
    },
    tekstIzbornika:{
        fontWeight: "bold",
        fontSize:18,  
        left:28,
        top:-5,
    },
    foi:{
        alignItems:"center",
        flexDirection: 'row',
        justifyContent: 'center',
        bottom:0, 
    },
    Switch1:{
        left:80,
    },
    arrow:{
        left:300,
        bottom:22, 
    },
    logoutIcon:{
       top:20, 
    },
    darkMode:{
        top:35,
        right:5,
    },
    switchPlace1:{
        marginLeft:282,
        right:8
    },
    switchPlace2:{
        marginLeft:282,
        bottom:26,
        right:8
    },
    lightUp:{
        top:55,
        right:2
    },
    notificationIcon:{
        top:20,
        right:2,
    },
    notificationTxt:{
        right:5,
    },
    emailStavke:{
        bottom:18,
    },
    dodajUkloniStavke:{
        top:10,
    }
  
})