import React from 'react';

const Videos = () => {
  return (
    <section id="videos" className="videos">
      <div className="container">
        <h2 className="section-title">Video Samples</h2>
        <div className="video-embed">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/sample" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            title="Video Sample"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Videos;
