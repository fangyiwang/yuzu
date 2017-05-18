import React from 'react';
import { render, Text, View } from 'react-sketchapp';

const Page = () => (
  <View>
    <Text>
      Hello World
    </Text>
  </View>
);

export default (context) => {
  render(<Page />, context.document.currentPage());
}
