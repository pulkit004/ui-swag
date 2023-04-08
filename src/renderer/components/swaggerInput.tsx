import { FormEvent, useState } from 'react';

type SwaggerInputProps = {
  onConvert: (json: Record<string, unknown>) => void;
};

const SwaggerInput = ({ onConvert }: SwaggerInputProps) => {
  const [swaggerText, setSwaggerText] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const swaggerJson = JSON.parse(swaggerText) as Record<string, unknown>;
    onConvert(swaggerJson);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <textarea
        id="swagger"
        name="swagger"
        rows={10}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="Enter Swagger/OpenAPI schema"
        value={swaggerText}
        onChange={(e) => setSwaggerText(e.target.value)}
      />
      <button
        type="submit"
        className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Convert
      </button>
    </form>
  );
};

export default SwaggerInput;
