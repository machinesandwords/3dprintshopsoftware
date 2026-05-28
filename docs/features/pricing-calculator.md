---
sidebar_position: 2
---

# Pricing Calculator

Generate professional quotes automatically.

## Overview

The pricing calculator takes your actual costs and applies intelligent markup rules to generate competitive quotes.

## How It Works

### 1. Cost Foundation

The calculator starts with the full job cost (see [Job Costing](./job-costing)):

- Material
- Machine time
- Labor
- Overhead

### 2. Markup Application

Three markup strategies are available:

**Percentage Markup** (Recommended)
- Apply a consistent % across all jobs
- Example: 50% markup = Cost × 1.50 = Price
- Good for: Standardized operations

**Cost-Plus** 
- Base markup % + per-unit premium
- Example: 40% + $5 per print
- Good for: High-volume small items

**Margin-Based**
- Set target profit margin % instead
- Example: 35% margin = Cost ÷ 0.65
- Good for: Value-based pricing

### 3. Special Rules

After base calculation, additional rules apply:

**Minimum Job Price**
- Prevents underpricing tiny jobs
- Example: Even a 30-minute print = $25 minimum

**Specialty Markup**
- Additional premium for:
  - Complex geometries
  - Specialty materials (TPU, nylon, etc.)
  - Tight tolerances
  - Color matching or custom finishing

**Volume Discounts**
- Reduce price for larger orders
- Example: 10% off for 50+ units, 15% off for 100+

**Customer Risk Premium**
- Add surcharge for high-risk customers
- Example: +10% for late-payer history

### 4. Quote Generation

Once calculated, generate a professional quote:

1. Navigate to the **Quotes** sheet
2. Select a job from the dropdown
3. Click **Generate Quote**
4. System creates a PDF with:
   - Customer name and contact
   - Project description and timeline
   - Materials and specifications
   - Cost breakdown (optional—can be hidden)
   - Total price and payment terms
   - Your logo and contact info

## Example Pricing Flow

**Base Job Cost**: $100

| Step | Markup | Price |
|------|--------|-------|
| Cost Foundation | — | $100.00 |
| Base Markup (50%) | 50% | $150.00 |
| Specialty (TPU) | +10% | $165.00 |
| Volume (100 units) | -10% | $148.50 |
| **Final Price** | | **$148.50** |
| **Your Profit** | | **$48.50 (33%)** |

## Configuration

Edit your pricing rules in the **Configuration** sheet:

| Setting | Use |
|---------|-----|
| Base Markup % | Default for all jobs |
| Specialty Markup % | Applied to flagged materials/complexity |
| Minimum Job Price | Floor pricing |
| Volume Discount Tiers | Step discounts by quantity |
| Risk Premium % | Surcharge for problem customers |

## Pro Tips

1. **Test your pricing** against competitors in r/3dprintingbusiness
2. **Start conservative**—you can always raise prices later
3. **Review actual margin** quarterly (Cost Report sheet)
4. **Consider market position**: Are you budget, mid-market, or premium?
5. **Update base markup** as your efficiency improves

## Troubleshooting

**Quote seems too high?**
- Check that specialty markup isn't double-applied
- Verify customer isn't flagged for risk premium
- Review base markup % against industry standards (typically 30–100%)

**Quote seems too low?**
- Ensure overhead is accurately configured
- Verify material costs are current
- Check that minimum job price isn't suppressing price

---

Smart pricing balances competitiveness with profitability.
