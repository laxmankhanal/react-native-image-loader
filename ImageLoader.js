import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

export default class ImageLoader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false,
    };
  }

  render() {
    const {
      source,
      style,
      renderError,
      indicator,
      threshold,
      imageStyle,
    }
    if (!source || !source.uri) {
      return (
        <View style={style} ref={this.handleRef}>
          <Image
            {...props}
            source={source}
            style={[StyleSheet.absoluteFill, imageStyle]}
          />
          {children}
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Image
          {...this.props}
          style={styles.image}
          source={{ uri: IMAGES[0] }}
          onLoadStart={this.handleLoadStart}
          onLoadEnd={this.handleLoadEnd}
          onError={this.handleError}
        />
        {this.state.loading &&
          <ActivityIndicator
            size={'small'}
            color={'#0000ff'}
            style={{ position: 'absolute' }}
          />
        }
      </View>
    );
  }

  handleLoadStart = () => {
    if (!this.state.loading) {
      this.setState({
        error: null,
        loading: true,
      })
    }
  }

  handleLoadEnd = () => {
    if (this.state.loading) {
      this.setState({
        error: null,
        loading: false,
      })
    }
  }

  handleError = event => {
    this.setState({
      loading: false,
      error: event.nativeEvent,
    });
    this.bubbleEvent('onError', event);
  };

  handleLoad = () => {
    if (!this.state.loading) {
      this.setState({
        error: null,
        loading: false,
      })
    }
  }

  bubbleEvent(propertyName, event) {
    if (typeof this.props[propertyName] === 'function') {
      this.props[propertyName](event);
    }
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
    width: 300,
    height: 200,
  },
});
