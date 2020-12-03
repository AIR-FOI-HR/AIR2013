import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {GoogleSignin, GoogleSigninButton, statusCodes} from '@react-native-community/google-signin';
import Home from  "./Home";
import createAppContainer from "../navigation/Navigator";

GoogleSignin.configure({
	webClientId: '282691096774-dq1p0dd5f7ni83fne0ugegffnpcpjt5k.apps.googleusercontent.com',
	offlineAccess: true,
});


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
		}
		catch(error){
		console.log(error.message);
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<GoogleSigninButton
					onPress={this.signIn}
					size={GoogleSigninButton.Size.Wide}
					color={GoogleSigninButton.Color.Dark}
				/>
				{this.state.loaded ? (

					<View>
						<Text>{this.state.userGoogleInfo.user.name}</Text>
						<Text>{this.state.userGoogleInfo.user.email}</Text>
						<Image
							style={{width: 100, height: 100}}
							source={{url: this.state.userGoogleInfo.user.photo}}
						/>
					</View>
					
				) : (
					<Text>Not signed in</Text>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SignIn;

