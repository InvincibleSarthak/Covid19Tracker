import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { Header } from 'react-native-elements';
import MainMenu from '../components/MainMenu';

const MyHeader = props => {
    return (
        
        <View
            style={{
                height: 70,
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "#07bf",
                width: "100%",
                flexDirection: "row",
                marginTop: Platform.OS == 'android' ? 36: null
            }}
        >
            <View 
                style={{
                    paddingTop: 24,
                    marginLeft: 10
                }}
            >
                <MainMenu navigation={props.navigation}/>
            </View>
            <View style={{alignSelf: 'center'}}>
                <Text
                    style={styles.text}
                >{props.title}</Text>
            </View>
            
        </View>
        // <Header
        //     leftComponent={
        //         <MainMenu navigation={props.navigation} />
        //     }
        //     centerComponent={{
        //         text: props.title,
        //         style: { paddingBottom: 40, fontSize: 35, color: "#fff", fontWeight: "normal" , alignContent: "center" }
        //     }}
        //     backgroundColor="#07bf"
        //     statusBarProps={{ barStyle: "light-content" }}

        // />
    );

};

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 30,
        marginLeft: 140,
        alignContent: 'center'
    }
});

export default MyHeader;