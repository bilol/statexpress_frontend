import axios from 'axios';

export interface CompanyDataType {
  INN: string;
  'Registering Authority': string;
  'Registration Date': string;
  'Registration Number': string;
  'Company Name': string;
  'Legal Form Code': string;
  'Activity Code': string;
  'DBIBT Code': string;
  'Small Business Status': string;
  'Active Status': string;
  'Charter Fund': string;
  'Email': string;
  'Phone Numbers': string;
  'SOATO Code': string;
  'Address': string;
  'Leader': string;
  Founders: string;
}

// Fetch company data from the backend API
export const fetchCompanyData = async (okpo: string): Promise<CompanyDataType> => {
  const response = await axios.post('/api/company', { okpo });
  return response.data.data;
};
