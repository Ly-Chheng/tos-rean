import React from "react";
import PdfViewer from "@/Components/PdfViewer";

export default function ReadMore() {
  return (
    <div>
      <h1>PDF Viewer Test</h1>
      <PdfViewer fileUrl="https://arxiv.org/pdf/quant-ph/0410100.pdf" />
    </div>
  );
}
