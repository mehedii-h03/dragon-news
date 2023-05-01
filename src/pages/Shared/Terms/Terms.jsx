import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h3>Terms and conditions</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nesciunt earum, animi quasi reiciendis temporibus dicta? Eligendi, alias eos beatae commodi inventore velit qui cumque ipsum in hic omnis quasi?</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;