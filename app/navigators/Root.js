/*
    - The root navigator is the parent of all react-navigation component
    - it has access of every child root
    - This is the first UI component displayed when the app is started
*/
import { StackNavigator } from 'react-navigation';

/* screens import */
import { Home } from '../lib/screens';

const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { header: false }
  }
});

export default HomeStack;
