import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import auth from '@react-native-firebase/auth';

const Forget = () => {
    const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [message,setMessage] = useState("")

  const [invalid,setInvalid]=useState("");

  const handleForget = async () => {
    if (email) {
      try {
        await auth().sendPasswordResetEmail(email);
        setMessage('Password reset email sent! Please check your inbox.');
      } catch (error) {
        setMessage(error.message);
      }
    } else {
      setMessage('Please enter your email address.');
    }
  };
  return (
    <View>
      <AntDesign name="arrowleft" style={styles.aro} onPress={()=>navigation.navigate("Login")}/>
      <Text style={styles.forget}>Forget Your Password</Text>
      <Text style={styles.enter}>
        Enter your email address below, and we'll send you instructions to reset
        your password.
      </Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={val => setEmail(val)}
        style={styles.text}
      />

      <TouchableOpacity style={styles.log} onPress={()=>handleForget()}>
        <Text style={styles.logt}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Forget;

const styles = StyleSheet.create({
  forget: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 60,
    color: '#1F41BB',
  },
  enter: {
    textAlign: 'left',
    marginLeft: 35,
    marginTop: 20,
  },
  text: {
    margin: 20,
    marginTop: 50,
    paddingLeft: 20,
    borderRadius: 10,
    backgroundColor: '#F7F8F9',
  },
  log: {
    backgroundColor: '#1F41BB',
    width: 325,
    height: 50,
    borderRadius: 5,
    marginLeft: 20,
  },
  logt: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    paddingTop: 8,
  },
  aro:{
    fontSize:30,
    position:"absolute",
    top:20,
    left:20
  }
});
