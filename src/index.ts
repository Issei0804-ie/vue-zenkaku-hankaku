import {ref} from "vue";

export const useZenkakuHankaku = () => {
    const rawText = ref<string>('');
    const convertedText = ref<string>();
    const convert = () => {
        convertedText.value = rawText.value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        });
    }
    return {
        rawText,
        convertedText,
        convert
    }
}
