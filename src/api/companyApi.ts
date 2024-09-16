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

// Fetch company data from the backend API with User-Agent
export const fetchCompanyData = async (okpo: string): Promise<CompanyDataType> => {
  const userAgent = navigator.userAgent;  // Get the User-Agent from the browser

  const response = await axios.post(
    'http://stat-express-backend.vercel.app/api/company',
    { okpo },
    {
      headers: {
        'User-Agent': userAgent,  // Pass the User-Agent in the headers
      },
    }
  );

  return response.data.data;
};
