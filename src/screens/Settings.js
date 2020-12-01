import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Switch,
    ToggleSwitch
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            toggle2: false,
        };
    }

    render(){
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                {/*Zaglavlje s pozdravom i implementacija slike*/}
                <View style={styles.mainView}>
                    <View style={styles.welcomeHeaderView}>
                        <Text style={styles.settingsText}>Postavke i</Text>
                        <Text style={styles.settingsTextName}>konfiguracija</Text>
                    </View>
                    <View style={styles.profileIconView}>
                        <Image 
                            source={require('../assets/icons/profile.png')}
                            style={styles.profileIconImage}
                        />
                    </View>
                    
                </View>
                
                <View styles={styles.glavniObrub}>
                     <View style={styles.marginaSlike}>
                        <View style={styles.centriranje}>
                            <Image 
                                    source={require('../assets/icons/profile.png')}
                                    style={styles.imageCenter}
                                />
                            <Text style={styles.tekstImena}> John Joe </Text>
                        </View>
                    </View>
                    
                    <View style={styles.velicinaFonta}>


                    </View>
                        <View style={styles.margineTeksta}>
                            
                                    <EntypoIcon name="light-up">
                                        <Text style={styles.tekstIzbornika}> Tamna tema </Text>
                                        
                                            <Switch
                                                trackColor={{false: 'gray', true: 'teal'}}
                                                thumbColor="white"
                                                ios_backgroundColor="gray"
                                                onValueChange={(value) => this.setState({toggle: value})}
                                                value={this.state.toggle}
                                            />  
                     
                                    </EntypoIcon>  
                                                 
                        </View>
                        <View>
                            <IonIcon name="notifications"> 
                                <Text style={styles.tekstIzbornika}> Obavijesti </Text>
                                <Switch
                                     trackColor={{false: 'gray', true: 'teal'}}
                                    thumbColor="white"
                                    ios_backgroundColor="gray"
                                    onValueChange={(value) => this.setState({toggle2: value})}
                                    value={this.state.toggle2}
                                 /> 

                            </IonIcon>
                            
                        </View>
                        <View style={styles.margineTeksta}>
                            <EntypoIcon name="email">
                                <Text style={styles.tekstIzbornika}> E-mail </Text>
                            </EntypoIcon>
                            
                        </View>
                        <View >
                            <TouchableOpacity>
                                <FontAwesomeIcons name="home"> 
                                    <Text style={styles.tekstIzbornika} > Dodaj ili ukloni stavke 
                                        <MaterialIcons name="arrow-forward-ios"></MaterialIcons> 
                                    </Text> 
                                </FontAwesomeIcons>        
                            </TouchableOpacity> 
                        </View>
                        <View style={styles.margineTeksta}>
                            <TouchableOpacity>
                                <Text style={styles.tekstIzbornika}> Odjavi se </Text>
                            </TouchableOpacity>
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
    welcomeHeaderView: {
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
    centriranje:{
        alignItems:"center",
        justifyContent:"center", 
         
    },
    margineTeksta:{
        marginBottom:20,
        marginTop:20,
    },
    marginaSlike:{
        marginBottom:40,
        marginTop:80,
    },
    glavniObrub:{
        borderTopWidth:2,
        borderBottomWidth:2,
        borderRightWidth:2,
        borderLeftWidth:2,
        borderColor:"black",
        flex:1,
        backgroundColor:"black",
        borderRadius: 6,
    },
    tekstImena:{
        marginBottom:20,
        marginTop:20,
        fontSize:25,
        fontWeight: "700",
    },
    tekstIzbornika:{
        fontWeight: "bold"
        
    },
    
    
})