import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CreateScreen from '../screens/CreateScreen';
import LiveScreen from '../screens/LiveScreen';
import RecipeScreen from '../screens/RecipeScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
          'ios-home'
      }
    />
  ),
};

const CreateStack = createStackNavigator({
  Create: CreateScreen,
});

CreateStack.navigationOptions = {
  tabBarLabel: 'Create',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
          'ios-add-circle'
      }
    />
  ),
};

const LiveStack = createStackNavigator({
  Live: LiveScreen,
});

LiveStack.navigationOptions = {
  tabBarLabel: 'Live Stream',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
          'ios-camera'
      }
    />
  ),
};

const RecipeStack = createStackNavigator({
  Recipe: RecipeScreen,
});

RecipeStack.navigationOptions = {
  tabBarLabel: 'Recipe',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
          'ios-pizza'
      }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  CreateStack,
  LiveStack,
  RecipeStack,
});
