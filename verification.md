# Certificate Verification

Verify the authenticity of any Sigalmark certificate.

## Overview

Every Sigalmark certificate is minted as an NFT on the blockchain, so anyone can independently verify that it is authentic, untampered, and still valid — without contacting the issuing organisation and without an account.

## Verification methods

### 1. Paste a link (primary method)

1. Open **Verify** (linked from the app sidebar; no login required).
2. Paste a certificate link into the input field:
   - a **short URL** (e.g. `sm1.it/AbCd`) — this is what certificate QR codes encode, or
   - a full verification URL.
3. Click **Verify**. The system resolves the link and fetches the certificate data from the blockchain.

::: tip
You can also just scan a certificate's QR code with your phone camera — it opens the short URL in the browser, which lands on the verification result directly.
:::

### 2. Manual lookup (advanced)

If you have the raw blockchain details:

1. On the Verify page, expand **Manual lookup (advanced)**.
2. Enter the **Contract address**, **Token ID**, and **Network**.
3. Click **Verify**.

### 3. Scan with the mobile app

Verification officers can use the Sigalmark mobile app: tap **Start scanning**, point the camera at any certificate QR code, and get a pass/fail result with details — across all issuing organisations.

## Verification results

### Verdict banner

| Verdict | Colour | Meaning |
| --- | --- | --- |
| **VALID** | <span class="badge-valid">Green</span> | Authentic, current, and not revoked. |
| **INVALID** | <span class="badge-danger">Red</span> | Revoked, expired, or not found. |
| **UNKNOWN** | <span class="badge-neutral">Grey</span> | Could not be verified (unrecognised URL, network error). |

### Reason pills

Beneath the verdict, pills spell out **why** — e.g. "on chain", "not expired", "revoked by issuer". An invalid certificate shows exactly which check failed.

### Certificate details

The verified data as read from the blockchain: name, competency, issue and expiry dates, issuing organisation, and the on-chain reference (contract, token, network).
