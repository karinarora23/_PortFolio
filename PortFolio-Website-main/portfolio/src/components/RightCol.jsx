import React from 'react'

function RightCol({className}) {
    return (
        <ul className={`${className}`}>
            <li className="col-content rotate-90 transform hover:-translate-y-1 transition ease-in">
                <a target="_blank" rel="noreferrer" href="mailto:karinarora23@gmail.com" className='hover:text-red-500 flex justify-center items-center '>
                <span>karinarora23@gmail.com</span>
                <div className="inline-block w-1 h-40 -rotate-90 translate-x-24 rounded-xl bg-red-200"></div>
                </a>
                 
            </li>
        </ul>
    )
}

export default RightCol
