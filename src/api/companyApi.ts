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
  Shareholders: string;
}

// Fetch company data from the backend API
export const fetchCompanyData = async (okpo: string): Promise<CompanyDataType> => {
  try {
    const response = await axios.post('https://stat-express-backend.vercel.app/api/company', { okpo });
    return response.data.data;
  } catch (error: any) {
    console.error('Error fetching company data:', error);

    if (error.response) {
      // The request was made, and the server responded with a status code outside the 2xx range
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error('Request data:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error message:', error.message);
    }

    throw new Error('An error occurred while fetching company data.');
  }
};
