---
sidebar_position: 3
---

# Inventory Management

Monitor materials and supplies in real time.

## Overview

Track filament, resin, and other consumables. The system alerts you when inventory falls below reorder thresholds.

## Material Inventory

### Adding Materials

In the **Materials** sheet:

1. Create a unique **Material ID** (e.g., `PLA-White-1kg`)
2. Specify:
   - Material Type (PLA, ABS, TPU, Resin, etc.)
   - Color variant
   - Current stock (kg or liters)
   - Unit cost (price per kg or liter)
   - Reorder level (threshold for alerts)
   - Supplier name
   - Lead time (days to reorder)

### Tracking Usage

As you complete jobs:

1. Enter actual material used in each job
2. System auto-updates **Current Stock**
3. When stock ≤ reorder level:
   - Sheet highlights in yellow (warning)
   - System flags in the **Reorder Alert** sheet
   - Optional: Sends email notification

### Low Stock Example

| Material | Current Stock | Reorder Level | Status |
|----------|---------------|---------------|--------|
| PLA-White | 3.2 kg | 5 kg | ⚠️ Order Soon |
| PLA-Black | 0.8 kg | 2 kg | 🔴 Urgent |
| Resin-Clear | 2.1 L | 3 L | ⚠️ Order Soon |

## Supplier Management

Track multiple suppliers per material:

- **Preferred Supplier**: Primary source (usually lowest cost or fastest delivery)
- **Backup Supplier**: Alternative if preferred is out of stock
- **Unit Cost**: Price from each supplier (update when pricing changes)
- **Lead Time**: Days from order to delivery
- **Discount Tiers**: Bulk pricing (e.g., $20/kg for <5kg, $18/kg for 5–20kg)

## Reorder Process

### Manual Reordering

1. Check the **Reorder Alert** sheet weekly
2. For each flagged material, click **Generate PO** (purchase order)
3. System pre-fills:
   - Supplier name and contact
   - Material details
   - Recommended quantity (based on usage rate)
   - Estimated cost and delivery date
4. Adjust quantity if needed, then submit to supplier

### Automatic Reordering (Optional)

Configure auto-reorder for high-volume items:

- Set a **monthly reorder quantity** (e.g., "Order 10 kg PLA every month")
- System generates PO automatically when stock drops
- Requires supplier integration (advanced feature)

## Stock Valuation

The **Inventory Report** sheet shows:

| Metric | Formula | Use |
|--------|---------|-----|
| Current Value | Σ(Quantity × Unit Cost) | Total cash tied up in materials |
| Monthly Usage | Σ(Material per job) | Trend analysis |
| Usage Velocity | Monthly Usage ÷ Current Stock | How fast you're burning through stock |
| Safety Stock | (Daily Usage × Lead Time) | Minimum to avoid stockouts |

## Tips

1. **Review inventory weekly** to catch shortages early
2. **Batch orders** from the same supplier to save on shipping
3. **Track actual usage** vs. estimated—refine your costing model
4. **Set reorder levels conservatively**, especially for specialty materials
5. **Negotiate volume discounts** once you're consistent

## Example

**Your PLA-Black usage**: 2 kg/week
- Lead time from supplier: 5 days
- Current stock: 4 kg
- Safety stock: 2 kg × 1 week = 2 kg
- Reorder level set to: 5 kg (2 kg safety + 1 week buffer)
- **Status**: Safe, but order within 1 week

## Troubleshooting

**Alerts not triggering?**
- Verify reorder levels are set correctly
- Check that Current Stock is being updated with job usage
- Ensure notifications are enabled in your email settings

**Stock numbers seem off?**
- Spot-check physical counts against system
- Look for data entry errors in material used per job
- Verify units are consistent (kg vs. lbs, liters vs. gallons)

---

Efficient inventory = happier customers + better cash flow.
