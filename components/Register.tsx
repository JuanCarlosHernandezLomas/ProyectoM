import React from "react";
import { View, Text, Center, ScrollView, Input, VStack, Button, Box, FormControl, Link, Image, } from "native-base";
import { Alert, ImageBackground, StyleSheet } from "react-native";
import axios from "axios";
import { color } from "react-native-elements/dist/helpers";


const Register = ({ navigation }) => {
  const image = { uri: 'https://get.wallhere.com/photo/landscape-street-night-galaxy-sky-stars-Milky-Way-atmosphere-spiral-galaxy-astronomy-star-darkness-astronomical-object-97682.jpg' };

  const [formData, setData] = React.useState({})
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    if (!formData.Email && !formData.Passwords) {
      setErrors({
        ...errors,
        Email: 'Email is required',
        Passwords: 'Password is required',

      });
      return false;
    }
    else if (!formData.Email) {
      setErrors({
        ...errors,
        Email: 'Email is required'
      });
      return false;
    } else if (formData.Email.length < 3) {
      setErrors({
        ...errors,
        Email: 'Email is to short'
      })
      return false;
    }
    if (!formData.Passwords || formData.Passwords.length < 3) {
      setErrors({
        ...errors,
        Passwords: 'Password is empty'
      })
      return false;
    }
    setErrors({})
    return true;
  };


  const submit = async () => {
    console.log(validate())
    if (validate()) {
      setData({ ...formData, action: 'login' })
      const formDataforRequest = new FormData()
      formDataforRequest.append('Email', formData.Email)
      formDataforRequest.append('Password', formData.Passwords)

      const response = await axios.post(
        'http://192.168.100.14/ProyectoM/Api/Register.php', //172.16.34.42
        formDataforRequest,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            "Access-control-Allow-origin": "*"
          },
          transformRequest: formData => formDataforRequest,
        }
      )
      if (response.data == 'el email ingresado no esta disponible, porfavor ingrese otro email') {
        Alert.alert('Aviso', response.data,
          [{ text: 'Ok', }])
      } else {
        Alert.alert('informacion correcta', 'los datos se han guaradado',
          [{ text: 'Ok',  onPress: () => {navigation.navigate('LoginForm')} }])
      }
    }
    else {
      Alert.alert('invalid information', 'please check the fields',
        [{ text: 'Ok', onPress: () => console.log('alert closed') }])

    }
  }




  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.overlay}>
        <Center w="100%">
          <Text color="rgba(251, 195, 58, 1)" fontWeight="semibold" fontSize="15">Register</Text>
          <Box px="1" py="5" w="90%" maxW="290">
            <VStack space={5} mt="3">
              <FormControl isRequired isInvalid={'Email' in errors}>
                <Text fontSize="md" color={"rgba(251, 195, 58, 1)"}>Email</Text>
                <Input p={2} placeholder="example@mail.com"
                  borderRadius={30}
                  backgroundColor={"white"}
                  onChangeText={
                    value => setData({
                      ...formData,
                      Email: value

                    })
                  }
                />
                {'Email' in errors ?
                  <FormControl.ErrorMessage>{errors.Email}</FormControl.ErrorMessage> :
                  <FormControl.HelperText>
                    Enter the email
                  </FormControl.HelperText>
                }
              </FormControl>
              <FormControl isRequired isInvalid={'Passwords' in errors}>
                <Text fontSize="md" color={"rgba(251, 195, 58, 1)"}>Password</Text>
                <Input type="password" p={2}
                  placeholder="Mora than 8 caracters"
                  borderRadius={30}
                  backgroundColor={"white"}
                  onChangeText={
                    value => setData({
                      ...formData,
                      Passwords: value

                    })
                  }
                />
                {'Passwords' in errors ?
                  <FormControl.ErrorMessage>{errors.Passwords}</FormControl.ErrorMessage> :
                  <FormControl.HelperText>
                    The password must have a min of 3
                  </FormControl.HelperText>
                }
              </FormControl>
              <Button
                mt="2"
                size="lg"
                backgroundColor="#1b396a"
                borderRadius={30}
                onPress={submit}

              >
                Sign in
              </Button>
              <Link _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm"
              }} onPress={() => { navigation.navigate('Login') }}>
                I have an account
              </Link>

            </VStack>
          </Box>
        </Center>
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
export default Register;