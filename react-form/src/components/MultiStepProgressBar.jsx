import React from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from 'react-step-progress-bar';
import "./MultiStepProgressBar.css";

const MultiStepProgressBar = ({step}) => {
    return (
        <ProgressBar
            percent={(((step - 1) * 100) / 2)}
            filledBackground="indigo"
        >
            <Step transition="scale">
                {({ accomplished, index }) => (
                    <div className={`step ${accomplished ? "completed" : null}`}>1</div>
                )}
            </Step>
            <Step transition="scale">
                {({ accomplished, index }) => (
                    <div className={`step ${accomplished ? "completed" : null}`}>2</div>
                )}
            </Step>
            <Step transition="scale">
                {({ accomplished, index }) => (
                    <div className={`step ${accomplished ? "completed" : null}`}>3</div>
                )}
            </Step>
        </ProgressBar>
    );
}

export default MultiStepProgressBar;
