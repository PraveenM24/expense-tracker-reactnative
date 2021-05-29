import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { TextInput, Button } from 'react-native-paper';
import { firebase } from '../../firebase/config'


export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const login = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                console.log(uid + " successfully logged in")
            })
            .catch(error => {
                alert(error)
            })
    }

    const register = () => {
        navigation.navigate('Registration')
    }

    return (
        <View style={styles.container}>
            <Text style= {styles.title}>Sign In</Text>
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
                        onPress={() => login()}
                    >
                    Login
                    </Button>
                </View> 
                <View>
                    <Button
                        style = {styles.link} 
                        mode="text" 
                        color= '#3F51B5'
                        onPress={() => register()}
                    >
                    Sign Up
                    </Button>
                </View>                  
            </View>            
        </View>
    )
}
