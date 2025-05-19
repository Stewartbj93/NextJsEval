"use client"

import React from 'react'

function Child() {
    return (
        <>
            <div>Child</div>
            <button className='bg-blue-500 text-white p-4 rounded-md' >Change Parent Value</button>
        </>
    );
}

function Parent() {

    return (
        <>
            <div className="mb-10 text-center">
                <div>Parent</div>
                <div className="rounded-sm border-black">
                I need to be updated from my child
                </div>
            </div>

            <div className="text-center">
                <Child />
            </div>
        </>
    );
}


const Challenge3 = () => {
    return (
        <div className="md:col-span-12">
            <div className="mt-5">
                <div className="bg-white rounded-lg p-4 alpha-4">
                    <h3 className="text-xl font-bold">Update Parent State from Child</h3>
                    <p className="text-gray-600">In this challenge, you are to change the parent text (I need to be updated from my child) when the Child button below is clicked. Feel free to use any string to update the parents current string.</p>
                </div>
            </div>
            <div className="mt-5">
                <Parent />
            </div>
        </div>
    );
}

export default Challenge3
