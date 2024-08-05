import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {StackActions, useNavigation} from '@react-navigation/native';

function Splash() {
  const navigation = useNavigation();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    console.log('Splash===>', user);
    const go = user && user.emailVerified ? 'Welcome' : 'Look';
    navigation.dispatch(StackActions.replace(go));
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome</Text>
    </View>
  );
}

export default Splash;
