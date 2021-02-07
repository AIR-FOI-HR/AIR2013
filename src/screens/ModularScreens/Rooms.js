import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Switch,
  TouchableHighlight,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-community/google-signin";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import { colors } from "../../constants/DesignConstants";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.View}>
        <View style={styles.Naslov}>
          <Text style={styles.settingsText}>Uredite</Text>
          <Text style={styles.settingsTextName}>sobu apartmana</Text>
        </View>
        <View style={styles.marginaSlikeIokvir1}>
          <View style={styles.margineTeksta1}>
            <Text style={styles.tekstIzbornika}>Naziv sobe </Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Unesite naziv sobe"
            ></TextInput>
          </View>
        </View>

        <View style={styles.marginaSlikeIokvir2}>
          <View style={styles.margineTeksta2}>
            <Text style={styles.tekstIzbornika}>Kapacitet sobe </Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Unesite kapacitet"
              keyboardType='numeric'
            ></TextInput>
          </View>
        </View>

        <View style={styles.marginaSlikeIokvir3}>
          <View style={styles.margineTeksta3}>
            <Text style={styles.tekstIzbornika}> Cijena sobe </Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Unesite cijenu"
            ></TextInput>
          </View>
        </View>

        <View style={styles.txtButtonIcon}>
          <View style={styles.btn1}>
            <TouchableOpacity
              style={styles.btnBorder1}
              onPress={() => this.props.navigation.navigate("AddEditRooms")}
            >
              <EntypoIcon
                name="save"
                size={22}
                style={styles.SaveIkona}
              ></EntypoIcon>
              <Text style={styles.btnText1}>SPREMI</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  View: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 150,
  },
  Naslov: {
    width: "80%",
  },
  mainView: {
    flexDirection: "row",
    width: "100%",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "space-between",
  },
  settingsText: {
    fontSize: 30,
    fontWeight: "normal",
  },
  settingsTextName: {
    fontSize: 30,
    fontWeight: "700",
    bottom: 7,
  },
  tekstIzbornika: {
    fontWeight: "bold",
    fontSize: 18,
    left: 28,
    top: -5,
  },
  margineTeksta1: {
    marginBottom: 0,
    marginTop: 0,
    marginLeft: -15,
    bottom: 10,
  },
  margineTeksta2: {
    marginBottom: 0,
    marginTop: 0,
    marginLeft: -15,
    bottom: 10,
  },
  margineTeksta3: {
    marginBottom: 0,
    marginTop: 0,
    marginLeft: -15,
    bottom: 10,
  },
  margineTeksta4: {
    marginBottom: 187,
    marginTop: 0,
    marginLeft: 12,
    bottom: -93,
  },

  arrow: {
    left: 300,
    bottom: 22,
  },
  marginaSlikeIokvir1: {
    marginTop: 125,
    borderColor: "grey",
    height: 40,
    justifyContent: "center",
    bottom: 60,
    width: "100%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "grey",
    height: 40,
  },
  marginaSlikeIokvir2: {
    marginTop: 100,
    borderColor: "grey",
    height: 40,
    justifyContent: "center",
    bottom: 110,
    width: "100%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "grey",
    height: 40,
  },
  marginaSlikeIokvir3: {
    marginTop: 100,
    borderColor: "grey",
    height: 40,
    justifyContent: "center",
    bottom: 160,
    width: "100%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "grey",
    height: 40,
  },
  marginaSlikeIokvir4: {
    marginTop: 100,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "grey",
    height: 40,
    justifyContent: "center",
    bottom: 210,
    width: "100%",
  },
  btn1: {
    left: 200,
    top: 90,
    height: 110,
  },
  btnBorder1: {
    top: 32.5,
    borderColor: colors.black,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 2,
    padding: 8,
    width: "41%",
    height: "43%",
  },
  btnText1: {
    fontWeight: "bold",
    fontSize: 15,
    left: 45,
    bottom: 20,
  },
  TextInput: {
    left: 20,
    top: -10,
    fontSize: 18,
    width: 347,
  },
  SaveIkona: {
    bottom: -2,
  },
});
