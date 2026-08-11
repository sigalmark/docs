# Batch Upload Guide

Issue multiple certificates at once using a CSV file.

## Overview

The **Batch** tab on the **Certificates → Issue** page lets you issue up to **25 certificates per batch** from a CSV file. If your CSV has more rows, the platform offers to split it into multiple batches automatically. Download the **template CSV** from the same tab to start from a known-good file.

## CSV format

Your CSV must include a header row. Supported columns:

| Column | Required | Description |
| --- | --- | --- |
| `name` | Yes | The certified company or individual. Use full legal names — on-chain data can only be fixed by revoke-and-reissue. |
| `competency` | Yes | The qualification or certification type (e.g. "First Aid", "ISO 9001"). |
| `expiry` | Yes | The certificate expiry date. See [Date format](#date-format). |
| `companyEmail` | No | Recipient's email address for certificate delivery. |
| `imageURI` | No | A direct URL to the certificate artwork. See [imageURI](#image-uri). |

### Example CSV

```csv
name,companyEmail,competency,expiry,imageURI
Acme Ltd,admin@acme.example,First Aid,2030-12-31,
Beta Corp,info@beta.example,ISO 9001,2028-06-15,https://example.com/images/beta-cert.png
Gamma Inc,,Fire Safety,12/31/2027,
```

## Date format (expiry column) {#date-format}

The `expiry` column accepts two formats:

| Format | Pattern | Example |
| --- | --- | --- |
| ISO (recommended) | `YYYY-MM-DD` | `2026-12-31` |
| US | `MM/DD/YYYY` | `12/31/2026` |

::: tip
Use ISO format (`YYYY-MM-DD`) to avoid day/month ambiguity, especially if your data comes from different regions.
:::

::: danger Common mistake
`01/02/2026` is interpreted as January 2nd (US format), not February 1st. Use ISO format if this could cause confusion.
:::

## imageURI column {#image-uri}

Optional. When provided it must be a **direct URL to an image file** — a URL that ends in the image itself (`.png`, `.jpg`, …), not a page that displays the image. Sharing links from Google Drive, Dropbox or similar are pages, not direct image URLs, and will fail validation.

## Validation and errors

Rows are validated **before** anything is submitted:

- The footer shows a live count of valid rows out of the total.
- Invalid rows are flagged with the reason (missing name, bad date, unreachable image URL, …).
- You can download the failed rows as an **error report CSV**, fix them, and re-upload just those.

Valid rows are only minted when you confirm the batch. If the batch would exceed your plan's included certificate allowance, the app asks you to confirm the billable overage first.
