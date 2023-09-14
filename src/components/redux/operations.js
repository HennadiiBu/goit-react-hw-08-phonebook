import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const token = {
  set: token => {
    instance.defaults.headers['Authorization'] = token;
  },
  clear: () => {
    instance.defaults.headers['Authorization'] = '';
  },
};

//...................Autorization................................

export const registerUser = createAsyncThunk(
  '/users/registerUser',
  async (userData, thunkApi) => {
    try {
      const { data } = await instance.post('users/signup', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  '/users/login',
  async (userData, thunkApi) => {
    try {
      const { data } = await instance.post('users/login', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  '/users/logout',
  async (_, thunkApi) => {
    try {
      await instance.post('users/logout');
      token.clear();
      return;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  '/users/refreshUser',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const usertoken = state.auth.token;

      if (!usertoken) return thunkApi.rejectWithValue('Please register first!');

      token.set(usertoken);
      const { data } = await instance.get('/users/current');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      const token = state.auth.token;
      if (!token) return false;
    },
  }
);

//...................Contacts................................

export const requestContacts = createAsyncThunk(
  'contacts/requestContacts',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/contacts');

      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/contacts', formData);

      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const { data } = await instance.delete(`/contacts/{${contactId}`);
console.log(contactId)
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
