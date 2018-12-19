import React from "react";
import Proptypes from "prop-types";

const Titlebar=({title})=>(
    <div className='titlebar'>
    <h1 className='titlebar--title'>{title}</h1>
    </div>
)

Titlebar.propTypes={
    title: Proptypes.string.isRequired
};

export default Titlebar;