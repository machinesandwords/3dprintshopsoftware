---
sidebar_position: 1
---

# API Reference

Integration options for advanced users.

## Overview

While 3D Print Shop Software is primarily spreadsheet-based, the file structure and naming conventions support integration with external systems.

## File Format & Structure

### Workbook Organization

The spreadsheet follows a standard structure:

- **Configuration**: Settings and global parameters
- **Machines**: Equipment inventory
- **Materials**: Filament/resin stock
- **Jobs**: Print orders and status
- **Costing**: Detailed cost calculations
- **Pricing**: Quote templates and rates
- **Quotes**: Generated customer quotes
- **Maintenance**: Service records
- **Reports**: Summary dashboards

### Data Tables

Each sheet contains data in consistent table format:

- **Header Row**: Column names (row 1)
- **Data Rows**: Entries starting from row 2
- **Named Ranges**: Key tables are Excel named ranges for easy reference

## Integration Patterns

### Reading Data (Import)

Export data from 3D Print Shop Software for use in other systems:

1. Select the desired sheet (e.g., "Jobs")
2. Use Excel's **Share** or **Export** feature
3. Save as CSV, JSON, or XML for your external system
4. Parse the data in your integration

**Example**: Export the Jobs sheet to a JSON file for analysis in a custom dashboard.

### Writing Data (Export)

Import data from external systems into 3D Print Shop Software:

1. Prepare your data in the same structure (matching column names)
2. Copy rows into the appropriate sheet
3. Verify data types and formatting
4. The system auto-calculates formulas (costs, prices, etc.)

**Example**: Bulk-import a customer list from your CRM into the Customers sheet.

## Common Integration Scenarios

### Sync with Accounting Software

1. Export the Cost Report sheet monthly
2. Import line items into QuickBooks or Xero
3. Reconcile manually or via automated sync

### Connect to Slack

1. Configure a Slack webhook in your workflow tool (Zapier, IFTTT, etc.)
2. When a job's status changes to "Completed," trigger a Slack notification
3. Alert your team without manual updates

### Dashboard Integration

1. Export Jobs and Costing sheets daily
2. Feed into BI tools (Tableau, Google Data Studio, Power BI)
3. Create real-time dashboards visible to your team

### Customer Portal

1. Set up a simple web form for customers to check job status
2. Query the Jobs sheet daily and update the portal
3. Customers see estimated completion without contacting you

## Data Interchange Formats

The system natively supports:

| Format | Use Case |
|--------|----------|
| Excel (.xlsx) | Primary format—full fidelity |
| CSV (.csv) | External system integration |
| JSON | REST API endpoints, webhooks |
| XML | Legacy system integration |

## API-Like Access Patterns

### Query Jobs by Status

```
SELECT * FROM Jobs WHERE Status = 'In Progress'
```

Returns all active printing jobs for your dashboard.

### Calculate Monthly Revenue

```
SELECT SUM(Price) FROM Quotes WHERE Date >= '2026-05-01' AND Date <= '2026-05-31'
```

Useful for financial reporting.

### Alert on Low Inventory

```
SELECT * FROM Materials WHERE CurrentStock < ReorderLevel
```

Trigger notifications for your procurement team.

### Maintenance Schedule

```
SELECT * FROM Machines WHERE NextMaintenanceDate <= TODAY() + 7
```

List machines due for service in the next week.

## Webhooks & Automations

If you use automation tools (Zapier, Make, IFTTT), you can:

1. **Trigger on new jobs**: "When a job is created in 3D Print Shop Software, send an email"
2. **Update external systems**: "When a job status changes to Completed, update Shopify inventory"
3. **Generate alerts**: "When a quote exceeds $500, notify the owner"

Most automations require:

- A shared cloud folder (Google Drive, OneDrive, Dropbox)
- The automation platform to monitor the file for changes
- Actions to trigger on specific conditions

## Limitations & Considerations

- **Real-time sync**: Updates occur on the next file sync, not instantly
- **Concurrent edits**: Only one user at a time in the spreadsheet (use cloud backup)
- **Data validation**: You're responsible for data quality in manual imports
- **Formula integrity**: Don't delete or rename sheet columns—formulas depend on them

## Getting Help

For integration questions or to discuss custom workflows:

- Check the [Getting Started guide](../getting-started/installation)
- Review examples in the Maintenance or Cost Report sheets
- Reach out to our community on r/3dprintingbusiness

---

Integration expands what's possible with 3D Print Shop Software.
