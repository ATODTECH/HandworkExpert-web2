import ToastMessage from "./toastMessage";

const copyTextToClipboard = (text) => {
    var textArea = document.createElement("textarea");
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    // We don't need padding, reducing the size if it does flash render.
    textArea.style.padding = 0;
    // Clean up any borders.
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    // Avoid flash of the white box if rendered for any reason.
    textArea.style.background = 'transparent';
    textArea.value = text;

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    navigator.clipboard.writeText(text)
        .then(() => {
            ToastMessage('success', 'Copied!')
        })
        .catch((error) => {
            ToastMessage('error', `Copy failed! ${error}`)
        })

    try {
        let successful = document.execCommand('copy');
        let msg = successful ? 'successful' : 'unsuccessful';
       
    } catch (err) {
        console.log(err.message)

    }
    document.body.removeChild(textArea);
}
const copyText = (text) => {
    copyTextToClipboard(text);
}

export default copyText