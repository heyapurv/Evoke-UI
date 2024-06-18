'use client'

import React, { useRef } from 'react';
import { useToast } from "@/components/ui/use-toast"
interface CodeSnippetProps {
  code: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code }) => {
  const codeRef = useRef<HTMLPreElement>(null);
  
  const copyToClipboard = () => {
    if (codeRef.current) {
      const range = document.createRange();
      range.selectNodeContents(codeRef.current);
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();
      }
    }

   alert('copied')
  };

  return (
    <div>
      <pre ref={codeRef} className="bg-gray-100 p-4 rounded-lg text-black dark:text-blue-600 dark:bg-black ">
        <code>{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Copy Code
      </button>
      
    </div>
  );
};

export default CodeSnippet;
