import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
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
  }
);
