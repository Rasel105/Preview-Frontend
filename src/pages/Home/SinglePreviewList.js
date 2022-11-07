import React from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../init.firebase';
import { deletePreviewByEmail } from '../../services/preview.services';

const SinglePreviewList = (props) => {
    const [user, loading, error] = useAuthState(auth);
    const { data } = props;
    const { previewData } = props;
    const { allValues } = data;
    const email = user?.email;

    const deletePreview = async (id) => {
        const result = await deletePreviewByEmail(id);
        if (result) {
            alert("Are you want to delete?")
        }

    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mt-20 p-2">
                <figure className="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className='mt-3 p-2'>
                    <h1 className='text-2xl mb-2' style={{ fontFamily: allValues?.sections[0]?.setting.customCSS.fontFamily, fontSize: allValues?.sections[0]?.setting.customCSS.fontSize, textAlign: allValues?.sections[0]?.setting.customCSS.fontSize }}>Name: {allValues?.sections[0]?.setting.customCSS.text}</h1>
                    <h1 className='text-2xl mb-2'>Email: {email}</h1>
                </div>
                <div className='flex justify-evenly my-2'>
                    <button onClick={() => deletePreview(data._id)} className="btn btn-primary">Delete</button>
                    <button className="btn btn-error">Update</button>
                </div>
            </div>

        </div>
    );
};

export default SinglePreviewList;