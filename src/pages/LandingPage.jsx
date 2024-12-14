import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';

    function LandingPage() {
      const [prompt, setPrompt] = useState('');
      const [file, setFile] = useState(null);
      const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate processing and navigate to result page
        navigate('/result');
      };

      return (
        <div className="landing-page">
          <h1>AI Document Generator</h1>
          <form onSubmit={handleSubmit}>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here..."
            />
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }

    export default LandingPage;
