# react-native-nitro-pdf-convert

A React Native package for converting between PDF files and images, built with Nitro modules for high performance.

[![Version](https://img.shields.io/npm/v/react-native-nitro-pdf-convert.svg)](https://www.npmjs.com/package/react-native-nitro-pdf-convert)
[![Downloads](https://img.shields.io/npm/dm/react-native-nitro-pdf-convert.svg)](https://www.npmjs.com/package/react-native-nitro-pdf-convert)
[![License](https://img.shields.io/npm/l/react-native-nitro-pdf-convert.svg)](https://github.com/patrickkabwe/react-native-nitro-pdf-convert/LICENSE)

## Features

- 🚀 Convert PDF files to images
- 📄 Convert images to PDF files
- ⚡ Built with Nitro modules for maximum performance
- 🔒 Type-safe with TypeScript support
- 📱 Cross-platform (iOS & Android)

## Requirements

- React Native v0.76.0 or higher
- Node 18.0.0 or higher

## Installation

```bash
bun add react-native-nitro-pdf-convert react-native-nitro-modules
```

## Usage

```typescript
import { NitroPdfConvert } from 'react-native-nitro-pdf-convert'

// Convert PDF to images
const convertPdfToImages = async () => {
  try {
    const pdfPath = '/path/to/your/document.pdf'
    const images = await NitroPdfConvert.toImages(pdfPath)

    images.forEach((image, index) => {
      console.log(`Page ${index + 1}: ${image.path}`)
    })
  } catch (error) {
    console.error('Failed to convert PDF to images:', error)
  }
}

// Convert image to PDF
const convertImageToPdf = async () => {
  try {
    const imagePath = '/path/to/your/image.jpg'
    const pdfResult = await NitroPdfConvert.toPdf(imagePath)

    console.log('PDF created:', pdfResult.path)
  } catch (error) {
    console.error('Failed to convert image to PDF:', error)
  }
}
```

## API Reference

### `toImages(pdfPath: string): Promise<PdfConvertResult[]>`

Converts a PDF file to an array of images.

**Parameters:**

- `pdfPath` (string): The path to the PDF file

**Returns:**

- `Promise<PdfConvertResult[]>`: An array of conversion results, each containing image data

**Example:**

```typescript
const images = await NitroPdfConvert.toImages('/path/to/document.pdf')
```

### `toPdf(imagePath: string): Promise<PdfConvertResult>`

Converts an image file to a PDF file.

**Parameters:**

- `imagePath` (string): The path to the image file

**Returns:**

- `Promise<PdfConvertResult>`: A conversion result containing the PDF data

**Example:**

```typescript
const pdf = await NitroPdfConvert.toPdf('/path/to/image.jpg')
```

## Types

### `PdfConvertResult`

The result object returned by conversion operations. See the type definitions for detailed structure.

## Credits

Bootstrapped with [create-nitro-module](https://github.com/patrickkabwe/create-nitro-module).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
