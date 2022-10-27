import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto my-12'>
            <h1 className='text-3xl text-center mb-4'>This is <span className='text-blue-400'>Question</span> & <span className='text-green-600'>Answer</span> Part</h1>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    1. what is cors?
                </div>
                <div className="collapse-content">
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    2. Why are you using firebase? What other options do you have to implement authentication?
                </div>
                <div className="collapse-content">
                    <p>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
                        <ol>
                            <li>1. STYTCH.</li>
                            <li>2. Ory.</li>
                            <li>3. Supabase.</li>
                            <li>4. Okta.</li>
                            <li>5. PingIdentity.</li>
                            <li>6. Keycloak.</li>
                            <li>7. Frontegg.</li>
                            <li>8. Authress.</li>
                        </ol>
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    3. How does the private route work?
                </div>
                <div className="collapse-content">
                    <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                </div>
            </div>


            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    4. What is Node? How does Node work?
                </div>
                <div className="collapse-content">
                    <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

                        Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
                </div>
            </div>


        </div>
    );
};

export default Blog;