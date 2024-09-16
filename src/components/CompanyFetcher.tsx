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
    setError(null); // Reset the error state when starting a new request
    setCompanyData(null); // Reset the company data before fetching

    try {
      const data = await fetchCompanyData(okpo); // Fetch data from API
      setCompanyData(data); // Set the fetched company data
    } catch (err: any) {
      // Check if the error has a response object (likely from axios)
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message); // Set error message from response
      } else if (err.message) {
        setError(err.message); // Fallback to generic error message
      } else {
        setError('Failed to fetch company data. Please try again.'); // Fallback in case of unknown errors
      }
    } finally {
      setLoading(false); // Stop the loading state when request is finished
    }
  };

  return (
    <div className="company-fetcher">
      {/* Company form to input OKPO and trigger the data fetch */}
      <CompanyForm onSubmit={handleFetchCompanyData} />

      {/* Show loading state */}
      {loading && <p>Loading...</p>}

      {/* Show error message if there is one */}
      {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}

      {/* Show company data once it's loaded and there are no errors */}
      {!loading && !error && companyData && (
        <CompanyData data={companyData} />
      )}
    </div>
  );
};

export default CompanyFetcher;
