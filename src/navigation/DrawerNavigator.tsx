import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigation from './BottomNavigation';
import Profile from '../screens/Profile';
import Blog from '../screens/Blog';
import Location from '../screens/Location';
import ContactUs from '../screens/ContactUs';
import AdminPanel from '../screens/AdminPanel';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: true }}
    >
      <Drawer.Screen
        name="Main"
        component={BottomNavigation}
        options={{ title: 'Home' }}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Blog" component={Blog} />
      <Drawer.Screen name="Location" component={Location} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="AdminPanel" component={AdminPanel} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
