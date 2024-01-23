import React from 'react'
import { Link } from 'react-router-dom'
function Projects() {
    return (
        <div
            id="skills"
            className={`h-auto w-full flex flex-col justify-start gap-8  py-16 px-4 sm:px-14 bg-indigo-100 `}
        >
            <div className="to-left">
                <span className="line-border relative font-bold text-4xl text-[#173b6c]">
                    Projects <span className='text-sm text-red-600 float-right'>Note! Backend code of these projects is not running on verce</span>
                </span>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10">
                    <div className='my-5'>
                        <h1 className='text-2xl font-bold'> 1) Admin Pannle To Handle Staff Position   </h1>
                        <p className='my-3'>Technology: REACT, NODE, AND MONGODB</p>
                        {/* Use 'href' instead of 'to' for an external link */}
                        <a href="https://admin-panel1-mocha.vercel.app/" target='_blank' rel="noopener noreferrer">
                            <button
                                type="button"
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            >
                                View Project
                            </button>
                          
                        </a>
                    </div>
                    <div className='my-5'>
                        <h1 className='text-2xl font-bold'> 2) React Functional Project</h1>
                        <p className='my-3'>Technology: REACT, NODE, AND MONGODB</p>
                        {/* Use 'href' instead of 'to' for an external link */}
                        <a href="https://simple-projects-mu.vercel.app/" target='_blank' rel="noopener noreferrer">
                            <button
                                type="button"
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            >
                                View Project
                            </button>
                          
                        </a>
                    </div>
                    <div className='my-5'>
                        <h1 className='text-2xl font-bold'> 3) News App    </h1>
                        <p className='my-3'>Technology: REACT, (News Api Integration)</p>
                        {/* Use 'href' instead of 'to' for an external link */}
                        <a href="https://news-website-ivory.vercel.app/" target='_blank' rel="noopener noreferrer">
                            <button
                                type="button"
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            >
                                View Project
                            </button>
                          
                        </a>
                    </div>
                    <div className='my-5'>
                        <h1 className='text-2xl font-bold'> 4) Attendence Sheet    </h1>
                        <p className='my-3'>Technology: REACT, NODE, AND MONGODB</p>
                        {/* Use 'href' instead of 'to' for an external link */}
                        <a href="https://attendence-shett.vercel.app/" target='_blank' rel="noopener noreferrer">
                            <button
                                type="button"
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            >
                                View Project
                            </button>
                          
                        </a>
                    </div>
                    <div className='my-5'>
                        <h1 className='text-2xl font-bold'> 5) Doctore Adimin Pannels    </h1>
                        <p className='my-3'>Technology: REACT, NODE, AND MONGODB</p>
                        {/* Use 'href' instead of 'to' for an external link */}
                        <a href="https://admin-panel1-mocha.vercel.app/" target='_blank' rel="noopener noreferrer">
                            <button
                                type="button"
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            >
                                View Project
                            </button>
                          
                        </a>
                    </div>
                    <div className='my-5'>
                        <h1 className='text-2xl font-bold'> 6)Store App   </h1>
                        <p className='my-3'>Technology: REACT, NODE, AND MONGODB</p>
                        {/* Use 'href' instead of 'to' for an external link */}
                        <a href="https://admin-panel1-mocha.vercel.app/" target='_blank' rel="noopener noreferrer">
                            <button
                                type="button"
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            >
                                View Project
                            </button>
                          
                        </a>
                    </div>
                    <div className='my-5'>
                        <h1 className='text-2xl font-bold'> 7) Add Notes    </h1>
                        <p className='my-3'>Technology: REACT, NODE, AND MONGODB</p>
                        {/* Use 'href' instead of 'to' for an external link */}
                        <a href="https://add-notes-website.vercel.app/" target='_blank' rel="noopener noreferrer">
                            <button
                                type="button"
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            >
                                View Project
                            </button>
                          
                        </a>
                    </div>
                    <div className='my-5'>
                        <h1 className='text-2xl font-bold'> 8) Read Notes and Books</h1>
                        <p className='my-3'>Technology: REACT, NODE, AND MONGODB</p>
                        {/* Use 'href' instead of 'to' for an external link */}
                        <a href="https://read-nots.vercel.app/" target='_blank' rel="noopener noreferrer">
                            <button
                                type="button"
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            >
                                View Project
                            </button>
                          
                        </a>
                    </div>
                    <div className='my-5'>
                        <h1 className='text-2xl font-bold'> 9) Redux USE(Deposit and Withdraw Money)     </h1>
                        <p className='my-3'>Technology: REACT, NODE, AND MONGODB</p>
                        {/* Use 'href' instead of 'to' for an external link */}
                        <a href="https://redux-app-ten.vercel.app/" target='_blank' rel="noopener noreferrer">
                            <button
                                type="button"
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            >
                                View Project
                            </button>
                          
                        </a>
                    </div>
                  
                </div>

            </div></div>
    )
}

export default Projects
