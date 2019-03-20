import React from 'react';
import { Animated, Dimensions, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { styles } from './style';
import { WithTheme } from '../Theme';
import { BaseProps } from '../base/Props';

const { width: windowWidth } = Dimensions.get('window');

const defaultList = [
  {
    code: '1',
    name: 'Tab1'
  },
  {
    code: '2',
    name: 'Tab2'
  }
];

interface TabItem {
  code: string;
  name: string;
}

interface TabProps extends BaseProps {
  titleList?: TabItem[];
  choice?: string;
  onChangeTab?: Function;
}

export default class Tab extends React.Component<TabProps> {
  titleItemWidth: number;

  state: {
    animatedValue: Animated.Value | Animated.ValueXY;
    choiceIndex: number;
  };

  scrollViewRef: any;

  constructor(props: TabProps) {
    super(props);
    this.state = {
      animatedValue: new Animated.Value(0),
      choiceIndex: 0
    };
    this.titleItemWidth = 0;
  }

  componentDidMount() {}

  onPress = ({ item }: { item: TabItem }) => {
    const { titleList = defaultList, onChangeTab } = this.props;
    const { code } = item;
    const index = titleList.findIndex((v) => v.code === code);
    Animated.timing(this.state.animatedValue, {
      toValue: index * this.titleItemWidth,
      duration: 300
    }).start(() => this.scrollToIndex(index));
    this.setState({
      choiceIndex: index
    });
    onChangeTab && onChangeTab({ item });
  };

  getRef = (ref: any) => (this.scrollViewRef = ref);

  scrollToIndex = (index: number) => {
    this.scrollViewRef.scrollTo({ x: index * windowWidth, animated: false });
  };

  containerLayout = ({ nativeEvent }: any) => {
    const {
      layout: { width }
    } = nativeEvent;
    const { titleList = defaultList } = this.props;
    const { choice = titleList[0].code } = this.props;
    const index = titleList.findIndex((v) => v.code === choice);
    this.titleItemWidth = width / titleList.length;
    this.setState({
      animatedValue: new Animated.Value(index * this.titleItemWidth),
      choiceIndex: index
    });
    this.scrollToIndex(index);
  };

  render() {
    const { titleList = defaultList } = this.props;
    const { animatedValue, choiceIndex } = this.state;
    const children = React.Children.toArray(this.props.children);
    return (
      <WithTheme themeStyles={styles}>
        {(_style) => (
          <View style={[_style.style_tab_container]} onLayout={this.containerLayout}>
            <View style={[_style.style_tab_title_container]}>
              {titleList.map((item, index) => {
                const { code, name } = item;
                return (
                  <TouchableWithoutFeedback onPress={() => this.onPress({ item })} key={code}>
                    <View style={[_style.style_tab_title_item_container]}>
                      <Text
                        style={[
                          _style.style_tab_title_item_text,
                          choiceIndex === index ? _style.style_tab_title_active_item_text : null
                        ]}>
                        {name}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                );
              })}
              <Animated.View
                style={[
                  _style.style_tab_title_active_container,
                  {
                    width: this.titleItemWidth,
                    transform: [{ translateX: animatedValue }]
                  }
                ]}>
                <View style={[_style.style_tab_title_active_wrap]} />
              </Animated.View>
            </View>
            <ScrollView
              contentContainerStyle={[_style.style_tab_wrap, { width: children.length * windowWidth, height: '100%' }]}
              ref={this.getRef}
              scrollEnabled={false}
              horizontal>
              {React.Children.map(this.props.children, (child) => {
                return <View style={_style.style_item_container}>{child}</View>;
              })}
            </ScrollView>
          </View>
        )}
      </WithTheme>
    );
  }
}
