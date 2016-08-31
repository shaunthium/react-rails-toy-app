import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';
import Textbox from '../input/textbox.js';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {transparent: true};
  }

  _setTransparency(transparent) {
    this.setState({transparent});
  }

  render() {
    return (
      <section style={{
        height: '500px',
        zIndex: '-999',
        opacity: (this.state.transparent ? '0.5' : '1')
      }}>
        <Textbox
          setTransparency={this._setTransparency.bind(this)}/>
        <GoogleMapLoader
          containerElement={
            <div
              style={{
                height: "100%",
              }}
            />
          }
          googleMapElement={
            <GoogleMap
              defaultZoom={3}
              defaultCenter={{ lat: 37.0902, lng: -95.7129 }}
              onClick={() => false}
            >
            </GoogleMap>
          }
        />
      </section>
    );
  }
}

export default Map;
