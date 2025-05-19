"use client"

import React from 'react'

const Challenge2 = () => {

    return (
        <div className="col-span-12 mt-5">
            <div className="container">
                <div className="col-span-12 dashSection bg-white rounded-lg p-4">
                    <h3 className="text-xl font-bold">Disable Button</h3>
                    <p>
                        In this challenge, you are to make the button disabled when there is no character in the input field. Enable the Submit button (remove the disabled state) when there is at least one character.
                    </p>
                    <p>Below the input field, make sure to print out all that is being typed!</p>
                </div>
            </div>
            <div className="container mt-5">
                <div className="col-span-12 dashSection bg-white rounded-lg p-4">
                    <div className="flex justify-center p-4">
                        <h3 className="text-xl font-bold">Disable Button Challenge</h3>
                    </div>
                    <div className="flex justify-center mt-3">

                        <input
                            type="text"
                            className="border border-gray-300 rounded-md p-2 mr-2"
                            placeholder="Type something..."
                        />
                        <button
                            className='bg-blue-500 text-white p-4 rounded-md'>
                            Submit
                        </button>
                    </div>
                    <div className="flex justify-center mt-3">
                        <p className=""></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Challenge2
