import { NitroModules } from 'react-native-nitro-modules'
import type { NitroPdfConvert as NitroPdfConvertSpec } from './specs/nitro-pdf-convert.nitro'

export const NitroPdfConvert =
  NitroModules.createHybridObject<NitroPdfConvertSpec>('NitroPdfConvert')