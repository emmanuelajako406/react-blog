import React, { useState, useEffect } from 'react';
import './App.css';
import SkeletonLoader from './SkeletonLoader';
import { useParams } from 'react-router-dom';
import BlogLists from './BlogLists';

const formatTime = (dateString) => {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${formattedHours}:${formattedMinutes}${ampm} . ${month} ${year}`;
};

const BlogDetails = () => {
  const { id } = useParams();
  const [apiData, setApiData] = useState(null);
  const [authorData, setAuthorData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://techcrunch.com/wp-json/wp/v2/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setApiData(data);
        setLoading(false);
        if (data.author) {
          fetch(`https://techcrunch.com/wp-json/wp/v2/users/${data.author}`)
            .then(response => response.json())
            .then(author => {
              setAuthorData(author);
            })
            .catch(error => {
              console.error('Error fetching author data:', error);
            });
        }
      })
      .catch(error => {
        console.error('Error fetching API data:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div>
      <div className="blog-details-container">
        <div className="author-info">
          <p><strong>Author: </strong>{authorData ? authorData.name : 'Unknown'}</p>
          <p> <strong>Published: </strong>{apiData ? formatTime(apiData.date) : 'Unknown'}</p>
        </div>
        <div className="article">
          <h1 className="article-title">{apiData ? apiData.title.rendered : 'Unknown Title'}</h1>
          <img className='blog-img-header' src={apiData ? apiData.jetpack_featured_media_url : ''} alt="Featured" />
          <div className="blog-details" dangerouslySetInnerHTML={{ __html: apiData ? apiData.content.rendered : '' }} />
        </div>
      </div>
      <h4>More Articles</h4>
      <BlogLists />
    </div>
  );
}

export default BlogDetails;
