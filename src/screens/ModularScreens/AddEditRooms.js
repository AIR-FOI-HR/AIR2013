import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Switch,
  Button,
  TouchableHighlight,
  ActivityIndicator,
  ToastAndroid
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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../constants/DesignConstants";
import { RadioButton } from "react-native-paper";
import { DeleteDataFromAPI, FetchDataFromAPI } from '../../backend/ApiConnection'

export default class App extends React.Component {

  constructor(props) {
    let selectedPropertyId = props.navigation.getParam('selectedPropertyId');

    super(props);
    this.state = {
      selectedPropertyId: selectedPropertyId,
      checked: null,
      dataSourceRooms: null,
      isLoading: true
    }
  }

  urlRooms = 'https://air2020api.azure-api.net/api/Units'

  async componentDidMount() {
    this.setState({
      dataSourceRooms: await FetchDataFromAPI(this.urlRooms),
      isLoading: false
    })

    this.didFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      async () => {
        this.setState({
          dataSourceRooms: await FetchDataFromAPI(this.urlRooms),
          isLoading: false
        })
      }
    );
  }

  componentWillUnmount() {
    this.didFocusSubscription.remove();
  }

  componentDidUpdate(prevState) {
    if (prevState.dataSourceRooms !== this.state.dataSourceRooms) {
      this.render();
    }
  }

  render() {
    const { checked } = this.state;

    if (this.state.isLoading) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#236E9F"/>
        </View>
      );
    } else {

      var dataRooms = this.state.dataSourceRooms;

      let rooms = dataRooms.map((requestVal, keyRequest) => {

        var unitId = requestVal.unitId;
        var name = requestVal.name;
        var capacity = requestVal.capacity;
        var price = requestVal.price;
        var propertyId = requestVal.propertyId;
        var property = requestVal.property;
        var availability = requestVal.availability;

        if (this.state.selectedPropertyId === propertyId) {
          return <View key={keyRequest}>
            <View style={styles.marginaSlikeIokvir1}>
              <View style={styles.margineTeksta1}>
                <View style={styles.radioButton}>
                  <RadioButton
                    value={unitId}
                    status={checked === unitId ? "checked" : "unchecked"}
                    onPress={() => {
                      this.setState({ checked: unitId });
                    }}
                  />
                </View>
                <Text style={styles.tekstIzbornika}>{name}</Text>
                <View>
                  <View style={styles.arrow}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate("Rooms", { unitId: { unitId }, name: { name }, capacity: { capacity }, price: { price }, propertyId: { propertyId }, property: { property }, availability: { availability }, selectedPropertyId: this.state.selectedPropertyId })}
                    >
                      <MaterialIcons
                        name="arrow-forward-ios"
                        size={25}
                      ></MaterialIcons>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        }

      });

      return (
        <View style={styles.background}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}
          >
            <View style={styles.Naslov}>
              <Text style={styles.settingsText}>Dodaj/ukloni/uredi</Text>
              <Text style={styles.settingsTextName}>sobe</Text>
            </View>

            {rooms}

          </ScrollView>
          <View style={styles.txtButtonIcon}>
            <View style={styles.btn1}>
              <TouchableOpacity
                style={styles.btnBorder1}
                onPress={() => this.props.navigation.navigate("Rooms", { unitId: '', name: '', capacity: '', price: '', propertyId: '', property: '', availability: '', selectedPropertyId: this.state.selectedPropertyId })}
              >
                <MaterialCommunityIcons
                  name="plus"
                  size={23}
                ></MaterialCommunityIcons>
                <Text style={styles.btnText1}>DODAJ</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.btn2}>
              <TouchableOpacity
                style={styles.btnBorder2}
                onPress={async () => {
                  await DeleteDataFromAPI(this.urlRooms + '/' + checked)
                  ToastAndroid.show("Soba je uspješno obrisana!", ToastAndroid.SHORT);
                  this.setState({
                    dataSourceRooms: await FetchDataFromAPI(this.urlRooms)
                  })
                }}
              >
                <IonIcon name="trash" size={20} />
                <Text style={styles.btnText2}>OBRIŠI</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  scrollView: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 290,
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
    marginBottom: 187,
    marginTop: 0,
    marginLeft: 12,
    bottom: -61,
  },
  margineTeksta2: {
    marginBottom: 40,
    marginTop: 0,
    marginLeft: 12,
    bottom: -5,
  },
  arrow: {
    left: 300,
    bottom: 22,
  },
  marginaSlikeIokvir1: {
    marginBottom: 5,
    marginTop: 40,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "grey",
    height: 40,
    justifyContent: "center",
    bottom: 20,
  },
  marginaSlikeIokvir2: {
    //marginBottom: 40,
    marginTop: 100,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "grey",
    height: 40,
    justifyContent: "center",
    bottom: 120,
  },
  txtButtonIcon: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn1: {
    right: 60,
    bottom: -15,
  },
  btn2: {
    right: 20,
    bottom: -15,
  },
  btnBorder1: {
    top: 35,
    borderColor: colors.black,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 2,
    padding: 8,
    width: "200%",
    height: "24%",
    left:2
  },
  btnBorder2: {
    top: 35,
    borderColor: colors.black,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 2,
    padding: 8,
    width: "200%",
    height: "24%",
    left: 11
  },
  btnText1: {
    fontWeight: "bold",
    fontSize: 15,
    left: 55,
    bottom: 22,
  },
  btnText2: {
    fontWeight: "bold",
    fontSize: 15,
    left: 55,
    bottom: 20,
  },
  arrow: {
    left: 300,
    bottom: 30,
  },
  radioButton: {
    top: 25,
    left: -10,
  },
  radioButton2: {
    top: 31,
    left: 2,
  },
  background: {
    backgroundColor: colors.white,
    height: 800,
  },
});
