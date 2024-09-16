import React, { useState } from 'react';
import { fetchCompanyData, CompanyDataType } from '../api/companyApi';
import CompanyForm from './CompanyForm';
import CompanyData from './CompanyData';

const CompanyFetcher: React.FC = () => {
  const [companyData, setCompanyData] = useState<CompanyDataType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handler to fetch company data by OKPO
  const handleFetchCompanyData = async (okpo: string) => {
    setLoading(true);
    setError(null);
    setCompanyData(null);

    try {
      const data = await fetchCompanyData(okpo);
      setCompanyData(data);
    } catch (err: any) {
      // Check if the error has a response object (axios errors)
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else if (err.message) {
        // Generic error message if there's no response
        setError(err.message);
      } else {
        // Fallback error message
        setError('Failed to fetch company data. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="company-fetcher">
      <CompanyForm onSubmit={handleFetchCompanyData} />
      
      {loading && <p>Loading...</p>}
      {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
      
      {!loading && !error && companyData && (
        <CompanyData data={companyData} />
      )}
    </div>
  );
};

export default CompanyFetcher;
