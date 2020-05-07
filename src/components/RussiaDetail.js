import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RussiaDetail = ({ result }) => {
    return (
        <View style={{paddingTop: 130}}>
            <Text style={{flex: 1, color: '#2055FB', fontWeight: 'bold', fontSize: 30, alignSelf: 'center'}}> Confirmed Cases </Text>
            <Text style={{flex: 1, color: '#2055FB', fontSize: 17, alignSelf: 'center', paddingBottom: 20}}> {result.cases} (+ {result.todayCases}) </Text>
            <Text style={{fontWeight: 'bold', fontSize: 30 , alignSelf: 'center'}}> Active Patients  </Text>
            <Text style={{flex: 1, fontSize: 17 , alignSelf: 'center',  paddingBottom: 20}}>{result.active}</Text>
            <Text style={{fontWeight: 'bold', fontSize: 30,color: '#008000' , alignSelf: 'center'}}> Recovered Patients </Text>
            <Text style={{flex: 1, fontSize: 17, color: '#008000' , alignSelf: 'center' , paddingBottom: 20}}>{result.recovered}</Text>
            <Text style={{fontWeight: 'bold', fontSize: 30,color: '#FB0B0B' , alignSelf: 'center'}}> Deaths  </Text>
            <Text style={{flex: 1, fontSize: 17, color: '#FB0B0B' , alignSelf: 'center' , paddingBottom: 20}}>{result.deaths} (+ {result.todayDeaths})</Text>
            <Text style={{fontWeight: 'bold', fontSize: 30 , alignSelf: 'center'}}> Total Tests Conducted </Text>
            <Text style={{flex: 1, fontSize: 17 , alignSelf: 'center'}}>{result.tests}</Text>
            
        </View>
    );
};

const style = StyleSheet.create({

});

export default RussiaDetail;