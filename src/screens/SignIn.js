import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {GoogleSignin, GoogleSigninButton, statusCodes} from '@react-native-community/google-signin';

GoogleSignin.configure({
	webClientId: '1029055019174-akltv1ts60j361lll3v8iu7vp31ek4dm.apps.googleusercontent.com',
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
			<View>
				<GoogleSigninButton
					onPress={this.signIn}
					size={GoogleSigninButton.Size.Wide}
					color={GoogleSigninButton.Color.Dark}
					style={{width: 100, height: 100}}
				/>
				{this.state.loaded ? (
					<View>
						<Text>{this.state.userGoogleInfo.user.name}</Text>
						<Text>{this.state.userGoogleInfo.user.email}</Text>
						<Image
							style={{width: '100', height: '100'}}
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

export default SignIn;
