import { NitroModules } from 'react-native-nitro-modules'
import type { NitroPdfConvert as NitroPdfConvertSpec } from './specs/nitro-pdf-convert.nitro'
export type { PdfConvertResult } from './types/nitro-pdf-convert.types'

export const NitroPdfConvert =
  NitroModules.createHybridObject<NitroPdfConvertSpec>('NitroPdfConvert')