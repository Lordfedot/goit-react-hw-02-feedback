import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import { Section, Notification } from './Section';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const percentage = good / ((good + neutral + bad) / 100);
    if (isNaN(percentage)) {
      return 0;
    }
    return percentage.toFixed(1);
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalCount = good + neutral + bad;
    return totalCount;
  };
  handleIncrement = buttonName => {
    this.setState(prevState => ({
      [buttonName]: prevState[buttonName] + 1,
    }));
  };
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    console.log(options);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};

export default Feedback;
