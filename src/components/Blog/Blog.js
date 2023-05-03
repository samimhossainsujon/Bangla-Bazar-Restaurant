import React, { useRef } from "react";
import ReactToPrint from "react-to-print";


const Blogs = () => {

    const ref = useRef();
    return (
        <div>
            <div className="py-6" ref={ref} >

                <div className="card w-full bg-slate-400 shadow-2xl mt-5 mb-5">
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-black"> 1. Tell us the differences between uncontrolled and controlled components.</h2>
                        <p className="mt-8 text-xl font-semibold text-black">Controlled components provide a more predictable and controlled way of managing state and user input, while uncontrolled components can be simpler to implement in certain cases. The choice between the two depends on the specific requirements of the application and the preferences of the developer</p>

                    </div>
                </div>



                <div className="card w-full bg-slate-400 shadow-2xl mt-5 mb-5">
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-black"> 2. How to validate React props using PropTypes?</h2>
                        <p className="mt-8 text-xl font-semibold text-black">PropTypes is a built-in library in React that provides a way to validate the data types of props passed into a component. It helps catch errors early in the development process and makes the code more reliable and easier to maintain. To use PropTypes, you can import the library from the 'prop-types' package and define the expected prop types for a component using the propTypes property. PropTypes provides validators for various data types such as string, number, boolean, object, array, etc., and you can also specify if a prop is required or not using the isRequired validator. By validating React props using PropTypes, you can ensure that your components receive the correct data types and avoid common errors.</p>

                    </div>
                </div>



                <div className="card w-full bg-slate-400 shadow-2xl mt-5 mb-5">
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-black">3. Tell us the difference between nodejs and express js</h2>
                        <p className="mt-8 text-xl font-semibold text-black">Node.js is a JavaScript runtime that allows developers to run JavaScript code outside of a web browser. Express.js is a web application framework built on top of Node.js that provides additional features and tools for building web applications, such as middleware and routing. While Node.js provides the underlying runtime environment, Express.js provides the structure and functionality for building web applications on top of Node.js.</p>

                    </div>
                </div>


                <div className="card w-full bg-slate-400 shadow-2xl mt-5 mb-5">
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-black"> 4. What is a custom hook, and why will you create a custom hook?</h2>
                        <p className="mt-8 text-xl font-semibold text-black">In React, a custom hook is a JavaScript function that starts with the prefix "use" and allows you to reuse stateful logic across different components. You can create a custom hook when you need to share logic between multiple components that are not related by the parent-child relationship. By encapsulating the shared logic in a custom hook, you can improve the readability and maintainability of your code, and avoid duplicating code in multiple components. Custom hooks allow you to abstract away complex logic and create reusable pieces of code that can be easily shared and tested.</p>

                    </div>
                </div>












            </div>

            <div className="mt-32">
                <ReactToPrint
                    trigger={() => (
                        <button className="btn btn-outline btn-secondary">Download PDf</button>
                    )}
                    content={() => ref.current}
                />
            </div>
        </div>

    );
};

export default Blogs;