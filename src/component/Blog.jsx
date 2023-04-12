import React from 'react';

const Blog = () => {
    return (
        <div className='mx-20 '>
            <p className='bg-gray-100 my-6 p-6'><span className='title'>Context api : </span> Context is primarily used when some data needs to be accessible by many components at different nesting levels. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
            <p className='bg-gray-100 my-6 p-6'>
             <span className='title'>Custom hook : </span> A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. A custom hook does not require a specific signature. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
            </p>
            <p className='bg-gray-100 my-6 p-6'><span className='title'>use memo : </span>
             React's useMemo is a hook, which is used in functional components.  It is a memory optimization tool that can cause problems in empty components such as functional components making multiple calls to the same function or object.
            Typically, persistent data is computed through the useMemo function, the output of a function is caught, and its output is stored in memory.  When the same function is called again, if the input has not changed, the output of useMemo is retrieved from memory.  If the input changes, the function is called again and the new output is stored in memory.
            </p>
            <p className='bg-gray-100 my-6 p-6'><span className='title'>useRef : </span>
             React useRef is a hook function that sets a reference variable within a stateful function or component.  It is used to reference any element on the screen or any JavaScript value.  Since the reference variable doesn't change during the component's lifecycle or when the component is rendered, we can store this variable permanently and change it anytime within the component.
            Generally useRef is an object and using it we can set reference to state or property of component or any element.  Instead it doesn't need to be rendered anew and uses it as a local variable of the current component
            </p>
        </div>
    );
};

export default Blog;