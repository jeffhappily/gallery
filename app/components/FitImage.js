import React, { Component } from 'react';
import { Image } from 'react-native';

export default class FitImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      imgHeight: 0,
      loading: true
    }

    this.onLayout = this.onLayout.bind(this);
    this.resize = this.resize.bind(this);
  }

  onLayout(event){
    let deviceWidth = event.nativeEvent.layout.width;

    Image.getSize(this.props.source, (imgWidth, imgHeight) => {
      this.resize(deviceWidth, imgWidth, imgHeight);
    }, error => {
      this.setState({imageHeight: 200})
    });
  }

  resize(deviceWidth, imgWidth, imgHeight){
    let ratio = deviceWidth / imgWidth;
    this.setState({imageHeight: imgHeight * ratio})
  }

  render(){
    return(
      <Image
        style={[{flexGrow: 1, height: this.state.imageHeight, resizeMode: 'contain'}, this.props.style]}
        onLayout={this.onLayout}
        source={{uri: this.props.source}} />
    )
  }
}
