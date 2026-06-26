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

- Pexels photos are demo placeholders (free key, same as the other frameworks), cached in
  `localStorage`. Swap for the client's real vehicle photos when sold.
- Hosting upgrade path for paying clients: Netlify / Cloudflare Pages + custom domain.
