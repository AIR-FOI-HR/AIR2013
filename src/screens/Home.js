import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Request from '../components/Request'

function Home(props) {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
            {/*Zaglavlje*/}
            <View style={styles.headerView}>
                <View style={styles.welcomeHeaderView}>
                    <Text style={styles.welcomeText}>Dobrodošao,</Text>
                    <Text style={styles.welcomeTextName}>Ante</Text>
                </View>
                <View style={styles.profileIconView}>
                    <Image 
                        source={require('../assets/icons/profile.png')}
                        style={styles.profileIconImage}
                    />
                </View>
                
            </View>

            {/*Search*/}
            <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    width:"100%",
                    marginVertical:30
                }}>
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        elevation:3,
                        width:"85%",
                        backgroundColor:"#FFF",
                        paddingHorizontal:20,
                        height:35,
                        borderRadius:10,
                        marginLeft:1
                    }}>
                        <Image source={require('../assets/icons/search_icon.png')}
                            style={{width:10,height:10}}
                           />
                            <TextInput
                                placeholder="Pretraži..."
                                style={{
                                paddingHorizontal:10,
                                fontSize:12
                            }}
                            />
                    </View>
                            
                            
                            <View style={{
                                alignItems:"center",
                                elevation:2,
                                width:"15%",
                                backgroundColor:"#FFF",
                                marginLeft:5,
                                height:35,
                                borderRadius:10,
                                marginLeft:1,
                                justifyContent:"center"
                            }}>
                                <Image source={require('../assets/icons/sort_icon.png')}
                            style={{width:10,height:10}}
                           />
                            </View>
                   
                </View>

                {/*Color boxes*/}


                {/*Requests*/}
                <Request/>
                <Request/>
                <Request/>
                <Request/>


        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: "#fff",
        paddingHorizontal:20
    },
    headerView: {
        flexDirection: "row",
        width: "100%",
        marginTop: 40,
        alignItems: "center"
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
    }
})

export default Home;