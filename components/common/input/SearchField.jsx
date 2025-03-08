import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native';
import { useState } from 'react';

import Fontisto from '@expo/vector-icons/Fontisto';
import { Colors } from '@/constants/Colors';
export default function SearchField({ text, onChangeText }) {

    return (
        <View style={styles.searchContainer}>
            <Fontisto name="search" size={15}lor="black" style={styles.serachIcon}
            />
            <TextInput
                style={styles.serachInput}
                onChangeText={onChangeText}
                value={text}
                placeholder=" search..."
            />
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        padding: 13,
        backgroundColor: Colors.light.background.gray,
        borderRadius: 10,
        alignSelf: "center",
        width: "90%"

    },
    serachInput: {
        height: 40,
        borderWidth: 1,
        borderColor: Colors.light.background.gray,
        backgroundColor: Colors.light.background.gray,
        width: "90%",
    },
    serachIcon: {
        padding: 10,
    },
});
