import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome, Fontisto, FontAwesome5, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';


import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import LoginForm from './components/LoginForm';
import RegisterC from './components/Cliente/RegisterC';
import { NativeBaseProvider } from 'native-base';
import UserHome from './components/Cliente/UserHome';

const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function UserTab() {
  return (
    <Tab.Navigator >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ }) => (
            <FontAwesome5 name="home" size={24} color="black" />
          ),
          headerShown: false,
        }} />
      <Tab.Screen
        name="Option"
        component={Home}
        options={{
          tabBarIcon: ({ }) => (
            <FontAwesome5 name="user" size={24} color="black" />
          ),
          headerShown: false,
        }} />
      <Tab.Screen
        name="Quality"
        component={Home}
        options={{
          tabBarIcon: ({ }) => (
            <FontAwesome5 name="calendar-check" size={24} color="black" />
          ),
          headerShown: false,
        }} />
      <Tab.Screen
        name="Count"
        component={UserHome}
        options={{
          tabBarIcon: ({ }) => (
            <FontAwesome5 name="user-alt" size={24} color="black" />
          ),
          headerShown: false,
        }} />
    </Tab.Navigator>
  );
}


const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <stack.Navigator initialRouteName='Login'>
          <stack.Screen name='Register' options={{ headerShown: false }} component={Register} />
          <stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
          <stack.Screen name="LoginForm" options={{ headerShown: false }} component={LoginForm} />
          <stack.Screen
            name="UserTab"
            component={UserTab}
            options={{
              headerShown: false
            }}
          />
          <stack.Screen
            name="RegisterUser"
            component={RegisterC}
            options={{
              headerShown: false
            }}
          />

        </stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;