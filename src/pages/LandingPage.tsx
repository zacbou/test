import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';

    function LandingPage() {
      const [prompt, setPrompt] = useState<string>('');
      const [file, setFile] = useState<File | null>(null);
      const navigate = useNavigate();

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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
              onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            />
            <button type="submit">Generate</button>
          </form>
        </div>
      );
    }

    export default LandingPage;
