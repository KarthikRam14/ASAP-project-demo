// PDFToImage.js
import React, { useEffect, useRef, useState } from 'react';
import { Document, Page, pdf, Text } from '@react-pdf/renderer';

const PDFToImage = ({ data }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const generatePDF = async () => {
      const pdfData = (
        <Document>
          <Page size="A4">
            <Text>{data.name}</Text>
            <Text>{`Quantity: ${data.quantity}`}</Text>
            <Text>{`Total: ${data.total}`}</Text>
          </Page>
        </Document>
      );

      const pdfBlob = await pdf(pdfData).toBlob();
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(pdfBlob);
    };

    generatePDF();
  }, [data]);

  return (
    <div>
      {imageSrc && <img src={imageSrc} alt="PDF Page" style={{ width: '100%' }} />}
    </div>
  );
};

export default PDFToImage;
