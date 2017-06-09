import React from 'react';
import { Text } from 'react-native';
import { Content, Container } from 'native-base';

/* App imports */
import { container } from '../../theme/AppStyles';

/* Actions */

const Home = () =>
  (<Container style={container.default}>
    <Content>
      <Text>Hi</Text>
    </Content>
  </Container>);

export default Home;
