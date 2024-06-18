import React from 'react';
import CodeSnippet from '../../../components/CodeSnippet';

const sampleCode = `
import React from 'react';

const SimpleComponent = () => {
  return (
    <div>
      <p>This is a simple component.</p>
    </div>
  );
};

export default SimpleComponent;
`;

const ComponentDisplay: React.FC = () => {
  return (
    <div className="md:p-4 md:w-full md:mx-10 md:my-5 border mx-5 border-gray-300 rounded-lg ">
      <h2 className="text-2xl font-bold mb-4">SimpleComponent</h2>
      <div className="mb-4 p-5">
        <h3 className="text-xl mb-2">Preview:</h3>
        <SimpleComponent />
      </div>
      <div className='my-10 scroll p-2'>
        <CodeSnippet code={sampleCode} />
      </div>
    </div>
  );
};

const SimpleComponent: React.FC = () => {
  return (
    <div>
      <p>This is a simple component.</p>
    </div>
  );
};

export default ComponentDisplay;
