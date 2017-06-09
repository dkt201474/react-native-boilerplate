import React from 'react';
import { Text, View } from 'react-native';
import { Item, Input } from 'native-base';

/* App imports */
import { info } from '../theme/Colors';

const AppInput = (field) =>
  (<View>
    <Item
        error={field.meta.error && field.meta.touched && true}
        style={{ marginBottom: 10 }}
    >
      <Input
          {...field.input}
          keyboardType={'' || field.keyboardType}
          onChangeText={() => field.input.onChange}
          placeholder={'' || field.placeholder}
          secureTextEntry={field.secureTextEntry && true}
      />
    </Item>

    {field.meta.error &&
      field.meta.touched &&
      <Text style={{ textAlign: 'right', color: info.error }}>
        {field.meta.error}
      </Text>}
  </View>);

export default AppInput;
