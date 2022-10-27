import React from 'react';

const Faq = () => {
    return (
        <div className='container mx-auto mt-12'>
            <h1 className='text-3xl text-center mb-4'>Frequently asked Question</h1>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    1. What is node js?
                </div>
                <div className="collapse-content">
                    <p>Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux. Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    2. Why Node.js?
                </div>
                <div className="collapse-content">
                    <p>A common task for a web server can be to open a file on the server and return the content to the client.
                        <ol>
                            <li>1. Sends the task to the computer's file system..</li>
                            <li>2. Waits while the file system opens and reads the file.</li>
                            <li>3. Returns the content to the client.</li>
                            <li>4. Ready to handle the next request.</li>
                           
                        </ol>
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    3. What Can Node.js Do?
                </div>
                <div className="collapse-content">
                    <ol>
                        <li>1. Node.js can generate dynamic page content</li>
                        <li>2. Node.js can create, open, read, write, delete, and close files on the server</li>
                        <li>3. Node.js can collect form data</li>
                        <li>4. Node.js can add, delete, modify data in your database</li>
                    </ol>
                </div>
            </div>

            
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    4. What is a Node.js File?
                </div>
                <div className="collapse-content">
                    <ul>
                        <li>1. Node.js files contain tasks that will be executed on certain events</li>
                        <li>2. A typical event is someone trying to access a port on the server</li>
                        <li>3. Node.js files must be initiated on the server before having any effect</li>
                        <li>4. Node.js files have extension ".js"</li>
                    </ul>
                </div>
            </div>


            
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    4. What is React Js?
                </div>
                <div className="collapse-content">
                    <p>The React.js framework is an open-source JavaScript framework and library developed by Facebook. It’s used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.</p>
                </div>
            </div>


            
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    5. A Brief History of React.js?
                </div>
                <div className="collapse-content">
                    <p>Back in 2011, Facebook had a massive user base and faced a challenging task. It wanted to offer users a richer user experience by building a more dynamic and more responsive user interface that was fast and highly performant. Jordan Walke, one of Facebook’s software engineers, created React to do just that. React simplified the development process by providing a more organized and structured way of building dynamic and interactive user interfaces with reusable components. Facebook’s newsfeed used it first. Due to its revolutionary approach to DOM manipulation and user interfaces, React dramatically changed Facebook’s approach to web development and quickly became popular in JavaScript’s ecosystem after its release to the open-source community.</p>
                </div>
            </div>


            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    6. What is Node? How does Node work?
                </div>
                <div className="collapse-content">
                    <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

                        Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
                </div>
            </div>


        </div>
    );
};

export default Faq;