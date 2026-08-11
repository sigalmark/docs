# Operator (Superadmin) Tutorial

Operators manage the whole platform. Operator features live under **Platform** in the sidebar and cover users, tenants, subscription plans, master wallets, shortener domains, and contracts.

## 1. Platform Users Management {#platform-users}

**Platform → Users** lists every account on the platform.

- Search by name or email.
- Open a user to inspect their details and organisation memberships.

![Platform users](/images/operator-admin-users.png)

## 2. Tenant Management {#tenant-management}

### Viewing all tenants

**Platform → Tenants** lists every organisation with its plan and status.

![Tenants list](/images/operator-admin-tenants.png)

### The tenant detail page

Each tenant has a **dedicated detail page** — open it from the list. Its tabs cover everything about one organisation:

![Tenant detail](/images/operator-tenant-detail.png)

- **Overview** — key facts and status.
- **Subscription** — the assigned plan (shown in the plan dropdown), seat and certificate add-ons, and billing provider.
- **Members** — the tenant's users and roles.
- **Blockchain** — assigned chain, RPC URL, and contract deployment.
- **Email options** — per-recipient issuance email options and the LinkedIn organisation binding.

**Open workspace** switches you into that tenant's workspace directly.

### Assigning a blockchain chain and deploying a contract

From the tenant's Blockchain tab: assign the chain and RPC URL, then deploy the tenant's smart contract. Certificates cannot be issued until a contract is deployed.

### Assigning a subscription plan and add-ons

From the Subscription tab: pick the plan in the dropdown, add seat or certificate add-ons, and switch the billing provider if needed.

### Assigning a shortener domain

Choose which short-link domain the tenant's verification QR codes use.

## 3. Subscription Plan Management {#subscription-plans}

**Platform → Plans** is the catalogue all tenants choose from.

- **Create** a plan: name, price, included seats and certificates, per-unit overage rates.
- **Edit** or **delete** existing plans.
- **Toggle visibility** — hidden plans stay assigned to existing tenants but can't be newly selected.

![Subscription plans](/images/operator-subscriptions-list.png)

## 4. Master Wallet Management {#master-wallets}

**Platform → Funding wallets** manages the wallets that pay for on-chain minting.

- One master wallet per network; create or update credentials here.
- Balances should be monitored — minting stops if a wallet runs dry.

![Master wallets](/images/operator-master-wallets.png)

## 5. Shortener Domain Management {#shortener-domains}

**Platform → Shortener domains** manages the domains behind certificate short links (e.g. `sm1.it`).

- Create, edit, or delete domains.
- Deleting a domain in use would break existing QR codes — reassign tenants first.

![Shortener domains](/images/operator-shortener-domains.png)

## 6. Contract Deployment Status {#contract-deployment}

**Platform → Contracts** shows every tenant contract with its deployment status and statistics — use it to monitor pending deployments and spot failures.

![Contracts](/images/operator-contracts.png)

## 7. Cross-Tenant Operations

Operators see every tenant in the tenant switcher and can enter any workspace (also via **Open workspace** on a tenant's detail page). Inside a workspace an Operator has full Admin capabilities for that tenant, plus the Platform section everywhere.

::: warning Role note
Tenant invitations can only grant tenant-level roles (Member/Admin). The Operator role is platform-wide and never granted through invitations.
:::
