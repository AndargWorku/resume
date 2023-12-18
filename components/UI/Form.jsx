import React,{useRef} from "react";
import classes from "../../styles/form.module.css";

import emailjs from '@emailjs/browser';
const Form = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
     e.preventDefault();
  
     emailjs.sendForm('service_zrhxt3g', 'template_221ffco', form.current, '0MuITMuotm1mFEvv1')
     e.target.reset()
    };
  return (
    <form  ref={form} onSubmit={sendEmail} className={`${classes.form}`}  >
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Your Name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder="Email Address" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} placeholder="Message" required />
      </div>

      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;



