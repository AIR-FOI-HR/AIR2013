import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput
} from 'react-native'

function Request(props) {
    return (
        <View>
            <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        elevation:3,
                        width:"100%",
                        backgroundColor:"#FFF",
                        paddingHorizontal:20,
                        height:80,
                        borderRadius:10,
                        marginLeft:1,
                        marginTop: 10
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
        </View>
    );
}

export default Request;