import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {api} from '../api';
import {ScreenProps} from '../navigation';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {
  connect,
  selectAuthentication,
  User,
} from '../redux/slices/authentication.slice';
import {useForm, Controller} from 'react-hook-form';
import {Credentials} from '../interfaces/Credentials';

const Login = ({navigation}: ScreenProps<'Login'>) => {
  const dispatch = useAppDispatch();
  const authentication = useAppSelector(selectAuthentication);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: 'jlg@jlg.com',
      password: '',
    } as Credentials,
  });

  useEffect(() => {
    if (authentication.user) {
      navigation.navigate('Home', {screen: 'Wall'});
    }
  });

  const onSubmit = async (credentials: Credentials) => {
    try {
      setIsLoading(true);
      setErrorMessage('');
      const response = await api.connect(
        credentials.email,
        credentials.password,
      );
      setIsLoading(false);
      if (response.status !== 200) {
        if (response.status === 401) {
          setErrorMessage('bad credentials');
          return;
        }
        setErrorMessage('oops. technical error');
        return;
      }
      const user: User = await response.json();
      dispatch(connect(user));
    } catch (err) {
      setIsLoading(false);
      setErrorMessage('oops. unexpected technical error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PhotoBook</Text>
      <Controller
        control={control}
        rules={{
          required: 'email required',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Entered value does not match email format',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Email"
            errorStyle={styles.error}
            errorMessage={errors.email && errors.email.message}
            autoCompleteType={undefined}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: 'password required',
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Password"
            errorStyle={styles.error}
            errorMessage={errors.password && 'Text is required'}
            autoCompleteType={undefined}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
          />
        )}
        name="password"
      />
      <Button
        title={'Connect'}
        onPress={handleSubmit(onSubmit)}
        loading={isLoading}
        containerStyle={styles.button}
      />
      {errorMessage !== '' && <Text>error: {errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
  },
  input: {},
  error: {
    color: 'red',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  button: {
    width: '100%',
    marginTop: 50,
  },
});

export default Login;
