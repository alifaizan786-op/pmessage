/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import type {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AppBar from './components/AppBar';



const App: () => Node = () => {


  return (
    <SafeAreaView >
      <AppBar/>
      <ScrollView>
        <Text>
          Faizan
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;
