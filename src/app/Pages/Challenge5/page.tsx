"use client"

import React, { Suspense, useEffect, useState } from 'react'

interface Book {
    name: string;
    authors: string[];
    numberOfPages: number;
    country: string;
    released: string;
}


const Challenge5 = () => {

    return (
        <div>
            <h1 className='text-xl font-bold'>Fetch</h1>
            <div className='py-4'>
                <p>In this challenge you are to pull from the lord of the rings api.</p>
            </div>
            <div className='pb-4'>
                <p className=''>API:</p>
                <p className=''>https://www.anapioficeandfire.com/api/books?pageSize=30</p>
            </div>
            <div className='pt-5 pl-4'>
                <p className='font-bold'>Display all the books with:</p>
                <ul className=''>
                    <li>Which book in the series it is ex: Book 1</li>
                    <li>Title of book</li>
                    <li>Author:</li>
                    <li>Number of Pages:</li>
                    <li>Country:</li>
                    <li className='mb-4'>Release Date:</li>
                </ul>
            </div>
            <div className='bg-gray-200 h-auto rounded-md p-2'>
                <h1 className='mb-5'>Display Response here:</h1>
                
            </div>
        </div>
    )
}

export default Challenge5
