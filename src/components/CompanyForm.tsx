import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface CompanyFormProps {
  onSubmit: (okpo: string) => void;
}

// Reusable InputWithButton component for OKPO
export function InputWithButton({
  okpo,
  setOkpo,
  handleSubmit,
}: {
  okpo: string;
  setOkpo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg items-center space-x-2">
      <Input
        type="text"
        value={okpo}
        onChange={(e) => setOkpo(e.target.value)}
        placeholder="OKPO"
        required
      />
      <Button>Get Data</Button>
    </form>
  );
}

// Main form component
const CompanyForm: React.FC<CompanyFormProps> = ({ onSubmit }) => {
  const [okpo, setOkpo] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (okpo.trim()) {
      onSubmit(okpo);
    }
  };

  return (
    <div className="p-5 m-5 shadow-lg rounded-lg max-w-lg mx-auto">
      <InputWithButton okpo={okpo} setOkpo={setOkpo} handleSubmit={handleSubmit} />
    </div>
  );
};

export default CompanyForm;
