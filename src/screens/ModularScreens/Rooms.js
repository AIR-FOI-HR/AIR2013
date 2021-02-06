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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.Naslov}>
          <Text style={styles.settingsText}>Uredi</Text>
          <Text style={styles.settingsTextName}>sobe</Text>
        </View>
        <View style={styles.marginaSlikeIokvir1}>
          <View style={styles.margineTeksta1}>
            <Text style={styles.tekstIzbornika}>Naziv sobe </Text>
            <TextInput underlineColorAndroid="transparent" style={styles.TextInput}
            >Naziv sobe</TextInput>
          </View>
        </View>

        <View style={styles.marginaSlikeIokvir2}>
          <View style={styles.margineTeksta2}>
            <Text style={styles.tekstIzbornika}>Kapacitet </Text>
            <TextInput style={styles.TextInput}></TextInput>
          </View>
        </View>

        <View style={styles.marginaSlikeIokvir3}>
          <View style={styles.margineTeksta3}>
            <Text style={styles.tekstIzbornika}> Cijena </Text>
            <TextInput style={styles.TextInput}></TextInput>
          </View>
        </View>

        <View style={styles.marginaSlikeIokvir4}>
          <TouchableOpacity
            style={styles.dodajUkloniStavke}
            onPress={() => this.props.navigation.navigate("AddEditApartments")}
          >
            <View style={styles.margineTeksta4}>
              <FontAwesomeIcons name="bed" size={19}>
                <Text style={styles.tekstIzbornika}>
                  {" "}
                  Dodaj ili ukloni sobe
                </Text>
              </FontAwesomeIcons>
              <View style={styles.arrow}>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={25}
                ></MaterialIcons>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.txtButtonIcon}>
          <View style={styles.btn1}>
            <TouchableHighlight style={styles.btnBorder1}>
              <EntypoIcon name="save" size={21}></EntypoIcon>
            </TouchableHighlight>
            <TouchableHighlight>
              <Text style={styles.btnText1}>SPREMI</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
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
    //marginBottom: 40,
    marginTop: 125,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "grey",
    height: 40,
    justifyContent: "center",
    bottom: 60,
  },
  marginaSlikeIokvir2: {
    //marginBottom: 40,
    marginTop: 100,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "grey",
    height: 40,
    justifyContent: "center",
    bottom: 110,
  },
  marginaSlikeIokvir3: {
    //marginBottom: 40,
    marginTop: 100,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "grey",
    height: 40,
    justifyContent: "center",
    bottom: 160,
  },
  marginaSlikeIokvir4: {
    //marginBottom: 40,
    marginTop: 100,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "grey",
    height: 40,
    justifyContent: "center",
    bottom: 210,
  },
  btn1: {
    left: 245,
    bottom: 40,
    height: 110,
  },
  btnBorder1: {
    top: 32.5,
    borderColor: colors.black,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 2,
    padding: 8,
    width: "30%",
    height: "35%",
  },
  btnText1: {
    fontWeight: "bold",
    fontSize: 14,
    left: 45,
    top: 5,
  },
  TextInput: {
    left: 20,
    top: -10,
    fontSize: 18,
  },
});
