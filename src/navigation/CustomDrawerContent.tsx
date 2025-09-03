import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TextConstant from '../constant/TextConstant';
import { useTheme } from '../context/ThemeContext';
import { useFonts } from '../hooks/useFonts';
import {
  Blog,
  Edit,
  Location,
  Logout,
  Profile,
  Lock,
} from '../../assets/constant';

const CustomDrawerContent: FC<any> = props => {
  const { theme } = useTheme();
  const fonts = useFonts();
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.wrapperContainer}>
          <Text
            style={[
              styles.title,
              { color: theme.title, fontFamily: fonts.bold },
            ]}
          >
            {TextConstant.APP_NAME}
          </Text>
          <Text
            style={[
              styles.subTitle,
              { color: theme.text, fontFamily: fonts.regular },
            ]}
          >
            Healthy Lifestyle
          </Text>
        </View>
        <DrawerItem
          label="Profile"
          labelStyle={{ color: theme.text, fontSize: 16 }}
          icon={({ color, size }) => <Profile color={color} size={size} />}
          onPress={() => props.navigation.navigate('Profile')}
        />

        <DrawerItem
          label="Blog"
          labelStyle={{ color: theme.text, fontSize: 16 }}
          icon={({ color, size }) => <Blog color={color} size={size} />}
          onPress={() => props.navigation.navigate('Blog')}
        />

        <DrawerItem
          label="Location"
          labelStyle={{ color: theme.text, fontSize: 16 }}
          icon={({ color, size }) => <Location color={color} size={size} />}
          onPress={() => props.navigation.navigate('Location')}
        />

        <DrawerItem
          label="Contact Us"
          labelStyle={{ color: theme.text, fontSize: 16 }}
          icon={({ color, size }) => <Edit color={color} size={size} />}
          onPress={() => props.navigation.navigate('ContactUs')}
        />

        <DrawerItem
          label="Sign Out"
          labelStyle={{ color: theme.text, fontSize: 16 }}
          icon={({ color, size }) => <Logout color={color} size={size} />}
          onPress={() => {
            // Add sign out logic here
            console.log('Sign out pressed');
          }}
        />
      </DrawerContentScrollView>

      <View style={styles.bottomSection}>
        <DrawerItem
          label="Admin Panel"
          labelStyle={{ color: theme.text, fontSize: 16 }}
          icon={({ size, color }) => <Lock color={color} size={size} />}
          onPress={() => props.navigation.navigate('AdminPanel')}
          //   style={styles.adminItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 24,
    alignSelf: 'center',
  },
  subTitle: {
    fontSize: 14,
    alignSelf: 'center',
  },
  wrapperContainer: {
    padding: 16,
    marginBottom: 16,
  },
  scrollContent: {
    flexGrow: 1,
  },
  bottomSection: {
    // borderTopWidth: 1,
    // borderTopColor: '#e0e0e0',
    paddingTop: 0,
    margin: 16,
  },
});

export default CustomDrawerContent;
