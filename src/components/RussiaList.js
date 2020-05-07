import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RussiaDetail from "./RussiaDetail";
const RussiaList = ({ results }) => {
    return(
        <FlatList
            data= {results}
            keyExtractor={(result) => result.country}
            renderItem={({item}) => {
                return <RussiaDetail result={item} />
            }}
        />
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default RussiaList;