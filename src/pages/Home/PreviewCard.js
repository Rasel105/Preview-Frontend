import React from 'react';
import { useNavigate } from 'react-router-dom';

const PreviewCard = ({ data }) => {

    const { _id, company, description, email, name, picture, status } = data;
    const navigate = useNavigate();

    const createPreview = (id) => {
        navigate(`/${id}`);
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <h2 className="card-title">Company: {company}</h2>
                <h2 className="card-title">Email: {email}</h2>
                <h2 className="card-title">status: {status}</h2>
                <p>Description: {description}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => createPreview(_id)} className="btn btn-primary">Create</button>
                </div>
            </div>
        </div>
    );
};

export default PreviewCard;