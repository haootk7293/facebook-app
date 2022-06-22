import { Formik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../limb/button/Button';
import { TextInput } from '../../limb/input/TextInput';
import * as yup from 'yup';

import api from '../../../utils/api';

const RegisterPage: React.FC = () => {
  const history = useHistory();

  const fieldValidationSchema = yup.object({
    username: yup.string().required('Username required'),
    password: yup.string().required('Password required'),
    first_name: yup.string().required('First name required'),
    last_name: yup.string().required('Last name required'),
  });

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-96 h-auto bg-white rounded-md shadow-md p-4">
        <Formik
          initialValues={{
            username: '',
            password: '',
            email: '',
            first_name: '',
            last_name: '',
          }}
          onSubmit={async (values) => {
            try {
              await api.post('/sessions', {
                username: values.username,
                password: values.password,
                user_info: {
                  email: values.email,
                  first_name: values.first_name,
                  last_name: values.last_name,
                },
              });
              alert('Register Success');
              history.push('/login');
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
              <TextInput
                inputsize="large"
                type="text"
                placeholder="First name"
                name="first_name"
              />
              <TextInput
                inputsize="large"
                type="text"
                placeholder="Last name"
                name="last_name"
              />
              <TextInput
                inputsize="large"
                type="text"
                placeholder="Email"
                name="email"
              />
              <Button
                type="submit"
                size="large"
                block
                fontSize="text-xl"
                fontWeight="font-bold"
              >
                Register
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterPage;
