import React from 'react';
import { useParams } from 'react-router-dom';
import Button from './Button';
import Paragraph from './Paragraph';
import Subtitle from './Subtitle';
import Title from './Title';

const Preview = (props) => {
    const data = props.data
    const userData = props.allData;
    const { id } = useParams();

    switch (data.type) {
        case 'title':
            return <Title userData={userData} data={data} />
        case 'subtitle':
            return <Subtitle userData={userData} data={data} />
        case 'paragraph':
            return <Paragraph userData={userData} data={data} />
        case 'button':
            return <Button userData={userData} data={data} />
        default:
            return undefined;
    }
};

export default Preview;