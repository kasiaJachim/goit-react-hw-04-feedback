import { Component } from 'react';
import { Feedback } from './FeedbackOptions.jsx/FeedbackOptions';
import { Statistics } from './Statistics.jsx/Statistics';
import React from 'react';
import { Notification } from './Notification.jsx/Notification';
import { Section } from './Section.jsx/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    return this.state.good + this.state.bad + this.state.neutral;
  }
  countPositiveFeddbackPercentage() {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.floor((this.state.good / total) * 100);
  }
  onLeaveFeedback = option => {
    this.setState(prevSate => {
      return {
        ...prevSate,
        [option]: prevSate[option] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave Feedback">
          <Feedback options={options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        {total > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeddbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
