import {
    Image,
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default function CategorySmallLabal({ categoryData }) {

    return (
        <View style={styles.catgoryContainer}>
            <Image
                source={categoryData?.image}
                style={styles.image}
            />
            <Text>{categoryData?.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    catgoryContainer: {
        backgroundColor: '#fff',
        width: "auto",
        height: 50,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        margin: 10
    },
    image: {
        width: 44,
        height: 44,
        resizeMode: 'contain',
        margin: 5,
        padding: 20,
    },
});
