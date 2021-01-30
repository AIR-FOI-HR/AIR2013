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
               
                    <View style={styles.Naslov}>
                        <Text style={styles.settingsText}>Dodaj/Ukloni</Text>
                        <Text style={styles.settingsTextName}>stavke</Text>
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
    Naslov: {
        width: "80%"
    },
    mainView: {
        flexDirection: "row",
        width: "100%",
        marginTop: 40,
        alignItems: "center",
        justifyContent: 'space-between'
        
    },
    settingsText: {
        fontSize:30,
        fontWeight: "normal"
    },
    settingsTextName: {
        fontSize:30,
        fontWeight: "700"
    },
})