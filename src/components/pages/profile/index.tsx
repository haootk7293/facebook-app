import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import { TPostView } from '../../../types/post';
import PostContainer from '../../container/PostContainer';
import CreatePostBox from '../../limb/post/CreatePostBox';
import Button from '../../limb/button/Button';
import { TextInput, TextArea } from '../../limb/input/TextInput';

import Modal from '../../limb/modal';

import api from '../../../utils/api';

import { getStoredUserInfo, storeUserInfo } from '../../../utils/authToken';

const userInfo = getStoredUserInfo();

const Desciption: React.FC = () => {
  if (userInfo.description != 'null') {
    return (
      <div className="flex items-center space-x-2">{userInfo.description}</div>
    );
  } else {
    return <div></div>;
  }
};

const School: React.FC = () => {
  if (userInfo.school != 'null') {
    return (
      <div className="flex items-center space-x-2">
        <span>
          <i className="fas fa-graduation-cap"></i>
        </span>
        <p>
          Studiend at <span className="font-semibold">{userInfo.school}</span>
        </p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const CurrentCity: React.FC = () => {
  if (userInfo.current_city != 'null') {
    return (
      <div className="flex items-center space-x-2">
        <span>
          <i className="fas fa-home"></i>
        </span>
        <p>
          Lives in{' '}
          <span className="font-semibold">{userInfo.current_city}</span>
        </p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const Workplace: React.FC = () => {
  if (userInfo.workplace != 'null') {
    return (
      <div className="flex items-center space-x-2">
        <span>
          <i className="fas fa-briefcase"></i>
        </span>
        <p>
          Work at <span className="font-semibold">{userInfo.workplace}</span>
        </p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const ProfilePage: React.FC = () => {
  const profile_image =
    userInfo.profile_image != 'null'
      ? userInfo.profile_image
      : 'https://picsum.photos/200';

  const cover_image =
    userInfo.cover_image != 'null'
      ? userInfo.cover_image
      : 'https://picsum.photos/2440/2048';

  const [postsView, setPostsView] = useState<TPostView>('listView');

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-auto shadow bg-white rounded-md">
        <div className="max-w-6xl h-full mx-auto bg-white p-2">
          <div
            className="h-96 max-h-96 w-full rounded-lg relative"
            style={{
              backgroundImage: `url(${cover_image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className="absolute  w-full flex items-center justify-center"
              style={{ bottom: '-15px' }}
            >
              <div className="w-44 h-44 rounded-full bg-gray-300 border-4 border-white">
                <img
                  className="w-full h-full rounded-full"
                  src={`${profile_image}`}
                  alt="dp"
                />
              </div>
            </div>
          </div>
          <div className="max-w-5xl h-full mx-auto">
            <div className="flex flex-col space-y-2 mt-3 items-center justify-center pb-3 border-b-2">
              <p className="text-4xl font-bold">
                {userInfo.first_name + ' ' + userInfo.last_name}
              </p>
            </div>
            <div className="mt-1 flex items-center justify-between">
              <div className="flex mb-2 items-center space-x-2">
                <button className="py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none">
                  Posts
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-md font-semibold focus:outline-none"
                  onClick={openModal}
                >
                  <i className="fas fa-pen mr-2"></i>Edit Profile
                </button>
                <button className="px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 font-semibold focus:outline-none">
                  <i className="fas fa-ellipsis-h"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* After bio content */}
      <div className="max-w-6xl h-full mx-auto my-3">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-2">
            <div className="bg-white rounded-lg p-3 text-sm text-gray-600 shadow">
              <div className="mb-2 ">
                <p className="font-bold text-xl text-gray-800">Intro</p>
              </div>
              <div className="flex flex-col space-y-3">
                <Desciption />
                <Workplace />
                <School />
                <CurrentCity />
              </div>
            </div>
          </div>
          <div className="col-span-3">
            {/* Create post */}
            <CreatePostBox />
            {/* post filter box */}
            <div className="bg-white rounded-md shadow p-2 mt-4 px-3 text-sm">
              <div className="flex items-center justify-between pb-2 border-b">
                <div>
                  <p className="text-xl text-gray-700 font-bold">Posts</p>
                </div>
              </div>
              <div className="flex space-x-3 text-gray-500 mt-1 -mb-1">
                <button
                  className={`font-semibold flex-1 h-8 focus:outline-none justify-center space-x-2 hover:bg-gray-100 rounded-md ${
                    postsView === 'listView' ? 'bg-gray-200' : undefined
                  }`}
                  onClick={() => setPostsView('listView')}
                >
                  <i className="fas fa-bars mr-2"></i>List View
                </button>
                <button
                  className={`font-semibold flex-1 h-8 focus:outline-none justify-center space-x-2 hover:bg-gray-100 rounded-md  ${
                    postsView === 'gridView' ? 'bg-gray-200' : undefined
                  }`}
                  onClick={() => setPostsView('gridView')}
                >
                  <i className="fas fa-th-large mr-2"></i>Grid View
                </button>
              </div>
            </div>

            {/* user posts */}
            <PostContainer postsView={postsView} />
          </div>
        </div>
      </div>
      <Modal open={modalOpen} close={closeModal} header="Edit profile">
        <Formik
          initialValues={{
            profile_image: userInfo.profile_image,
            cover_image: userInfo.cover_image,
            current_city: userInfo.current_city,
            workplace: userInfo.workplace,
            school: userInfo.school,
            description: userInfo.description,
          }}
          onSubmit={async (values) => {
            try {
              const result: any = await api.patch('/sessions/users', {
                profile_image: values.profile_image,
                cover_image: values.cover_image,
                current_city: values.current_city,
                workplace: values.workplace,
                school: values.school,
                description: values.description,
              });
              if (result.status == 'success') {
                alert('Edit Success');

                var updatedInfo = userInfo;
                updatedInfo.profile_image = values.profile_image;
                updatedInfo.cover_image = values.cover_image;
                updatedInfo.current_city = values.current_city;
                updatedInfo.workplace = values.workplace;
                updatedInfo.school = values.school;
                updatedInfo.description = values.description;

                storeUserInfo(updatedInfo);
                window.location.reload();
                closeModal();
              } else {
                alert(result.result);
              }
            } catch (error) {
              alert('Error Occurred!');
            }
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              Profile Image
              <TextInput inputsize="medium" name="profile_image" type="text" />
              Cover Image
              <TextInput inputsize="medium" name="cover_image" type="text" />
              Current City
              <TextInput inputsize="medium" name="current_city" type="text" />
              Workplace
              <TextInput inputsize="medium" name="workplace" type="text" />
              School
              <TextInput inputsize="medium" name="school" type="text" />
              description
              <TextArea inputsize="max" name="description" />
              <Button
                type="submit"
                size="large"
                block
                fontSize="text-xl"
                fontWeight="font-bold"
              >
                Edit
              </Button>
            </form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default ProfilePage;
