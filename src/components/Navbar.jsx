import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div className="flex justify-center py-5">
                <div className="">
                    <h1 className='text-white text-3xl lg:text-6xl font-medium text-center mb-3'>
                         Background Removal App
                    </h1>
                    <p className='text-white text-xl font-light text-center mb-3'>
                        Upload your file below to remove the Background
                    </p>
                </div>
            </div>
        </div>
    )
}