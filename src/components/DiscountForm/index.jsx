import React, { useState } from "react";
import s from "./index.module.css";
import img from './gnome111.png'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { addSale } from "../../requests/sale";


export default function DiscountForm() {

  const [resp, setResp] = useState({});

  const {register, handleSubmit, formState: { errors }, reset} = useForm({mode: "onBlur"});

  const submit = new_product_obj => {
    reset();
    addSale(new_product_obj, setResp, toast.success('5% discount has been received!'));
  };


  const numberRegexp = /^(?:\+491\d{10}|01\d{10})$/;

  const numberRegister = register('number', {
    required: '*Required field',
    pattern: {
      value: numberRegexp,
      message: '*Not a valid number format'
    }
  });


    return (
        <div className={s.wrapper}>
          <img src={img} alt="gnome" />
          <div className={s.form}>
              <h2>5% off</h2>
              <h3>on the first order</h3>
              <form onSubmit={handleSubmit(submit)}>
                <p className={s.error_text}>{errors.number?.message}</p>
                {
                  resp.status === 'OK' ? <input className={s.input} type="text" name='number' placeholder='+49' {...numberRegister} style={{ display: 'none' }}/> 
                                       : <input className={s.input} type="text" name='number' placeholder='+49' {...numberRegister}/>
                }
                <button className={s.getDiscount}>{resp.status === 'OK' ? 'Discount has been received' : 'Get a discount'}</button>
              </form>
          </div>
        </div>
    );
}



