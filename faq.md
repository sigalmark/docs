# Frequently Asked Questions

Quick answers to common questions about the Sigalmark platform.

## General

### What is Sigalmark?

A blockchain-based digital certificate platform. Organisations issue tamper-proof certificates as ERC-721 NFTs, verifiable by anyone via QR code or online lookup.

### What does "blockchain-backed" mean for my certificates?

Each certificate is minted as an NFT on a blockchain network — a decentralised, immutable ledger. It cannot be altered, forged, or deleted, and anyone can independently verify it.

### Do I need cryptocurrency to use Sigalmark?

No. The platform handles all blockchain transactions behind the scenes. You never need a crypto wallet or cryptocurrency.

### How do I join an organisation?

You need an invitation from one of its Admins (sent from **Manage → Members**). You'll receive an email link to accept.

### How do I switch between organisations?

Use the tenant switcher at the bottom of the sidebar. Your role badge updates per workspace — you can be a Member in one organisation and an Admin in another.

### How do I change the app's appearance?

The round button above the tenant switcher fans out into the theme switcher: default (olive), dark, and light.

## Certificates

### What's the difference between "Download certificate", "Download QR code", and "Download artwork"?

- **Download certificate** — the branded **composite**: your organisation's logo plus the certificate's hexagonal QR code. The shareable image.
- **Download QR code** — the hexagonal QR code alone.
- **Download artwork** — the certificate image uploaded at issuance (available from the drawer's artwork view, only when artwork was attached).

### How many certificates can I issue at once?

Up to **25 per batch** via CSV upload. Larger CSVs are split into multiple batches automatically.

### Can I fix a typo in an issued certificate?

No — certificate data is minted on-chain and cannot be edited. Revoke the certificate and issue a corrected one. Double-check names before issuing, and use full legal names.

### Can I revoke a certificate after issuing it?

Yes, from the row menu or the drawer. The app asks for confirmation; revocation is **permanent** and updates the on-chain status. Verifications will show "Revoked".

### Can I extend an expired certificate?

Yes. Expiry can be extended even after the certificate has expired.

### What happens when a certificate expires?

It stays on the blockchain but verifies as "Expired". Automated reminder emails go to certificate holders before and after expiry.

### Why is "Download artwork" not available for some certificates?

No artwork image was attached when that certificate was issued. The composite and QR downloads are always available.

## Batch upload

### Why did my CSV rows fail validation?

The most common causes: missing `name` or `competency`, an ambiguous or malformed `expiry` date (use `YYYY-MM-DD`), or an `imageURI` that is a sharing page rather than a direct image URL. Download the error report CSV to see the per-row reasons.

### What date format should I use?

ISO — `YYYY-MM-DD`. US `MM/DD/YYYY` is accepted but ambiguous across regions.

## Verification

### Do verifiers need a Sigalmark account?

No. The Verify page is public, and QR codes resolve to a public verification page.

### What does an INVALID verdict mean?

The certificate is revoked, expired, or was not found on-chain. The reason pills under the verdict say exactly which.

## Billing & subscription

### What happens if I exceed my plan's certificate allowance?

The app warns you and asks for confirmation before issuing billable certificates beyond the included allowance. Admins can also purchase certificate top-ups under **Manage → Subscription**.

### Where do I see my organisation's usage?

**Manage → Subscription** shows usage meters for seats and certificates, with the billed rates for anything beyond the included amounts.

## Troubleshooting

### I didn't receive the verification / invitation email

Check spam, and confirm the address with your Admin. Invitations can be resent from **Manage → Members**.

### My certificate email wasn't delivered

Confirm the certificate has a company email attached (the **Email sent** column shows delivery state), then use **Resend issuance email** from the row menu.
