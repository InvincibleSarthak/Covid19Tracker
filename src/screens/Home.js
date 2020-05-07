import React from "react";
import { Text, View, StyleSheet, ScrollView, YellowBox } from "react-native";
import MyHeader from "../components/MyHeader"
import WorldList from "../components/WorldList"

const Home = props => {
    YellowBox.ignoreWarnings([
        'VirtualizedLists should never be nested',
    ])
    return(
        <View>
            <View style={{height: '10%'}}>
                <MyHeader navigation={props.navigation} title="World" />
            </View>
            <View>
                <View style={{ padding: 20 ,flexDirection: 'row'}}>
                    <Text style={{flex: 1,fontWeight: 'bold', fontSize: 20}}>Country</Text>
                    <Text style={{flex: 1,fontWeight: 'bold', fontSize: 20, color: '#2055FB'}}>Confrmd Cases</Text>
                    <Text style={{flex: 1,fontWeight: 'bold', fontSize: 20}}>Active Patients</Text>
                    <Text style={{flex: 1,fontWeight: 'bold', fontSize: 20,color: '#008000'}}>Recovrd</Text>
                    <Text style={{flex: 1,fontWeight: 'bold', fontSize: 20,color: '#FB0B0B'}}> Deaths</Text>
                </View>    
                <ScrollView showsVerticalScrollIndicator = {false}>
                    <WorldList />    
                </ScrollView>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({

});

export default Home;