import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DefaultStackScreenOptions from './DefaultStackScreenOptions';
import Screens from '../screens';

const AboutStack = createStackNavigator();

// use a flag from Settings to load child components of this navigator- foes or no foes?

export default SongbookNavigation = () => {
    return (
        <AboutStack.Navigator
            screenOptions={DefaultStackScreenOptions}>
            <AboutStack.Screen
                name="About"
                component={Screens.About}
                options={{ headerTitle: i18n.t('navigation.about') }} />
        </AboutStack.Navigator>
    )
}