import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Platform, View, StatusBar, YellowBox } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'unstated';
import { loadSavedTalksAsync } from './src/utils/storage';
import { NavigationContainer } from '@react-navigation/native';
import { Fonts, Images, RootNavigator } from './config';

YellowBox.ignoreWarnings(['Warning: bind()']);

class App extends React.Component {
  state = {
    errorMessage: null,
    fontLoaded: false
  };

  _loadResourcesAsync = () => {
    return Promise.all([this._loadAssetsAsync(), this._loadDataAsync()]);
  };

  _loadDataAsync = () => {
    return loadSavedTalksAsync();
  };

  _loadAssetsAsync = async () => {
    let imagesArray = [];
    Object.values(Images).forEach((value) => {
      imagesArray.push(value);
    });

    let fonts= {};
    Object.keys(Fonts).forEach((key) => {
      fonts[Fonts[key].family] = Fonts[key].file
    });

    return Promise.all([
      Font.loadAsync({
        ...fonts,
        ...Ionicons.font
      }),
      Asset.loadAsync(imagesArray),
      Asset.fromModule(
        require('react-navigation/src/views/assets/back-icon.png')
      ).downloadAsync()
    ]);
  };

  render() {
    const { fontLoaded } = this.state;
    if (!fontLoaded) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={console.error}
          onFinish={() => {
            this.setState({ fontLoaded: true });
          }}
        />
      );
    }

    return (
      <Provider>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigator />
            <StatusBar barStyle="light-content" />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    );
  }
}

export default App;
