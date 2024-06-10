import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

import styles from "../styles/components/ContactForm.module.css";

const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
    phone: '', // Add phone field
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
    phone: Yup.string().required('Phone number is required'), // Add phone validation
  });

  const handleSubmit = (values, { resetForm }) => {
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
      phone: values.phone, // Include phone number in submission data
    };

    // Replace these values with your actual service_id, template_id, and user_id (public key)
    emailjs.send('service_49vxsxu', 'template_4ae7grg', templateParams, 'sHRrQEV9ys1fVAuq0')
      .then((response) => {
        alert('Email sent successfully!');
        resetForm();
      }, (error) => {
        alert('Failed to send email. ' + error.text);
      });
  };

  return (
    <div className={styles.body}>
      <h1>Contact Us</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form} >
            <div className={styles.wrapper}>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" className={styles.customField} />
              <ErrorMessage name="name" component="div" className={styles.errorMessage}/>
            </div>

            <div className={styles.wrapper}>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" className={styles.customField} />
              <ErrorMessage name="email" component="div" className={styles.errorMessage}/>
            </div>

            <div className={styles.wrapper}>
              <label htmlFor="phone">Phone:</label>
              <Field type="tel" id="phone" name="phone" className={styles.customField} />
              <ErrorMessage name="phone" component="div" className={styles.errorMessage}/>
            </div>

            <div className={styles.wrapper}>
              <label htmlFor="message">Message:</label>
              <Field as="textarea" id="message" name="message" className={styles.MessageField}/>
              <ErrorMessage name="message" component="div" className={styles.errorMessage}/>
            </div>

            <button type="submit" className={styles.submitButton}>Submit</button>
          </Form>
        )}
      </Formik>

    </div>
  );
};

export default ContactForm;