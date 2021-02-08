import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Switch, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../constants/DesignConstants';
import { AddDataOnAPI, EditDataOnAPI } from '../../backend/ApiConnection';

export default class App extends React.Component {

  constructor(props) {
    const { emailTemplateId } = props.navigation.getParam('emailTemplateId');
    const { name } = props.navigation.getParam('name');
    const { templateContent } = props.navigation.getParam('templateContent');

    const { templateNameText } = '';
    const { templateContentText } = '';

    super(props);
    this.state = {
      emailTemplateId: emailTemplateId,
      name: name,
      templateContent: templateContent,
      templateNameText: templateNameText,
      templateContentText: templateContentText,
    }

    this.handleChangedTextName = this.handleChangedTextName.bind(this)
    this.handleChangedTextContent = this.handleChangedTextContent.bind(this)
  }

  urlTemplates = 'https://air2020api.azure-api.net/api/EmailTemplates'

  handleChangedTextName(newText) {
    this.setState({
      templateNameText: newText
    })
    
    console.log(this.state.templateNameText)
  }

  handleChangedTextContent(newText) {
    this.setState({
      templateContentText: newText
    })
    
    console.log(this.state.templateContentText)
  }

  render() {

    const { emailTemplateId } = this.state;

    return (
      <View style={styles.View}>
        <View style={styles.Naslov}>
          <Text style={styles.settingsText}>Uredi</Text>
          <Text style={styles.settingsTextName}>predložak</Text>
        </View>
        <View style={styles.marginaSlikeIokvir1}>
          <View style={styles.margineTeksta1}>
            <Text style={styles.tekstIzbornika1}>Naziv predloška </Text>
            <TextInput
              style={styles.TextInput1}
              placeholder="Unesite naziv predloška"
              defaultValue={this.state.name}
              onChangeText={this.handleChangedTextName}
            ></TextInput>
          </View>
        </View>

        <View style={styles.marginaSlikeIokvir2}>
          <View style={styles.margineTeksta2}>
            <Text style={styles.tekstIzbornika2}>Tekst predloška </Text>
            <TextInput
              style={styles.TextInput2}
              placeholder="Unesite tekst predloška"
              multiline
              defaultValue={this.state.templateContent}
              onChangeText={this.handleChangedTextContent}
            ></TextInput>
          </View>
        </View>
        <View style={styles.txtButtonIcon}>
          <View style={styles.btn1}>
            <TouchableOpacity
              style={styles.btnBorder1}
              onPress={async() => {
                let bodyAdd = JSON.stringify({ name: this.state.templateNameText, templateContent: this.state.templateContentText })
                let bodyEdit = JSON.stringify({ emailTemplateId: emailTemplateId, name: this.state.templateNameText, templateContent: this.state.templateContentText })
                if(emailTemplateId === undefined){
                  await AddDataOnAPI(this.urlTemplates, bodyAdd)
                }else {
                  await EditDataOnAPI(this.urlTemplates + '/' + emailTemplateId, bodyEdit)
                }
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
  tekstIzbornika1: {
    fontWeight: "bold",
    fontSize: 18,
    left: 28,
    top: 12,
  },
  tekstIzbornika2: {
    fontWeight: "bold",
    fontSize: 18,
    left: 28,
    top: 20,
  },
  margineTeksta1: {
    marginBottom: 0,
    marginTop: 0,
    marginLeft: -15,
    bottom: 30,
  },
  margineTeksta2: {
    marginBottom: 0,
    marginTop: 0,
    marginLeft: -15,
    bottom: 210,
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
    bottom: 80,
  },
  marginaSlikeIokvir2: {
    //marginBottom: 40,
    marginTop: 100,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "grey",
    height: 400,
    justifyContent: "center",
    bottom: 140,
    width: "100%",
  },
  btn1: {
    left: 205,
    bottom: 120,
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
  SaveIkona: {
    bottom: -2,
  },
  TextInput1: {
    left: 20,
    top: 10,
    fontSize: 18,
    width: 347,
  },
  TextInput2: {
    left: 20,
    top: 20,
    fontSize: 18,
    width: 340,

  },
});
