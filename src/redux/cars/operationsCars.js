import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://64932a4d428c3d2035d17180.mockapi.io';

export const getAllCars = createAsyncThunk('cars/getAll',
async(page, {rejectWithValue}) => {
    try {
        const {data} = axios.get(`advert?p=${page}&l=8`)
        console.log(data);
        return data;
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
}
)