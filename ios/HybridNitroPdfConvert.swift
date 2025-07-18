//
//  HybridNitroPdfConvert.swift
//  Pods
//
//  Created by Patrick Kabwe on 6/1/2025.
//

import Foundation
import NitroModules
import PDFKit

class HybridNitroPdfConvert: HybridNitroPdfConvertSpec {
    func toImages(pdfPath: String) throws -> Promise<[PdfConvertResult]> {
        return .async { [weak self] in
            guard let url = self?.getFileURL(atPath: pdfPath) else {
                throw PdfConvertError.invalidInput(message: "Failed to file ")
            }
            
            let document = PDFDocument(url: url)
            let pageCount = document?.pageCount ?? 0
            var images = [PdfConvertResult]()

            for pageIndex in 0..<pageCount {
                guard let page = document?.page(at: pageIndex) else { continue }

                let pageRect = page.bounds(for: .mediaBox)
                let renderer = UIGraphicsImageRenderer(size: pageRect.size)

                let image = renderer.image { context in
                    let cgContext = context.cgContext

                    cgContext.setFillColor(UIColor.white.cgColor)
                    cgContext.fill(CGRect(origin: .zero, size: pageRect.size))

                    cgContext.saveGState()

                    cgContext.translateBy(x: 0.0, y: pageRect.size.height)
                    cgContext.scaleBy(x: 1.0, y: -1.0)

                    page.draw(with: .mediaBox, to: cgContext)

                    cgContext.restoreGState()
                }
                // Save the image to temporary path
                let tempPath = FileManager.default.temporaryDirectory.appendingPathComponent("\(UUID().uuidString).jpeg")
                try image.jpegData(compressionQuality: 1.0)?.write(to: tempPath)

                images.append(
                    PdfConvertResult(
                        path: tempPath.absoluteString,
                        width: image.size.width,
                        height: image.size.height
                    )
                )
            }
            
            return images
        }
    }
    
    func toPdf(imagePath: String) throws -> Promise<PdfConvertResult> {
        return .async {
            PdfConvertResult(
                path: "",
                width: 100,
                height: 100
            )
        }
    }
    
    private func doesFileExists(atPath path: String) -> Bool {
        return FileManager.default.fileExists(atPath: path)
    }
    
    private func getFileURL(atPath path: String) -> URL? {
        let url = URL(string: path)
        return url
    }
}

enum PdfConvertError: Error {
    case invalidInput(message: String)
}
