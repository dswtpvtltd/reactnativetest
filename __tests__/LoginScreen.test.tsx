import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {View, Button} from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {StackNavigatorType} from '../navigation';
import {RouteProp} from '@react-navigation/native';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
type LoginProps = NativeStackScreenProps<StackNavigatorType, 'Login'>;

type NavigationType = NativeStackNavigationProp<
  StackNavigatorType,
  'Login',
  undefined
>;
type RouteType = RouteProp<StackNavigatorType, 'Login'>;

const createTestProps = (): unknown & LoginProps => ({
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
    setOptions: jest.fn(),
  } as unknown as NavigationType,
  route: jest.fn() as unknown as RouteType,
});

describe('LoadingScreen', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper;
    let props: LoginProps;

    beforeEach(() => {
      props = createTestProps();
      wrapper = shallow(<LoginScreen {...props} />);
    });
    test('should render a <View />', () => {
      expect(wrapper.find(View)).toHaveLength(7);
    });
    test('should render a <Button />', () => {
      expect(wrapper.find(Button)).toHaveLength(2);
    });
  });
});
