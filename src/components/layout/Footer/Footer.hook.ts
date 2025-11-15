export default function useFooter() {
    const createPDF = () => {
        const content = "PDF Save"

        const blob = new Blob([content], { type: "application/pdf" })
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        
        link.href = url
        link.download = "archive.pdf"
        link.click()

        URL.revokeObjectURL(url)
    }
    
    return {
        createPDF
    }
}