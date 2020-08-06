import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import '../registration.css';

function VideoRegistration() {
 
  const InitialValues = {
    name: '',
    url: '',
    category: '',
  };
  const [videos, setVideos] = useState([]);
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
      const URL = 'http://localhost:8080/videos';
      fetch(URL)
        .then(async (serverAnswer) => {
          if (serverAnswer.ok) {
            const answer = await serverAnswer.json();
            setVideos(answer);
            return;
          }
          throw new Error('Could not get data');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Video registration:
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(EventInfos) {
        EventInfos.preventDefault();

        setVideos([
          ...videos,
          values,
        ]);

        setValues(InitialValues);
      }}
      >

        <FormField
          label="Video name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Category"
          type="text"
          name="category"
          value={values.category}
          onChange={handleChange}
        />  
        {}

        {}

        <button type="submit" className="buttomRegistration">
          Register
        </button>
      </form>
     
      <Link to="/registration/category" className="linkChange">
        Category registration
      </Link>
      <Link to="/" className="linkHome">
        Go to home
      </Link>
    </PageDefault>
  );
}

export default VideoRegistration;
