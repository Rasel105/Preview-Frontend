import axios from "axios";

export const getPreviewData = async () => {
    try {
        const { data } = await axios.get(`http://localhost:5000/api/v1/prevew-data`);
        return { data: data };
    } catch (error) {
        return error;
    }
};

export const postPreviewSchema = async (allValues) => {
    try {
        const { data } = await axios.post(`http://localhost:5000/api/v1/single-preview`, allValues);
        return { data: data };
    } catch (error) {
        return error;
    }
};

export const getPreviewDataById = async (id) => {

    try {
        const { data } = await axios.get(`http://localhost:5000/api/v1/prevew-data/${id}`);
        return { data: data };
    } catch (error) {
        return error;
    }
};
export const getPreviewDataByEmail = async (email) => {
    try {
        const { data } = await axios.get(`http://localhost:5000/api/v1/single-preview/${email}`);
        return { data: data };
    } catch (error) {
        return error;
    }
};
export const deletePreviewByEmail = async (id) => {
    try {
        const { data } = await axios.delete(`http://localhost:5000/api/v1/single-preview/${id}`);
        return { data: data };
    } catch (error) {
        return error;
    }
};

