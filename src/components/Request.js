import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {TouchableOpacity} from 'react-native-gesture-handler';
import { colors } from '../constants/DesignConstants'



        
function setProperColor(requestStatus, sentThrough) {
    
    if (requestStatus === 'new') {

        if (sentThrough === 'email') {

            return <Icon name="mail-unread-outline" size={35} color= {colors.yellow} style={{elevation:5}}/>
        
        } else {

           return   <Icon name="earth-outline" size={35} color= {colors.yellow} style={{elevation:5}}/>

        }
             

    } else if (requestStatus === 'approved'){

        if (sentThrough === 'email') {

            return <Icon name="mail-unread-outline" size={35} color= {colors.green} style={{elevation:5}}/>
        
        } else {

           return   <Icon name="earth-outline" size={35} color= {colors.green} style={{elevation:5}}/>
           
        }

    } else if (requestStatus === 'rejected') {

        if (sentThrough === 'email') {

            return <Icon name="mail-unread-outline" size={35} color= {colors.red} style={{elevation:5}}/>
        
        } else {

           return   <Icon name="earth-outline" size={35} color= {colors.red} style={{elevation:5}}/>
           
        }

    }   
}

export default class App extends React.Component {
    

    render(){
        
        
        
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.mainView}>
                <View>
                    <Image 
                    source={require('../assets/icons/profile.png')}
                    style={styles.profileIconImage}
                    />
                </View>
                <View style={{width:"73%"}}>
                    <Text style={styles.txtNameSurname}>{this.props.GuestName}</Text>
                    <Text style={styles.txtPropertyName}>{this.props.PropertyName}</Text>
                    <Text style={styles.txtPeopleNumber}>for {this.props.NumberOfGuests}</Text>
                </View>
                <View>
                    {/*
                    {
                        {
                        'new': <Icon name="mail-unread-outline" size={35} color={colors.yellow} style={{elevation:5}}/>,
                        'approved': <Icon name="mail-unread-outline" size={35} color= {colors.green} style={{elevation:5}}/>,
                        'rejected': <Icon name="mail-unread-outline" size={35} color= {colors.red} style={{elevation:5}}/>
                        }[this.props.Status]
                    }
                    */}
                    {setProperColor(this.props.Status,this.props.Channel)}
                                   
                    
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection:"row",
        alignItems:"center",
        elevation:3,
        width:"99.5%",
        backgroundColor:"#FFF",
        paddingHorizontal:20,
        height:80,
        borderRadius:10,
        marginLeft:1,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: colors.yellow,
        justifyContent:"space-between"
    },
    profileIconImage: {
        width:40,
        height:40,
        marginRight: 10,
        backgroundColor: 'red',
        borderRadius: 17
    },
    txtNameSurname: {
        fontSize: 20,
        fontWeight: "700",
        color: "#353b48"
    },
    txtPropertyName: {
        fontSize: 10,
        fontWeight: "300",
        color: "#353b48"
    },
    txtPeopleNumber: {
        fontSize: 10,
        fontWeight: "300",
        color: "#353b48"
    }
})