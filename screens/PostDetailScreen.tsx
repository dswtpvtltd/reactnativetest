import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {StackNavigatorType} from '../navigation';
import {Header} from '../components/Header';

type PostDetailType = NativeStackScreenProps<StackNavigatorType, 'PostDetail'>;

const PostDetailScreen = ({navigation, route}: PostDetailType) => {
  console.log(route.params);
  return (
    <View style={styles.container}>
      <View>
        <Header title="Post Detail" />
      </View>
      <View>
        <View style={styles.item}>
          <Text style={styles.title}>Id: {route.params.id}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>Tile: {route.params.title}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>Body: {route.params.body}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
  },
  item: {
    backgroundColor: 'red',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: 'red',
  },
  title: {
    fontSize: 16,
    color: 'white',
  },
});

export default PostDetailScreen;
