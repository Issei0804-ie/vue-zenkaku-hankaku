import { ref, watch } from 'vue'

interface TextConversionState {
  rawText: string | undefined
  convertedText: string | undefined
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
    rawText: rawText.value,
    convertedText: convertedText.value
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
    rawText: rawText.value,
    convertedText: convertedText.value
  }
}
