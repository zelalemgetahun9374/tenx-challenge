import Box from "@mui/material/Box";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
};

export default function Reader() {
  const file = "./JuniorDevChallenge_Feb2022Positions .pdf";

  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess(e: any) {
    setNumPages(e.numPages);
  }

  return (
    <Box
      sx={{
        overflow: "scroll",
        height: "100vh",
        minWidth: "700px",
        width: "100%",
        "& input": {
          font: "inherit",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            "& .react-pdf__Document": {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
            "& .react-pdf__Page": {
              width: "100%",
              boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
              margin: "10px",
            },
            "& .react-pdf__Page canvas": {
              width: "100%",
              height: "auto !important",
            },
            " & .react-pdf__message": {
              padding: "20px",
              color: "white",
            },
          }}
        >
          <Box>
            <Document
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
