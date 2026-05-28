---
sidebar_position: 4
---

# Maintenance Tracking

Keep your equipment running smoothly.

## Overview

Schedule preventive maintenance, log actual maintenance events, and track repair costs.

## Machine Maintenance Schedule

### Setting Up Maintenance

In the **Machines** sheet, define for each printer:

- **Maintenance Interval**: Days between required maintenance (e.g., 180 days for annual calibration)
- **Last Maintenance Date**: When was the most recent service?
- **Next Due Date**: Auto-calculated as Last + Interval

### Example Schedule

| Machine | Model | Interval | Last Service | Next Due | Status |
|---------|-------|----------|--------------|----------|--------|
| Bambu-P1S-01 | Bambu Lab P1S | 180 days | 2025-11-15 | 2026-05-14 | ✅ Current |
| Bambu-P1P-02 | Bambu Lab P1P | 180 days | 2025-10-20 | 2026-04-19 | ⚠️ Due Soon (7 days) |
| Form3-01 | Formlabs Form 3 | 90 days | 2026-02-01 | 2026-05-02 | 🔴 Overdue |

## Scheduled Maintenance Types

### Routine (Preventive)

Performed regularly to prevent failure:

- **Nozzle cleaning/replacement**
- **Bed leveling & calibration**
- **Extruder tension adjustment**
- **Resin vat cleaning** (SLA/DLP)
- **Filter replacement**
- **Software updates**

### Reactive (Corrective)

Performed after a failure:

- **Heater repair**
- **Stepper motor replacement**
- **Print head unclogging**
- **Hardware failure diagnosis**

## Maintenance Log

### Recording a Maintenance Event

1. Navigate to the **Maintenance Log** sheet
2. Click "New Entry"
3. Fill in:
   - **Date**: When was work performed?
   - **Machine**: Which printer?
   - **Type**: Routine / Reactive
   - **Description**: What was done? (e.g., "Replaced nozzle, cleaned hot end")
   - **Hours Spent**: Duration of work
   - **Cost**: Parts + labor (if outsourced)
   - **Technician**: Who did the work? (Your name, or external service)
   - **Status**: In Progress / Completed / Scheduled

4. When complete, mark as "Completed"
5. System auto-updates "Last Maintenance Date" for that machine

### Example Log Entry

| Field | Entry |
|-------|-------|
| Date | 2026-05-15 |
| Machine | Bambu-P1S-01 |
| Type | Preventive |
| Description | Annual calibration check, nozzle replacement, bed leveling |
| Hours | 1.5 |
| Cost | $45 (nozzle) + $0 (labor) = $45 |
| Technician | Self |
| Status | Completed |

## Maintenance Costs & Downtime

### Cost Tracking

The **Maintenance Report** shows:

| Metric | Use |
|--------|-----|
| Total Annual Cost | Sum of all maintenance expenses |
| Cost per Machine | Identify problem equipment |
| Cost as % of Revenue | Benchmark: typically 5–15% for healthy operations |
| Downtime Hours | Machine unavailable for production |

### Downtime Impact

When a machine is down for maintenance:

1. Mark it as **Offline** in the Machines sheet
2. Jobs scheduled for that machine are flagged
3. System suggests reassigning to available printers
4. Downtime is logged and impacts overall facility efficiency metrics

## Predictive Alerts

The system proactively alerts you:

- ⚠️ **Yellow**: Maintenance due within 2 weeks
- 🔴 **Red**: Maintenance overdue
- 🟡 **Orange**: Machine has exceeded cost threshold for its class

Example: "Bambu-P1P-02 maintenance overdue by 2 weeks (due: 2026-04-19)"

## Third-Party Service Tracking

For outsourced maintenance (e.g., professional servicing):

- **Vendor Name**: Service provider
- **Contact Info**: Phone/email for scheduling
- **Last Service Date**: When did they last service?
- **Service Cost**: What do they charge?
- **Warranty Coverage**: Any guarantees?
- **Service Agreement**: Annual contract? Pay-per-visit?

Log these the same way as self-service maintenance.

## Analytics & Insights

Review the **Maintenance Dashboard** to:

- **Identify reliability trends**: Which machines fail most often?
- **Plan capital replacement**: Is it time to retire an aging printer?
- **Budget for the next year**: What maintenance costs are predictable?
- **Optimize intervals**: Are maintenance schedules too frequent? Too sparse?

Example insight: "Nozzle replacement is $15/unit. You've replaced 12 nozzles this year = $180. Consider preventive nozzle swaps every 60 days instead of reactive replacements."

## Best Practices

1. **Keep detailed logs** — vague entries ("fixed printer") make trend analysis impossible
2. **Do preventive maintenance** — it's always cheaper than emergency repairs
3. **Update machine status immediately** — downtime impacts job scheduling
4. **Batch maintenance** — schedule multiple machines in one service window if possible
5. **Track actual vs. scheduled maintenance** — refine your intervals based on data

## Troubleshooting

**Maintenance not triggering alerts?**
- Verify that "Maintenance Interval" is set in the Machines sheet
- Check that "Last Maintenance Date" is recent and valid
- Confirm email notifications are enabled

**Downtime seems excessive?**
- Review the Downtime Report sheet
- Identify your most problematic machines
- Consider upgrading or retiring them

---

Maintenance tracking transforms hunches into data-driven decisions.
