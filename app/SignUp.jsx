import { Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput, View } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';
import { useRouter } from 'expo-router';
import BackGroundFood3 from "../assets/background/loginBG.jpg";
import { Controller, useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorText from '../components/common/text/ErrorText';

const validationSchema = object({
  password: string().trim().required("Password is required."),
  email: string().trim().required("Email is required.").email("Please enter a valid email address."),
});

const defaultValues = {
  password: "",
  email: "",
}

export default function SignUp() {
  const router = useRouter();

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: defaultValues, resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    router.push('/Home');
  };

  return (
    <ImageBackground
      source={BackGroundFood3}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Sign Up for BUI Food</Text>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Continue with Apple</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or</Text>

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextInput
              style={[styles.input, errors.email && styles.errorInput]}
              placeholder="Email"
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
        />
        {errors.email && <ErrorText text={errors.email.message} />}

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextInput
              style={[styles.input, errors.password && styles.errorInput]}
              placeholder="Password"
              secureTextEntry
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
        />
        {errors.password && <ErrorText text={errors.password.message} />}

        <TouchableOpacity
          style={[styles.button, { marginTop: 20, marginBottom: 0 }]}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.guestButton}
          onPress={() => router.push('/Home')}
        >
          <Text style={styles.guestButtonText}>Continue as Guest</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.push('/Login')}>
            <Text style={styles.signUpLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.light.font.secondary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
  },
  socialButton: {
    backgroundColor: Colors.light.primary[800],
    width: '100%',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  socialButtonText: {
    color: Colors.light.font.white,
    fontSize: 16,
  },
  orText: {
    fontSize: 16,
    marginVertical: 15,
    color: Colors.light.font.gray,
  },
  input: {
    width: '100%',
    padding: 15,
    backgroundColor: Colors.light.background.secondary,
    borderRadius: 8,
    marginBottom: 10,
    color: Colors.light.font.lightGray,
  },
  forgotPasswordText: {
    color: Colors.light.primary[800],
    marginBottom: 20,
    textAlign: 'right',
  },
  button: {
    width: '100%',
    backgroundColor: Colors.light.primary[800],
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.light.font.white,
    fontSize: 18,
  },
  guestButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20
  },
  guestButtonText: {
    color: Colors.light.primary[800],
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',

  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpText: {
    color: Colors.light.font.gray,
  },
  signUpLink: {
    color: Colors.light.primary[800],
    fontWeight: 'bold',
    marginLeft: 5,
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
});
