import React from "react";
import { Icon } from "react-native-elements";
import { Text } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import { Statusbar } from 'react-native';
const MainMenu = props => {
    return (
        <Icon  
            color="#fff"
            name="menu"
            onPress={() => props.navigation.toggleDrawer()}
        />
    );
};

// const newStyles = EStyleSheet.create({
//     container: {
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 0
//     }
// });

export default MainMenu;