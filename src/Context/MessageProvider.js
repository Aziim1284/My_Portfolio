import React, { useState } from 'react';
import MessageContext from './MessageContext';
import { Envs } from '../ENVS/Envs';
import { API, MESSAGE } from '../appConstant';

 const MessageProvider = ({ children }) => {
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const submitForm = async (formData, endpoint) => {
    try {
      const response = await fetch(`${Envs.deploymentUrl}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmissionStatus('success');
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <MessageContext.Provider value={{ submitForm, submissionStatus }}>
      {children}
    </MessageContext.Provider>
  );
};
export default MessageProvider