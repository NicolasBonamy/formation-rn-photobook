import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

const Wall = () => {
  return (
    <View>
      <Text>Wall works!</Text>
      <Icon type="font-awesome-5" name="cat" tvParallaxProperties={undefined} />
    </View>
  );
};

export default Wall;
