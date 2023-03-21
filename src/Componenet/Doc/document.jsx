import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const MyDocument = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber ] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="../../../public/2212.08011.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default MyDocument;