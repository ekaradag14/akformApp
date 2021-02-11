import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

//Screens
import SignupScreen from '../screens/SignupScreen';
import CompareScreen from '../screens/CompareScreen'
import YourProductsScreen from '../screens/YourProductsScreen'
const switchNavigator = createSwitchNavigator({
  instructionFlow: createStackNavigator(
    {
      Signup: SignupScreen,
    },
    {
      headerMode: 'none',
    },
  ),
  buyFlow: createSwitchNavigator(
    {
      Compare: CompareScreen,
      YourProducts: YourProductsScreen,
    },
    {
      headerMode: 'none',
    },
  ),
});

export default createAppContainer(switchNavigator);
