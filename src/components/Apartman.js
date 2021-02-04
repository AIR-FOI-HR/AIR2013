import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../constants/DesignConstants';

export default class App extends React.Component {
	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress} style={dynamicFrameColor(this.props.Status)}>
				<View style={styles.marginaSlikeIokvir1}>
					<View style={styles.margineTeksta1}>
						<FontAwesomeIcons name="home" size={24}>
							<Text style={styles.tekstIzbornika}> Villa Maria </Text>
						</FontAwesomeIcons>
						<View style={styles.arrow}>
							<MaterialIcons name="arrow-forward-ios" size={25}></MaterialIcons>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: '#fff',
		paddingHorizontal: 20,
	},

	mainView: {
		flexDirection: 'row',
		width: '100%',
		marginTop: 40,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	settingsText: {
		fontSize: 30,
		fontWeight: 'normal',
	},
	settingsTextName: {
		fontSize: 30,
		fontWeight: '700',
	},
	tekstIzbornika: {
		fontWeight: 'bold',
		fontSize: 18,
		left: 28,
		top: -5,
	},
	margineTeksta1: {
		marginBottom: 187,
		marginTop: 0,
		marginLeft: 12,
		bottom: -80,
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
		borderColor: 'grey',
		height: 40,
		justifyContent: 'center',
		bottom: 50,
	},
	txtButtonIcon: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
});
