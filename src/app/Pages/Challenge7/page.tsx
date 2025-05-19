"use client"

import React, { useState } from 'react'

const Challenge7 = () => {

  return (
    <div>
      <h3 className='text-xl font-bold'>Fizz Buzz</h3>
      <div className='p-4'>
        <p className='font-bold'>Rules:</p>
        <p>Click the + to increment the number.</p>
        <p>Click the - to decrement the number.</p>
        <p>If the number is divisible by three, print &apos;Fizz&apos;.</p>
        <p>If the number is divisible by five, print &apos;Buzz&apos;.</p>
        <p>If the number is divisible by three and five, print &apos;Fizz Buzz&apos;</p>
      </div>

      <div className=''>
        <div>
          <p className='font-bold'>Click buttons to create FizzBuzz</p>
          <div className=''>
            <button type='button' className='p-4 bg-blue-200'>+</button> {" "}
            <button type='button' className='p-4 bg-blue-200'>-</button>

            <h1 className='mt-4'>Output Here:</h1>
            <p className=''></p>

          </div>
        </div>
      </div>
    </div >
  )
}

export default Challenge7
