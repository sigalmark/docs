# Certificates

Issue, manage, and distribute blockchain-backed certificates.

## The Certificates hub

**Certificates** in the sidebar expands into four sections:

- **All** — view, search, and manage every certificate your organisation has issued.
- **Issue** — issue new certificates, one at a time or in batch via CSV.
- **Analytics** — issuance metrics with filters and CSV export.
- **Verify** — the public verification tool (also available signed out).

## Issuing a single certificate

1. Go to **Certificates → Issue** and stay on the **Single** tab.
2. Fill in the required fields:
   - **Name** — the certified company or individual. Use full legal names — certificates are minted on-chain and can only be corrected by revoke-and-reissue.
   - **Competency** — the qualification or certification type.
   - **Expiry date** — when the certificate expires.
3. Optionally add:
   - **Company email** — recipient address for certificate delivery.
   - **Artwork** — upload an image of the certificate to attach to it.
4. Click **Issue certificate** to mint it on the blockchain.

::: tip Blockchain minting
Each certificate is minted as an ERC-721 NFT. This makes it tamper-proof and independently verifiable by anyone — which also means typos can't be edited afterwards, only revoked and reissued.
:::

If issuing would take you past your plan's included allowance, the app asks you to confirm before creating a billable certificate.

## Batch issuance (CSV)

Switch to the **Batch** tab on the Issue page to upload a CSV of up to 25 certificates. Download the **template CSV** from the same tab to start from a valid file. Rows are validated before submission and the footer shows a live count of valid rows; failed rows can be downloaded as an **error report CSV**. See the [Batch Upload Guide](/batch-upload.html) for the format.

## Managing issued certificates

**Certificates → All** lists every certificate with its status. Use the search box (name, competency, or email) and the **Status / Competency / Issued / Email sent** filters to narrow the list, and the toggle in the top-right to switch between the table and tile views (tiles show each certificate's QR code). **Export CSV** downloads the current list.

### Row actions

Each row's **⋯** menu offers:

- **Open details** — opens the certificate drawer (see below).
- **Copy verification link** — copies the certificate's short verification URL.
- **Download certificate** — saves the branded **composite** (your organisation's logo + the certificate's hexagonal QR code). This is the shareable image for email signatures and websites.
- **Download QR code** — saves just the hexagonal QR code, without the logo.
- **Send / Resend issuance email** — emails the certificate to the recipient's company email.
- **Revoke certificate** — permanently revokes it, after a confirmation dialog.

### The certificate drawer

Opening a certificate shows its drawer:

- **Verification** — the hexagonal QR code and the short verification URL, with copy and open buttons, plus **Download QR code**.
- **Artwork** — the attached certificate image, if one was uploaded at issuance. Click it to enlarge; from the enlarged view you can **Open original** or **Download artwork**.
- **On chain** — the contract address, token ID, and network of the minted certificate.
- Footer actions: **Download certificate** (the composite), **Send email**, and **Revoke**.

### The three downloads at a glance

| Download | Contents | Typical use |
| --- | --- | --- |
| **Certificate** | Composite: issuer logo + hexagonal QR | Email signatures, landing pages, print |
| **QR code** | Hexagonal QR only | Anywhere the logo is already present |
| **Artwork** | The uploaded certificate image | The recipient's copy of the certificate document |

### Certificate statuses

| Status | Meaning |
| --- | --- |
| <span class="badge-valid">Valid</span> | Active and not expired. |
| <span class="badge-warning">Expiring soon</span> | Valid, but the expiry date is near. |
| <span class="badge-danger">Expired</span> | Past its expiry date. Still on-chain; shows as expired when verified. |
| <span class="badge-danger">Revoked</span> | Permanently revoked. Shows as revoked when verified. |

### Revoking and extending

**Revoke** is permanent and updates the certificate's on-chain status — the app asks for confirmation first. Expiry dates can be **extended** even after a certificate has expired.

## Emailing certificates

Certificates with a company email can be (re)sent from the row menu or the drawer. The email includes the certificate composite and the verification link. Automated expiry reminders go out before and after expiry.
