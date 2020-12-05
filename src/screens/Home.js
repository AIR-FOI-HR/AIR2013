import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableHighlight,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import Request from '../components/Request'

import Icon from 'react-native-vector-icons/Ionicons'

export default class App extends React.Component {
    render(){
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                {/*Zaglavlje s pozdravnom porukom i ikonom korisničkog profila*/}
                <View style={styles.mainView}>
                    <View style={styles.welcomeHeaderView}>
                        <Text style={styles.welcomeText}>Dobrodošao,</Text>
                        <Text style={styles.welcomeTextName}>Ante</Text>
                    </View>
                
                    <View style={styles.profileIconView}>
                    <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('Settings')}>
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

                    <Request GuestName={"John Doe"} PropertyName={"Villa Weiss"} onPress={() => this.props.navigation.navigate('DetailedRequest')}/>
                    <Request GuestName={"Matko Doe"} PropertyName={"Villa Weiss"}/>
                    {/* TODO - Link https://medium.com/@alialhaddad/fetching-data-in-react-native-d92fb6876973 */}
        
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
    searchBoxView: {
        flexDirection:"row",
        alignItems:"center",
        elevation:3,
        width:"85%",
        backgroundColor:"#FFF",
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
        backgroundColor:"#FFF",
        marginLeft:5,
        height:35,
        borderRadius:10,
        marginLeft:1,
        justifyContent:"center"
    },
    colorBoxOrange: {
        backgroundColor:"#feca57",
        height:100,
        width:100,
        borderRadius:10,
        padding:15,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
    },
    colorBoxGreen: {
        backgroundColor:"#10ac84",
        height:100,
        width:100,
        borderRadius:10,
        padding:15,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
    },
    colorBoxRed: {
        backgroundColor:"#e74c3c",
        height:100,
        width:100,
        borderRadius:10,
        padding:15,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
    },
    colorBoxesTextLabel: {
        color: "#fff",
        fontSize: 17,
    },
    colorBoxesTextNumber: {
        color: "#fff",
        fontSize: 45
    },
    requestView: {
        flexDirection: "column",
        width: "100%",
        marginTop: 40,
        justifyContent: 'space-between'
    }
})