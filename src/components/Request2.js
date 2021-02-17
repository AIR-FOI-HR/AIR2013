import React from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../constants/DesignConstants";

{
  /* Funkcija koja ovisno o primljenim parametrima postavlja odgovarajuću ikonu
    kartice zahtjeva te postavlja odgovarajuću signalnu boju ikone.
*/
}
function setProperColor(requestStatus, sentThrough) {
  if (requestStatus === "new") {
    if (sentThrough === "email") {
      return (
        <Icon
          name="mail-unread-outline"
          size={35}
          color={colors.yellow}
          style={{ elevation: 5 }}
        />
      );
    } else {
      return (
        <Icon
          name="earth-outline"
          size={35}
          color={colors.yellow}
          style={{ elevation: 5 }}
        />
      );
    }
  } else if (requestStatus === "approved") {
    if (sentThrough === "email") {
      return (
        <Icon
          name="mail-unread-outline"
          size={35}
          color={colors.green}
          style={{ elevation: 5 }}
        />
      );
    } else {
      return (
        <Icon
          name="earth-outline"
          size={35}
          color={colors.green}
          style={{ elevation: 5 }}
        />
      );
    }
  } else if (requestStatus === "rejected") {
    if (sentThrough === "email") {
      return (
        <Icon
          name="mail-unread-outline"
          size={35}
          color={colors.red}
          style={{ elevation: 5 }}
        />
      );
    } else {
      return (
        <Icon
          name="earth-outline"
          size={35}
          color={colors.red}
          style={{ elevation: 5 }}
        />
      );
    }
  }
}

{
  /* Funkcija koja ovisno o primljenim parametrima postavlja odgovarajuću signalnu boju okvira.
   */
}
function dynamicFrameColor(requestStatus) {
  if (requestStatus === "new") {
    return {
      flexDirection: "row",
      alignItems: "center",
      elevation: 3,
      width: "99.5%",
      backgroundColor: colors.yellow,
      paddingHorizontal: 20,
      height: 50,
      borderRadius: 10,
      marginLeft: 1,
      marginTop: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: colors.yellow,
      justifyContent: "space-between",
      
    };
  } else if (requestStatus === "approved") {
    return {
      flexDirection: "row",
      alignItems: "center",
      elevation: 3,
      width: "99.5%",
      backgroundColor: colors.green,
      paddingHorizontal: 20,
      height: 50,
      borderRadius: 10,
      marginLeft: 1,
      marginTop: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: colors.green,
      justifyContent: "space-between",
    };
  } else {
    return {
      flexDirection: "row",
      alignItems: "center",
      elevation: 3,
      width: "99.5%",
      backgroundColor: colors.red,
      paddingHorizontal: 20,
      height: 50,
      borderRadius: 10,
      marginLeft: 1,
      marginTop: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: colors.red,
      justifyContent: "space-between",
    };
  }
}

export default class App extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={dynamicFrameColor(this.props.Status)}
      >
       
        <View style={{ width: "73%", flexDirection: 'row', justifyContent: 'flex-start' }}>
          <Text style={styles.txtPropertyName}>{this.props.PropertyName} |</Text>
          <Text style={styles.txtNameSurname}> {this.props.GuestName}</Text>
         
          
        </View>
        
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  profileIconImage: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 17
  },
  txtNameSurname: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.white
  },
  txtPropertyName: {
    fontSize: 10,
    fontWeight: "300",
    color: colors.subtleWhite,
    fontSize: 20
  },
  txtPeopleNumber: {
    fontSize: 10,
    fontWeight: "300",
    color: "#353b48",
  },
});
