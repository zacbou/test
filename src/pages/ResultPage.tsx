import React from 'react';

    function ResultPage() {
      return (
        <div className="result-page">
          <h1>Generated Document</h1>
          <div className="resume">
            <h2>John Doe</h2>
            <p>Email: johndoe@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <h3>Experience</h3>
            <ul>
              <li>Software Engineer at XYZ Corp</li>
              <li>Frontend Developer at ABC Inc</li>
            </ul>
            <h3>Education</h3>
            <ul>
              <li>Bachelor of Science in Computer Science</li>
            </ul>
          </div>
        </div>
      );
    }

    export default ResultPage;
