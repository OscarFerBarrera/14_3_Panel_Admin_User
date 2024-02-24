import './RegisterForm.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

const RegisterForm = () => {

  // const {register, handleSubmit, watch, formState: { errors }, } = useForm();
  const {register, handleSubmit,formState: { errors }, } = useForm();
  const [formData, setFormData] = React.useState(null);

  const onSubmit = (data) => setFormData(data);
  const { formatMessage } = useIntl();

  const prueba = () => {
    console.log(errors)
  }
  return (
    <div className='register-form'>
      <form onSubmit={handleSubmit(onSubmit)}>

        <fieldset className='register-form__fieldset'>
          <label><FormattedMessage id='createUserPage.name' /></label>
          <input placeholder={formatMessage({ id: 'createUserPage.name' })} type='text' {...register('name', { required: true })} />
          {errors?.name && (
            <p className='register-form__error'>
              <FormattedMessage id='createUserPage.required' />
            </p>
          )}
        </fieldset>

        <fieldset className='register-form__fieldset'>
          <label><FormattedMessage id='createUserPage.username' /></label>
          <input placeholder={formatMessage({ id: 'createUserPage.username' })} type='text' {...register('userName', { required: true, minLength: 3 })} />
          {errors?.userName && (
            <p className='register-form__error'>
              <FormattedMessage id='createUserPage.required' />
            </p>
          )}
        </fieldset>

        <fieldset className='register-form__fieldset'>
          <label><FormattedMessage id='createUserPage.email' /></label>
          <input placeholder={formatMessage({ id: 'createUserPage.email' })} type='text' {...register('email', { required: true, minLength: 3 })} />
          {errors?.email && (
            <p className='register-form__error'>
              <FormattedMessage id='createUserPage.required' />
            </p>
          )}
        </fieldset>

        <fieldset className='register-form__fieldset'>
          <label><FormattedMessage id='createUserPage.phone' /></label>
          <input placeholder={formatMessage({ id: 'createUserPage.phone' })} type='number' {...register('phone', { required: true, minLength: 6 })} />
          {errors?.phone && (
            <p className='register-form__error'>
              <FormattedMessage id='createUserPage.required' />
            </p>
          )}
        </fieldset>

        <fieldset className='register-form__fieldset'>
        <label><FormattedMessage id='createUserPage.website' /></label>
          <input placeholder={formatMessage({ id: 'createUserPage.website' })} type='email' {...register('website', { required: true, minLength: 3 })} />
          {errors?.website && (
            <p className='register-form__error'>
              <FormattedMessage id='createUserPage.required' />
            </p>
          )}
        </fieldset>

        <button type='submit' onClick={() => prueba()} ><FormattedMessage id='createUserPage.submitButton' /></button>

      </form>

      {/* <h2>Datos del formulario:</h2>
      <p>First name: {formData?.name}</p>
      <p>Last name: {formData?.userName}</p>

      <h2>Datos del formulario en "caliente":</h2>
      <p>First name: {watch('name')}</p>
      <p>Last name: {watch('userName')}</p> */}

    </div>
  );
};

export default RegisterForm;
