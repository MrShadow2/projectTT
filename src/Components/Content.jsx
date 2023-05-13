import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sample from './Sample';

const Content = () => {
  const [data, setData] = useState('');
  const [wordCounts, setWordCounts] = useState([]);
  const [mostOccurringWords, setMostOccurringWords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://www.terriblytinytales.com/test.txt')
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError('Error loading data');
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (data) {
      const words = data.split(/\s+/); // split text into array of words
      const counts = {};
  
      // count the occurrence of each word
      words.forEach(word => {
        if (counts[word]) {
          counts[word] += 1;
        } else {
          counts[word] = 1;
        }
      });
  
      // sort the counts in descending order
      const sortedCounts = Object.entries(counts)
        .sort((a, b) => b[1] - a[1]);
  
      setWordCounts(sortedCounts);
  
      // get the 20 most occurring words with their counts
      const mostOccurring = sortedCounts.slice(0, 20).map(([word, count]) => ({ word, count }));
      setMostOccurringWords(mostOccurring);
  

    console.log(mostOccurring)
    console.log("hello")
    console.log(mostOccurring)
    }
  }, [data]);
  

  return (
    <div>
      {isLoading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          
            {/* <BChart } /> */}
            <Sample mostOccurringWords={mostOccurringWords}/>
       
        </>
      )}
    </div>
  );
};
// export const mostOccurringWords = sortedCounts.slice(0, 20).map(([word, count]) => ({ word, count }));

export default Content;

