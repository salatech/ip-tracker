import React from 'react';

const IPDetails = ({ ipData }) => {
  if (!ipData) return null;

  return (
    <div className="result-section">
      <div className="row">
        <div className="col-md-3 detail-item">
          <div className="detail-label">IP ADDRESS</div>
          <div className="detail-value">{ipData.ip}</div>
        </div>
        <div className="col-md-3 detail-item">
          <div className="detail-label">LOCATION</div>
          <div className="detail-value">
            {ipData.location.city}, {ipData.location.country}
          </div>
        </div>
        <div className="col-md-3 detail-item">
          <div className="detail-label">TIMEZONE</div>
          <div className="detail-value">UTC {ipData.location.timezone}</div>
        </div>
        <div className="col-md-3 detail-item">
          <div className="detail-label">ISP</div>
          <div className="detail-value">{ipData.isp}</div>
        </div>
      </div>
    </div>
  );
};

export default IPDetails; 