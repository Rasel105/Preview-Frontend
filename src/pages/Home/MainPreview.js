import React, { Fragment, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PopupContext } from '../../App';
import Preview from './Preview';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const MainPreview = () => {
    const { id } = useParams();
    const popup = useContext(PopupContext);
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    const textAlign
        = [
            {
                value: 'left',
                label: 'Left',
            },
            {
                value: 'center',
                label: 'Center',
            },
            {
                value: 'right',
                label: 'Right',
            },
        ];

    const fontFamily = [
        {
            value: 'sans-serif',
            label: 'sans-serif',
        },
        {
            value: 'monospace',
            label: 'monospace',
        },
        {
            value: 'cursive ',
            label: 'cursive',
        },
        {
            value: 'fantasy ',
            label: 'fantasy',
        },
    ];

    const fontSize = [
        {
            value: '1rem',
            label: 'small',
        },
        {
            value: '2rem',
            label: 'large',
        },
        {
            value: '3rem',
            label: 'extra large',
        },

    ];
    return (
        <div className='grid grid-cols-2 gap-8 mt-28'>
            {/* left  */}
            <div className='p-4'>
                <Accordion open={open === 1}>
                    <AccordionHeader onClick={() => handleOpen(1)}>
                        Title
                    </AccordionHeader>
                    <AccordionBody>
                        <div className='grid grid-cols-2 gap-4 mb-4'>
                            <select className="select select-info">
                                <option disabled selected>Font Family</option>
                                {fontFamily.map(font => <option>{font.value}</option>)}
                            </select>
                            <select className="select select-info">
                                <option disabled selected>Font Size</option>
                                {fontSize.map(size => <option>{size.value}</option>)}
                            </select>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <select className="select select-info">
                                <option disabled selected>Font Size</option>
                                {textAlign.map(align => <option>{align.value}</option>)}
                            </select>
                        </div>
                        <textarea className="textarea textarea-success w-full mt-2" placeholder="Bio"></textarea>
                    </AccordionBody>
                </Accordion>
            </div>
            {/* right  */}
            <div>
                <div className="card w-3/4 bg-base-100 shadow-xl p-3">
                    <div className='mb-2'>
                        {
                            popup[0]?.sections.map(data => <Preview data={data} />)
                        }
                    </div>
                    <div className='mb-2'>
                        <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full" />
                    </div>
                    <div>
                        <button className="btn btn-wide">Created</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPreview;