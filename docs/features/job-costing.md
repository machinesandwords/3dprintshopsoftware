---
sidebar_position: 1
---

# Job Costing

Understand the true cost of every print job.

## Overview

The job costing system automatically calculates:

- **Material Cost**: Based on filament/resin type and weight
- **Machine Cost**: Hourly rate × actual print time
- **Labor Cost**: Post-processing hours × labor rate
- **Overhead Allocation**: Facility costs distributed across jobs
- **Total Cost**: Sum of all inputs
- **Profit Margin**: Revenue minus total cost

## How It Works

### 1. Material Tracking

When you enter a job:

1. Select the material type from the dropdown
2. System retrieves unit cost from your Materials list
3. For each job, the system estimates material weight:
   - File size estimation (rough proxy)
   - Or manual weight entry for known files
4. Calculates: `Unit Cost × Quantity = Material Cost`

### 2. Machine Time

Once printing completes:

1. Enter actual print time (hours)
2. System retrieves hourly rate for that machine
3. Calculates: `Hourly Rate × Print Time = Machine Cost`

### 3. Labor Costs

Enter post-processing hours manually:

- Cleanup, support removal, sanding, painting, etc.
- System applies your configured labor rate
- Calculates: `Labor Rate × Post-Processing Hours = Labor Cost`

### 4. Overhead

Fixed facility overhead is distributed:

- Proportional allocation based on job duration
- Configured as percentage of direct costs
- Typically 15–25% for home operations, 10–15% for dedicated facilities

## Cost Report

Navigate to the **Cost Report** sheet to see:

- All jobs (completed and in-progress)
- Detailed cost breakdown per job
- Month-to-date totals
- Average cost per job type
- Profitability trends

## Example

**Job: Custom D&D Miniatures (100 units)**

| Category | Calculation | Cost |
|----------|-------------|------|
| Material | 2.5 kg × $15/kg | $37.50 |
| Machine | 8 hrs × $2.50/hr | $20.00 |
| Labor | 4 hrs × $12/hr | $48.00 |
| Overhead (20%) | $37.50 × 0.20 | $7.50 |
| **Total Cost** | | **$113.00** |

With a 100% markup, suggested price = $226.00 ($2.26 per mini).

## Tips for Accurate Costing

1. **Weigh your materials** if possible—don't rely on estimation
2. **Log real print times**, not estimated times
3. **Include all labor**, even cleanup and failed attempts
4. **Review overhead settings** quarterly
5. **Compare actual vs. estimated costs** to refine future quotes

## Troubleshooting

**Costs seem wrong?**
- Verify machine hourly rates in the Machines sheet
- Check that material costs are up-to-date
- Ensure overhead % is realistic for your operation

**Missing jobs from report?**
- Confirm jobs are marked "Completed" (not Draft)
- Check that all required fields are filled in

---

Accurate costing is the foundation of sustainable profitability.
