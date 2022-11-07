import axios from "axios";

export const getPreviewData = async () => {
    try {
        const { data } = await axios.get(`http://localhost:5000/api/v1/prevew-data`);
        return { data: data };
    } catch (error) {
        return error;
    }
};
export const postPreviewSchema = async () => {
    try {
        const { data } = await axios.post(`http://localhost:5000/api/v1/preview/single-preview`);
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

