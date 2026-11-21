export const industryData = {
  "manufacturing": {
    name: "Manufacturing",
    seoTitle: "Odoo Manufacturing ERP Solutions | Syncore Infotech Solutions",
    seoDescription: "Manufacturing ERP solutions using Odoo Manufacturing, Inventory, Quality and Maintenance. Master your BOMs, Work Orders, and Production Planning.",
    overview: "Modern manufacturing requires tight control over the entire production lifecycle. Odoo's Manufacturing (MRP) suite unifies planning, execution, and tracking into a single ecosystem. By natively integrating with Inventory and Quality, it eliminates data silos and provides real-time visibility into shop floor operations, work center capacities, and supply chain logistics.",
    challenges: [
      "Inaccurate inventory levels leading to production bottlenecks and stockouts.",
      "Complex, multi-level Bills of Materials (BOM) that are difficult to track across subassemblies.",
      "Lack of real-time visibility into work center utilization and Overall Equipment Effectiveness (OEE).",
      "Disconnected quality control checks that fail to stop defective products from shipping.",
      "Manual and inefficient production scheduling and resource capacity planning."
    ],
    kpis: [
      "Reduce Production Delays",
      "Improve Inventory Accuracy",
      "Optimize Work Center Utilization",
      "Reduce Production Costs"
    ],
    recommendedModules: [
      { name: "Manufacturing", reason: "Manages Multi-level BOMs, Work Orders, Routing, and Production Planning." },
      { name: "Inventory", reason: "Real-time stock valuation, serial/lot tracking, and automated replenishment." },
      { name: "Purchase", reason: "Automated RFQs based on minimum stock rules and MRP requirements." },
      { name: "Quality", reason: "Enforces Quality Control Points and alerts during routing steps." },
      { name: "Maintenance", reason: "Tracks preventive and corrective maintenance requests for Work Centers." },
      { name: "Accounting", reason: "Real-time manufacturing cost analysis including overhead and direct labor." }
    ],
    workflow: [
      "Sales Order",
      "MRP Planning",
      "Work Orders",
      "Quality Checks",
      "Inventory Update",
      "Accounting"
    ],
    benefits: [
      "End-to-End Traceability: Track every component from vendor delivery to final product with complete serial/lot tracking.",
      "Just-in-Time Production: Automated procurement and manufacturing rules ensure materials arrive exactly when needed.",
      "Dynamic Master Production Schedule (MPS): Accurately forecast demand and balance it against production capacity.",
      "Seamless Subcontracting: Send raw materials to subcontractors and receive finished goods effortlessly within the MRP workflow."
    ],
    screenshots: [
      "Manufacturing Dashboard",
      "Multi-level BOM Structure",
      "Work Center Operations",
      "MRP Master Production Schedule",
      "Production Cost Analysis"
    ],
    customDev: [
      "IoT Integration for Machine Data",
      "Advanced PLC / SCADA sync",
      "Custom Shop Floor Tablets"
    ],
    faqs: [
      { q: "How does Odoo handle Multi-level BOMs?", a: "Odoo handles complex hierarchical BOMs seamlessly. When a production order is generated, Odoo can automatically trigger child manufacturing orders for subassemblies or create purchase orders for required raw materials." },
      { q: "Can Odoo manage subcontracting?", a: "Yes. Odoo allows you to configure a BOM for subcontracting. You can track the raw materials sent to the subcontractor, receive the finished product, and process the vendor bill in a unified workflow." },
      { q: "Can Odoo integrate quality checks into production?", a: "Absolutely. The Quality module lets you set up Quality Control Points at specific steps in a routing. Workers are prompted to pass/fail, measure, or take a picture before proceeding to the next step." }
    ],
    relatedIndustries: ["trading-distribution", "retail-pos"],
    relatedModules: ["Manufacturing", "Inventory", "Purchase", "Quality"]
  },

  "retail-pos": {
    name: "Retail & POS",
    seoTitle: "Odoo Retail & POS ERP Solutions | Syncore Infotech Solutions",
    seoDescription: "Seamless multi-store retail solutions using Odoo POS, Inventory, and CRM. Real-time stock synchronization and unified customer loyalty.",
    overview: "Retailers today need omnichannel capabilities to stay competitive. Odoo's Point of Sale (POS) is designed to be fully integrated with Inventory, eCommerce, and Accounting. It works both online and offline, ensuring that your checkout lines never stop moving, while providing deep insights into sales trends, stock movements, and customer behavior across multiple locations.",
    challenges: [
      "Disconnected POS and inventory systems causing overselling and stock discrepancies.",
      "Inability to manage loyalty programs and gift cards uniformly across physical and online stores.",
      "Slow checkout experiences due to clunky software and unreliable network connections.",
      "Difficulty tracking performance and profitability across different retail locations."
    ],
    kpis: [
      "Increase Sales per Square Foot",
      "Reduce Stockouts and Overstock",
      "Improve Customer Retention",
      "Centralize Multi-store Operations"
    ],
    recommendedModules: [
      { name: "POS", reason: "User-friendly, offline-capable terminal for retail transactions." },
      { name: "Inventory", reason: "Real-time stock adjustments the moment a sale is completed." },
      { name: "Sales", reason: "Omnichannel integration for B2B wholesale and B2C retail." },
      { name: "CRM", reason: "Tracks customer purchase history for targeted marketing." },
      { name: "Website & eCommerce", reason: "Unified backend for both brick-and-mortar and online sales." }
    ],
    workflow: [
      "Customer Walk-in",
      "Barcode Scanning",
      "Loyalty / Discount Applied",
      "Payment Processing",
      "Real-time Inventory Sync",
      "Automated Journal Entry"
    ],
    benefits: [
      "Offline Resilience: Odoo POS remains operational even if the internet goes down, syncing data automatically upon reconnection.",
      "Unified Loyalty Programs: Reward customers with points, discounts, or gifts that are applicable in-store and online.",
      "Advanced Variant Management: Easily handle matrices of colors, sizes, and attributes for clothing and retail goods.",
      "Multi-Company & Multi-Store: Manage hundreds of branches with centralized control over pricing, promotions, and inventory."
    ],
    screenshots: [
      "POS Terminal Interface",
      "Multi-store Inventory Dashboard",
      "Loyalty Program Configuration",
      "Daily Sales Report",
      "Product Variant Matrix"
    ],
    customDev: [
      "Custom Payment Gateway Integrations",
      "Hardware Integrations (Weighing Scales, Displays)",
      "Self-Checkout Kiosk Interfaces"
    ],
    faqs: [
      { q: "Can Odoo manage multiple stores?", a: "Yes, Odoo natively supports multi-company and multi-warehouse setups, allowing you to track inventory, revenue, and expenses separately for each location while maintaining centralized reporting." },
      { q: "Does Odoo support loyalty programs?", a: "Yes, the Loyalty module lets you create point-based systems, BOGO offers, discount codes, and gift cards that work seamlessly across POS and eCommerce." },
      { q: "Can POS work offline?", a: "Odoo POS runs in the browser cache. If the internet disconnects, the POS continues to process transactions. Once the connection is restored, it synchronizes all tickets with the backend database automatically." }
    ],
    relatedIndustries: ["trading-distribution", "manufacturing"],
    relatedModules: ["POS", "Inventory", "Sales", "eCommerce"]
  },

  "trading-distribution": {
    name: "Trading & Distribution",
    seoTitle: "Odoo Trading & Distribution ERP Solutions | Syncore Infotech Solutions",
    seoDescription: "Optimize supply chain, vendor management, and warehousing with Odoo Inventory, Purchase, and Sales modules.",
    overview: "Efficiency in trading and distribution relies on rapid inventory turnover, optimized logistics, and precise margins. Odoo offers a robust warehouse management system (WMS) utilizing double-entry inventory. Paired with intelligent purchasing rules and powerful sales distribution capabilities, it ensures the right products are always in the right place, minimizing carrying costs and maximizing fulfillment speed.",
    challenges: [
      "Complex supply chains requiring constant manual intervention for purchasing and replenishment.",
      "Lack of traceability for batches, expiration dates, and serial numbers.",
      "Inefficient picking, packing, and shipping processes in the warehouse.",
      "Difficulties in managing drop-shipping, cross-docking, and complex logistical routes."
    ],
    kpis: [
      "Increase Order Fill Rate",
      "Reduce Order Cycle Time",
      "Optimize Inventory Turnover",
      "Decrease Logistics Costs"
    ],
    recommendedModules: [
      { name: "Inventory", reason: "Advanced WMS with routes, push/pull rules, and multi-warehouse support." },
      { name: "Purchase", reason: "Vendor management, RFQs, and purchase agreements (blanket orders)." },
      { name: "Sales", reason: "Margin analysis, pricelists, and complex quotation management." },
      { name: "Barcode", reason: "Streamlines warehouse operations (picking, packing, inventory counts)." },
      { name: "Accounting", reason: "Three-way matching and landed costs calculation." }
    ],
    workflow: [
      "Reordering Rule Triggered",
      "Automated RFQ",
      "Purchase Order Confirmed",
      "Warehouse Receipt (Barcode)",
      "Sales Order",
      "Pick/Pack/Ship Routing"
    ],
    benefits: [
      "Smart Replenishment: Minimum stock rules and Make-to-Order (MTO) logic automate procurement, reducing stockouts.",
      "Landed Costs: Accurately calculate the true cost of goods by incorporating shipping, customs, and insurance into inventory valuation.",
      "Advanced Routing: Configure cross-docking, drop-shipping, and multi-step delivery routes directly in the inventory settings.",
      "Lot & Serial Number Traceability: Complete upstream and downstream traceability for recalls and expiration date (FEFO) management."
    ],
    screenshots: [
      "Inventory Replenishment Dashboard",
      "Warehouse Routing Map",
      "Barcode Scanner Interface",
      "Landed Cost Valuation",
      "Vendor Pricelists"
    ],
    customDev: [
      "3PL Integrations",
      "Custom EDI for Vendor Communication",
      "Advanced Shipping Provider APIs"
    ],
    faqs: [
      { q: "How does Odoo handle drop-shipping?", a: "Odoo has a native drop-shipping route. When a sales order is confirmed, it automatically generates an RFQ to the vendor with instructions to ship directly to the customer, bypassing your warehouse." },
      { q: "Can Odoo manage landed costs?", a: "Yes. You can allocate freight, customs, insurance, and other charges to the valuation of your received inventory based on weight, volume, quantity, or cost." },
      { q: "Does Odoo support barcode scanners?", a: "Yes, the Odoo Barcode app provides a dedicated interface optimized for mobile barcode scanners to process receipts, internal transfers, and delivery orders rapidly." }
    ],
    relatedIndustries: ["manufacturing", "retail-pos"],
    relatedModules: ["Inventory", "Purchase", "Sales", "Accounting"]
  },

  "agriculture": {
    name: "Agriculture",
    seoTitle: "Odoo Agriculture ERP Solutions | Syncore Infotech Solutions",
    seoDescription: "Manage farmer databases, procurement, and supply chains using Odoo Enterprise tailored for the Agriculture sector.",
    overview: "Agribusinesses face unique challenges such as managing thousands of decentralized suppliers (farmers), ensuring crop quality, and dealing with perishable inventory. By tailoring Odoo's CRM, Purchase, and Quality modules, businesses can create a unified platform to manage farmer registrations, track harvest yields, streamline collection center operations, and ensure full compliance and traceability from farm to fork.",
    challenges: [
      "Managing vast databases of smallholder farmers and tracking their historical yields and quality.",
      "Inefficient manual processes at decentralized collection centers leading to data loss and delayed payments.",
      "Lack of traceability for organic or specialized crops, making certification difficult.",
      "Complex vendor payment structures based on varying crop grades and moisture levels."
    ],
    kpis: [
      "Improve Procurement Traceability",
      "Reduce Spoilage and Waste",
      "Accelerate Farmer Payouts",
      "Increase Quality Control Compliance"
    ],
    recommendedModules: [
      { name: "CRM", reason: "Acts as a Farmer Registration and Database Management system." },
      { name: "Purchase", reason: "Manages procurement tracking, vendor bills, and contract farming agreements." },
      { name: "Inventory", reason: "Handles perishable stock, batch tracking, and warehouse management." },
      { name: "Quality", reason: "Logs inspection data (e.g., moisture, grade) at collection centers." },
      { name: "Accounting", reason: "Streamlines vendor payments and complex agricultural subsidies." }
    ],
    workflow: [
      "Farmer Registration",
      "Harvest Procurement",
      "Quality Inspection",
      "Warehouse Receipt",
      "Grading & Batching",
      "Vendor Payment"
    ],
    benefits: [
      "Farm-to-Fork Traceability: Use lot tracking to trace final products back to the specific farmer and collection center.",
      "Quality-Based Pricing: Seamlessly link quality inspection results to purchase orders to adjust vendor payouts based on crop grade.",
      "Decentralized Operations: Web-based architecture allows remote collection centers to log data in real-time, even on mobile devices.",
      "Contract Farming Management: Track advances, inputs (seeds, fertilizers) provided to farmers, and deduct them during final harvest procurement."
    ],
    screenshots: [
      "Farmer Database (CRM)",
      "Collection Center Dashboard",
      "Procurement Workflow",
      "Crop Quality Inspection",
      "Inventory Batch Tracking"
    ],
    customDev: [
      "Farmer Management Systems (FMS)",
      "Mobile Apps for Field Agents",
      "SMS Integration for Farmer Notifications"
    ],
    faqs: [
      { q: "Can Odoo manage farmer databases?", a: "Yes, by adapting the Contacts and CRM modules, you can maintain comprehensive profiles for farmers, including land size, crop types, GPS coordinates, and historical yield data." },
      { q: "Can procurement be automated?", a: "Yes. Using purchase agreements and customized workflows, collection centers can rapidly generate receipts, trigger quality checks, and calculate payments automatically." },
      { q: "Can collection centers be tracked separately?", a: "Absolutely. Each collection center can be configured as a distinct Warehouse or Location, providing granular visibility into stock levels and operations per site." }
    ],
    relatedIndustries: ["manufacturing", "trading-distribution"],
    relatedModules: ["CRM", "Purchase", "Inventory", "Quality"]
  },

  "healthcare": {
    name: "Healthcare",
    seoTitle: "Odoo Healthcare ERP Solutions | Syncore Infotech Solutions",
    seoDescription: "Transform hospital management and clinical workflows with Odoo. Patient registration, appointment scheduling, and medical inventory.",
    overview: "Healthcare institutions require absolute precision, strict compliance, and seamless patient experiences. Odoo provides a robust foundation for Hospital Management Systems (HMS). By leveraging core modules like CRM for patient data, Calendar for appointments, and Inventory for pharmacy management, clinics and hospitals can unify their clinical and administrative operations, reducing overhead and improving patient care.",
    challenges: [
      "Fragmented systems for patient records, billing, and pharmacy leading to data duplication.",
      "Inefficient appointment scheduling causing long wait times and poor patient experiences.",
      "Inaccurate medical inventory resulting in expired medications or critical stockouts.",
      "Complex insurance and patient billing workflows."
    ],
    kpis: [
      "Reduce Patient Wait Times",
      "Improve Appointment Adherence",
      "Eliminate Medical Stockouts",
      "Accelerate Billing Cycles"
    ],
    recommendedModules: [
      { name: "CRM & Contacts", reason: "Manages Patient Registration, Medical History records, and communication." },
      { name: "Calendar", reason: "Handles Appointment Scheduling and Doctor availability." },
      { name: "Inventory", reason: "Manages Pharmacy stock, FEFO tracking for medications, and lab supplies." },
      { name: "Accounting", reason: "Invoicing, Insurance claims processing, and revenue tracking." },
      { name: "Documents", reason: "Securely stores patient consent forms, lab reports, and prescriptions." }
    ],
    workflow: [
      "Patient Registration",
      "Appointment Booking",
      "Consultation / Lab Workflow",
      "Pharmacy Prescription",
      "Billing & Insurance",
      "Follow-up"
    ],
    benefits: [
      "Unified Patient Records: Access demographic data, past appointments, invoices, and medical documents from a single patient profile.",
      "FEFO Inventory Management: Ensure First-Expired-First-Out logic is strictly enforced for pharmaceuticals, reducing waste and ensuring safety.",
      "Automated Appointment Reminders: Reduce no-shows through automated SMS or Email integrations linked to the scheduling system.",
      "Integrated Billing: Generate consolidated invoices covering consultation fees, laboratory tests, and pharmacy purchases instantly."
    ],
    screenshots: [
      "Patient Registration Profile",
      "Doctor Appointment Calendar",
      "Pharmacy Inventory Tracking",
      "Laboratory Workflow",
      "Medical Billing Overview"
    ],
    customDev: [
      "Complete Hospital Management System (HMS) Apps",
      "Patient Portals for self-service booking",
      "HL7 / DICOM Integrations"
    ],
    faqs: [
      { q: "Is Odoo suitable for Healthcare?", a: "Yes, Odoo's highly customizable framework makes it an excellent foundation for building comprehensive healthcare and clinic management solutions, capable of handling everything from scheduling to complex medical inventory." },
      { q: "Can Odoo manage pharmacy inventory?", a: "Yes, Odoo's advanced Inventory module tracks lots, serial numbers, and expiration dates natively, making it perfect for stringent pharmaceutical requirements." },
      { q: "Can patients book their own appointments?", a: "Yes, by utilizing the Appointments and Website modules, you can deploy a patient portal where users can view doctor availability and book consultations online." }
    ],
    relatedIndustries: ["professional-services"],
    relatedModules: ["CRM", "Inventory", "Accounting", "Documents"]
  },

  "professional-services": {
    name: "Professional Services",
    seoTitle: "Odoo Professional Services ERP | Syncore Infotech Solutions",
    seoDescription: "Optimize project management, resource allocation, and service billing with Odoo Timesheets, Projects, and CRM.",
    overview: "For IT agencies, consulting firms, and legal practices, time is money. Odoo's service suite provides absolute transparency over resource utilization, project profitability, and client billing. It seamlessly bridges the gap between sales (CRM), execution (Projects/Timesheets), and finance (Accounting), ensuring every billable hour is captured and invoiced accurately.",
    challenges: [
      "Tracking billable hours accurately across distributed teams and multiple projects.",
      "Poor visibility into project profitability and budget overruns.",
      "Disjointed processes moving from accepted sales proposals to project execution.",
      "Managing recurring contracts, SLAs, and customer support tickets."
    ],
    kpis: [
      "Increase Billable Utilization Rate",
      "Improve Project Profit Margin",
      "Reduce Invoice Generation Time",
      "Improve SLA Resolution Times"
    ],
    recommendedModules: [
      { name: "Projects", reason: "Kanban boards for task management, resource allocation, and milestone tracking." },
      { name: "Timesheets", reason: "Track employee hours spent on specific tasks and projects." },
      { name: "Sales", reason: "Sell services, retainers, and automatically generate projects from confirmed orders." },
      { name: "Helpdesk", reason: "Manage customer support tickets, SLAs, and track resolution time." },
      { name: "Accounting", reason: "Invoice clients based on ordered quantities, delivered quantities, or timesheets." }
    ],
    workflow: [
      "Sales Order (Service)",
      "Auto-Create Project/Task",
      "Resource Allocation",
      "Timesheet Entry",
      "SLA & Support (Helpdesk)",
      "Timesheet Billing"
    ],
    benefits: [
      "Sales to Project Automation: Configure Odoo to automatically create a Project or Task the moment a Sales Order for a service is confirmed.",
      "Precise Profitability Analysis: Track revenue against labor costs in real-time. Odoo links employee hourly costs to timesheets for instant margin visibility.",
      "Flexible Billing Rules: Invoice clients based on fixed price milestones, prepaid hours (retainers), or standard time and materials.",
      "Integrated Helpdesk: Convert incoming emails into support tickets, track SLAs, and allow agents to log billable hours directly on the ticket."
    ],
    screenshots: [
      "Project Kanban Board",
      "Timesheet Entry Grid",
      "Project Profitability Report",
      "Helpdesk SLA Dashboard",
      "Service Invoicing Workflow"
    ],
    customDev: [
      "Custom Resource Scheduling Matrices",
      "Client Portals for Project Tracking",
      "Integration with Dev Tools (Jira, GitHub)"
    ],
    faqs: [
      { q: "How does Odoo handle service billing?", a: "Odoo supports multiple billing methods: Fixed Price (milestones), Time & Material (billing based on approved timesheets), and Retainers (prepaid blocks of hours)." },
      { q: "Can Odoo track employee profitability?", a: "Yes. By defining an hourly cost for each employee, Odoo calculates the exact labor cost of a project based on timesheets, comparing it against the invoiced amount to show true profitability." },
      { q: "Does the Helpdesk module support SLAs?", a: "Yes. You can define Service Level Agreement (SLA) policies based on ticket priority and type, ensuring your team hits resolution targets." }
    ],
    relatedIndustries: ["healthcare"],
    relatedModules: ["Projects", "Timesheets", "Helpdesk", "Sales"]
  }
};
