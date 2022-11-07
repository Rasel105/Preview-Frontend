import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PopupContext } from '../../App';
import Preview from './Preview';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { getPreviewDataById, postPreviewSchema } from '../../services/preview.services';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../init.firebase';

const MainPreview = () => {
    const { id } = useParams();
    const [allValues, setAllValues] = useContext(PopupContext);
    const [open, setOpen] = useState(1);
    const [allData, setPreviewData] = useState()
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const email = user?.email;

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    useEffect(() => {
        previewData(id);
    }, [id]);

    const previewData = async (id) => {
        try {
            const res = await getPreviewDataById(id);
            if (res) {
                setPreviewData(res.data.data);
            }
        } catch (error) {
            return error;
        }
    };

    const postPreviewData = async () => {
        await postPreviewSchema({ allValues, email: email });
        navigate('/preview-list')
    }

    console.log(allValues);
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



    const handlePopupChange = (e, type, property) => {
        const value = e.target.value;
        console.log(value);
        const tempPopupValues = [...allValues.sections];
        const index = tempPopupValues.findIndex(item => item.type === type);

        if (index !== -1) {
            tempPopupValues[index] = {
                ...tempPopupValues[index],
                setting: {
                    ...tempPopupValues[index].setting,
                    customCSS: {
                        ...tempPopupValues[index].setting.customCSS,
                        [property]: value
                    }
                }
            }
        }
        setAllValues({ ...allValues, sections: tempPopupValues });
    }



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
                            <select onChange={(e) => handlePopupChange(e, "title", "fontFamily")} className="select select-info">
                                <option disabled selected>Font Family</option>
                                {fontFamily.map(font => <option>{font.value}</option>)}
                            </select>
                            <select onChange={(e) => handlePopupChange(e, "title", "fontSize")} className="select select-info">
                                <option disabled selected>Font Size</option>
                                {fontSize.map(size => <option>{size.value}</option>)}
                            </select>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <select onChange={(e) => handlePopupChange(e, "title", "textAlign")} className="select select-info">
                                <option disabled selected>Alignment</option>
                                {textAlign.map(align => <option>{align.label}</option>)}
                            </select>
                        </div>
                        <textarea onChange={(e) => handlePopupChange(e, "title", "text")} className="textarea textarea-success w-full mt-2" placeholder="Bio"></textarea>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 1}>
                    <AccordionHeader onClick={() => handleOpen(1)}>
                        Subtitle
                    </AccordionHeader>
                    <AccordionBody>
                        <div className='grid grid-cols-2 gap-4 mb-4'>
                            <select onChange={(e) => handlePopupChange(e, "subtitle", "fontFamily")} className="select select-info">
                                <option disabled selected>Font Family</option>
                                {fontFamily.map(font => <option>{font.value}</option>)}
                            </select>
                            <select onChange={(e) => handlePopupChange(e, "subtitle", "fontSize")} className="select select-info">
                                <option disabled selected>Font Size</option>
                                {fontSize.map(size => <option>{size.value}</option>)}
                            </select>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <select onChange={(e) => handlePopupChange(e, "subtitle", "textAlign")} className="select select-info">
                                <option disabled selected>Alignment</option>
                                {textAlign.map(align => <option>{align.label}</option>)}
                            </select>
                        </div>
                        <textarea onChange={(e) => handlePopupChange(e, "subtitle", "text")} className="textarea textarea-success w-full mt-2" placeholder="Bio"></textarea>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 1}>
                    <AccordionHeader onClick={() => handleOpen(1)}>
                        Button
                    </AccordionHeader>
                    <AccordionBody>
                        <div className='grid grid-cols-2 gap-4 mb-4'>

                            <div>
                                <label htmlFor="">Color</label>
                                <input onChange={(e) => handlePopupChange(e, "button", "color")} type="color" name="" id="" />
                            </div>
                            <select onChange={(e) => handlePopupChange(e, "button", "textAlign")} className="select select-info">
                                <option disabled selected>Alignnment</option>
                                {textAlign.map(align => <option>{align.value}</option>)}
                            </select>
                        </div>
                    </AccordionBody>
                </Accordion>
            </div>
            {/* right  */}
            <div>
                <div className='flex justify-end pr-8'>
                    <button onClick={postPreviewData} className="btn">Save</button>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl p-5">
                    <figure>
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className='mb-2'>
                        {
                            allValues?.sections.map(data => <Preview allData={allData} data={data} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPreview;