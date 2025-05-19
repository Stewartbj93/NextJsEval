"use client"


import React from 'react';

const Form = () => {

    return (
        <div className="userForm">

            <div className="input-item">

                <input
                    className="input border-2"
                    placeholder='Enter name' />
            </div>

            <div className="inputItem">
                <input
                    className="input border-2"
                    placeholder='Enter Location' />
            </div>

        </div>
    );
};

const Location = () => {

    return (
        <div className=''>
            <h2 className="text-lg font-semibold">
                <strong>Location</strong>
            </h2>
        </div>
    );
};


const Name = () => {

    return (
        <div className='pt-4'>
            <h2 className="text-lg font-semibold">
                <strong>Name</strong>
            </h2>
        </div>
    );
};

const Challenge6 = () => {

    return (
        <div className="md:col-span-12 mt-5">
            <div className="md:col-span-12 dashSection whiteBg roundedCorner bg-opacity-40">
                <div className=''>
                    <h3 className="text-xl font-semibold">useContext</h3>
                    <p >Create a Form component and use this component to update the text on another component using useContext</p>
                    <Form />
                </div>
                <div className=''>

                    <div className='p-4'>
                        <Name />
                        <Location />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Challenge6;
