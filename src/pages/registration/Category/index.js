import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import '../registration.css';

function CategoryRegistration() {
  const InitialValues = {
    name: '',
    description: '',
    color: '',
  };
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(InitialValues);

  function setValue(k, val) {
    setValues({
      ...values,
      [k]: val,
    });
  }

  function handleChange(EventInfos) {
    setValue(
      EventInfos.target.getAttribute('name'),
      EventInfos.target.value,
    );
  }

  // ============

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categories';
      fetch(URL)
        .then(async (serverAnswer) => {
          if (serverAnswer.ok) {
            const answer = await serverAnswer.json();
            setCategories(answer);
            return;
          }
          throw new Error('Could not get data');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Category registration:
        {values.name}
      </h1>
      
      <form onSubmit={function handleSubmit(EventInfos) {
        EventInfos.preventDefault();

        setCategories([
          ...categories,
          values,
        ]);

        setValues(InitialValues);
      }}
      >

        <FormField
          label="Category name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Description"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        {}

        <FormField
          label="Color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
        {}

        <button type="submit" className="buttomRegistration">
          Register
        </button>
      </form>

      <Link to="/registration/video" className="linkChange">
        Video registration
      </Link>
      <Link to="/" className="linkHome">
        Go to home
      </Link>
    </PageDefault>
  );
}

export default CategoryRegistration;
