import React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table'; // Assuming you're using ShadCN's table components
import { CompanyDataType } from '../api/companyApi';

interface CompanyDataProps {
  data: CompanyDataType;
}

const CompanyData: React.FC<CompanyDataProps> = ({ data }) => {
  return (
    <div className="bg-background text-foreground w-full max-w-lg mx-auto p-5 m-5 shadow-lg rounded-lg">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INN</TableCell>
            <TableCell>{data.INN || 'Not available'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Registering Authority</TableCell>
            <TableCell>{data['Registering Authority'] || 'Not available'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Registration Date</TableCell>
            <TableCell>{data['Registration Date'] || 'Not available'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Registration Number</TableCell>
            <TableCell>{data['Registration Number'] || 'Not available'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Company Name</TableCell>
            <TableCell>{data['Company Name'] || 'Not available'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Legal Form Code</TableCell>
            <TableCell>{data['Legal Form Code'] || 'Not available'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Activity Code</TableCell>
            <TableCell>{data['Activity Code'] || 'Not available'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">DBIBT Code</TableCell>
            <TableCell>{data['DBIBT Code'] || 'Not available'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Small Business Status</TableCell>
            <TableCell>{data['Small Business Status'] || 'Not available'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Active Status</TableCell>
            <TableCell>{data['Active Status'] || 'Not available'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Charter Fund</TableCell>
            <TableCell>{data['Charter Fund'] || 'Not available'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Email</TableCell>
            <TableCell>{data.Email || 'Not available'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Phone Numbers</TableCell>
            <TableCell>{data['Phone Numbers'] || 'Not available'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">SOATO Code</TableCell>
            <TableCell>{data['SOATO Code'] || 'Not available'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Address</TableCell>
            <TableCell>{data.Address || 'Not available'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Leader</TableCell>
            <TableCell>{data.Leader || 'Not available'}</TableCell>
          </TableRow>
          
          {/* Displaying Shareholders row by row */}
          {data.Shareholders && data.Shareholders.length > 0 ? (
            data.Shareholders.split(', ').map((shareholder, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">Shareholders</TableCell>
                <TableCell>{shareholder}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="font-medium">Shareholders</TableCell>
              <TableCell>Not available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompanyData;
