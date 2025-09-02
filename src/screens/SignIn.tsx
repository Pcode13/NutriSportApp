import React, { FC, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import Page from '../ui/Page';
import { useTheme } from '../context/ThemeContext';
import { useFonts } from '../hooks/useFonts';
import TextConstant from '../constant/TextConstant';
import Toast from '../components/Toast';
import { useToast } from '../hooks/useToast';

interface Props {}

const SignIn: FC<Props> = () => {
  const { theme } = useTheme();
  const fonts = useFonts();
  const [isLoading, setIsLoading] = useState(false);
  const { toast, showToast, hideToast } = useToast();

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      // 👉 your Google sign-in logic here
      await new Promise(resolve => setTimeout(() => resolve(), 2000)); // demo wait
      showToast('Sign in successful!', 'success');
    } catch (error) {
      showToast('Sign in failed. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Page style={styles.wrapContainer}>
      <View style={styles.contentContainer}>
        <Text
          style={[styles.title, { color: theme.title, fontFamily: fonts.bold }]}
        >
          {TextConstant.APP_NAME}
        </Text>
        <Text style={[styles.signIn, { color: theme.text }]}>
          Sign in to continue
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleSignIn}
          disabled={isLoading}
          testID="google-sign-in-button"
        >
          <View style={styles.googleButtonContent}>
            <Image
              source={{
                uri: 'https://developers.google.com/identity/images/g-logo.png',
              }}
              style={styles.googleIcon}
            />
            <Text style={styles.googleButtonText}>
              {isLoading ? 'Signing in...' : 'Sign in with Google'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Toast
        message={toast.message}
        visible={toast.visible}
        type={toast.type}
        onHide={hideToast}
      />
    </Page>
  );
};

const styles = StyleSheet.create({
  wrapContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  signIn: {
    fontSize: 14,
    opacity: 0.5,
    marginTop: 5,
  },
  buttonContainer: {
    alignItems: 'center',
    // paddingBottom: 10,
    width: '90%',
  },
  googleButton: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: '100%',
    marginBottom: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  googleButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: '#333333',
  },
});

export default SignIn;
