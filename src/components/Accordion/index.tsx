import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import OperaterList from '../OperaterList';
import Icon from '../Icon';

interface PanelProps {
    header: React.ReactElement | string;
    key: string;
}

class Panel extends Component<PanelProps> {
    render() {
        const { children, header } = this.props;
        return (
            <View>
                {header ? (
                    <View style={[styles.header_container]}>
                        <OperaterList.Item
                            showArror={false}
                            label={typeof header === 'string' ? <Text>{header}</Text> : header}>
                            <Icon name={'chevron-down'} style={{ transform: [{ rotateZ: '-90deg' }] }} />
                        </OperaterList.Item>
                    </View>
                ) : null}
                <View>{children}</View>
            </View>
        );
    }
}

export default class Accordion extends Component {
    static Panel = Panel;
    render() {
        const { children } = this.props;
        return <View>{children}</View>;
    }
}
