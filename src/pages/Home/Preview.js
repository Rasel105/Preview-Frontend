import React from 'react';
import { useParams } from 'react-router-dom';
import Paragraph from './Paragraph';
import Subtitle from './Subtitle';
import Title from './Title';

const Preview = (props) => {
    const { type } = props.data
    const { id } = useParams();
    console.log(type);
    switch (type) {
        case 'title':
            return <Title />
        case 'subtitle':
            return <Subtitle />
        case 'paragraph':
            return <Paragraph/>
        case 'button':
            return <h1>Hello</h1>
        default:
            return undefined;
    }
};

export default Preview;