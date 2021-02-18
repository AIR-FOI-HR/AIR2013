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
  Button,
  statusCodes,
} from "@react-native-community/google-signin";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../constants/DesignConstants";
import { submit } from "./Home";
import { color } from "react-native-reanimated";

global.design = "Dizajn1";

export default class App extends React.Component {
  constructor(props) {
    //Konstruktor za switch 1 i 2
    super(props);
    this.state = {
      toggle: false,
      toggle2: false,
    };
    this.getCurrentUser();
  }

  getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    this.setState({ currentUser });
    console.log("Ušao u google");
  };

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ currentUser: null }); // Remember to remove the user from your app's state as well
      this.props.navigation.navigate("SignIn");
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    var ime = "";
    var email = "";
    var imgSrc = "slika";
    //var imgSrc = "../assets/icons/profile.png";
    try {
      ime = this.state.currentUser.user.name;
      email = this.state.currentUser.user.email;
      if (this.state.currentUser.user.photo != undefined) {
        imgSrc = this.state.currentUser.user.photo;
      }
    } catch (error) {}

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        {/*Zaglavlje s pozdravom i implementacija slike*/}
        <View style={styles.mainView}>
          <View style={styles.postavkeIKonf}>
            <Text style={styles.settingsText}>Postavke i</Text>
            <Text style={styles.settingsTextName}>konfiguracija</Text>
          </View>
          <View style={styles.profileIconView}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Image source={{ uri: imgSrc }} style={styles.profileIconImage} />
            </TouchableOpacity>
          </View>
          {/*Profilna fotografija, ime i prezime korisnika*/}
        </View>
        <View style={styles.marginaSlikeIokvir}>
          <View style={styles.imeISlika}>
            <Image source={{ uri: imgSrc }} style={styles.imageCenter} />
            <Text style={styles.tekstImena}> {ime} </Text>
          </View>
          <View style={styles.velicinaFonta}>
            {/*Izbornik sa switchem i ikonicama*/}
          </View>
          <View style={styles.margineTeksta}>
            <EntypoIcon
              name="light-up"
              size={22}
              style={styles.lightUp}
            ></EntypoIcon>
            <View>
              <View style={styles.darkMode}>
                <Text style={styles.tekstIzbornika}> Tamna tema </Text>
              </View>
              <View style={styles.switchPlace1}>
                <Switch
                  trackColor={{ false: "gray", true: "teal" }}
                  thumbColor="white"
                  ios_backgroundColor="gray"
                  onValueChange={(value) => this.setState({ toggle: value })}
                  value={this.state.toggle}
                />
              </View>
            </View>
          </View>
          <View style={styles.margineTeksta}>
            <View style={styles.notificationIcon}>
              <IonIcon name="notifications" size={22}></IonIcon>
            </View>
            <View style={styles.notificationTxt}>
              <Text style={styles.tekstIzbornika}> Obavijesti </Text>
            </View>
            <View style={styles.switchPlace2}>
              <Switch
                trackColor={{ false: "gray", true: "teal" }}
                thumbColor="white"
                ios_backgroundColor="gray"
                onValueChange={(value) => this.setState({ toggle2: value })}
                value={this.state.toggle2}
              />
            </View>
          </View>

          <View style={styles.emailStavke}>
            <View style={styles.margineTeksta}>
              <EntypoIcon name="email" size={20}>
                <Text style={styles.tekstIzbornika}> {email}</Text>
              </EntypoIcon>
            </View>

            <View style={styles.margineTeksta}>
              <TouchableOpacity
                style={styles.dodajUkloniStavke}
                onPress={() => this.props.navigation.navigate("AddAparOrTemp")}
              >
                <FontAwesomeIcons name="home" size={24}>
                  <Text style={styles.tekstIzbornika}>
                    {" "}
                    Dodaj ili ukloni stavke{" "}
                  </Text>
                </FontAwesomeIcons>
                <View style={styles.arrow}>
                  <MaterialIcons
                    name="arrow-forward-ios"
                    size={25}
                  ></MaterialIcons>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.margineOdjave}>
              <TouchableOpacity
                style={styles.opacityOdjava}
                onPress={() => {
                  this.signOut();
                }}
              >
                <View style={styles.logoutIcon}>
                  <MaterialIcons name="logout" size={24}></MaterialIcons>
                </View>
                <Text style={styles.tekstIzbornika}> Odjavi se </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            bottom: 340,
          }}
        />
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            bottom: 210,
          }}
        />
        <Text style={styles.dizajnKarticaTekst}>
          Odaberite dizajn kartica po želji:
        </Text>
        <View style={styles.txtButtonIcon}>
          <View style={styles.btn1}>
            <TouchableHighlight
              style={[
                styles.btnBorder1,
                {
                  borderColor: design === "Dizajn1" ? colors.red : colors.black,
                },
              ]}
              onPress={() => {
                if (design !== "Dizajn1") {
                  design = "Dizajn1";
                }
                submit("Request");
                this.props.navigation.navigate("Home");
              }}
            >
              <Text style={styles.btnText1}>DIZAJN 1</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.btn2}>
            <TouchableHighlight
              style={[
                styles.btnBorder2,
                {
                  borderColor: design === "Dizajn2" ? colors.red : colors.black,
                },
              ]}
              onPress={() => {
                if (design !== "Dizajn2") {
                  design = "Dizajn2";
                }
                submit("Request2");
                this.props.navigation.navigate("Home");
              }}
            >
              <Text style={styles.btnText2}>DIZAJN 2</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.foi}>
          <Text style={styles.foiText}>Made @</Text>
          <Image source={require("../assets/images/foiLogo.png")}></Image>
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
  mainView: {
    flexDirection: "row",
    width: "100%",
    marginTop: 0,
    alignItems: "center",
    justifyContent: "space-between",
  },
  postavkeIKonf: {
    width: "80%",
  },
  settingsText: {
    fontSize: 30,
    fontWeight: "normal",
  },
  settingsTextName: {
    fontSize: 30,
    fontWeight: "700",
  },
  profileIconView: {
    width: "20%",
    alignItems: "flex-end",
  },
  profileIconImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  sortView: {
    alignItems: "center",
    elevation: 2,
    width: "15%",
    backgroundColor: "#FFF",
    marginLeft: 5,
    height: 35,
    borderRadius: 10,
    marginLeft: 1,
    justifyContent: "center",
  },
  requestView: {
    flexDirection: "column",
    width: "100%",
    marginTop: 40,
    justifyContent: "space-between",
  },
  imageCenter: {
    alignItems: "center",
    justifyContent: "center",
    width: 55,
    height: 55,
  },
  imeISlika: {
    alignItems: "center",
    justifyContent: "center",
    bottom: 45,
  },
  margineTeksta: {
    marginBottom: 0,
    marginTop: 20,
    marginLeft: 20,
    bottom: 85,
  },
  marginaSlikeIokvir: {
    marginBottom: 40,
    marginTop: 80,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "grey",
    height: 680,
    justifyContent: "center",
    bottom: 50,
  },
  tekstImena: {
    marginBottom: 20,
    marginTop: 4,
    fontSize: 25,
    fontWeight: "700",
  },
  tekstIzbornika: {
    fontWeight: "bold",
    fontSize: 18,
    left: 28,
    top: -5,
  },
  foi: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    bottom: 350,
  },
  Switch1: {
    left: 80,
  },
  arrow: {
    left: 290,
    bottom: 22,
  },
  logoutIcon: {
    top: 20,
  },
  darkMode: {
    top: 35,
    right: 5,
  },
  switchPlace1: {
    marginLeft: 282,
    right: 8,
  },
  switchPlace2: {
    marginLeft: 282,
    bottom: 26,
    right: 8,
  },
  lightUp: {
    top: 55,
    right: 2,
  },
  notificationIcon: {
    top: 20,
    right: 2,
  },
  notificationTxt: {
    right: 5,
  },
  emailStavke: {
    bottom: 18,
  },
  dodajUkloniStavke: {
    top: 10,
  },
  margineOdjave: {
    top: 70,
    left: 22,
    width: 100,
  },
  txtButtonIcon: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn1: {
    right: -2,
    bottom: 320,
  },
  btn2: {
    right: 54,
    bottom: 320,
  },
  btnBorder1: {
    top: 35,
    borderColor: colors.black,
    borderRadius: 8,
    borderWidth: 2,
    padding: 8,
    width: "160%",
    height: "20%",
    left: 2,
  },
  btnBorder2: {
    top: 35,
    borderColor: colors.black,
    borderRadius: 8,
    borderWidth: 2,
    padding: 8,
    width: "160%",
    height: "20%",
    left: 7,
  },
  btnText1: {
    fontWeight: "bold",
    fontSize: 12,
    left: 24,
    bottom: 0,
    fontSize: 13,
  },
  btnText2: {
    fontWeight: "bold",
    fontSize: 12,
    left: 24,
    bottom: 0,
    fontSize: 13,
  },
  dizajnKarticaTekst: {
    bottom: 315,
    textAlign: "center",
    //fontWeight: "bold",
    fontSize: 17,
  },
});
