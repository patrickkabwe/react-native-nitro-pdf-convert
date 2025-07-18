import { type HybridObject } from 'react-native-nitro-modules'
import type { PdfConvertResult } from '../types/nitro-pdf-convert.types'

export interface NitroPdfConvert extends HybridObject<{ ios: 'swift', android: 'kotlin' }> {
    /**
     * Convert a PDF file to an array of images
     * @param pdfPath - The path to the PDF file
     * @returns An array of images
     */
    toImages(pdfPath: string): Promise<PdfConvertResult[]>
    /**
     * Convert an array of images to a PDF file
     * @param imagePath - The path to the image file
     * @returns A PDF file 
     */
    toPdf(imagePath: string): Promise<PdfConvertResult>
}