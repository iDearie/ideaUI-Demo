import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import List from '../List';
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
                        <List.Item
                            showArrow={false}
                            label={React.isValidElement(header) ? header : <Text>{header}</Text>}>
                            <Icon name={'chevron-down'} />
                        </List.Item>
                    </View>
                ) : null}
                <View>{children}</View>
            </View>
        );
    }
}

interface AccordionProps {
    activeKey?: string;
}

export default class Accordion extends Component<AccordionProps> {
    static Panel = Panel;
    render() {
        const { children, activeKey } = this.props;
        return React.Children.map(children, child => {
            return React.cloneElement(child as React.ReactElement, { activeKey });
        });
    }
}
