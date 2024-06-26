---
title: SEPA Direct Debit
description: User Manual for the Aadvanto Billing System.
sidebar:
  order: 60
---

The SEPA Direct Debit menu allows you to manage SEPA direct debit transactions efficiently. Our billing system integrates with FinXP to handle these transactions.

### Accessing SEPA Direct Debit

1. **Navigate to SEPA Direct Debit:**
   - Go to `Bank` in the sidebar menu.
   - Select `SEPA Direct Debit`.

   ![SEPA Direct Debit Menu]

### Generating SEPA Direct Debit Files

1. **Choose Method to Generate File:**
   - In the SEPA Direct Debit menu, select `Generate File`.
   - Choose the date range: `1st - 15th`, `16th - 1st`, or `custom`.

   ![Generate File]

2. **Set Parameters:**
   - **Invoice Date:** Select the date range for the invoices.
   - **Invoice Status:** Choose between `Unpaid`, `Paid`, or `Cancelled`.
   - **Design Date:** Set the design date for the direct debit.
   - **Payment Processor:** Select `FinXP`.
   - **Direct Debit Setting:** Choose either `1` or `15` for the setting.

   ![Set Parameters]

3. **Preview and Export CSV:**
   - Click `Preview CSV` to review the file.
   - Click `Export CSV` to generate the file for upload to FinXP.

   ![Export CSV]

## Export Jobs and Instructions

### Managing Export Logs

The Export Jobs tab provides a comprehensive log of all generated SEPA direct debit files. This is essential for tracking and managing your SEPA direct debit activities. It helps ensure that all necessary transactions have been processed and allows for easy troubleshooting if issues arise.

1. **Access Export Logs**: In the SEPA Direct Debit section, select the `Export Jobs` tab. This will display a list of all generated files.
   
2. **View Exported Files**: The export log includes details such as ID, created date, design date, invoice date range, direct debit setting, payment processor, and invoice status. Reviewing this log helps maintain accurate records of all SEPA direct debit activities.

### Handling Direct Debit Instructions

The Direct Debit Instructions tab is used to manage the direct debit instructions for a specific date. This feature helps in organizing and ensuring that all direct debit instructions are correctly followed and processed.

1. **Navigate to Direct Debit Instructions**: In the SEPA Direct Debit section, select the `Direct Debit Instructions` tab.
   
2. **Select Design Date**: Choose the design date for which you want to view or export the direct debit instructions. This helps in managing specific batches of instructions efficiently.

3. **Export Instructions**: If instructions are available for the selected date, you can export them as a CSV file by clicking `Export as CSV`. This file can then be used to ensure that all direct debit instructions are correctly processed by FinXP.

## SEPA Chargebacks

SEPA Chargebacks allow you to handle refunds or returned payments from customers efficiently.

### Accessing Chargeback Import

1. **Navigate to Chargeback Import:**
   - Go to `Bank` in the sidebar menu.
   - Select `Import`.
   - Click on the `Charge Back` tab.

   ![Chargeback Import Menu]

### Importing Chargeback File

1. **Upload Chargeback File:**
   - **Company Bank Account:** Select the bank account.
   - **File Format:** Choose the file format (e.g., Chargeback XLSX).
   - Drag and drop the chargeback file or browse to upload it.

   ![Upload Chargeback File]

2. **Test and Import:**
   - Click `Test Import` to check the file format.
   - Click `Import` to process the chargebacks.

   ![Test and Import]

### Processing Chargebacks

Once the chargeback file is imported, the system will:
- Mark the corresponding invoices as unpaid.
- Send necessary reminders or notifications to the customers regarding their payment status.

## Importance of SEPA Direct Debit and Chargebacks

### Efficiency in Transactions

Using SEPA Direct Debit ensures that all direct debit transactions are handled smoothly and automatically through FinXP. This reduces the manual workload and minimizes errors in financial transactions.

### Handling Refunds and Returned Payments

SEPA Chargebacks are crucial for managing refunds or returned payments. By importing chargeback files, the system automatically updates the invoice statuses and sends reminders to customers, ensuring that all financial records are accurate and up-to-date.

## Conclusion

The SEPA Direct Debit and Chargeback features in our billing system streamline the process of managing direct debit transactions and handling chargebacks. By integrating with FinXP, our system ensures efficient and accurate processing, helping you maintain smooth financial operations.

For further details or assistance, refer to the respective sections in the user manual or contact our support team.

![SEPA Process]

This extended Markdown documentation includes more detailed explanations and additional images to provide a thorough understanding of the SEPA Direct Debit and Chargeback features in your billing system.