import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import Button from '../button/Button';
import { TextInput, TextArea } from '../input/TextInput';
import ProfileImage from '../profile_image';
import Modal from '../modal';

import { getStoredUserInfo } from '../../../utils/authToken';

import api from '../../../utils/api';

const CreatePostBox: React.FC = () => {
  const userInfo = getStoredUserInfo();

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const fieldValidationSchema = yup.object({
    content: yup.string().required('Content required'),
  });

  return (
    <div className="rounded-lg bg-white flex flex-col p-3 px-4 shadow">
      <div className="flex items-center space-x-2 border-b pb-3 mb-2">
        <div className="w-10 h-10">
          <ProfileImage />
        </div>
        <button
          className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-none flex-grow bg-gray-100 text-gray-500 text-left rounded-full h-10 pl-5"
          onClick={openModal}
        >
          What&apos;s on your mind, {userInfo.first_name}?
        </button>
      </div>
      <div className="flex space-x-3 font-thin text-sm text-gray-600 -mb-1">
        <button
          className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md"
          onClick={openModal}
        >
          <div>
            <i className="fas fa-images text-green-500"></i>
          </div>
          <div>
            <p className="font-semibold">Photos/Video</p>
          </div>
        </button>
        <button
          className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md"
          onClick={openModal}
        >
          <div>
            <i className="far fa-smile text-yellow-500"></i>
          </div>
          <div>
            <p className="font-semibold">Feeling/Activity</p>
          </div>
        </button>
      </div>
      <Modal open={modalOpen} close={closeModal} header="Create Post">
        <Formik
          initialValues={{
            image: '',
            content: '',
            security: '0',
          }}
          onSubmit={async (values) => {
            try {
              const result: any = await api.post('/board', {
                content: values.content,
                image: values.image,
                security: values.security,
              });
              if (result.status == 'success') {
                alert('Post Success');
                window.location.reload();
                closeModal();
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
              <div className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md">
                <div>
                  <ProfileImage />
                </div>
                <div>
                  <p className="text-sm font-semibold">
                    {userInfo.first_name + ' ' + userInfo.last_name}
                  </p>
                  <select className="text-sm bg-gray-200" name="security">
                    <option value="2">Only me</option>
                    <option value="1">Friends</option>
                    <option value="0">Public</option>
                  </select>
                </div>
              </div>
              <TextArea
                inputsize="max"
                placeholder="What's on your mind?"
                name="content"
              />
              <TextInput
                inputsize="large"
                name="image"
                type="text"
                placeholder="Image URL"
              />
              <Button
                type="submit"
                size="large"
                block
                fontSize="text-xl"
                fontWeight="font-bold"
              >
                Post
              </Button>
            </form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default CreatePostBox;
