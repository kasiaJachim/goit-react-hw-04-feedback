import  Feedback  from './FeedbackOptions.jsx/FeedbackOptions';
import  Statistics  from './Statistics.jsx/Statistics';
import React, { useState } from 'react';
import  Notification  from './Notification.jsx/Notification';
import Section from './Section.jsx/Section';

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  
  
  const countTotalFeedback = () => {
    return good +  neutral + bad;
  }
  const countPositiveFeddbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.floor((good / total) * 100);
  }
  const onLeaveFeedback = (option) => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
        case 'neutral':
          setNeutral(state => state + 1);
        break;
        case 'bad':
          setBad(state => state + 1);
        break;
      default:
        return;
   }
  };

  const total = countTotalFeedback();
  const options = ['good', 'neutral', 'bad'];
  return (
    <>
      <Section title="Please leave Feedback">
        <Feedback options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeddbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

export default App;