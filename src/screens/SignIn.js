import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Image, Dimensions} from 'react-native';
import {GoogleSignin, GoogleSigninButton, statusCodes} from '@react-native-community/google-signin';
import Home from  "./Home";

GoogleSignin.configure({
	webClientId: '282691096774-dq1p0dd5f7ni83fne0ugegffnpcpjt5k.apps.googleusercontent.com',
	offlineAccess: true,
});
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class SignIn extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			userGoogleInfo: {},
			loaded: false,
		};
	}

	signIn = async () => {
		try {
			await GoogleSignin.hasPlayServices();
			const userInfo = await GoogleSignin.signIn();
			this.setState({
				userGoogleInfo: userInfo,
				loaded: true,
			});
			var userGoogleInfo=this.props.userGoogleInfo;
			this.props.navigation.navigate('Home',userGoogleInfo);

		}
		catch(error){
		console.log(error.message);
		}
	}
//proba
	render() {
		return (
			<View style={styles.mainContainer}>
				<View style={styles.container}>
					<Image source={require("../assets/icons/mRent_icon.png")} style={styles.imageIcon}/>
				</View>
				<View style={styles.container}>
					<GoogleSigninButton
						style={styles.googleIcon}
						onPress={this.signIn}
						size={GoogleSigninButton.Size.Standard}
						color={GoogleSigninButton.Color.Light}
					/>
					{this.state.loaded ? (
						<View></View>//this.props.navigation.navigate('Home')
					) : (
						<Text>Not signed in</Text>
					)}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
	alignItems: 'center',
	backgroundColor:'#fff', 
  },
  imageIcon:
  {
	width:150,
	height:150,
	resizeMode: 'stretch',
	marginBottom:75,
  },
  container:{
    justifyContent: 'center',
	alignItems: 'center',
  },
  googleIcon:{
	width: 150, 
	height: 50,
  },
});

export default SignIn;


/*
<View>
						<Text>{this.state.userGoogleInfo.user.name}</Text>
						<Text>{this.state.userGoogleInfo.user.email}</Text>
						<Image
							style={{width: 100, height: 100}}
							source={{url: this.state.userGoogleInfo.user.photo}}
						/>
					</View>
 */

