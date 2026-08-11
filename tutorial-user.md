# User (Member) Tutorial

Step-by-step walkthrough of everything a standard user does: registration, login, issuing certificates, batch upload, verification, and profile management.

## 1. Registration & Login {#registration-login}

### 1.1 Register a new account

1. On the login page, click **Create an account**.
2. Enter your email, choose a password, and optionally your name.
3. Submit, then confirm your address via the verification email.

![Registration page](/images/user-register.png)

### 1.2 Log in

1. Enter your email and password. Tick **Keep me signed in for 30 days** on a trusted device.
2. If 2FA is enabled, enter the 6-digit code from your authenticator app.
3. You land on your workspace's **Certificates** page.

![Login page](/images/user-login.png)

### 1.3 Forgot password

Click **Forgot password?** on the login page and enter your email. If an account exists you'll receive a reset link (valid for 1 hour).

![Forgot password](/images/user-forgot-password.png)

### 1.4 Reset your password

Follow the emailed link, choose a new password, and log in with it.

![Reset password](/images/user-reset-password.png)

## 2. Profile Management {#profile-management}

### 2.1 View and edit your profile

Open **Profile** from the sidebar to update your personal details.

![Profile page](/images/user-profile.png)

### 2.2 Enable two-factor authentication (2FA)

1. On your Profile page, start the 2FA setup wizard.
2. Scan the QR code with an authenticator app (Google Authenticator, Authy, …).
3. Enter the 6-digit code to confirm. From now on, login asks for a code.

![2FA setup](/images/user-2fa-setup.png)

### 2.3 Disable two-factor authentication

From the same Profile section, disable 2FA by confirming with a current code.

## 3. Issuing Certificates {#issuing-certificates}

### 3.1 Create a single certificate

1. Go to **Certificates → Issue** (or the **Issue certificate** button on the All page).
2. On the **Single** tab, fill in **Name**, **Competency**, and **Expiry date**; optionally a **company email** and **artwork** image.
3. Click **Issue certificate**. The certificate is minted on-chain and appears in the All list.

![Issue page — single tab](/images/user-cert-issue.png)

![Issue form filled in](/images/user-cert-issue-filled.png)

::: warning Names are permanent
Certificates are minted on-chain — a typo can only be fixed by revoke-and-reissue. Use full legal names.
:::

### 3.2 Batch CSV upload

1. Switch to the **Batch** tab and download the **template CSV** if you need a starting point.
2. Upload your CSV (up to 25 rows per batch; bigger files are split automatically).
3. Review the validation results — the footer counts valid rows, and failed rows can be downloaded as an error report CSV.
4. Confirm to mint the valid rows.

![Batch upload tab](/images/user-cert-batch.png)

See the [Batch Upload Guide](/batch-upload.html) for the CSV format.

## 4. Managing Certificates {#managing-certificates}

### 4.1 Certificate list view

**Certificates → All** shows every certificate with status badges. Search by name, competency, or email; filter by **Status**, **Competency**, **Issued** date, or **Email sent**; switch between table and tile views (tiles show each certificate's QR); **Export CSV** downloads the list.

![Certificate list](/images/user-cert-list.png)

### 4.2 Certificate actions

From each row's **⋯** menu: **Open details**, **Copy verification link**, **Download certificate** (logo + QR composite), **Download QR code** (QR only), **Send / Resend issuance email**, and **Revoke certificate** (with confirmation).

Opening a certificate shows the drawer — verification QR and short link, the attached artwork (click to enlarge, then **Download artwork**), on-chain details, and the same actions.

![Certificate drawer](/images/user-cert-drawer.png)

## 5. Viewing Statistics {#viewing-statistics}

**Certificates → Analytics** shows issuance metrics for your organisation. Filter by period and competency, and export the aggregated data as CSV.

![Analytics](/images/user-cert-stats.png)

## 6. Verifying Certificates {#verifying-certificates}

### 6.1 Verify via link

1. Open **Certificates → Verify** (no login needed — recipients can use it too).
2. Paste a short URL (e.g. `sm1.it/AbCd`) or full verification URL.
3. Click **Verify**.

![Verify page](/images/user-verify-page.png)

### 6.2 Manual lookup (advanced)

Expand **Manual lookup (advanced)** and enter the contract address, token ID, and network.

![Manual lookup](/images/user-verify-manual.png)

### 6.3 Reading verification results

The verdict banner (VALID / INVALID / UNKNOWN) is followed by reason pills explaining each check, and the certificate details as read from the blockchain.

![Verification result](/images/user-verify-result.png)

## 7. Mobile App

### 7.1 Overview

The Sigalmark mobile app is for verification officers: log in, tap **Start scanning**, and point the camera at any certificate QR code for an instant pass/fail with details.

### 7.2 When to use the mobile app

Door checks, audits, and any situation where you verify other organisations' certificates on the go — the app verifies certificates across all issuers.
