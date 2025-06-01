import { type HybridObject } from 'react-native-nitro-modules'

export interface NitroPdfConvert extends HybridObject<{ ios: 'swift', android: 'kotlin' }> {
  sum(num1: number, num2: number): number
}