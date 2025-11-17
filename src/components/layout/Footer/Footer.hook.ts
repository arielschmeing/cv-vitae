export default function useFooter() {
    const createPDF = () => {
        const iframe = document.createElement("iframe")
        iframe.style.position = "fixed"
        iframe.style.right = "0"
        iframe.style.bottom = "0"
        iframe.style.width = "0"
        iframe.style.height = "0"
        iframe.style.border = "0"

        document.body.appendChild(iframe)

        iframe.contentDocument!.write(document.documentElement.outerHTML)
        iframe.contentDocument!.close()

        iframe.onload = () => {
            iframe.contentWindow!.focus()
            iframe.contentWindow!.print()
            document.body.removeChild(iframe)
        }
    }

    return { createPDF }
}