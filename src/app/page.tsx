import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="col-span-12">
                <div className="mt-5">
                    <div className="container">
                        <div className="col-span-12 rounded-lg">
                            <h2 className="text-xl font-bold">Welcome</h2>
                            <p>
                                In this evaluation, you have the option to finish as many sections as you
                                can within the 45-minute mark. It is important to note that you may not be able
                                to complete all sections in the given time frame.
                            </p>
                            <p className='mt-5'>
                                Each question has a certain level of difficulty based on the time it will take
                                to solve. The easier the problem, the lower the difficulty.
                            </p>
                            <p>We will evaluate you based on the following criteria:</p>
                            <ul className="list-disc pl-6">
                                <li>How you approach each problem.</li>
                                <li>Your ability to apply what has been taught in class correctly.</li>
                                <li>Your ability to articulate your thought process out loud.</li>
                                <li>Whether you solved the problem correctly.</li>
                            </ul>
                            <p className='mt-5'>
                                Please note that your session will be recorded to help us provide a better
                                evaluation score.
                            </p>
                            <h3 className="text-lg font-semibold">
                                You cannot change the format of this evaluation.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
