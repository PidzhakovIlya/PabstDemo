export const getDocumentTypes = () => {
    return [
        {
            type: "ID",
            steps: [
                {
                    type: "front",
                    name: "Document Front",
                    mode: {uploader: true, video: true},
                    autocaptureDelay: 500,
                    enableDesktopNotification: true,
                },
                {
                    type: "pdf",
                    name: "Document PDF417 Barcode",
                    mode: {uploader: true, video: true},
                    autocaptureDelay: 500,
                    enableDesktopNotification: true,
                },
                {
                    type: "face",
                    name: "Face",
                    mode: {uploader: true, video: true},
                },
            ],
        },
        {
            type: "Passport",
            steps: [
                {
                    type: "mrz",
                    name: "Passport Front",
                    mode: {uploader: true, video: true},
                },
                {
                    type: "face",
                    name: "Face",
                    mode: {uploader: true, video: true},
                },
            ],
        },
        {
            type: "PassportCard",
            steps: [
                {
                    type: "front",
                    name: "Passport Card Front",
                    mode: {uploader: true, video: true},
                },
                {
                    type: "mrz",
                    name: "Passport Card Back",
                    mode: {uploader: true, video: true},
                },
                {
                    type: "face",
                    name: "Face",
                    mode: {uploader: true, video: true},
                },
            ],
        },
        {
            type: "EmploymentAuthorization",
            steps: [
                {
                    type: "front",
                    name: "Passport Card Front",
                    mode: {uploader: true, video: true},
                },
                {
                    type: "mrz",
                    name: "Passport Card Back",
                    mode: {uploader: true, video: true},
                },
                {
                    type: "face",
                    name: "Face",
                    mode: {uploader: true, video: true},
                },
            ],
        },
        {
            type: "GreenCard",
            steps: [
                {
                    type: "front",
                    name: "Document Front",
                    mode: {uploader: true, video: true},
                },
                {
                    type: "mrz",
                    name: "Passport Front",
                    mode: {uploader: true, video: true},
                },
                {
                    type: "face",
                    name: "Face",
                    mode: {uploader: true, video: true},
                },
            ],
        },
        {
            type: "InternationalId",
            steps: [
                {
                    type: "front",
                    name: "International ID Front",
                    mode: {uploader: true, video: true},
                },
                {
                    type: "mrz",
                    name: "International ID Back",
                    mode: {uploader: true, video: true},
                },
                {
                    type: "face",
                    name: "Face",
                    mode: {uploader: true, video: true},
                },
            ],
        },
        {
            type: "Barcode",
            steps: [
                {
                    type: "barcode",
                    name: "Document PDF417 Barcode ",
                    mode: {uploader: true, video: true},
                },
            ],
        },
    ]
}