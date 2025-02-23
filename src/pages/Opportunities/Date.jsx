import React, { useState, useEffect } from "react";
import styled from "styled-components";

const DateTimeWrapper = styled.div`
  font-size: 1.5rem;
  color: #4a90e2;
  background: #f0f0f0;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const formatDateTime = (date) => {
  const options = { 
    year: 'numeric', month: 'long', day: 'numeric', 
    hour: 'numeric', minute: 'numeric', second: 'numeric', 
    hour12: true 
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const DateTime = () => {
  const [dateTime, setDateTime] = useState(formatDateTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(formatDateTime(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <DateTimeWrapper>
      {dateTime}
    </DateTimeWrapper>
  );
};

export default DateTime;
