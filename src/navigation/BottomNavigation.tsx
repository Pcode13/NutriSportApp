import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabParamList } from './types/Navigation';

import Home from '../screens/HomeScreen';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';

// import HomeActiveSvg from '../../assets/images/Icons/homeActive.svg';
// import HomeSvg from '../../assets/images/Icons/home.svg';
// import Shopping_CartActive from '../../assets/images/Icons/shopping_cartActive.svg';
// import Shopping_Cart from '../../assets/images/Icons/shopping_cart.svg';
// import Grid from '../../assets/images/Icons/grid.svg';
// import GridActive from '../../assets/images/Icons/gridActive.svg';
import {
  HomeActive,
  HomeSvg,
  GridActive,
  Grid,
  CartActive,
  CartSvg,
} from '../../assets/constant';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TabIcon = ({
  routeName,
  isFocused,
}: {
  routeName: string;
  isFocused: boolean;
}) => {
  const color = isFocused ? '#F24C00' : '#000000';
  const size = 22;

  if (routeName === 'Home')
    return isFocused ? (
      <HomeActive width={size} height={size} />
    ) : (
      <HomeSvg width={size} height={size} />
    );
  if (routeName === 'Cart')
    return isFocused ? (
      <CartActive width={size} height={size} />
    ) : (
      <CartSvg width={size} height={size} />
    );

  if (routeName === 'Profile')
    return isFocused ? (
      <GridActive width={size} height={size} />
    ) : (
      <Grid width={size} height={size} />
    );
};

function CustomTabBar({ state, navigation }: any) {
  return (
    <SafeAreaView style={styles.tabBarSafeArea}>
      <View style={styles.tabBar}>
        {state.routes.map((route: any, index: number) => {
          const isFocused = state.index === index;
          const onPress = () => {
            if (!isFocused) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={[styles.tabItem, isFocused && styles.tabItemActive]}
              activeOpacity={0.8}
            >
              <TabIcon routeName={route.name} isFocused={isFocused} />
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const BottomNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  tabBarSafeArea: { backgroundColor: '#FAFAFA' },

  tabBar: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: Platform.OS === 'android' ? 12 : 18,
    backgroundColor: '#fff',
    borderRadius: 9,
    paddingVertical: 10,
    // justifyContent: 'space-between',
    // elevation: 6, // Android shadow
    // shadowColor: '#000', // iOS shadow
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.08,
    // shadowRadius: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 6,
    marginHorizontal: 6,
    // borderRadius: 9,
    // backgroundColor: 'blue',
  },
  tabItemActive: {
    // backgroundColor: '#4B7DF0'
  },
});
