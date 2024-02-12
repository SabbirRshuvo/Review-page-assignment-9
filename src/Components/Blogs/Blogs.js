import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='container'> 
            <div className="first-question">
                <span>What is Context API?</span>
                <p>
                The React Context API is a way for a React app to effectively produce global variables that can be passed around.
                </p>
            </div>
            <div className="second-question">
            <span>What is Semantic Tags?</span>
                <p>
                Semantic HTML tags are tags that define the meaning of the content they contain.
                </p>
            </div>
            <div className="third-question">
                <span>Difference Between Inline and Block Elements in HTML!</span>
                <p>Block elements always start from a new line. Inline elements never start from a new line. Block elements cover space from left to right as far as it can go. Inline elements only cover the space as bounded by the tags in the HTML element.</p>
            </div>
        </div>
    );
};

export default Blogs;