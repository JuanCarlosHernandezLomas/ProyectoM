import React from "react";
import { View, Text, Center, ScrollView, Input, VStack, Button, Box, FormControl } from "native-base";
import { Avatar } from 'react-native-elements';
import { Alert } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";



const RegisterC = (navigate) => {
    const navigation = useNavigation();
    const [formData, setData] = React.useState({})
    const [errors, setErrors] = React.useState({});

    const validate = () => {
        if (!formData.Name && !formData.LastName && !formData.Tel) {
            setErrors({
                ...errors,
                Name: 'Name is required',
                LastName: 'Last is required',
                Phone: 'Phone is required',

            });
            return false;
        }
        else if (!formData.Name) {
            setErrors({
                ...errors,
                Name: 'Name is required'
            });
            return false;
        }
        if (!formData.LastName) {
            setErrors({
                ...errors,
                LastName: 'Last is required'
            });
            return false;
        }
        if (!formData.Tel) {
            setErrors({
                ...errors,
                Phone: 'Phone is required'
            });
            return false;
        }
        else if (formData.Tel.length < 10) {
            setErrors({
                ...errors,
                Phone: 'Phone is to short'
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
            formDataforRequest.append('Name', formData.Name)
            formDataforRequest.append('LastName', formData.LastName)
            formDataforRequest.append('Phone', formData.Tel)
            const response = await axios.post(
                'http://192.168.100.5/ProyectoM/Api/Usuario/UserRegiste.php',
                formDataforRequest,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "Access-control-Allow-origin": "*"
                    },
                    transformRequest: formData => formDataforRequest,
                }
            )
            Alert.alert('informacion correcta', 'los datos se han guaradado',
                [{ text: 'Ok', onPress: () => navigation.navigate("UserTab") }])

        }
        else {
            Alert.alert('invalid information', 'please check the fields',
                [{ text: 'Ok', onPress: () => console.log("error") }])

        }

    }
    return (
        <ScrollView backgroundColor={"#CECEE5"}>
            <Center w="100%">
                <Box px="1" py="8" w="90%" maxW="290">
                    <VStack space={2} mt="2">
                        <ScrollView>
                            <Text
                                style={{
                                    fontSize: 20,
                                    textAlign: "center",
                                    marginTop: "20%"
                                }}
                            >
                                Perfil
                            </Text>
                            <Center>
                                <Avatar
                                    size={"xlarge"}
                                    rounded
                                    source={{
                                        uri:
                                            'https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170441704/76561515-retrato-de-personas-estudio-disparar-con-expresi%C3%B3n-de-cara-sonriente.jpg',
                                    }}
                                />
                            </Center>
                            <FormControl isRequired isInvalid={'Name' in errors}>
                                <FormControl.Label>Name </FormControl.Label>
                                <Input variant="underlined" p={2} placeholder="enter you name"
                                    color="black.400"
                                    backgroundColor={"white"}
                                    borderRadius={30}
                                    onChangeText={
                                        value => setData({
                                            ...formData,
                                            Name: value
                                        })
                                    }
                                />
                                {'Name' in errors ?
                                    <FormControl.ErrorMessage>{errors.Name}</FormControl.ErrorMessage> :
                                    <FormControl.HelperText>
                                        put the name
                                    </FormControl.HelperText>
                                }
                            </FormControl>
                            <FormControl isRequired isInvalid={'LastName' in errors} >
                                <FormControl.Label>Lastname </FormControl.Label>
                                <Input variant="underlined" p={2} placeholder="enter you name"
                                    color="black.400" borderRadius={30}
                                    backgroundColor={"white"}
                                    onChangeText={
                                        value => setData({
                                            ...formData,
                                            LastName: value
                                        })
                                    }
                                />
                                {'LastName' in errors ?
                                    <FormControl.ErrorMessage>{errors.LastName}</FormControl.ErrorMessage> :
                                    <FormControl.HelperText>
                                        put the lastname
                                    </FormControl.HelperText>
                                }
                            </FormControl>
                            <FormControl isRequired isInvalid={'Phone' in errors}>
                                <FormControl.Label>Phone </FormControl.Label>
                                <Input p={2} placeholder="enter you Phone"
                                    color="black.400" borderRadius={30}
                                    backgroundColor={"white"}
                                    onChangeText={
                                        value => setData({
                                            ...formData,
                                            Tel: value
                                        })
                                    }
                                />
                                {'Phone' in errors ?
                                    <FormControl.ErrorMessage>{errors.Tel}</FormControl.ErrorMessage> :
                                    <FormControl.HelperText>
                                        Phone should contains atleast 10 characters
                                    </FormControl.HelperText>
                                }
                            </FormControl>
                            <FormControl >
                                <Input p={2} placeholder="exaple@.com"
                                    color="black.400" borderRadius={30}
                                    backgroundColor={"white"}
                                />

                            </FormControl>
                            <Button
                                mt="2"
                                size="lg"
                                backgroundColor="#1b396a"
                                borderRadius={2}
                                onPress={submit}
                            >
                                Save
                            </Button>
                        </ScrollView>
                    </VStack>
                </Box>
            </Center>
        </ScrollView>
    );
}
export default RegisterC