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
            <TableCell>{data.INN}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Registering Authority</TableCell>
            <TableCell>{data['Registering Authority']}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Registration Date</TableCell>
            <TableCell>{data['Registration Date']}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Registration Number</TableCell>
            <TableCell>{data['Registration Number']}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Company Name</TableCell>
            <TableCell>{data['Company Name']}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Legal Form Code</TableCell>
            <TableCell>{data['Legal Form Code']}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Activity Code</TableCell>
            <TableCell>{data['Activity Code']}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">DBIBT Code</TableCell>
            <TableCell>{data['DBIBT Code']}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Small Business Status</TableCell>
            <TableCell>{data['Small Business Status']}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Active Status</TableCell>
            <TableCell>{data['Active Status']}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Charter Fund</TableCell>
            <TableCell>{data['Charter Fund']}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Email</TableCell>
            <TableCell>{data.Email || 'Not available'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Phone Numbers</TableCell>
            <TableCell>{data['Phone Numbers']}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">SOATO Code</TableCell>
            <TableCell>{data['SOATO Code']}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Address</TableCell>
            <TableCell>{data.Address}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Leader</TableCell>
            <TableCell>{data.Leader}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Founders</TableCell>
            <TableCell>{data.Founders}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CompanyData;
