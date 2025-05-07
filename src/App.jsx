import { useState } from 'react';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Description from './components/Description/Description';

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((item) => ({
      ...item,
      [feedbackType]: item[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <div>
        <Description />
      </div>
      <div>
        <Options clickButton={updateFeedback} totalFeedback={totalFeedback} />
      </div>
      <div>
        <Feedback feedback={feedback} />
      </div>
    </>
  );
}
