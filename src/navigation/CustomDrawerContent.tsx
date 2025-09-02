import { DrawerContentScrollView } from '@react-navigation/drawer';
import React, { FC } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import TextConstant from '../constant/TextConstant';
import { useTheme } from '../context/ThemeContext';
import { useFonts } from '../hooks/useFonts';


const CustomDrawerContent: FC<any> = (props) => {
    const { theme } = useTheme();
      const fonts = useFonts();
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Text
          style={[styles.title, { color: theme.title, fontFamily: fonts.bold }]}
        >
          {TextConstant.APP_NAME}
        </Text>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
 container:{},
  title: {
    fontSize: 24,
  },
});

export default CustomDrawerContent;