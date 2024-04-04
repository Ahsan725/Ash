import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Interest() {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete', {
        params: {
          q: keyword,
          region: 'US'
        },
        headers: {
          'X-RapidAPI-Key': 'RAPID API KEY',
          'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      });
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (keyword !== '') {
      fetchData();
    }
  }, [keyword]);

  return (
      <div className="overflow-x-auto text-slate-400 m-8">
          <h3 className='text-xl text-slate-400 font-extrabold text-center'>Stock Ticker Symbol Search</h3>
      <input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="input input-bordered input-primary w-full max-w-xs m-2"
      />
      <table className="table">
        <thead>
          <tr className='text-primary text-lg'>
            <th></th>
            <th>Exchange</th>
            <th>Symbol</th>
            <th>Short Name</th>
            <th>Type</th>
            <th>Sector</th>
            <th>Industry</th>
          </tr>
        </thead>
        <tbody>
          {data?.quotes.map((quote, index) => (
            <tr key={index} className='hover'>
              <th>{index + 1}</th>
              <td>{quote.exchange}</td>
              <td>{quote.symbol}</td>
              <td>{quote.shortname}</td>
              <td>{quote.quoteType}</td>
              <td>{quote.sector}</td>
              <td>{quote.industry}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Interest;
