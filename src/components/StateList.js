import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import useIndiaData from "../hooks/useIndiaStats";
import StateDetail from "./StateDetail";

const StateList = () => {
    const [results] = useIndiaData();
    return(
        <FlatList 
            data = {results}
            keyExtractor={(result) => result.statecode}
            renderItem={({item}) => {
                return <StateDetail result={item}/>
            }}
        />
    );
}

const styles= StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default StateList;