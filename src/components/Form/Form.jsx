import React from 'react';
import { RadioButton } from './RadioButton.jsx';
import { RadioButtonGroup } from './RadioButtonGroup.jsx';
import { useUrl, useBody, useHandleSubmit, useHandleChange } from '../../hooks/APIClientProvider';
import styles from './Form.css';
import buttonStyle from '../../css/button.css';

const Form = () => {
  const url = useUrl();
  const body = useBody();
  const handleSubmit = useHandleSubmit();
  const handleChange = useHandleChange();

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <div>
        <h2>Request</h2>
      </div>
      <div>
        <input
          type="text"
          name="url"
          value={url}
          onChange={handleChange}
          placeholder="URL" 
        />
        <button className={buttonStyle.tealButton}>Send!</button>
      </div>
      <section>
        <RadioButtonGroup name="method" >
          <RadioButton value="get" />
          <RadioButton value="post" />
          <RadioButton value="put" />
          <RadioButton value="patch" />
          <RadioButton value="delete" />
        </RadioButtonGroup>
      </section>
      <textarea
        type="text"
        name="body"
        value={body}
        onChange={handleChange}
        placeholder="Raw JSON Body" 
      />
    </form>
  );
};

export default Form;
