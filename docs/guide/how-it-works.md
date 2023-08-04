---
title: How it workds
prev: false
next: basic-usage
sidebarDepth: 3
posted: 2020-04-10
---
# How it workds

The basic structure of Magic Label™ is that the QR code pre-printed on the Magic Label™ is linked to the server with unique Label ID parameter.

<!--Magic Label™ is the Pre-printed QR code label sticker whose URL links to a special server with a unique id.
When you read Magic Label™, the unique ID is sent to the server.
The server checks the internal DataBase with the id and leads you to the URL registration page in case the URL is still not registered, on the contrary, it leads you to the registered URL in case the URL is registered.-->

<!-- mermaids/01.txt -->
<!--<img src="https://kroki.io/mermaid/svg/eNpLL0osyFAIceFSAILMFEON6KDUxBQF38T0zGQFn8Sk1JxYTQVdXbsaT5eazBSj6tAgH4Wi1PTM4pLUotQU-1qwXGVqMVDSRCM6PV-hBIgyUhWA6mI1oYYagRXl5QPVmGpEI0woSizJzM9TKEhMTwWqBQC-gyv7">-->


## Scanning process of ordinally QR code

For the ordinally QR code, scanning is take place inside your phone. The camera device on your phone scans a QR code and decodes scanned 2-D image to a URL. Then the browser on your phone jumps to the URL. That is.

<!-- mermaids/02.txt -->
<img src="https://kroki.io/mermaid/svg/eNplj0sOwyAMRPc5hS_QC7CI1M-yG6h6ABes1pUgqYG0xy-CZBHh5cwbjx3pkylYujA-Bf0AZR7TDzhEdgTpReBoYUvVmVESW54xJDijJ8FOPsn0jSRVp-CGDtCmk44QOVFD29rDOGqj4GYxbAFtithcBUIpSwCEu7nuY2u_gnf2M6SpvrBRq1mwVrmn6hF_OVVVLw==">

## Scanning process of Magic Label
The QR code pre-printed on the magic label is linked to the **Atelier Ueda Server** with a **unique Label ID** parameter.  

On the first scan, the AtelierUeda server checks the internal database to see if the Label ID passed by the parameter already has a URL. Then,

- In case of **doesn't have a URL**, the Atelier Ueda Server returns a Web Page **to set a URL** to the ID.  

- In case of **has a URL**, the Atelier Ueda Server returns a Web Page **to jump to the URL** linked to the ID.  


<img src="https://kroki.io/mermaid/svg/eNrtU8tOw0AMvOcrfEf8QA5FDbkglSJa9cDR3bhhUbIbvE7h89lH2iYKBT6APXrG47FH6-i9J6Oo1Fgzthn4t7efoI3TFYG8ElR01Ioi0iGLVrpDI3CPLTHOygXbD0cc62SqbEZ4xForWOGemuw8binUaGLYUTWX3BIfB8VxuSyuD1mC00KpvrZCYL3CYDkHFDhodgJOoUmkBN0uFiN7OWw9Ds-byBgBnnaSYpKeDSDsNiuwh8kicJPo8FBOZww3yuGtbzsQO19_YHhuWv5C_cOc1OJ7yyKPfO28z1o7IabqLnLKYqS9tpdDNXSQMCD0rp-memffjiQKY9ddsRtQ7za4nns6mQmsHzJypKypYkhgGRr0Lf9pwQu57-M6AfO8vJBmUhIsXbTj-af-07_5pSFkkH0BVIhO0w==">

## Patent notice
The patent of this feature is registered with the Japanese Patent Office as follow:

- [特許6078766](https://www.j-platpat.inpit.go.jp/c1800/PU/JP-6078766/D2E867CCAFF6CE9635CD4F2A6B6FDBF890F40D6422306B6567C7FBD559EA1CE1/15/ja)
