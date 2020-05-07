import React from "react";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import MyHeader from "../components/MyHeader";
import useIndiaData from "../hooks/useIndiaStats";
import StateList from "../components/StateList";

const India = props => {
    const [results] = useIndiaData();
    const filterResult = () => {
        return results.filter(result => {
            console.log(result.state)
        });
    };
    return (
        <View>
            <View style={{height: '10%'}}>
                <MyHeader navigation={props.navigation} title="India" />
            </View>
            <View>
                <View style={{ padding: 20 ,flexDirection: 'row'}}>
                    <Text style={{flex: 1,fontWeight: 'bold', fontSize: 20}}>State/UT</Text>
                    <Text style={{flex: 1,fontWeight: 'bold', fontSize: 20, color: '#2055FB'}}>Confrmd Cases</Text>
                    <Text style={{flex: 1,fontWeight: 'bold', fontSize: 20}}>Active Patients</Text>
                    <Text style={{flex: 1,fontWeight: 'bold', fontSize: 20,color: '#008000'}}>Recovrd</Text>
                    <Text style={{flex: 1,fontWeight: 'bold', fontSize: 20,color: '#FB0B0B'}}> Deaths</Text>
                </View>    
                <ScrollView showsVerticalScrollIndicator = {false}>
                    <StateList />
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({


});

export default India;