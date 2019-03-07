import * as React from 'react';

import NativeVieOverflow from './ViewOverflow-native';

class ViewOverflow extends React.PureComponent {
    render() {
        return <NativeVieOverflow {...this.props} ref={this.props.refs} />;
    }
}

export default ViewOverflow;
