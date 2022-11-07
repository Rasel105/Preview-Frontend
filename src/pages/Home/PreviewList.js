import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../init.firebase';
import { getPreviewDataByEmail } from '../../services/preview.services';
import SinglePreviewList from './SinglePreviewList';
import notFound from '../../assets/nodata-found.png'

const PreviewList = () => {
    const [user, loading, error] = useAuthState(auth);
    const email = user?.email;
    const [previewData, setPreviewData] = useState();

    useEffect(() => {
        getPreview(email);
    }, [email, previewData]);

    const getPreview = async (email) => {
        try {
            const res = await getPreviewDataByEmail(email);
            if (res) {
                setPreviewData(res?.data?.data);
            }
        } catch (error) {
            return error;
        }
    };

    return (
        <div >

            <div>
                {
                    previewData?.lenth > 0 ? <div className='grid grid-cols-3'>
                        {
                            previewData?.map(data => <SinglePreviewList key={data._id} data={data} previewData={previewData} />)
                        }
                    </div> : <div className='mt-20 flex justify-center'><img src={notFound} alt="" /></div>
                }
            </div>
        </div>
    );
};

export default PreviewList;