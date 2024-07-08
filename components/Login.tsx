import { View,Text,StyleSheet, SafeAreaView, ImageBackground,} from "react-native";
import React from "react";
import { Button } from "react-native-elements";



const Login = ({navigation})=>{

  const image = {uri: 'https://get.wallhere.com/photo/landscape-street-night-galaxy-sky-stars-Milky-Way-atmosphere-spiral-galaxy-astronomy-star-darkness-astronomical-object-97682.jpg'};


    return(
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.overlay}>
          <View style={styles.logo}>
            <Text style={styles.title}>Bienvenido a qualify taxi route</Text>
          </View>

          <View style={styles.btn}>
          <Button
              buttonStyle={{
                backgroundColor: 'white',
                width: 200,
              }}
              titleStyle={{
                color: 'rgba(18, 18, 210, 0.8)',
              }}

              onPress={() => { navigation.navigate('LoginForm') }}
              
              title="Login"
            />
            <Button
              buttonStyle={{  width: 200, borderColor: 'white' }}
              titleStyle={{
                color: 'white',
              }}
              onPress={() => { navigation.navigate('Register') }}
              title="Registrate"
              type="outline"
            />    
            </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Terminos y condiciones</Text>
            <Text style={styles.footerText}>Privacidad</Text>
          </View>
        </View>
      </ImageBackground>

    );
};

const styles = StyleSheet.create({
    logo: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
    btn: {
      flexDirection: 'column',
      height: 150,
      justifyContent: 'space-evenly',
      alignSelf: 'center',
      bottom: -50,
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      bottom: -50,
    },
    footerText: {
      color: 'white',
    },
    overlay: {
      flex: 1,
      height: '100%',
      width: '100%',
      position: 'absolute',
      backgroundColor: 'rgba(57, 5, 228, 0.35)',
      justifyContent: 'space-evenly',
      flexDirection: 'column',
    },
  });
  
export default Login;