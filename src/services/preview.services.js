import axios from "axios";

export const getPreviewData = async () => {
    try {
        const { data } = await axios.get(`http://localhost:5000/api/v1/preview`);
        return { data: data };
    } catch (error) {
        return error;
    }
};