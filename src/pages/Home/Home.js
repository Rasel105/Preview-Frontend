import React, { useEffect, useState } from 'react';
import { getPreviewData } from '../../services/preview.services';
import PreviewCard from './PreviewCard';


const Home = () => {

    const [allData, setPreviewData] = useState()
    useEffect(() => {
        previewData();
    }, []);

    const previewData = async () => {
        try {
            const res = await getPreviewData();
            if (res) {
                setPreviewData(res.data.data);
            }
        } catch (error) {
            return error;
        }
    };
    return (
        <div className='mt-20'>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-5 justify-center items-center'>
                {allData?.map(data => <PreviewCard key={data._id} data={data} />)}
            </div>
        </div>
    );
};

export default Home;