import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { colors } from "../../constants/DesignConstants";
import { AddDataOnAPI, EditDataOnAPI } from '../../backend/ApiConnection';

export default class App extends React.Component {

  constructor(props) {
    const { unitId } = props.navigation.getParam('unitId');
    const { name } = props.navigation.getParam('name');
    const { capacity } = props.navigation.getParam('capacity');
    const { price } = props.navigation.getParam('price');
    const { propertyId } = props.navigation.getParam('propertyId');
    const { property } = props.navigation.getParam('property');
    const { availability } = props.navigation.getParam('availability');
    let selectedPropertyId = props.navigation.getParam('selectedPropertyId');

    super(props);
    this.state = {
      unitId: unitId,
      name: name,
      capacity: capacity,
      price: price,
      propertyId: propertyId,
      property: property,
      availability: availability,
      selectedPropertyId: selectedPropertyId
    }

    this.handleChangedTextName = this.handleChangedTextName.bind(this)
    this.handleChangedTextCapacity = this.handleChangedTextCapacity.bind(this)
    this.handleChangedTextPrice = this.handleChangedTextPrice.bind(this)
  }

  urlRooms = 'https://air2020api.azure-api.net/api/Units'

  handleChangedTextName(newText) {
    this.setState({
      name: newText
    })
    console.log(this.state.name)
  }

  handleChangedTextCapacity(newText) {
    this.setState({
      capacity: newText
    })
    console.log(this.state.capacity)
  }

  handleChangedTextPrice(newText) {
    this.setState({
      price: newText
    })
    console.log(this.state.price)
  }

  render() {
    const { unitId } = this.state;
    let capacity = this.state.capacity === undefined ? '' : this.state.capacity + ''
    let price = this.state.price === undefined ? '' : this.state.price + ''

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
              defaultValue={this.state.name}
              onChangeText={this.handleChangedTextName}
            ></TextInput>
          </View>
        </View>

        <View style={styles.marginaSlikeIokvir2}>
          <View style={styles.margineTeksta2}>
            <Text style={styles.tekstIzbornika}>Kapacitet sobe </Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Unesite kapacitet"
              defaultValue={capacity}
              onChangeText={this.handleChangedTextCapacity}
            ></TextInput>
          </View>
        </View>

        <View style={styles.marginaSlikeIokvir3}>
          <View style={styles.margineTeksta3}>
            <Text style={styles.tekstIzbornika}> Cijena sobe </Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Unesite cijenu"
              defaultValue={price}
              onChangeText={this.handleChangedTextPrice}
            ></TextInput>
          </View>
        </View>

        <View style={styles.txtButtonIcon}>
          <View style={styles.btn1}>
            <TouchableOpacity
              style={styles.btnBorder1}
              onPress={async () => {
                let bodyAdd = JSON.stringify({name: this.state.name, capacity: parseInt(this.state.capacity), price: parseFloat(this.state.price), propertyId: this.state.selectedPropertyId})
                let bodyEdit = JSON.stringify({unitId: unitId, name: this.state.name, capacity: this.state.capacity, price: this.state.price, propertyId: this.state.propertyId})
                if (unitId === undefined) {
                  await AddDataOnAPI(this.urlRooms, bodyAdd)
                  ToastAndroid.show("Soba je uspješno dodana!", ToastAndroid.SHORT);
                } else {
                  await EditDataOnAPI(this.urlRooms + '/' + unitId, bodyEdit)
                  ToastAndroid.show("Soba je uspješno promijenjena!", ToastAndroid.SHORT);
                }
                
                this.props.navigation.navigate("AddEditRooms")
              }}
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
    left: 205,
    bottom: -100,
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
