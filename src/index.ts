import { type DeepReadonly, readonly, type Ref, ref, type UnwrapRef, watch } from 'vue'

interface TextConversionState {
  rawText: Ref<UnwrapRef<string>>
  convertedText: DeepReadonly<Ref<UnwrapRef<string>>>
}
export const useZenkakuHankaku = (): TextConversionState => {
  const rawText = ref<string>('')
  const convertedText = ref<string>('')
  const convert = (): void => {
    convertedText.value = rawText.value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => {
      return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
    })
  }
  watch(rawText, convert)
  return {
    rawText,
    convertedText: readonly(convertedText)
  }
}

export const useHankakuZenkaku = (): TextConversionState => {
  const rawText = ref<string>('')
  const convertedText = ref<string>('')
  const convert = (): void => {
    convertedText.value = rawText.value.replace(/[A-Za-z0-9]/g, (s) => {
      return String.fromCharCode(s.charCodeAt(0) + 0xFEE0)
    })
  }
  watch(rawText, convert)
  return {
    rawText,
    convertedText: readonly(convertedText)
  }
}
