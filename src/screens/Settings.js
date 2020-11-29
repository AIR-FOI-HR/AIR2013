import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'



export default class App extends React.Component {
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

                <View>
                    <Image 
                            source={require('../assets/icons/profile.png')}
                        />
                </View>
                <View>
                    <Text> John Joe </Text>
                </View>
                <View>
                    <Text> Tamna tema </Text>
                </View>
                <View>
                    <Text> Obavijesti </Text>
                </View>
                <View>
                    <Text> E-mail </Text>
                </View>
                <View>
                   <TouchableOpacity><Text> Dodaj ili ukloni stavke </Text></TouchableOpacity> 
                </View>
                <View>
                    <TouchableOpacity><Text> Odjavi se </Text></TouchableOpacity>
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
    }
})