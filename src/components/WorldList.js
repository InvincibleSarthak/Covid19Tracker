import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import WorldDetail from "./WorldDetail"
import useWorldData from "../hooks/useRussiaStats";

const WorldList = () => {
    const [results] = useWorldData();
    return(
        <FlatList 
            data = {results}
            keyExtractor={(result) => result.country}
            renderItem={({item}) => {
                return <WorldDetail result={item}/>
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

export default WorldList;