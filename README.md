# Car Dealership Framework — "Apex Auto"

A sellable **used-car dealership** website: filterable/sortable vehicle inventory, a
spec-rich detail modal, a **live monthly-payment finance calculator**, and an inquiry/
test-drive flow. Pure HTML/CSS/JS, no build step, hosts free on GitHub Pages.

Built on the shared design-system starter kit, re-skinned premium charcoal + red, and
reuses the catalog-grid + Pexels-image pattern from the flower-shop framework.

## Features

- **Inventory grid** — filter by body type (SUV / Sedan / Truck / …) and sort by
  price, mileage, or year.
- **Vehicle detail modal** — full specs, description, "Book a test drive" (prefills the
  inquiry form) and "Estimate payments" (loads the price into the calculator).
- **Finance calculator** — live monthly payment from price, down payment, term, and APR
  (standard amortization formula). Estimate only.
- **Inquiry form**, why-us section, dealership info.

## Personalising for a client

1. **Brand & colours** — edit the `:root` tokens in `styles.css` and the `APEX AUTO`
   text in `index.html`.
2. **Inventory** — edit the `VEHICLES` array in `app.js` (year, make, model, body, price,
   km, fuel, transmission, drivetrain, optional `badge` / `badgeAlt` / `badgeSold`, and a
   Pexels `query`).
3. **Real photos** — give a vehicle an `image:` path (e.g. `image:"assets/rav4.jpg"`) to
   override the Pexels placeholder. Shoot the actual cars on the lot — real inventory
   photos are what sell.
4. **Inquiry form** — wire to **Formspree** (set the `<form>` `action` + `method`, remove
   the JS handler) or a **Firebase** `leads` collection.

## Local preview

```bash
python3 -m http.server 5540   # then open http://localhost:5540
```

## Notes

- Demo photos are pinned Pexels images — direct URLs in the `PEXELS_PHOTOS` map in
  `app.js`, so they load instantly with no API key or runtime fetching. To change a
  photo, paste a new pexels.com image address into the map; swap in the client's real
  photos (an `image:` path per vehicle) when sold.
- Hosting upgrade path for paying clients: Netlify / Cloudflare Pages + custom domain.

## Selling this site to a client (lead delivery)

The inquiry form is wired to **Web3Forms** so leads email the client automatically.

1. Get a FREE key at [web3forms.com](https://web3forms.com) using the **client's email**.
2. Paste it into `CONFIG.web3formsKey` in `app.js`.
3. Set `CONFIG.contactEmail` to the client's email (fallback + error message).
4. Test from the live site and confirm the `🔔 NEW LEAD` email arrives.

Free tier = 250 submissions/month per key. Keep keys under your own account to manage them, or use the client's account if they want ownership.
