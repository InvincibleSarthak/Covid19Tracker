import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WorldDetail = ({ result }) => {
    return (
        <View style={{ flexDirection: 'row', padding: 20}}>
            <Text style={{flex: 1, fontWeight: 'bold'}}>{result.country + " "}</Text>
            <Text style={{flex: 1, color: '#2055FB'}}>{" " + result.cases + " (+" + result.todayCases + ")" } </Text>
            <Text style={{flex: 1}}>{" " + result.active + " " } </Text>
            <Text style={{flex: 1,color: '#008000'}}>{" " + result.recovered + " "} </Text>
            <Text style={{flex: 1,color: '#FB0B0B'}}>{" " + result.deaths + " (+" + result.todayDeaths + ")"} </Text>
        </View>
    );
};

const style = StyleSheet.create({

});

export default WorldDetail;