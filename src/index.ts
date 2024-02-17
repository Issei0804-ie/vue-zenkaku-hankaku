import {ref, watch} from "vue";

export const useZenkakuHankaku = () => {
    const rawText = ref<string>('');
    const convertedText = ref<string>('');
    const convert = () => {
        convertedText.value = rawText.value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        });
    }
    watch(rawText, convert)
    return {
        rawText,
        convertedText
    }
}

export const useHankakuZenkaku= () => {
    const rawText = ref<string>('');
    const convertedText = ref<string>('');
    const convert = () => {
        convertedText.value = rawText.value.replace(/[A-Za-z0-9]/g, (s) => {
            return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
        });
    }
    watch(rawText, convert)
    return {
        rawText,
        convertedText
    }
}
