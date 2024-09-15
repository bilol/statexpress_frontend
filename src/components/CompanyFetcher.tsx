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
      // Set the error message based on the error response
      const message =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : 'Failed to fetch company data. Please try again.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <CompanyForm onSubmit={handleFetchCompanyData} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && companyData && <CompanyData data={companyData} />}
    </div>
  );
};

export default CompanyFetcher;
