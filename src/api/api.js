import axios from "axios";

axios.defaults.baseURL = 'https://64932a4d428c3d2035d17180.mockapi.io';

export const getAllCars = async() => {
    const {data} = await axios.get('/advert')
    return data
}