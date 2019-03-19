import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  style_checkbox_list: {
    flexDirection: 'column'
  },
  style_checkbox_inline: {
    flexDirection: 'row'
  },
  style_checkbox_inline_tag_item_view: {
    borderColor: '#E5E5E5',
    borderWidth: 0.5,
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 8
  },
  style_checkbox_inline_tag_item_text: {
    color: '#999999'
  },
  style_checkbox_inline_tag_item_view_active: {
    borderColor: '#FF6644',
    paddingHorizontal: 10,
    paddingVertical: 8
  },
  style_checkbox_inline_tag_item_text_active: {
    color: '#FF6644'
  },
  style_checkbox_inline_checkbox_item_view: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  style_checkbox_inline_checkbox_item_image: {
    width: 14,
    height: 14
  },
  style_checkbox_inline_checkbox_item_text: {
    paddingLeft: 5,
    textAlign: 'center'
  }
});
