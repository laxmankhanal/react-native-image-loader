import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageLoader from './ImageLoader';

const IMAGES = [
  'https://images.unsplash.com/photo-1501951023790-cefecd517f88',
  'http://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
  'http://media4.popsugar-assets.com/files/2014/08/08/878/n/1922507/caef16ec354ca23b_thumb_temp_cover_file32304521407524949.xxxlarge/i/Funny-Cat-GIFs.jpg',
  'http://media1.santabanta.com/full1/Animals/Cats/cats-87a.jpg',
  'http://awesomegifs.com/wp-content/uploads/cat-smacks-at-hands.gif',
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageLoader
          source={{ uri: IMAGES[0] }}
          style={styles.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
