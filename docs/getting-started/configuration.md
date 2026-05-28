---
sidebar_position: 3
---

# Configuration

Set up 3D Print Shop Software for your specific operation.

## Facility Settings

In the **Configuration** sheet, define:

### Basic Information
- Facility Name
- Location
- Primary Contact
- Business Tax ID (optional)

### Operating Hours
- Standard weekday hours
- Weekend hours
- Holiday schedule

## Machine Inventory

Add each printer/machine to the "Machines" sheet:

| Field | Description |
|-------|-------------|
| Machine ID | Unique identifier (e.g., `Bambu-P1S-01`) |
| Model | Full model name |
| Acquisition Cost | Purchase price (for ROI tracking) |
| Hourly Rate | Cost per hour of operation |
| Max Concurrent Jobs | How many prints simultaneously |
| Maintenance Interval | Days between scheduled maintenance |
| Status | Active / Retired / Maintenance |

## Material Setup

Populate the "Materials" sheet with your stock:

| Field | Description |
|-------|-------------|
| Material ID | Unique code (e.g., `PLA-White-1kg`) |
| Material Type | PLA, ABS, Resin, etc. |
| Color | Color variant |
| Unit Cost | Price per kilogram or liter |
| Current Stock | Quantity on hand |
| Reorder Level | Alert threshold |
| Supplier | Where you source from |

## Labor Rates

Configure labor costs in the "Labor" sheet:

- **Standard Rate**: Your typical hourly rate
- **Premium Rate**: Overtime or specialist work
- **Post-Processing Rate**: Finishing, cleanup, etc.
- **Design/Engineering Rate**: CAD work or consultation

## Pricing Rules

Set your markup and profit margins:

- **Base Markup %**: Applied to all jobs (e.g., 50% = 1.5x cost)
- **Specialty Markup %**: Premium materials or complex jobs
- **Minimum Job Price**: Floor for very small jobs
- **Discount Policy**: Max discount % for bulk orders

## Customer Risk Settings

Define risk flags for customer management:

- **Late Payment Threshold**: Days overdue to flag
- **Chargeback History**: Trigger if present
- **Design Complexity Warning**: Trigger for complex geometries
- **Budget Creep**: Flag if job exceeds quote by X%

## Integration Settings

Configure external connections:

- **Email Notifications**: Send job alerts
- **Backup Location**: Cloud storage path
- **Export Format**: Default quote template

## Saving Your Configuration

Once complete, press **Ctrl+S** to save. Your settings are now the default for all new jobs.

## Resetting to Defaults

To restore factory settings:

1. Right-click the "Configuration" sheet tab
2. Select "Reset to Defaults"
3. Confirm the prompt

⚠️ This will erase your custom settings.

---

**Pro Tip**: Export your configuration quarterly as a backup.
