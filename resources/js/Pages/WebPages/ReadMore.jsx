import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ReadMore() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div style={{ maxWidth: 600, margin: "auto", textAlign: "center" }}>
      <h2>Test PDF Viewer</h2>
      <Document
        file="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<p>Loading PDF...</p>}
        error={<p>Failed to load PDF.</p>}
      >
        <Page pageNumber={pageNumber} />
      </Document>

      <p>
        Page {pageNumber} of {numPages || "--"}
      </p>
      <button
        disabled={pageNumber <= 1}
        onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
      >
        Previous
      </button>
      <button
        disabled={numPages === null || pageNumber >= numPages}
        onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages))}
      >
        Next
      </button>
    </div>
  );
}
