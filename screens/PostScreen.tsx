import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {StackNavigatorType} from '../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Header} from '../components/Header';
type PostType = NativeStackScreenProps<StackNavigatorType, 'Post'>;
type ItemProps = {
  item: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  navigation: any;
};

const Item = ({item, navigation}: ItemProps) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('PostDetail', {
          userId: item.userId,
          id: item.id,
          title: item.title,
          body: item.body,
        })
      }>
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const PostScreen = ({navigation}: PostType) => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios({method: 'get', url: 'https://jsonplaceholder.typicode.com/posts'})
      .then((res: any) => {
        setPost(res.data);
      })
      .catch(_error => {
        Alert.alert('Error', 'There are error');
      });
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Header title="Post Listing" />
      </View>
      <View>
        <FlatList
          data={post}
          keyExtractor={(item: any) => `${item.id.toString()}`}
          renderItem={({item}) => <Item item={item} navigation={navigation} />}
          initialNumToRender={10}
        />
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

export default PostScreen;
