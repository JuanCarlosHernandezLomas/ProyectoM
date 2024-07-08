import axios from "axios";
import { View,Text, Center, ScrollView,Input,VStack,Button, Box,FormControl} from "native-base";
import React from "react";
import { useEffect } from "react";
import { Avatar } from 'react-native-elements';




const UserHome=({navigation})=>{

    const [isLoading, setLoading] = React.useState();
    const [user, setUser] = React.useState([]);

    useEffect(() => {
        setTimeout(() => {
            const response = axios.get(
                'http://192.168.100.14/Hospital-1/api/Patient/SelectUser.php',
                
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "Access-control-Allow-origin": "*"
                    },
                },
            ).then((response) => {
                console.log(response.data);
                setLoading(false);
                setUser({
                    ...user,
                    NamePatient: response.data[0].NamePatient,
                    SurnamesPatient: response.data[0].SurnamesPatient,
                    Direction: response.data[0].Direction,
                    Phone: response.data[0].Phone,
                    NSS: response.data[0].NSS,
                    
                });
                
            })
        }, 100);
    }, [isLoading]);

    const check = async()=>{
        const response = axios.get(
            'http://192.168.100.14/Hospital-1/api/Patient/SelectUser.php',
            
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-control-Allow-origin": "*"
                },
            },
        ).then((response) => {
            console.log(response.data);
            setLoading(false);
            setUser({
                ...user,
                NamePatient: response.data[0].NamePatient,
                SurnamesPatient: response.data[0].SurnamesPatient,
                Direction: response.data[0].Direction,
                Phone: response.data[0].Phone,
                NSS: response.data[0].NSS,
                
            });
            
        })

    }



    return(
        <ScrollView backgroundColor={"#CECEE5"}>
        <Center w="100%">
            <Box px="1" py="8" w="90%" maxW="290">
            <VStack space={2} mt="2">
            <Text
             style={{
                fontSize: 20,
                textAlign:"center",
                marginTop: "20%"
                }}>
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
            <Text mt="2" fontSize="25" color="#1b396a" fontWeight="bold" textAlign="center">{"   "}My Profile</Text>
                    <Text fontSize="20" fontWeight="bold" mt="3" >
                        {"   "}Name :
                        <Text color="#1b396a" textAlign="left" fontSize="18" fontWeight="black"> {user.NamePatient}</Text>
                    </Text>
                    <Text fontSize="20" fontWeight="bold" borderTopWidth="1" mt="3">
                        {"   "}Last Name:
                        <Text color="#1b396a" textAlign="left" fontSize="18" fontWeight="black"> {user.SurnamesPatient}</Text>
                    </Text>
                    <Text fontSize="20" fontWeight="bold" borderTopWidth="1" mt="3" >
                        {"   "}Email:
                        <Text color="#1b396a" textAlign="left" fontSize="18" fontWeight="black"> {user.Direction} </Text>
                    </Text>
                    <Text fontSize="20" fontWeight="bold" borderTopWidth="1" mt="3" >
                        {"   "}Phone:
                        <Text color="#1b396a" textAlign="left" fontSize="18" fontWeight="black"> {user.Phone}</Text>
                    </Text>
            <Button
                mt="2"
                size="lg"
                backgroundColor="#6495ED"
                borderRadius={2}   
                onPress= {()=>{
                    navigation.navigate('RegisterUser')
                }}
        >
            Editar
        </Button>
        <Button
                mt="2"
                size="lg"
                backgroundColor="#1b396a"
                borderRadius={2}   
                onPress= {()=>{
                    navigation.navigate('Login')
                }}
        >
            Salir
        </Button>
            
            </VStack> 
            </Box>      
        </Center>
        </ScrollView>
    );
}
export default UserHome