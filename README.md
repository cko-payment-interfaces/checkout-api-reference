# checkout-api-reference - Payment Interfaces fork

Before making any changes, make sure that this fork is synced with the upstream repository ([checkout/checkout-api-reference](https://github.com/checkout/checkout-api-reference)).

Make changes to Payment Interfaces components as required.

When creating a pull request, be sure to set the **base repository** to `cko-payment-interfaces/checkout-api-reference`.

Request a review on the PR from `cko-payment-interfaces/web-engineers`, and merge it when approved.

When the pull request is merged to `master`, a new PR with the changes will automatically be created in the [upstream repo](https://github.com/checkout/checkout-api-reference/pulls).

Original README below

---

# Checkout.com API Reference

[![Build Status](https://vercel.com/cko-docs/checkout-api-reference)](https://vercel.com/cko-docs/checkout-api-reference)

Checkout.com APIs accept and return JSON in the HTTP body, and return standard [HTTP response codes](https://docs.checkout.com/resources/codes/http-response-codes).

Our API Reference is written using the OpenAPI specification. We have one spec for the [current account structure](https://api-reference.checkout.com/) and one for the [new account structure](https://api-reference.checkout.com/preview/crusoe). Merchants can download the specs using the download button on either version of the API reference.

The API Reference is hosted on Vercel.

---

## Owners

The Tech Docs team own the API reference and work closely with product teams to produce guides on the [main documentation](https://docs.checkout.com) site and the API Reference. Each Technical Writer is assigned specific product areas.

- [@Ben Ahmady](https://github.com/ben-ahmady-cko): Payments (Gateway), Payouts (including FX), Notifications, Vault
- [@Chrisi Webster](https://github.com/chrisi-webster-cko): Marketplaces, Payment interfaces, General updates
- [@Cristina Szilagyi](https://github.com/cristina-szilagyi-cko): APMs, 3DS Authentication (including Sessions), Issuing
- [@Neal Goldsmith](https://github.com/neal-goldsmith-cko): Prism (risk), Disputes, Reporting

---

## Contributing

Most teams write the spec before building out the functionality. We created a [GitHub workflow](https://checkout.atlassian.net/wiki/spaces/PD/pages/4844781738/GitHub+Actions+for+API+Ref), which means you just have to edit the spec on your own GitHub organisation instead of editing directly on this one.

If you fork this repo to edit your spec, you will need to:

1. Install the dependencies using `npm i`
2. Run `npm run start` to view your changes on [http://localhost:3000](http://localhost:3000).

On the PR in this repo, tag your Technical Writer as a reviewer.

### Previews

When you open a PR, Vercel will automatically create a preview link.
