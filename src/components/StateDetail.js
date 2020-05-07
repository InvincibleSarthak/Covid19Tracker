import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StateDetail = ({ result }) => {
    return (
        <View style={{ flexDirection: 'row', padding: 20}}>
            <Text style={{flex: 1, fontWeight: 'bold'}}>{result.state + " "}</Text>
            <Text style={{flex: 1, color: '#2055FB'}}>{" " + result.confirmed + " (+" + result.deltaconfirmed + ")" } </Text>
            <Text style={{flex: 1}}>{" " + result.active + " (+" + (parseInt(result.deltaconfirmed) - (parseInt(result.deltarecovered) + parseInt(result.deltadeaths))) + ")"} </Text>
            <Text style={{flex: 1,color: '#008000'}}>{" " + result.recovered + " (+" + result.deltarecovered + ")"} </Text>
            <Text style={{flex: 1,color: '#FB0B0B'}}>{" " + result.deaths + " (+" + result.deltadeaths + ")"} </Text>
        </View>
    );
};

const style = StyleSheet.create({

});

export default StateDetail;