import React from 'react'

   // Reusable Box Component
    const Card = ({ label = "Blogger" }) => (
        <div className="box bg-[#f1f1f1] border border-black flex items-center justify-center flex-col px-4 py-2 rounded-md min-w-[120px]">
            <div className="icon text-4xl">
                <ImBlogger2 />
            </div>
            <p className="font-semibold text-gray-800">{label}</p>
        </div>
    );

export default Cart