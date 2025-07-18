package com.nitropdfconvert

import com.margelo.nitro.nitropdfconvert.HybridNitroPdfConvertSpec
import com.margelo.nitro.nitropdfconvert.PdfConvertResult
import com.margelo.nitro.Promise

class HybridNitroPdfConvert: HybridNitroPdfConvertSpec() {    
    override fun toImages(pdfPath: String): Promise<PdfConvertResult> {
        return Promise.resolve(PdfConvertResult(
            path = "",
            width = 100,
            height = 100
        ))
    }

    override fun toPdf(imagePath: String): Promise<PdfConvertResult> {
        return Promise.resolve(PdfConvertResult(
            path = "",
            width = 100,
            height = 100
        ))
    }
}
