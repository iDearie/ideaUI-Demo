import React from 'react';
import { View } from 'react-native';

class ViewOverflow extends React.Component {
    render() {
        return <View {...this.props} ref={this.props.refs} />;
    }
}

export default ViewOverflow;
