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
  try {
    const response = await axios.post('https://stat-express-backend.vercel.app/api/company', 
      { okpo },
      { withCredentials: true }  // Allow cookies if necessary
    );  
    return response.data.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('An error occurred while fetching company data. Please try again.');
    }
  }
};
