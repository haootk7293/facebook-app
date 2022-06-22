import { Formik } from 'formik';
import React from 'react';
import Button from '../../limb/button/Button';
import { TextInput } from '../../limb/input/TextInput';
import * as yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import {
  storeAuthToken,
  storeUserInfo,
  getStoredAuthToken,
} from '../../../utils/authToken';
import api from '../../../utils/api';

const LoginPage: React.FC = () => {
  const history = useHistory();

  if (getStoredAuthToken()) {
    history.push('/');
  }

  const fieldValidationSchema = yup.object({
    username: yup.string().required('Username required'),
    password: yup.string().required('Password required'),
  });

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-96 h-auto bg-white rounded-md shadow-md p-4">
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          onSubmit={async (values) => {
            try {
              const result: any = await api.post('/sessions/login', {
                username: values.username,
                password: values.password,
              });
              if (result.status == 'success') {
                storeAuthToken(result.token);
                storeUserInfo(result.user_info);
                alert('Login Success');
                history.push('/');
              } else {
                alert(result.result);
              }
            } catch (error) {
              alert('Error Occurred!');
            }
          }}
          validationSchema={fieldValidationSchema}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <TextInput
                inputsize="large"
                type="text"
                placeholder="Username"
                name="username"
              />
              <TextInput
                inputsize="large"
                name="password"
                type="password"
                placeholder="Password"
              />
              <Button
                type="submit"
                size="large"
                block
                fontSize="text-xl"
                fontWeight="font-bold"
              >
                Login
              </Button>
            </form>
          )}
        </Formik>

        <div className="mt-5 text-center">
          <Link to="/register">
            <Button size="large" bg="bg-greenLight" fontSize="text-xl">
              Create New Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
