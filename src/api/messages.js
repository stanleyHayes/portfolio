import emailJS from "@emailjs/browser";
import {
    EMAIL_JS_SERVICE_ID,
    EMAIL_JS_PUBLIC_KEY,
    EMAIL_JS_TEMPLATE_ID
} from "../constants/constants";

const sendMessage = (data) => {
    return emailJS.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, data, EMAIL_JS_PUBLIC_KEY);
}

export const MESSAGE_API = {sendMessage};