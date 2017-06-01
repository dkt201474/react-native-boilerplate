import React from 'react';
import { Text, } from 'react-native';
import { View, Item, Input, } from 'native-base';

import { Colors } from '../theme';

const AppInput = (field) => (
  <View>
    <Item
        error={field.meta.error && field.meta.touched && true}
        style={{marginBottom: 10}}
    >
      <Input
          {...field.input}
          keyboardType={'' || field.keyboardType}
          onChangeText={() => field.input.onChange}
          placeholder={'' || field.placeholder}
          secureTextEntry={field.secureTextEntry && true}
      />
    </Item>

    {field.meta.error && field.meta.touched && <Text style={{textAlign: 'right', color: Colors.error}}>{field.meta.error}</Text>}
  </View>
);

export default AppInput;
