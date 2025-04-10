import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import IPDetails from './components/IPDetails';
import Map from './components/Map';
import Loader from './components/Loader';

function App() {
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_IPIFY_API_KEY;

  const fetchIpData = useCallback(async (ip) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${API_KEY}&ipAddress=${ip}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch IP data');
      }
      
      const data = await response.json();
      setIpData(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching IP data:', err);
    } finally {
      setLoading(false);
    }
  }, [API_KEY]);

  const getUserIp = useCallback(async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      if (!response.ok) {
        throw new Error('Failed to fetch user IP');
      }
      const data = await response.json();
      fetchIpData(data.ip);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching user IP:', err);
      setLoading(false);
    }
  }, [fetchIpData]);

  useEffect(() => {
    getUserIp();
  }, [getUserIp]);

  const handleSearch = (searchTerm) => {
    fetchIpData(searchTerm);
  };

  return (
    <div className="App">
      <header>
        <h1>IP Address Tracker</h1>
        <SearchBar onSearch={handleSearch} />
      </header>

      {loading && <Loader />}
      {error && <div className="error">{error}</div>}
      
      {ipData && (
        <>
          <IPDetails ipData={ipData} />
          <Map lat={ipData.location.lat} lng={ipData.location.lng} />
        </>
      )}

      <footer>
        <div className="attribution">
          salatech &copy; 2022
        </div>
      </footer>
    </div>
  );
}

export default App; 