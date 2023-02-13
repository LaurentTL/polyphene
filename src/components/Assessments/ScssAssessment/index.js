import React  from 'react';
import CheckerBoard from './CheckerBoard';

export default function ScssAssessment() {
  return (
    <div className="grid grid-cols-1 divide-y divide-none text-left">
      <h3 className="font-medium leading-tight text-3xl m-2 text-blue-600 w-fit">
        1. Styling
      </h3>
      <p className="subpixel-antialiased w-fit m-2">
        In this first test we will try out your skills in styling elements.
      </p>
      <p className="subpixel-antialiased w-fit m-2">
        Your goal is to reproduce the checkerboard presented in the picture below with HTML elements, and
        SCSS or Tailwind styling. <span className="font-bold">Before starting your work, please refer
        to the README for more detailed directions!</span>
      </p>
      <img src="/images/styling-test.png" alt="styling-test" />
      <br />
      <CheckerBoard />
    </div>
  );
}
