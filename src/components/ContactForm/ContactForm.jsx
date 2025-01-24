import { ErrorMessage, Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useId } from 'react';
import * as Yup from 'yup';

import css from './ContactForm.module.css';

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.contactForm}>
          <div className={css.groupForm}>
            <label htmlFor={nameFieldId} className={css.labelForm}>
              Name
            </label>
            <Field
              type="text"
              name="name"
              id={nameFieldId}
              className={css.inputForm}
            ></Field>
            <ErrorMessage
              name="name"
              component="span"
              className={css.errorMessage}
            />
          </div>

          <div className={css.groupForm}>
            <label htmlFor={numberFieldId} className={css.labelForm}>
              Number
            </label>
            <Field
              type="text"
              name="number"
              id={numberFieldId}
              className={css.inputForm}
            ></Field>
            <ErrorMessage
              name="number"
              component="span"
              className={css.errorMessage}
            />
          </div>

          <button type="submit" className={css.buttonForm}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
