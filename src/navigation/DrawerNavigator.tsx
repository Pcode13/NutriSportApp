import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigation from './BottomNavigation';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator 
     drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{ headerShown: true }}
    >
      <Drawer.Screen 
        name="Main" 
        component={BottomNavigation}
        options={{ title: 'Home' }}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;