import React, { useState } from 'react';
import axios from 'axios';  // Import axios for API requests
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from '@/components/ui/table';

// Define the structure of the company data
interface CompanyDataType {
  okpo: string;
  companyData?: {
    generalInfo?: {
      'Company Name'?: string;
      'INN'?: string;
      'Registration Date'?: string;
      'Active Status'?: string;
      'Charter Fund'?: string;
    };
    contactInfo?: {
      'Phone Numbers'?: string;
      'SOATO Code'?: string;
      'Address'?: string;
    };
    managementInfo?: {
      'Leader'?: string;
    };
    shareholders?: string[]; // Array of shareholder info in the form "Name (Percentage)"
  };
  error?: string;
}

// Main component for handling file uploads
const CompanyUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [companyData, setCompanyData] = useState<CompanyDataType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  // Handle form submission and file upload using axios
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file before submitting');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      setError(null);

      // Use axios for the file upload
      const response = await axios.post('https://stat-express-backend.vercel.app/api/excel/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const result = response.data;
      if (result.success) {
        setCompanyData(result.data);
      } else {
        setError(result.message || 'Failed to upload file');
      }
    } catch (err) {
      setError('An error occurred while uploading the file');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 m-5 shadow-lg rounded-lg max-w-xxl mx-auto bg-white">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label htmlFor="file" className="font-medium">
          Please Upload Excel File
        </label>
        <Input
          type="file"
          id="file"
          accept=".xlsx, .xls"
          onChange={handleFileChange}
          className="p-2 border border-gray-300 rounded-md"
        />
        <Button type="submit" variant="default" disabled={loading || !file}>
          {loading ? 'Uploading...' : 'Upload and Get Data'}
        </Button>
      </form>

      {error && <p className="text-red-500 mt-3">{error}</p>}

      {companyData.length > 0 && (
        <Table className="w-full mt-5">
          <TableCaption>Results from uploaded Excel file.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>OKPO</TableHead>
              <TableHead>Company Name</TableHead>
              <TableHead>INN</TableHead>
              <TableHead>Registration Date</TableHead>
              <TableHead>Active Status</TableHead>
              <TableHead>Charter Fund</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>SOATO Code</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Leader</TableHead>
              <TableHead>Shareholders</TableHead> {/* Added Shareholders column */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {companyData.map((company, index) => (
              <TableRow key={index}>
                <TableCell>{company.okpo}</TableCell>
                <TableCell>{company.companyData?.generalInfo?.['Company Name'] || 'N/A'}</TableCell>
                <TableCell>{company.companyData?.generalInfo?.['INN'] || 'N/A'}</TableCell>
                <TableCell>{company.companyData?.generalInfo?.['Registration Date'] || 'N/A'}</TableCell>
                <TableCell>{company.companyData?.generalInfo?.['Active Status'] || 'N/A'}</TableCell>
                <TableCell>{company.companyData?.generalInfo?.['Charter Fund'] || 'N/A'}</TableCell>
                <TableCell>{company.companyData?.contactInfo?.['Phone Numbers'] || 'N/A'}</TableCell>
                <TableCell>{company.companyData?.contactInfo?.['SOATO Code'] || 'N/A'}</TableCell>
                <TableCell>{company.companyData?.contactInfo?.['Address'] || 'N/A'}</TableCell>
                <TableCell>{company.companyData?.managementInfo?.['Leader'] || 'N/A'}</TableCell>
                <TableCell>
                  {company.companyData?.shareholders?.length ? company.companyData.shareholders.join(', ') : 'N/A'}
                </TableCell> {/* Displaying shareholders */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default CompanyUploader;
