import React, { createContext, useContext } from 'react';

const MessageContext = createContext();

export const useMessage = () => {
  return useContext(MessageContext);
};

export default MessageContext;
