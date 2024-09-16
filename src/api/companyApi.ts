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

// Fetch company data using GET request with User-Agent as a parameter
export const fetchCompanyData = async (okpo: string): Promise<CompanyDataType> => {
  const userAgent = navigator.userAgent;  // Get the User-Agent from the browser

  const response = await axios.get(
    'http://stat-express-backend.vercel.app/api/company',
    {
      params: { okpo },  // Send the OKPO as a query parameter
      headers: {
        'User-Agent': userAgent,  // Send User-Agent in headers
      },
    }
  );

  return response.data.data;
};
