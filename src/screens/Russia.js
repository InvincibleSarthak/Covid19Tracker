import React from "react";
import { YellowBox, View, StyleSheet, ScrollView, FlatList } from "react-native";
import MyHeader from "../components/MyHeader";
import useRussiaData from "../hooks/useRussiaStats";
import RussiaList from "../components/RussiaList";
const India = props => {
    const [russiaData] = useRussiaData();
    const filterResult = (country) => {
        return russiaData.filter(result => {
            return result.country === country;
        });
    };
    YellowBox.ignoreWarnings([
        'VirtualizedLists should never be nested',
    ])
    return (
        <View>
            <View style={{height: '10%'}}>
                <MyHeader navigation={props.navigation} title="Russia" />
            </View>    
                <ScrollView showsVerticalScrollIndicator = {false}>
                    <RussiaList results = {filterResult('Russia')}/>
                </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({


});

export default India;