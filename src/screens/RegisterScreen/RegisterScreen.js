import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { TextInput, Button } from 'react-native-paper';
import { firebase } from '../../firebase/config'


export default function RegisterScreen({navigation}) {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const register = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                navigation.navigate('Login')                
            })
            .catch((error) => {
                alert(error)
        });
    }

    const login = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Text style= {styles.title}>Sign Up</Text>
            <TextInput 
                style = {styles.input}
                mode = "outlined"
                label = "First Name"
                theme = {{colors :{primary:'#3F51B5'}}}
                value = { firstName }
                onChangeText = { firstName => setFirstName(firstName)}
            />
            <TextInput 
                style = {styles.input}
                mode = "outlined"
                label = "Last Name"
                theme = {{colors :{primary:'#3F51B5'}}}
                value = { lastName }
                onChangeText = { lastName => setLastName(lastName)}
            />
            <TextInput 
                style = {styles.input}
                mode = "outlined"
                label = "Email"
                theme = {{colors :{primary:'#3F51B5'}}}
                value = { email }
                onChangeText = { email => setEmail(email)}
            />
            <TextInput 
                style = {styles.input}
                mode = "outlined"
                label = "Password"
                theme = {{colors :{primary:'#3F51B5'}}}
                secureTextEntry
                value = { password }
                onChangeText = { password => setPassword(password)}
            />
            <View style={styles.buttonGroup}>
                <View>
                    <Button
                        style = {styles.button} 
                        mode="contained" 
                        color= '#3F51B5'
                        onPress={() => register()}
                    >
                    Register
                    </Button>
                </View> 
                <View>
                    <Button
                        style = {styles.link} 
                        mode="text" 
                        color= '#3F51B5'
                        onPress={() => login()}
                    >
                    Go Back
                    </Button>
                </View>                  
            </View>            
        </View>
    )
}
