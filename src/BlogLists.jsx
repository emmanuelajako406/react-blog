import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './App.css';
import SkeletonLoader from './SkeletonLoader';


function convertToGMT(dateString) {
  const date = new Date(dateString);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedDate = `${formattedHours}:${formattedMinutes}${ampm} - ${month} ${year}`;
  return formattedDate;
}

const App = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=10')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.map(post => ({
          id: post.id,
          Title: post.title.rendered,
          Subtitle: post.subtitle, // Change to post.subtitle
          Time: convertToGMT(post.date),
          FeaturedMediaURL: post.jetpack_featured_media_url
        }));
        setApiData(formattedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching API data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return  <SkeletonLoader />;
  }

  return (
    <div>
      {apiData && (
        <>
          <div className="blog-card">
            <img className="blog-card-image" src={apiData[0].FeaturedMediaURL} alt="Blog post image" />
            <div className="blog-card-details">
              <h2 className="blog-card-title">{apiData[0].Title}</h2>
              <p className="blog-card-subtitle">{apiData[0].Subtitle}</p>
              <p className="blog-card-date">{apiData[0].Time}</p>
              <Link to={`/blogs/${apiData[0].id}`} className="blog-card-button">Read More</Link>
            </div>
          </div>
          <div className="row-blog-cards">
            {apiData.slice(1).map(post => (
              <div key={post.id} className="row-blog-card">
                <img src={post.FeaturedMediaURL} alt="Blog post image" />
                <div className="content">
                  <h3>{post.Title}</h3>
                  <p className="subtitle">{post.Subtitle}</p>
                  <div className="info">
                    <span className="date">{post.Time}</span>
                    <Link to={`/blogs/${post.id}`} className="read-more">Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
