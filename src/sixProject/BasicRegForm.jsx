import React, {useState} from 'react';
import './regForm.scss'

const BasicRegForm = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleFirstNameInputChange = (event) => {
        setValues({...values, firstName: event.target.value})
    };
    const handleLastNameInputChange = (event) => {
        setValues({...values, lastName: event.target.value})
    };
    const handleEmailInputChange = (event) => {
        setValues({...values, email: event.target.value})
    };

    const handleSubmitted = (event) => {
        event.preventDefault()
        if (values.firstName && values.lastName && values.email){
            setValid(true)
        }
        setSubmitted(true)
    };

    return (
        <div className='basic-form-container'>
            <form className='reg-form' onSubmit={handleSubmitted}>
                {submitted && valid ? <div className="success-msg">Success! You enter valid values!</div> : null}
                <div className="input-block">
                    <input
                        onChange={handleFirstNameInputChange}
                        type="text"
                        value={values.firstName}
                        className='form-field'
                        placeholder='First Name'
                        name='firstName'/>
                    {submitted && !values.firstName ? <span className='err-msg'>Please enter Your first name</span> : null}
                    <input
                        onChange={handleLastNameInputChange}
                        type="text"
                        value={values.lastName}
                        className='form-field'
                        placeholder='Last Name'
                        name='lastName'/>
                    {submitted && !values.lastName ? <span className='err-msg'>Please enter Your last name</span> : null}
                    <input
                        onChange={handleEmailInputChange}
                        type="email"
                        value={values.email}
                        className='form-field'
                        placeholder='Email'
                        name='email'/>
                    {submitted && !values.email ?<span className='err-msg'>Please enter Your email address</span> : null}
                </div>
                <button type='submit' className='submit-btn'>Submit form</button>
            </form>
        </div>
    );
};

export default BasicRegForm;
