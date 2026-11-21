// #icons
import accountingIcon from '../assets/account_icon.png';
import salesIcon from '../assets/Sale.png';
import crmIcon from '../assets/CRM.png';
import inventoryIcon from '../assets/Inventory.png';
import manufacturingIcon from '../assets/Manufacturing.png';
import purchaseIcon from '../assets/Purchase.png';
import qualityIcon from '../assets/Quality.png';
import payrollIcon from '../assets/Payroll.png';
import ecommerceIcon from '../assets/E Commerce.png';
import websiteIcon from '../assets/website.png';
import posIcon from '../assets/POS.png';
import helpdeskIcon from '../assets/Helpdesk.png';
import projectIcon from '../assets/Project.png';
import timesheetsIcon from '../assets/Timesheets.png';
import documentsIcon from '../assets/Documents.png';
import marketingIcon from '../assets/Marketing Automation.png';
import planningIcon from '../assets/appointment.png';
import discussIcon from '../assets/Discuss.png';
import recruitmentIcon from '../assets/Recruitment.png';
import attendanceIcon from '../assets/Attendance.png';
import timeOffIcon from '../assets/Time Off.png';
import expenseIcon from '../assets/Expense.png';
import appraisalIcon from '../assets/Appraisal.png';
import employeesIcon from '../assets/Employees.png';
import fieldServiceIcon from '../assets/Field Services.png';
import maintenanceIcon from '../assets/Maintanace.png';
import rentalIcon from '../assets/Renting.png';
import spreadsheetIcon from '../assets/Spreadsheet.webp';
import studioIcon from '../assets/Studio.png';
import fleetIcon from '../assets/Fleet.png';

// #sale
import saledashboard from '../assets/Sale Dashboard.png';
import pricelist from '../assets/Pricelist Configuration.png';
import saleanalysis from '../assets/Sales Analysis.png';
import customersale from '../assets/CustomerSale.png';
import quotation from '../assets/Quotation.png';

// #CRM
import pipeline from '../assets/CRMPipeline.png';
import oppurtunity from '../assets/Oppurtunity.png';
import activity from '../assets/Activity.png';
import forecast from '../assets/Forecast CRM.png';
import lead from '../assets/Lead.png';

// #Inventory
import Inventory from '../assets/Inventory Dashboard.png';
import barcode from '../assets/Barcode.png';
import traceability from '../assets/Traceability.png';
import reodering from '../assets/Reodering.png';
import realtime from '../assets/Inventory RealTime.png';

// #Purchase
import Purchase from '../assets/Purchase1.png';
import RFQ from '../assets/Purchase Dashboard.png';
import VedorPricelist from '../assets/Vedor Pricelist.png';
import PurchaseAnalysis from '../assets/Purchase Analysis.png';
import Reciepts from '../assets/Reciepts.png';

// #Manufacturing
import Manufacturing from '../assets/MRP Dashboard.png';
import BOM from '../assets/BOM.png';
import WorkCenter from '../assets/Work Center.png';
import MO from '../assets/MO.png';
import Equipement from '../assets/Equipement.png';


//#Quality
import QualityDashboard from '../assets/QualityDashboard.png';
import ControlPoints from '../assets/ControlPoints.png';
import QCAnalysis from '../assets/QCAnalysis.png';
import QCForm from '../assets/QCForm.png';

//#Payroll
import PayrollDashboard from '../assets/PayrollDashboard.png';
import SalaryStructures from '../assets/SalaryStructures.png';
import Contracts from '../assets/Contracts.png';
import Batch from '../assets/Batch.png';
import SalaryRules from '../assets/SalaryRules.png';

//#Document
import DocumentDashboard from '../assets/DocumentDashboard.png';
import DocumentTags from '../assets/DocumentTags.png';

//#Planning
import PlanningDashboard from '../assets/PlanningDashboard.png';
import ShiftTemplate from '../assets/ShiftTemplate.png';
import Role from '../assets/Role.png';
import EmployeePortal from '../assets/EmployeePortal.png';

//#Employee
import EmployeeDashboard from '../assets/EmployeeDashboard.png';
import Department from '../assets/Department.png';
import JobPosition from '../assets/JobPosition.png';
import WorkingSchedule from '../assets/WorkingSchedule.png';

//#Discuss
import DiscussDashboard from '../assets/DiscussDashboard.png';
import Channel from '../assets/Channel.png';

//#Recruitment
import RecruitmentDashboard from '../assets/RecruitmentDashboard.png';
import JobPositionTracking from '../assets/JobPositionTracking.png';
import ApplicantTracking from '../assets/ApplicantTracking.png';
import HiringReport from '../assets/HiringReport.png';
import ContractTemplates from '../assets/ContractTemplates.png';

//#Attendance
import AttendanceDashboard from '../assets/AttendanceDashboard.png';
import TimeOffLedger from '../assets/TimeOffLedger.png';
import AttendanceReport from '../assets/AttendanceReport.png';

//#Time Off
import TimeOffDashboard from '../assets/TimeOffDashboard.png';
import TimeOffTypes from '../assets/TimeOffTypes.png';
import TimeOffAllocation from '../assets/TimeOffAllocation.png';

//#Fleet
import FleetDashboard from '../assets/FleetDashboard.png';
import FleetForm from '../assets/FleetForm.png';
import FleetCostAnalysis from '../assets/FleetCostAnalysis.png';
import OdoometerAnalysis from '../assets/OdoometerAnalysis.png';

//#Maintainace
import MaintananceDashboard from '../assets/MaintananceDashboard.png';
import MaintananceTracking from '../assets/MaintananceTracking.png';

//#Project
import ProjectDashboard from '../assets/ProjectDashboard.png';
import Tasks from '../assets/Tasks.png';
import ProjectRoles from '../assets/ProjectRoles.png';
import ProjectMargins from '../assets/ProjectMargins.png';
import TimesheetsEntry from '../assets/TimesheetsEntry.png';

//#Timesheet
import TimesheetDashboard from '../assets/TimesheetDashboard.png';
import Validation from '../assets/Validation.png';
import TimeSheetBill from '../assets/TimeSheetBill.png';
import TimesheetByEmployee from '../assets/TimesheetByEmployee.png';

// #Expense
import ExpenseDashboard from '../assets/ExpenseDashboard.png';
import ExpenseForm from '../assets/ExpenseForm.png';
import ExpenseProducts from '../assets/ExpenseProducts.png';
import ExpenseAnalysis from '../assets/ExpenseAnalysis.png';

//#Rental
import RentalDashboard from '../assets/RentalDashboard.png';
import RentalProducts from '../assets/RentalProducts.png';
import ScheduledRentals from '../assets/ScheduledRentals.png';
import RentalAnalysis from '../assets/RentalAnalysis.png';


import AccountingDashboard from '../assets/Accounting Dashboard.png';
import Reconcilation from '../assets/Reconcilation.png';
import Invoice from '../assets/Invoice.png';
import PLSheet from '../assets/PLSheet.png';
import COA from '../assets/COA.png';
import BalanceSheet from '../assets/BalanceSheet.png';

export const categories = [
  "All",
  "Finance",
  "Sales & CRM",
  "Operations",
  "HR",
  "Digital",
  "Productivity"
];

export const odooModulesData = [
  { 
    id: "accounting",
    name: "Accounting",
    category: "Finance",
    desc: "Manage your finances, invoicing, and reporting with ease.",
    icon: accountingIcon, 
    color: "875A7B",
    overview: "Odoo Accounting is a powerful, integrated financial management application designed to automate day-to-day transactions and simplify complex financial operations.",
    description: "Built for modern businesses, Odoo Accounting eliminates manual data entry through AI-powered invoice recognition and automatic bank synchronization. It provides a real-time, comprehensive view of your financial health with dynamic reports, dynamic dashboards, and deep integration with Sales, Inventory, and Purchase modules.",
    features: [
      "General Ledger",
      "Accounts Receivable & Payable",
      "Automatic Bank Synchronization",
      "AI-Powered Invoice Recognition",
      "Bank Reconciliation",
      "Fixed Assets Lifecycle",
      "Budget Management",
      "Dynamic Financial Reporting",
      "Tax Management & Fiscal Positions",
      "Multi-Company & Multi-Currency Accounting"
    ],
    benefits: [
      "Reduce manual data entry by up to 80% through automation.",
      "Accelerate month-end closing with real-time ledgers.",
      "Ensure compliance with localized tax engines.",
      "Improve cash flow visibility with intuitive dashboards."
    ],
    useCases: [
      "Automating vendor bill payments based on 3-way matching.",
      "Consolidating financial reports across multiple subsidiary companies.",
      "Managing complex depreciation schedules for manufacturing equipment."
    ],
    industries: [
      "Professional Services",
      "Retail",
      "Manufacturing",
      "Wholesale Distribution",
      "IT & Tech"
    ],
    faqs: [
      { q: "Does Odoo support multi-currency transactions?", a: "Yes, Odoo automatically updates exchange rates daily and handles unrealized/realized currency gains and losses." },
      { q: "Can I connect my local bank?", a: "Odoo supports synchronization with over 20,000 banks worldwide for automated reconciliation." }
    ],
    screenshots: [
      { title: "Financial Dashboard", image: AccountingDashboard },
      { title: "Bank Reconciliation", image: Reconcilation },
      { title: "Invoicing Screen", image: Invoice },
      { title: "Profit & Loss Report", image: PLSheet },
      { title: "Balance Sheet", image: BalanceSheet },
      { title: "Chart of Accounts", image: COA }
    ],
    relatedModules: ["Sales", "Purchase", "Inventory", "Payroll"]
  },
  { 
    id: "sales",
    name: "Sales",
    category: "Sales & CRM",
    desc: "Streamline quotes and sales orders efficiently.",
    icon: salesIcon, 
    color: "E46F38",
    overview: "Odoo Sales enables you to create professional quotations, manage sales orders, and streamline your entire order-to-cash workflow.",
    description: "Empower your sales team to sell smarter and faster. Odoo Sales provides an intuitive interface for drafting beautiful, interactive quotes that clients can review, sign, and pay online. With integrated pricelists, product variants, and cross-selling features, you can easily maximize revenue while maintaining complete visibility over your sales pipeline.",
    features: [
      "Interactive Quotation Builder",
      "Sales Order Management",
      "Advanced Pricelists & Discounts",
      "Product Variants Configurator",
      "Customer Portal for Signatures & Payments",
      "Subscription Management Integration",
      "Upselling & Cross-Selling Prompts",
      "Sales Warnings & Margin Analysis",
      "Automated Invoicing Rules"
    ],
    benefits: [
      "Increase win rates with professional, interactive quotations.",
      "Save time by converting quotes to orders and invoices in one click.",
      "Improve customer experience with a dedicated self-service portal.",
      "Maximize average order value through automated upselling."
    ],
    useCases: [
      "B2B wholesale quoting with tier-based pricing.",
      "Custom product configuration for specialized equipment.",
      "Automated invoicing based on delivered quantities."
    ],
    industries: [
      "Wholesale Distribution",
      "Retail",
      "Manufacturing",
      "Agencies",
      "SaaS"
    ],
    faqs: [
      { q: "Can clients sign quotes electronically?", a: "Yes, Odoo includes built-in electronic signatures so clients can approve quotes instantly from their browser." },
      { q: "How are shipping costs calculated?", a: "Odoo integrates with major carriers (FedEx, UPS, DHL) to compute shipping costs in real-time on the quote." }
    ],
    screenshots: [
      { title: "Sales Dashboard", image: saledashboard },
      { title: "Interactive Quotation", image: quotation },
      { title: "Pricelist Configuration", image: pricelist },
      { title: "Sales Analysis Report", image: saleanalysis },
      { title: "Customer Portal", image: customersale }
    ],
    relatedModules: ["CRM", "Inventory", "Accounting", "Website"]
  },
  { 
    id: "crm",
    name: "CRM",
    category: "Sales & CRM",
    desc: "Track leads, close opportunities and get accurate forecasts.",
    icon: crmIcon, 
    color: "E46F38",
    overview: "Odoo CRM helps you track leads, manage your sales pipeline, and forecast revenue with high precision.",
    description: "Organize your sales activities with a modern, drag-and-drop Kanban interface. Odoo CRM automatically logs emails, calls, and meetings, ensuring your sales team has full context on every prospect. Leverage AI-powered lead scoring and custom activity scheduling to focus on the highest-value opportunities and close deals faster.",
    features: [
      "Lead & Opportunity Management",
      "Kanban Pipeline Tracking",
      "Activity Scheduling & Reminders",
      "Email & VoIP Integration",
      "Revenue Forecasting",
      "Predictive Lead Scoring",
      "Customer Segmentation",
      "UTM Tracking for Campaigns",
      "Lost Reason Analysis"
    ],
    benefits: [
      "Ensure no lead falls through the cracks with automated follow-up reminders.",
      "Gain clear visibility into future revenue with real-time forecasting.",
      "Boost sales rep productivity through a unified communication dashboard.",
      "Improve marketing ROI by tracking lead sources accurately."
    ],
    useCases: [
      "Managing complex B2B sales cycles with multiple decision-makers.",
      "Automatically assigning leads based on territory or language.",
      "Tracking email open rates and link clicks directly within the CRM."
    ],
    industries: [
      "Professional Services",
      "Real Estate",
      "Software / IT",
      "Consulting",
      "Manufacturing"
    ],
    faqs: [
      { q: "Does it integrate with my email?", a: "Yes, Odoo integrates with Outlook and Gmail, logging emails directly to the corresponding lead or opportunity." },
      { q: "Can I customize the sales pipeline stages?", a: "Absolutely. You can create custom pipelines for different sales teams with specific, customized stages." }
    ],
    screenshots: [
      { title: "Kanban Pipeline", image: pipeline },
      { title: "Opportunity Details", image: oppurtunity },
      { title: "Activity Dashboard", image: activity },
      { title: "Revenue Forecast", image: forecast },
      { title: "Lead Analysis", image: lead }
    ],
    relatedModules: ["Sales", "Marketing Automation", "Helpdesk", "Discuss"]
  },
  { 
    id: "inventory",
    name: "Inventory",
    category: "Operations",
    desc: "Smart double-entry inventory to maximize efficiency.",
    icon: inventoryIcon, 
    color: "52985B",
    overview: "Odoo Inventory uses a unique double-entry system to optimize your warehouse operations and maximize supply chain efficiency.",
    description: "Track every stock move from purchase to warehouse bin to sales order. Odoo's advanced routing, drop-shipping, and cross-docking capabilities streamline complex logistical operations. The native barcode scanner interface ensures lightning-fast picking, packing, and cycle counting, drastically reducing errors.",
    features: [
      "Multi-Warehouse & Multi-Location",
      "Double-Entry Stock Management",
      "Advanced Routing (Drop-shipping, Cross-docking)",
      "Putaway & Removal Strategies (FIFO, LIFO, FEFO)",
      "Automated Reordering Rules",
      "Barcode Scanner Interface",
      "Serial Number & Lot Tracking",
      "Cycle Counts & Inventory Adjustments",
      "Landed Costs Calculation",
      "Carrier Integration"
    ],
    benefits: [
      "Reduce stockouts with intelligent reordering rules.",
      "Speed up warehouse operations using the barcode app.",
      "Ensure total traceability with end-to-end serial/lot tracking.",
      "Optimize warehouse space utilization with smart putaway rules."
    ],
    useCases: [
      "Managing perishable goods using FEFO (First Expired, First Out).",
      "Operating a central distribution center feeding retail locations.",
      "Handling warranty claims through complete product traceability."
    ],
    industries: [
      "Wholesale Distribution",
      "Retail",
      "Manufacturing",
      "Logistics",
      "Ecommerce"
    ],
    faqs: [
      { q: "Do I need special hardware for scanning?", a: "No, the Odoo Barcode app works on standard Android/iOS devices as well as dedicated industrial scanners." },
      { q: "Can it handle multiple warehouses?", a: "Yes, you can configure complex inter-warehouse transit routes and multi-step delivery rules." }
    ],
    screenshots: [
      { title: "Inventory Overview", image: Inventory },
      { title: "Barcode Interface", image: barcode },
      { title: "Product Traceability", image: traceability },
      { title: "Reordering Rules", image: reodering },
      { title: "Real-Time Inventory Visibility", image: realtime }
    ],
    relatedModules: ["Purchase", "Sales", "Manufacturing", "Accounting"]
  },
  { 
    id: "manufacturing",
    name: "Manufacturing",
    category: "Operations",
    desc: "Plan, execute, and track production processes.",
    icon: manufacturingIcon, 
    color: "4B8BBE",
    overview: "Odoo Manufacturing is a comprehensive MRP solution that unifies planning, execution, quality, and maintenance into a single ecosystem.",
    description: "Streamline your shop floor with dynamic work center planning and real-time communication. Odoo MRP manages complex multi-level Bills of Materials (BOMs), routes work orders efficiently, and tracks overall equipment effectiveness (OEE). Integrated quality checks and maintenance requests ensure your production lines never stop.",
    features: [
      "Bill of Materials (BOM) & Multi-Level BOM",
      "Work Orders & Shop Floor Control",
      "Work Centers & Resource Routing",
      "Master Production Schedule (MPS)",
      "Subcontracting Workflows",
      "Production Scheduling & Gantt Charts",
      "Quality Control Integration",
      "Maintenance Integration",
      "Detailed Costing Analysis",
      "By-products & Scrap Management"
    ],
    benefits: [
      "Optimize production capacity with real-time Gantt scheduling.",
      "Eliminate production bottlenecks by tracking Work Center OEE.",
      "Calculate exact manufacturing costs, including labor and overhead.",
      "Ensure product standards with forced in-line quality checks."
    ],
    useCases: [
      "Complex discrete manufacturing with multi-stage assembly lines.",
      "Managing outsourced subcontracting for specific production steps.",
      "Tracking material consumption strictly using barcode scanners."
    ],
    industries: [
      "Automotive Components",
      "Electronics Assembly",
      "Food Processing",
      "Heavy Machinery",
      "Furniture"
    ],
    faqs: [
      { q: "Can operators use tablets on the shop floor?", a: "Yes, the Shop Floor app provides a touch-friendly interface designed specifically for tablet use at the work center." },
      { q: "Does it handle versioning for BOMs?", a: "Yes, you can manage Engineering Change Orders (ECOs) to track versions and revisions of BOMs." }
    ],
    screenshots: [
      { title: "Manufacturing Dashboard", image: Manufacturing },
      { title: "Bill Of Materials", image: BOM },
      { title: "Work Center Screen", image: WorkCenter },
      { title: "Manufacturing Orders", image: MO },
      { title: "Equipment Analysis", image: Equipement }
    ],
    relatedModules: ["Inventory", "Quality", "Purchase", "Accounting"]
  },
  { 
    id: "purchase",
    name: "Purchase",
    category: "Operations",
    desc: "Automate purchasing workflows and manage vendors.",
    icon: purchaseIcon, 
    color: "4B8BBE",
    overview: "Odoo Purchase automates procurement propositions, handles Request for Quotations (RFQs), and manages vendor performance seamlessly.",
    description: "Improve your supply chain performance by automating the purchasing process based on stock levels, sales orders, or manufacturing needs. Compare vendor prices through Purchase Agreements, track delivery times, and match vendor bills automatically to ensure you never overpay.",
    features: [
      "Request for Quotations (RFQ)",
      "Automated Procurement Rules",
      "Purchase Agreements & Tenders",
      "Vendor Pricelists & Lead Times",
      "Three-Way Matching",
      "Vendor Performance Monitoring",
      "Approval Workflows",
      "Drop-Shipping Integration",
      "Blanket Orders"
    ],
    benefits: [
      "Get the best price using competitive blanket orders and tenders.",
      "Prevent fraud and over-billing with strict three-way matching.",
      "Ensure continuous supply through automated reordering.",
      "Evaluate suppliers using data on delivery delays and price variances."
    ],
    useCases: [
      "Launching a tender to multiple suppliers for a large raw material purchase.",
      "Automating drop-ship orders directly from vendor to customer.",
      "Setting up multi-level management approvals for high-value purchases."
    ],
    industries: [
      "Retail",
      "Manufacturing",
      "Wholesale Distribution",
      "Construction",
      "Healthcare"
    ],
    faqs: [
      { q: "Can purchases trigger automatically?", a: "Yes, utilizing reordering rules or Make-to-Order (MTO) settings, Odoo automatically generates RFQs when needed." },
      { q: "Can I manage vendor contracts?", a: "Yes, Blanket Orders allow you to negotiate a price for a specific period and draw down quantities over time." }
    ],
    screenshots: [
      { title: "Purchase Dashboard", image: Purchase },
      { title: "RFQ Screen", image: RFQ },
      { title: "Vendor Pricelists", image: VedorPricelist },
      { title: "Purchase Analysis", image: PurchaseAnalysis },
      { title: "Purchase Receipts", image: Reciepts }
    ],
    relatedModules: ["Inventory", "Accounting", "Manufacturing", "Sales"]
  },
  { 
    id: "quality",
    name: "Quality",
    category: "Operations",
    desc: "Control the quality of your products seamlessly.",
    icon: qualityIcon, 
    color: "008784",
    overview: "Odoo Quality allows you to define control points and trigger quality checks automatically across your inventory and manufacturing operations.",
    description: "Maintain the highest product standards with minimal disruption. Define precise Quality Control Points for incoming goods, in-process manufacturing, or outgoing shipments. Create detailed Quality Alerts to manage corrective actions and collaborate with engineering teams for continuous improvement.",
    features: [
      "Quality Control Points",
      "Automated Quality Checks",
      "Quality Alerts & Corrective Actions",
      "Pass/Fail, Measure, & Custom Check Types",
      "Statistical Process Control (SPC)",
      "Integration with Manufacturing & Inventory",
      "Team Management & Routing"
    ],
    benefits: [
      "Prevent defective goods from reaching customers.",
      "Ensure compliance with ISO and other regulatory standards.",
      "Reduce waste by identifying manufacturing defects early.",
      "Streamline communication between floor operators and quality engineers."
    ],
    useCases: [
      "Enforcing dimensional measurement checks during CNC machining.",
      "Visual inspection of all incoming raw materials before putaway.",
      "Managing customer complaints via an integrated Quality Alert system."
    ],
    industries: [
      "Food & Beverage",
      "Pharmaceuticals",
      "Aerospace",
      "Automotive",
      "Electronics"
    ],
    faqs: [
      { q: "Can I require photos during a quality check?", a: "Yes, operators can be prompted to take and upload a picture directly from their tablet during the check." },
      { q: "How are quality failures handled?", a: "Failing a check can automatically halt the process and generate a Quality Alert for immediate review." }
    ],
    screenshots: [
      { title: "Quality Dashboard", image: QualityDashboard },
      { title: "Control Points", image: ControlPoints },
      { title: "Quality Check Analysis", image: QCAnalysis },
      { title: "Control Points Form", image: QCForm },
//       { title: "Quality Reporting", image: null }
    ],
    relatedModules: ["Manufacturing", "Inventory", "Project", "Discuss"]
  },
  { 
    id: "payroll",
    name: "Payroll",
    category: "HR",
    desc: "Manage employee salaries, benefits, and deductions.",
    icon: payrollIcon, 
    color: "C1373A",
    overview: "Odoo Payroll streamlines compensation management by integrating directly with attendance, leaves, and accounting.",
    description: "Say goodbye to complex spreadsheets. Odoo Payroll uses powerful rule-based salary structures to calculate basic pay, allowances, deductions, and taxes dynamically. Integrated with Odoo HR apps, it automatically pulls data for unpaid leaves, overtime, and commissions to generate accurate payslips in batches.",
    features: [
      "Dynamic Salary Structures",
      "Employee Contracts Management",
      "Automated Payslip Generation",
      "Time Off & Attendance Integration",
      "Customizable Salary Rules",
      "Batch Processing",
      "Statutory Compliance Reporting",
      "Direct Accounting Journal Entries"
    ],
    benefits: [
      "Eliminate calculation errors with automated rule engines.",
      "Save days of administrative work during the end-of-month cycle.",
      "Maintain strict confidentiality with secure access rights.",
      "Ensure seamless financial reporting with direct accounting posting."
    ],
    useCases: [
      "Handling complex multi-state tax deductions for a remote workforce.",
      "Automatically calculating prorated salaries for mid-month hires.",
      "Factoring hourly overtime and shift differentials directly from timesheets."
    ],
    industries: [
      "All Industries",
      "Staffing Agencies",
      "Manufacturing",
      "Retail",
      "Healthcare"
    ],
    faqs: [
      { q: "Is it compliant with local taxes?", a: "Odoo allows you to build custom salary rules to comply with any local statutory requirement or tax bracket." },
      { q: "Can employees access their own payslips?", a: "Yes, employees can securely view and download their payslips through the self-service portal." }
    ],
    screenshots: [
      { title: "Payroll Dashboard", image: PayrollDashboard },
      { title: "Salary Structures", image: SalaryStructures },
      { title: "Employee Contract", image: Contracts },
      { title: "Payslip Batch", image: Batch },
      { title: "Salary Rules", image: SalaryRules }
    ],
    relatedModules: ["Accounting", "Timesheets", "Project", "Documents"]
  },
  { 
    id: "ecommerce",
    name: "E-Commerce",
    category: "Digital",
    desc: "Build an awesome online store integrated with inventory.",
    icon: ecommerceIcon, 
    color: "4B8BBE",
    overview: "Odoo E-Commerce offers a stunning, conversion-optimized storefront seamlessly connected to your backend inventory and sales operations.",
    description: "Launch your online business without the integration headaches. With Odoo E-Commerce, your website catalog is directly fed from your inventory database. Changes in pricing, stock levels, and product variants reflect in real-time. Boost sales with built-in abandoned cart recovery, cross-selling, and B2B portal features.",
    features: [
      "Drag & Drop Store Builder",
      "Real-Time Inventory Sync",
      "B2B & B2C Functionality",
      "Multiple Payment Gateways",
      "Abandoned Cart Recovery",
      "Upselling & Cross-Selling",
      "Customer Self-Service Portal",
      "Product Configurator (Variants & Attributes)",
      "Promotional Codes & Pricelists"
    ],
    benefits: [
      "Eliminate double-entry by unifying your webstore and ERP.",
      "Prevent overselling with real-time stock availability.",
      "Increase conversions with a mobile-optimized checkout.",
      "Provide B2B clients with specialized portals and custom pricing."
    ],
    useCases: [
      "Running a multi-lingual, multi-currency global storefront.",
      "Allowing wholesale clients to reorder bulk items via a B2B portal.",
      "Selling customizable products with complex variant options."
    ],
    industries: [
      "Retail",
      "Fashion & Apparel",
      "Wholesale",
      "Electronics",
      "FMCG"
    ],
    faqs: [
      { q: "Can I manage SEO?", a: "Yes, Odoo includes built-in SEO tools for meta tags, keywords, and automatic sitemap generation." },
      { q: "What payment gateways are supported?", a: "Odoo natively supports Stripe, PayPal, Authorize.net, Adyen, and many more." }
    ],
//     screenshots: [
//       { title: "Storefront View", image: null },
//       { title: "Product Configuration", image: null },
//       { title: "Checkout Flow", image: null },
//       { title: "Abandoned Carts", image: null },
//       { title: "eCommerce Analytics", image: null }
//     ],
    relatedModules: ["Website", "Inventory", "Sales", "Accounting"]
  },
  { 
    id: "website",
    name: "Website",
    category: "Digital",
    desc: "Create a beautiful website with an intuitive drag & drop builder.",
    icon: websiteIcon, 
    color: "4B8BBE",
    overview: "Odoo Website Builder is an incredibly easy-to-use CMS that lets you design stunning websites deeply integrated with your business apps.",
    description: "Forget coding or complicated plugins. Assemble your website quickly using pre-designed, customizable building blocks. Because it's natively connected to Odoo, adding a job board, event ticketing, or an appointment booking system takes just one click. Everything is mobile-responsive and SEO-optimized out of the box.",
    features: [
      "Intuitive Drag & Drop Builder",
      "Dynamic Building Blocks",
      "Built-in SEO Optimizer",
      "Multi-Language Support",
      "Integrated Live Chat",
      "A/B Testing",
      "Form Builder linked to CRM",
      "Blog & Forum Add-ons"
    ],
    benefits: [
      "Launch a professional website in days, not months.",
      "Capture leads directly into your CRM via website forms.",
      "Ensure a flawless mobile experience without extra coding.",
      "Expand globally with easy multi-language translation tools."
    ],
    useCases: [
      "Building a corporate site to generate inbound leads for sales.",
      "Publishing a careers page that funnels directly into the Recruitment app.",
      "Hosting a community forum backed by the Helpdesk module."
    ],
    industries: [
      "All Industries",
      "Agencies",
      "Non-Profits",
      "Consulting",
      "Education"
    ],
    faqs: [
      { q: "Do I need a developer to make changes?", a: "No, the visual editor allows marketing teams to edit content, change layouts, and publish new pages instantly." },
      { q: "Is hosting included?", a: "If you use Odoo Online or Odoo.sh, high-performance hosting is fully managed and included." }
    ],
//     screenshots: [
//       { title: "Website Builder", image: null },
//       { title: "Theme Customization", image: null },
//       { title: "SEO Tools", image: null },
//       { title: "Form Builder", image: null },
//       { title: "Analytics Dashboard", image: null }
//     ],
    relatedModules: ["E-Commerce", "CRM", "Marketing Automation", "Helpdesk"]
  },
  { 
    id: "pos",
    name: "Point of Sale",
    category: "Sales & CRM",
    desc: "User-friendly Point of Sale interface for retail and restaurants.",
    icon: posIcon, 
    color: "875A7B",
    overview: "Odoo POS offers a smart, reliable interface for shops and restaurants that works both online and offline.",
    description: "Keep your checkout lines moving. Odoo POS is designed for speed and reliability, remaining fully functional even if your internet connection drops. It integrates seamlessly with inventory for real-time stock adjustments and with accounting to consolidate daily sales entries automatically. Specialized features for restaurants include floor plans and kitchen printers.",
    features: [
      "Online/Offline Mode",
      "Retail & Restaurant Modes",
      "Loyalty Programs & Gift Cards",
      "Multi-Session Management",
      "Barcode & Weight Scale Integration",
      "Floor Plan & Table Management",
      "Kitchen Printer Routing",
      "Split Bill functionality"
    ],
    benefits: [
      "Never lose a sale with offline reliability.",
      "Boost customer retention through integrated loyalty programs.",
      "Eliminate manual reconciliations with automated accounting entries.",
      "Improve restaurant efficiency with seamless kitchen communication."
    ],
    useCases: [
      "Running a multi-register retail store with centralized inventory.",
      "Managing table orders and kitchen ticketing for a busy restaurant.",
      "Setting up temporary POS terminals for outdoor events."
    ],
    industries: [
      "Retail",
      "Restaurants & Bars",
      "Supermarkets",
      "Franchises",
      "Events"
    ],
    faqs: [
      { q: "What hardware is compatible?", a: "Odoo POS is hardware agnostic. It works on any device with a web browser (iPad, Android tablet, PC) and supports most ESC/POS printers and scanners via the IoT box." },
      { q: "Can I manage multiple stores?", a: "Yes, you can configure multiple POS configurations and consolidate data at the headquarters level." }
    ],
//     screenshots: [
//       { title: "POS Interface", image: null },
//       { title: "Restaurant Floor Plan", image: null },
//       { title: "Loyalty Program", image: null },
//       { title: "Session Report", image: null },
//       { title: "Hardware Configuration", image: null }
//     ],
    relatedModules: ["Inventory", "Accounting", "Sales", "Marketing Automation"]
  },
  { 
    id: "helpdesk",
    name: "Helpdesk",
    category: "Sales & CRM",
    desc: "Deliver exceptional customer service with automated ticketing.",
    icon: helpdeskIcon, 
    color: "E46F38",
    overview: "Odoo Helpdesk is an agile ticketing system designed to help you provide stellar customer support.",
    description: "Centralize your support channels—email, live chat, website forms, and social media—into one unified dashboard. Assign tickets automatically based on skills, set strict SLA rules, and leverage canned responses to resolve issues faster. Deep integration with other apps allows agents to view order history or process returns directly from the ticket.",
    features: [
      "Omnichannel Ticketing",
      "SLA Management & Warnings",
      "Automated Routing & Assignment",
      "Canned Responses & Templates",
      "Integrated Knowledge Base",
      "Customer Satisfaction Surveys (CSAT)",
      "Timesheet Tracking on Tickets",
      "RMA & Return Processing"
    ],
    benefits: [
      "Resolve tickets faster using the integrated Knowledge Base.",
      "Ensure no customer is left waiting with automated SLA alerts.",
      "Gain insights into support quality via automated CSAT surveys.",
      "Bill clients accurately for support time using Timesheet integration."
    ],
    useCases: [
      "Managing IT support tickets with specific priority matrices.",
      "Handling ecommerce returns and issuing refunds directly from the ticket.",
      "Providing 24/7 support using a combination of live agents and Chatbots."
    ],
    industries: [
      "IT Services",
      "E-commerce",
      "Manufacturing",
      "Software / SaaS",
      "Telecom"
    ],
    faqs: [
      { q: "Can a customer reply to a ticket via email?", a: "Yes, email replies are automatically threaded into the corresponding ticket in Odoo." },
      { q: "How do I measure agent performance?", a: "The Helpdesk dashboard provides metrics on average response time, resolution time, and customer ratings per agent." }
    ],
//     screenshots: [
//       { title: "Ticket Kanban", image: null },
//       { title: "Ticket Details", image: null },
//       { title: "SLA Configuration", image: null },
//       { title: "Helpdesk Dashboard", image: null },
//       { title: "Customer Rating", image: null }
//     ],
    relatedModules: ["Sales", "Project", "Timesheets", "Website"]
  },
  { 
    id: "project",
    name: "Project",
    category: "Productivity",
    desc: "Organize, schedule and plan your projects efficiently.",
    icon: projectIcon, 
    color: "52985B",
    overview: "Odoo Project is a visual, agile project management tool tailored for modern, collaborative teams.",
    description: "Keep your projects on track and under budget. Organize tasks using customizable Kanban boards, plan resources with Gantt charts, and track project profitability in real-time. Whether you use Agile, Waterfall, or a hybrid approach, Odoo adapts to your workflow, fostering seamless collaboration between internal teams and clients.",
    features: [
      "Kanban & Gantt Views",
      "Task & Sub-task Management",
      "Resource Planning",
      "Time Tracking & Timesheets",
      "Project Profitability Analysis",
      "Document Sharing",
      "Collaborative Pads",
      "Client Portal Access"
    ],
    benefits: [
      "Improve visibility across all ongoing projects in one place.",
      "Prevent team burnout with visual resource allocation tools.",
      "Ensure projects remain profitable with integrated cost tracking.",
      "Enhance transparency by allowing clients to view task progress."
    ],
    useCases: [
      "Managing a software development sprint using Agile Kanban boards.",
      "Planning a large construction project using Gantt dependencies.",
      "Tracking billable hours for consulting engagements."
    ],
    industries: [
      "Consulting",
      "IT & Software",
      "Construction",
      "Marketing Agencies",
      "Engineering"
    ],
    faqs: [
      { q: "Can I bill a customer based on project milestones?", a: "Yes, integration with Sales allows invoicing based on completed tasks, milestones, or timesheets." },
      { q: "Are task templates supported?", a: "You can easily duplicate projects or set up predefined task structures for recurring workflows." }
    ],
    screenshots: [
      { title: "Project Kanban", image: ProjectDashboard },
      { title: "Project Roles", image: ProjectRoles },
      { title: "Task Details", image: Tasks },
      { title: "Project Profit Margins", image: ProjectMargins },
      { title: "Timesheet Entry", image: TimesheetsEntry }
    ],
    relatedModules: ["Timesheets", "Sales", "Accounting", "Documents"]
  },
  { 
    id: "timesheets",
    name: "Timesheets",
    category: "Productivity",
    desc: "Track time and forecast productivity easily.",
    icon: timesheetsIcon, 
    color: "4B8BBE",
    overview: "Odoo Timesheets allows employees to log their hours quickly, ensuring accurate billing and project tracking.",
    description: "Make time tracking painless. Employees can log time via a mobile app, a grid interface, or a browser extension timer. Timesheets feed directly into Project for progress tracking, into Sales for client billing, and into Payroll for accurate compensation. Managers can validate timesheets rapidly to keep administrative overhead low.",
    features: [
      "Mobile App & Browser Timer",
      "Grid Entry Interface",
      "Manager Validation Workflow",
      "Direct Billing Integration",
      "Attendance Syncing",
      "Project & Task Allocation",
      "Leave Integration",
      "Productivity Reporting"
    ],
    benefits: [
      "Eliminate lost billable hours with easy-to-use timers.",
      "Speed up the invoicing cycle with automated timesheet billing.",
      "Monitor employee productivity and project labor costs accurately.",
      "Reduce administrative friction with one-click approvals."
    ],
    useCases: [
      "Law firms tracking billable minutes for different client cases.",
      "IT agencies invoicing monthly retainers based on hours worked.",
      "Factory floors tracking labor time spent on specific work orders."
    ],
    industries: [
      "Professional Services",
      "Agencies",
      "Legal Services",
      "Accounting Firms",
      "IT Services"
    ],
    faqs: [
      { q: "Is there an app for time tracking?", a: "Yes, the Odoo Awesome Timesheet app allows tracking offline and synchronizes when connected." },
      { q: "How are timesheets billed?", a: "Approved timesheets automatically appear as lines on the associated Sales Order, ready to be invoiced." }
    ],
    screenshots: [
      { title: "Timesheet Grid", image: TimesheetDashboard },
      //{ title: "Mobile Timer", image: null },
      { title: "Manager Approval", image: Validation },
      { title: "Timesheets by Billing Type", image: TimeSheetBill },
      { title: "Timesheets By Employee", image: TimesheetByEmployee }
    ],
    relatedModules: ["Project", "Sales", "Accounting", "Payroll"]
  },
  { 
    id: "documents",
    name: "Documents",
    category: "Productivity",
    desc: "Go paperless with seamless document management.",
    icon: documentsIcon, 
    color: "875A7B",
    overview: "Odoo Documents is a centralized Document Management System (DMS) that digitizes your workflows and securely stores files.",
    description: "Save time recording bills, scanning contracts, and approving documents. Odoo Documents uses AI to extract data from vendor bills automatically. Request approvals, assign tags, collaborate in real-time, and link documents directly to corresponding records like Sales Orders, Employee profiles, or Projects.",
    features: [
      "AI-Powered OCR (Optical Character Recognition)",
      "Automated Workflows & Approvals",
      "Centralized Workspace & Tagging",
      "Electronic Signatures",
      "Version Control",
      "Email Gateway to Folders",
      "Collaborative Spreadsheets",
      "Secure Access Rights"
    ],
    benefits: [
      "Save countless hours on manual data entry using OCR AI.",
      "Never lose a file with centralized, secure, searchable storage.",
      "Speed up contract closures with built-in e-signatures.",
      "Go completely paperless and reduce administrative costs."
    ],
    useCases: [
      "Automatically creating vendor bills by forwarding PDFs to an email address.",
      "Storing and managing confidential employee contracts and IDs.",
      "Routing ISO compliance documents for multi-departmental approval."
    ],
    industries: [
      "All Industries",
      "Legal",
      "Financial Services",
      "Healthcare",
      "Construction"
    ],
    faqs: [
      { q: "How does the AI OCR work?", a: "Odoo analyzes uploaded PDFs/images, extracts key fields (vendor, total, date, tax), and pre-fills the accounting bill." },
      { q: "Can I share files externally?", a: "Yes, you can generate secure, time-limited share links for clients or vendors." }
    ],
    screenshots: [
      { title: "Workspace Dashboard", image: DocumentDashboard },
//       { title: "AI Bill Extraction", image: null },
      { title: "Document Tags", image: DocumentTags },
//      { title: "Approval Workflow", image: null },
//      { title: "Spreadsheet Collaboration", image: null }
    ],
    relatedModules: ["Accounting", "Project", "Sales", "Discuss"]
  },
  { 
    id: "marketing",
    name: "Marketing Automation",
    category: "Digital",
    desc: "Create targeted campaigns and automate workflows.",
    icon: marketingIcon, 
    color: "E46F38",
    overview: "Odoo Marketing Automation enables you to design advanced marketing campaigns that run on autopilot.",
    description: "Nurture leads and engage customers without manual intervention. Design visual, multi-stage workflows that trigger emails or SMS based on user actions, such as opening an email, clicking a link, or abandoning a cart. Segment your database dynamically to ensure the right message reaches the right person at the optimal time.",
    features: [
      "Visual Workflow Builder",
      "Dynamic Database Segmentation",
      "Email & SMS Triggers",
      "A/B Testing",
      "Lead Scoring & Routing",
      "Activity Tracking",
      "Abandoned Cart Campaigns",
      "Advanced ROI Analytics"
    ],
    benefits: [
      "Increase conversions by nurturing cold leads over time.",
      "Save marketing hours by automating repetitive communication tasks.",
      "Recover lost revenue with automated abandoned cart emails.",
      "Align sales and marketing with automatic CRM lead routing."
    ],
    useCases: [
      "Sending a 5-day welcome email sequence to new newsletter subscribers.",
      "Triggering a discount SMS if an ecommerce cart is abandoned for 24 hours.",
      "Scoring leads based on webinar attendance and pushing them to Sales."
    ],
    industries: [
      "E-commerce",
      "Software / SaaS",
      "Agencies",
      "Education",
      "Retail"
    ],
    faqs: [
      { q: "Can I test different subject lines?", a: "Yes, built-in A/B testing allows you to optimize emails for the highest open rates." },
      { q: "Does it track website visitors?", a: "Integrated with the Website app, it can track visitor behavior and trigger campaigns based on pages visited." }
    ],
//     screenshots: [
//       { title: "Visual Campaign Builder", image: null },
//       { title: "Email Designer", image: null },
//       { title: "Segmentation Rules", image: null },
//       { title: "Campaign Analytics", image: null },
//       { title: "A/B Testing", image: null }
//     ],
    relatedModules: ["CRM", "Website", "E-Commerce", "Sales"]
  },
  { 
    id: "planning",
    name: "Planning",
    category: "Productivity",
    desc: "Manage employee schedules and shift assignments.",
    icon: planningIcon, 
    color: "52985B",
    overview: "Odoo Planning simplifies shift scheduling, resource allocation, and workforce management.",
    description: "Easily schedule shifts based on employee availability, skills, and roles. The visual Gantt-based interface allows you to drag and drop shifts quickly. Prevent conflicts by integrating directly with Time Off. Employees receive their schedules online, can unassign themselves if permitted, or swap shifts with colleagues.",
    features: [
      "Visual Shift Scheduling (Gantt)",
      "Role & Skill-based Allocation",
      "Open Shifts & Self-Assignment",
      "Time Off Integration",
      "Schedule Templates",
      "Email & Push Notifications",
      "Multi-Role Management",
      "Conflict Management"
    ],
    benefits: [
      "Reduce scheduling conflicts with integrated availability checks.",
      "Empower employees with self-service shift assignments.",
      "Save time by copying recurring schedule templates.",
      "Ensure proper coverage by assigning shifts based on specific roles."
    ],
    useCases: [
      "Scheduling nursing shifts in a hospital based on department and certification.",
      "Managing retail staff schedules during the busy holiday season.",
      "Deploying field service technicians based on geographic regions."
    ],
    industries: [
      "Healthcare",
      "Retail",
      "Field Services",
      "Manufacturing",
      "Hospitality"
    ],
    faqs: [
      { q: "Can employees see their schedule on their phone?", a: "Yes, employees have a portal view to check their schedule on any mobile device." },
      { q: "What happens if someone is on vacation?", a: "The system prevents scheduling employees who have approved Time Off during that period." }
    ],
    screenshots: [
      { title: "Gantt Schedule", image: PlanningDashboard },
      { title: "Shift Assignment", image: ShiftTemplate },
      { title: "Schedule By Role", image: Role },
      { title: "Employee Portal", image: EmployeePortal },
  //    { title: "Conflict Warning", image: null }
    ],
    relatedModules: ["Project", "Payroll", "Timesheets", "Sales"]
  },
  { 
    id: "discuss",
    name: "Discuss",
    category: "Productivity",
    desc: "Internal communication and team collaboration.",
    icon: discussIcon, 
    color: "4B8BBE",
    overview: "Odoo Discuss is the communication hub that connects your team and all your business data in one place.",
    description: "Improve internal communication and reduce email clutter. Discuss offers private direct messages, public channels, and secure voice/video calls. Best of all, it integrates across every Odoo app. You can tag colleagues directly on a Sales Order, Invoice, or Project Task to keep the conversation perfectly contextualized.",
    features: [
      "Direct Messaging & Group Chats",
      "Public & Private Channels",
      "Voice & Video Calls",
      "Screen Sharing",
      "Contextual Chatter on Records",
      "File Sharing",
      "Email Gateway Integration",
      "Push Notifications"
    ],
    benefits: [
      "Eliminate communication silos by discussing directly on business documents.",
      "Reduce the need for third-party chat and video conferencing tools.",
      "Keep a permanent history of decisions made regarding specific clients or projects.",
      "Include external partners or clients securely in specific conversations."
    ],
    useCases: [
      "Accounting asking Sales for clarification directly on a draft Invoice.",
      "A project team coordinating via a dedicated private channel.",
      "Hosting a quick video stand-up meeting with remote team members."
    ],
    industries: [
      "All Industries",
      "Remote Teams",
      "Agencies",
      "IT Services",
      "Consulting"
    ],
    faqs: [
      { q: "Do I need Zoom or Teams?", a: "Discuss includes built-in video conferencing and screen sharing, reducing the need for external tools." },
      { q: "Can I communicate with people outside the company?", a: "Yes, external users (customers, vendors) can reply via email, and it appears in the Odoo chatter." }
    ],
    screenshots: [
      { title: "Discuss Dashboard", image: DiscussDashboard },
      { title: "Channel Chat", image: Channel },
//      { title: "Video Call", image: null }
//       { title: "Contextual Chatter", image: null },
//       { title: "File Sharing", image: null }
    ],
    relatedModules: ["Project", "Sales", "Helpdesk", "Accounting"]
  },
  { 
    id: "employees",
    name: "Employees",
    category: "HR",
    desc: "Centralize all your HR information easily.",
    icon: employeesIcon, 
    color: "52985B",
    overview: "Odoo Employees serves as the core directory and management system for your entire workforce, centralizing HR data.",
    description: "Manage employee profiles securely. Odoo Employees allows you to structure your company into departments, assign managers, and maintain comprehensive records including contracts, skills, and organizational charts. Track employee lifecycles from onboarding to departure with clear visibility.",
    features: [
      "Employee Records & Directory",
      "Department Management",
      "Job Positions & Roles",
      "Contract Tracking",
      "Skills & Qualifications Management",
      "Organizational Structure Chart",
      "Onboarding & Offboarding Plans",
      "Asset Assignment Tracking"
    ],
    benefits: [
      "Maintain a single source of truth for all HR data.",
      "Ensure compliance by securely storing employee contracts and documents.",
      "Quickly locate staff members with a searchable directory.",
      "Understand company hierarchy with dynamic organizational charts."
    ],
    useCases: [
      "Tracking skill matrices to identify training needs across departments.",
      "Managing complex onboarding workflows with multi-department tasks.",
      "Centralizing equipment (laptops, phones) assigned to each employee."
    ],
    industries: [
      "All Industries",
      "Corporate",
      "Manufacturing",
      "Retail",
      "Healthcare"
    ],
    faqs: [
      { q: "Is employee data secure?", a: "Yes, access rights are strictly enforced so only HR managers can view sensitive salary or contract information." },
      { q: "Can employees update their own profiles?", a: "Employees have a self-service portal to update personal information like addresses or emergency contacts." }
    ],
    screenshots: [
      { title: "Dashboard Screenshot", image: EmployeeDashboard },
      { title: "Department Dashboard", image: Department },
      { title: "Job Positions Dashboard", image: JobPosition },
      { title: "Employee Based Working Schedule", image: WorkingSchedule },
  //    { title: "Analytics Screenshot", image: null }
    ],
    relatedModules: ["Recruitment", "Attendances", "Time Off", "Payroll", "Expenses"]
  },
  { 
    id: "recruitment",
    name: "Recruitment",
    category: "HR",
    desc: "Streamline your hiring process and track applicants.",
    icon: recruitmentIcon, 
    color: "C1373A",
    overview: "Odoo Recruitment helps you organize your job board, track applicants, and manage your hiring pipeline effortlessly.",
    description: "Publish job offers on your website and automatically route applications to a Kanban pipeline. Customize recruitment stages per job position. Managers can schedule interviews, leave ratings, and generate offer letters directly from the applicant's profile, ensuring a seamless candidate experience.",
    features: [
      "Job Positions Publishing",
      "Applicant Tracking System (ATS)",
      "Recruitment Pipeline Kanban",
      "Candidate Management & Rating",
      "Interview Scheduling",
      "Hiring Workflow Automation",
      "Recruitment Reporting & Funnel",
      "Email Integration for Candidates"
    ],
    benefits: [
      "Reduce time-to-hire by automating candidate communications.",
      "Collaborate effectively by sharing applicant profiles with department heads.",
      "Build a talent pool for future openings by keeping candidate history.",
      "Track the effectiveness of different job boards and sourcing channels."
    ],
    useCases: [
      "Managing mass recruitment for seasonal retail staff.",
      "Conducting multi-stage technical interviews with scoring rubrics.",
      "Automatically parsing resumes to create structured candidate profiles."
    ],
    industries: [
      "Staffing Agencies",
      "Tech / IT",
      "Retail",
      "Manufacturing",
      "Healthcare"
    ],
    faqs: [
      { q: "Can I post jobs directly to external boards?", a: "Odoo generates unique email aliases and tracking links to route applicants from external boards like LinkedIn or Indeed directly into your pipeline." },
      { q: "Does it support automated responses?", a: "Yes, you can configure automated emails when a candidate applies or changes stages." }
    ],
    screenshots: [
      { title: "Dashboard Screenshot", image: RecruitmentDashboard },
      { title: "Job Positions Tracking", image: JobPositionTracking },
      { title: "Applicant Tracking", image: ApplicantTracking },
      { title: "Hiring Reports", image: HiringReport },
      { title: "Contract Templates", image: ContractTemplates }
    ],
    relatedModules: ["Employees", "Appointments", "Payroll"]
  },
  { 
    id: "attendances",
    name: "Attendances",
    category: "HR",
    desc: "Track employee hours and presence in real-time.",
    icon: attendanceIcon, 
    color: "4B8BBE",
    overview: "Odoo Attendances provides a simple, foolproof way to monitor employee presence, track working hours, and manage overtime.",
    description: "Employees can check in and out using a PIN, badge scanner, or simply through the web/mobile app. The system automatically calculates total hours worked and overtime against their designated working schedules, feeding accurate data directly into Payroll and Timesheets.",
    features: [
      "PIN & Badge Check In / Check Out",
      "Kiosk Mode for Terminals",
      "Attendance Monitoring Dashboard",
      "Employee Presence Tracking",
      "Automatic Overtime Tracking",
      "Attendance Reporting & Analysis",
      "Geolocation Tracking (Mobile)",
      "Tolerance & Grace Period Rules"
    ],
    benefits: [
      "Eliminate buddy punching with integrated badge or biometric scanners.",
      "Ensure accurate payroll processing with precise overtime calculations.",
      "Gain real-time visibility into who is currently in the office or on-site.",
      "Reduce administrative burden with automated attendance reporting."
    ],
    useCases: [
      "Tracking shift workers in a manufacturing plant using a centralized kiosk.",
      "Monitoring remote employee working hours via the web interface.",
      "Calculating complex overtime rules based on local labor laws."
    ],
    industries: [
      "Manufacturing",
      "Retail",
      "Construction",
      "Hospitality",
      "Healthcare"
    ],
    faqs: [
      { q: "Can it handle different shifts?", a: "Yes, attendances are compared against the employee's assigned working schedule to determine late arrivals or overtime." },
      { q: "Is hardware required?", a: "No, employees can check in from their computers or phones, though Odoo supports RFID/Barcode scanners for kiosks." }
    ],
    screenshots: [
      { title: "Dashboard Screenshot", image: AttendanceDashboard },
      { title: "Time off Ledger", image: TimeOffLedger },
      { title: "Attendance Report", image: AttendanceReport },
//       { title: "Reports Screenshot", image: null },
//       { title: "Analytics Screenshot", image: null }
    ],
    relatedModules: ["Employees", "Payroll", "Time Off"]
  },
  { 
    id: "timeoff",
    name: "Time Off",
    category: "HR",
    desc: "Manage employee vacations, sick leaves, and absences.",
    icon: timeOffIcon, 
    color: "875A7B",
    overview: "Odoo Time Off simplifies leave management by automating allocations, requests, and approvals in a unified calendar.",
    description: "Handle all types of absences effortlessly. HR managers can set up distinct leave types (paid time off, sick leave, unpaid leave) with specific allocation rules. Employees request time off via a self-service portal, triggering multi-level approval workflows for managers, while updating team availability instantly.",
    features: [
      "Leave Requests & Approvals",
      "Vacation & Sick Leave Management",
      "Automated Leave Allocations",
      "Public Holidays Integration",
      "Leave Policies & Accrual Rules",
      "Team Availability Calendar",
      "Multi-Level Approval Workflow",
      "Absence Reporting"
    ],
    benefits: [
      "Prevent scheduling conflicts by syncing approved leaves with project planning.",
      "Ensure compliance with company and statutory leave policies.",
      "Empower employees with clear visibility into their remaining leave balances.",
      "Streamline manager approvals with email notifications and dashboard alerts."
    ],
    useCases: [
      "Automatically accruing 1.5 days of vacation per month for full-time staff.",
      "Managing strict sick leave policies requiring medical certificate uploads.",
      "Coordinating holiday coverage using the department-wide availability calendar."
    ],
    industries: [
      "All Industries",
      "Corporate",
      "IT Services",
      "Retail",
      "Manufacturing"
    ],
    faqs: [
      { q: "Does it integrate with scheduling?", a: "Yes, approved time off blocks the employee's availability in Planning, Manufacturing, and Project apps." },
      { q: "Can I carry over unused leave?", a: "Yes, allocation rules can be configured to allow or deny leave carry-over at the end of the year." }
    ],
    screenshots: [
      { title: "Dashboard Screenshot", image: TimeOffDashboard },
      { title: "Time Off Types", image: TimeOffTypes },
      { title: "Time Off Allocation", image: TimeOffAllocation },
//       { title: "Reports Screenshot", image: null },
//       { title: "Analytics Screenshot", image: null }
    ],
    relatedModules: ["Employees", "Payroll", "Attendances"]
  },
  { 
    id: "expenses",
    name: "Expenses",
    category: "HR",
    desc: "Easily manage employee expenses and reimbursements.",
    icon: expenseIcon, 
    color: "52985B",
    overview: "Odoo Expenses streamlines the process of submitting, approving, and reimbursing employee expenditures.",
    description: "Employees can snap photos of receipts from their phones and let Odoo's AI OCR automatically extract the date, vendor, and amount. Managers approve expense reports in one click, and the accounting department generates vendor bills or employee reimbursements directly, keeping financial records perfectly aligned.",
    features: [
      "Expense Claims & Reimbursements",
      "AI OCR Receipt Scanning",
      "Multi-Level Approval Workflow",
      "Company Credit Card Sync",
      "Employee Expenses Tracking",
      "Re-invoicing to Customers",
      "Cost Tracking per Project/Department",
      "Accounting Integration"
    ],
    benefits: [
      "Eliminate lost receipts and manual data entry with mobile AI scanning.",
      "Speed up the reimbursement cycle, improving employee satisfaction.",
      "Enforce company expense policies strictly before accounting processing.",
      "Easily pass billable expenses through to client invoices."
    ],
    useCases: [
      "Sales reps submitting travel and mileage expenses from the road.",
      "Re-invoicing project-related travel costs directly to the client's Sales Order.",
      "Reconciling monthly corporate credit card statements automatically."
    ],
    industries: [
      "Consulting",
      "Field Services",
      "Sales Organizations",
      "IT & Software",
      "Construction"
    ],
    faqs: [
      { q: "Can I limit how much an employee can expense?", a: "Yes, you can set control policies and maximum limits per expense category." },
      { q: "Does it support multiple currencies?", a: "Yes, employees can submit expenses in foreign currencies, and Odoo converts them based on current exchange rates." }
    ],
    screenshots: [
      { title: "Dashboard Screenshot", image: ExpenseDashboard },
      { title: "Expense Form", image: ExpenseForm },
      { title: "Expense Products", image: ExpenseProducts },
      { title: "Expense Analysis", image: ExpenseAnalysis },
//      { title: "Analytics Screenshot", image: null }
    ],
    relatedModules: ["Employees", "Accounting", "Project"]
  },
  { 
    id: "appraisals",
    name: "Appraisals",
    category: "HR",
    desc: "Set up evaluation processes and track employee performance.",
    icon: appraisalIcon, 
    color: "E46F38",
    overview: "Odoo Appraisals helps you build a culture of continuous feedback, managing performance reviews and goal tracking.",
    description: "Standardize your employee evaluation process. Set up regular review cycles (monthly, quarterly, annually) and automate the distribution of appraisal forms. Collect 360-degree feedback from managers, peers, and subordinates. Track KPIs and align individual goals with company objectives seamlessly.",
    features: [
      "Performance Reviews & Evaluations",
      "360-Degree Feedback Collection",
      "Goal & KPI Tracking",
      "Automated Review Cycles",
      "Customizable Appraisal Forms",
      "Skills Matrix Integration",
      "Employee Self-Assessments",
      "Manager Dashboard"
    ],
    benefits: [
      "Ensure consistent and fair employee evaluations across all departments.",
      "Identify top performers and skill gaps using structured data.",
      "Reduce administrative work by automating the appraisal schedule.",
      "Foster a culture of transparency through continuous feedback."
    ],
    useCases: [
      "Conducting annual performance reviews to determine salary adjustments.",
      "Implementing quarterly OKR (Objectives and Key Results) tracking.",
      "Gathering anonymous peer feedback for mid-level managers."
    ],
    industries: [
      "Corporate",
      "IT / SaaS",
      "Agencies",
      "Consulting",
      "Healthcare"
    ],
    faqs: [
      { q: "Can I customize the appraisal questions?", a: "Yes, you can build custom survey forms tailored to different roles or departments." },
      { q: "Who can see the appraisal results?", a: "Results are strictly confidential, accessible only by the employee, their direct manager, and HR." }
    ],
//     screenshots: [
//       { title: "Dashboard Screenshot", image: null },
//       { title: "Configuration Screenshot", image: null },
//       { title: "Daily Operations Screenshot", image: null },
//       { title: "Reports Screenshot", image: null },
//       { title: "Analytics Screenshot", image: null }
//     ],
    relatedModules: ["Employees", "Recruitment"]
  },
  { 
    id: "fleet",
    name: "Fleet",
    category: "Operations",
    desc: "Manage your vehicles, contracts, and fleet costs.",
    icon: fleetIcon, 
    color: "4B8BBE",
    overview: "Odoo Fleet provides complete visibility into your company vehicles, managing costs, contracts, and driver assignments.",
    description: "Track the total cost of ownership for every vehicle. Odoo Fleet logs fuel logs, maintenance records, insurance policies, and leasing contracts. Assign vehicles to employees, track odometer readings, and receive automated alerts when contracts expire or preventive maintenance is due.",
    features: [
      "Vehicle Management & Registry",
      "Fuel Tracking & Logbooks",
      "Vehicle Costs & TCO Analysis",
      "Driver Assignment & History",
      "Maintenance & Repair Tracking",
      "Contract & Lease Management",
      "Odometer Tracking",
      "Fleet Reporting Dashboard"
    ],
    benefits: [
      "Identify high-cost vehicles through detailed Total Cost of Ownership reports.",
      "Never miss a lease renewal or insurance payment with automated alerts.",
      "Ensure driver accountability by maintaining strict assignment histories.",
      "Optimize fleet utilization and reduce unnecessary maintenance costs."
    ],
    useCases: [
      "Managing a pool of shared company cars for sales representatives.",
      "Tracking fuel consumption and maintenance for a logistics delivery fleet.",
      "Handling leasing contracts and depreciation for executive vehicles."
    ],
    industries: [
      "Logistics",
      "Construction",
      "Field Services",
      "Sales Organizations",
      "Transportation"
    ],
    faqs: [
      { q: "Can employees log their own fuel?", a: "Yes, employees can log fuel fill-ups, which automatically updates the vehicle's cost records." },
      { q: "Does it integrate with Accounting?", a: "Yes, fuel logs and maintenance bills can be directly linked to accounting vendor bills." }
    ],
    screenshots: [
      { title: "Dashboard Screenshot", image: FleetDashboard },
      { title: "Fleet Form", image: FleetForm },
      { title: "Fleet Cost Analysis", image: FleetCostAnalysis },
      { title: "Odoometer Analysis", image: OdoometerAnalysis },
//       { title: "Analytics Screenshot", image: null }
    ],
    relatedModules: ["Employees", "Maintenance", "Expenses"]
  },
  { 
    id: "maintenance",
    name: "Maintenance",
    category: "Operations",
    desc: "Track equipment and manage maintenance requests.",
    icon: maintenanceIcon, 
    color: "E46F38",
    overview: "Odoo Maintenance ensures your equipment stays operational by managing preventive and corrective maintenance workflows.",
    description: "Minimize downtime and maximize equipment lifespan. Organize all company assets and machinery into a unified database. Schedule preventive maintenance based on time intervals or usage metrics (MTBF/MTTR). Employees can quickly submit corrective maintenance requests when breakdowns occur, routing work orders to the technical team.",
    features: [
      "Preventive & Corrective Maintenance",
      "Maintenance Requests & Work Orders",
      "Equipment & Asset Management",
      "MTBF (Mean Time Between Failures) Analysis",
      "MTTR (Mean Time To Repair) Analysis",
      "Maintenance Calendar Scheduling",
      "Subcontractor Maintenance",
      "Scrap & Repair Routing"
    ],
    benefits: [
      "Drastically reduce unexpected breakdowns and production halts.",
      "Improve equipment ROI by ensuring timely preventive care.",
      "Streamline communication between floor workers and maintenance crews.",
      "Analyze failure rates to make informed repair vs. replace decisions."
    ],
    useCases: [
      "Scheduling weekly lubrication and calibration for CNC machines.",
      "Managing IT ticketing for broken laptops or office equipment.",
      "Tracking warranty information and subcontractor repairs for HVAC systems."
    ],
    industries: [
      "Manufacturing",
      "Facilities Management",
      "Construction",
      "Healthcare",
      "IT Services"
    ],
    faqs: [
      { q: "Can maintenance block manufacturing?", a: "Yes, scheduled maintenance on a Work Center automatically blocks it from being scheduled for production orders." },
      { q: "How is MTBF calculated?", a: "Odoo automatically computes MTBF based on the historical frequency of corrective maintenance requests." }
    ],
    screenshots: [
      { title: "Dashboard Screenshot", image: MaintananceDashboard },
      { title: "Maintanance Tracking", image: MaintananceTracking },
//       { title: "Daily Operations Screenshot", image: null },
//       { title: "Reports Screenshot", image: null },
//       { title: "Analytics Screenshot", image: null }
    ],
    relatedModules: ["Manufacturing", "Inventory", "Quality"]
  },
  { 
    id: "rental",
    name: "Rental",
    category: "Sales & CRM",
    desc: "Manage your rental business from scheduling to invoicing.",
    icon: rentalIcon, 
    color: "875A7B",
    overview: "Odoo Rental provides an end-to-end solution for managing rental orders, tracking asset availability, and handling billing.",
    description: "Maximize your rental fleet utilization. Use the visual Gantt chart to check equipment availability instantly. Create rental quotations, define specific pricing rules (hourly, daily, weekly), and manage pickups and returns. Late fees and deposit management are seamlessly integrated with your accounting backend.",
    features: [
      "Rental Orders & Quotations",
      "Rental Pricing Rules",
      "Gantt Scheduling & Availability",
      "Asset Pickup & Return Management",
      "Rental Invoicing & Late Fees",
      "Security Deposit Management",
      "Serial Number Tracking",
      "Maintenance Integration"
    ],
    benefits: [
      "Never double-book equipment with real-time availability checking.",
      "Automate complex billing scenarios like weekend rates or late returns.",
      "Ensure assets are returned in good condition with integrated quality checks.",
      "Improve cash flow with automated upfront deposit invoicing."
    ],
    useCases: [
      "Renting heavy construction machinery (excavators, cranes) by the week.",
      "Managing an AV equipment rental business with strict serial number tracking.",
      "Running a car or bike rental service with integrated insurance add-ons."
    ],
    industries: [
      "Equipment Rental",
      "Construction",
      "Events & AV",
      "Automotive",
      "Real Estate"
    ],
    faqs: [
      { q: "Can I sell consumables with a rental?", a: "Yes, a single order can contain both rental products (a drill) and saleable consumables (drill bits)." },
      { q: "How are delays handled?", a: "If an item is returned late, Odoo automatically prompts you to invoice the predefined late fee." }
    ],
    screenshots: [
      { title: "Dashboard Screenshot", image: RentalDashboard },
      { title: "Rental Products", image: RentalProducts },
      { title: "Scheduled Rentals Tracking", image: ScheduledRentals },
      { title: "Rental Analysis", image: RentalAnalysis },
//      { title: "Analytics Screenshot", image: null }
    ],
    relatedModules: ["Sales", "Inventory", "Accounting"]
  },
  { 
    id: "subcontracting",
    name: "Subcontracting",
    category: "Operations",
    desc: "Manage outsourced manufacturing and component tracking.",
    icon: manufacturingIcon, 
    color: "52985B",
    overview: "Odoo Subcontracting seamlessly integrates outsourced production steps into your supply chain, maintaining full traceability.",
    description: "Maintain control even when production leaves your facility. Send raw materials to your subcontractors, issue Subcontractor Purchase Orders, and receive finished products back into your inventory. Odoo automatically handles the underlying inventory moves, consuming raw materials and updating exact product costs.",
    features: [
      "Outsourced Manufacturing Workflows",
      "Subcontractor Purchase Orders",
      "Component Drop-Shipping to Vendors",
      "Finished Product Receipts",
      "Accurate Cost Tracking & Valuation",
      "Vendor Production Visibility",
      "Subcontracting BOM Management",
      "Serial/Lot Traceability"
    ],
    benefits: [
      "Maintain exact inventory counts of components sitting at vendor locations.",
      "Ensure accurate product valuation by including subcontractor labor costs.",
      "Track quality and serial numbers seamlessly across external parties.",
      "Automate procurement rules to ship materials to vendors exactly when needed."
    ],
    useCases: [
      "Sending fabric to an external facility for cutting and receiving garments.",
      "Outsourcing the anodizing process of machined metal parts.",
      "Drop-shipping raw components directly from a supplier to the subcontractor."
    ],
    industries: [
      "Manufacturing",
      "Fashion & Apparel",
      "Electronics",
      "Automotive Components",
      "Furniture"
    ],
    faqs: [
      { q: "Does it track inventory at the vendor's site?", a: "Yes, Odoo creates a specific Subcontracting Location to track exactly what materials the vendor currently holds." },
      { q: "Can a BOM have both internal and outsourced steps?", a: "Yes, you can configure complex routes where some operations are internal and others are subcontracted." }
    ],
//     screenshots: [
//       { title: "Dashboard Screenshot", image: null },
//       { title: "Configuration Screenshot", image: null },
//       { title: "Daily Operations Screenshot", image: null },
//       { title: "Reports Screenshot", image: null },
//       { title: "Analytics Screenshot", image: null }
//     ],
    relatedModules: ["Manufacturing", "Purchase", "Inventory"]
  },
  { 
    id: "fieldservice",
    name: "Field Service",
    category: "Operations",
    desc: "Manage mobile workforce, routing, and on-site tasks.",
    icon: fieldServiceIcon, 
    color: "E46F38",
    overview: "Odoo Field Service empowers your mobile workforce with optimized routing, scheduling, and digital worksheets.",
    description: "Deliver excellent on-site service. Dispatchers use map views and Gantt charts to assign the right technician based on location and skills. Technicians use the mobile app to navigate, log time, consume spare parts, fill out custom service reports, and capture customer signatures directly on their phones.",
    features: [
      "On-Site Service Management",
      "Work Order Scheduling (Gantt/Map)",
      "Technician Route Planning",
      "Mobile Workforce App",
      "Custom Digital Worksheets",
      "Time & Material Consumption Tracking",
      "E-Signature Capture",
      "Automatic Invoicing"
    ],
    benefits: [
      "Reduce travel time and fuel costs with intelligent route planning.",
      "Eliminate paperwork by capturing reports and signatures digitally on-site.",
      "Speed up the billing cycle by invoicing immediately after job completion.",
      "Improve first-time fix rates by ensuring technicians have correct inventory."
    ],
    useCases: [
      "Dispatching plumbers or electricians for emergency home repairs.",
      "Performing scheduled on-site maintenance for industrial HVAC units.",
      "Managing a fleet of internet installation technicians."
    ],
    industries: [
      "HVAC & Plumbing",
      "Telecommunications",
      "Construction",
      "Equipment Maintenance",
      "Utilities"
    ],
    faqs: [
      { q: "Can it run offline?", a: "Yes, technicians can load their tasks, fill worksheets, and sync the data once they regain connection." },
      { q: "Does it track parts used?", a: "Yes, technicians can add products (spare parts) to the task, which automatically updates inventory and adds to the final invoice." }
    ],
//     screenshots: [
//       { title: "Dashboard Screenshot", image: null },
//       { title: "Configuration Screenshot", image: null },
//       { title: "Daily Operations Screenshot", image: null },
//       { title: "Reports Screenshot", image: null },
//       { title: "Analytics Screenshot", image: null }
//     ],
    relatedModules: ["Helpdesk", "Project", "Inventory", "Sales"]
  },
  { 
    id: "appointments",
    name: "Appointments",
    category: "Sales & CRM",
    desc: "Allow clients to book meetings online seamlessly.",
    icon: planningIcon, 
    color: "875A7B",
    overview: "Odoo Appointments provides a self-service booking system that integrates directly with your team's calendars.",
    description: "Eliminate the back-and-forth emails of scheduling. Set up your availability, define meeting types (online, in-person), and share your booking link. Clients pick a slot, and Odoo automatically creates the meeting, sends calendar invites with video links, and updates CRM or Recruitment pipelines.",
    features: [
      "Online Booking Portal",
      "Meeting Scheduling & Types",
      "Real-Time Availability Management",
      "Customer Appointment Workflows",
      "Consultation & Service Booking",
      "Calendar Sync (Google, Outlook)",
      "Automated Reminders (Email/SMS)",
      "Multi-Employee Scheduling"
    ],
    benefits: [
      "Save hours of administrative time spent coordinating schedules.",
      "Reduce no-shows with automated email and SMS reminders.",
      "Provide a professional, frictionless booking experience for clients.",
      "Ensure double-bookings never happen with strict calendar syncing."
    ],
    useCases: [
      "Booking initial consultation calls for a consulting firm.",
      "Allowing patients to schedule clinic visits with specific doctors.",
      "Scheduling multi-stage interviews directly from the careers page."
    ],
    industries: [
      "Consulting",
      "Healthcare",
      "Agencies",
      "Education",
      "Personal Services"
    ],
    faqs: [
      { q: "Does it sync with my personal calendar?", a: "Yes, it offers native, two-way synchronization with Google Calendar and Outlook." },
      { q: "Can clients book a team rather than an individual?", a: "Yes, you can configure appointments to check the availability of any team member, or require multiple specific members." }
    ],
//     screenshots: [
//       { title: "Dashboard Screenshot", image: null },
//       { title: "Configuration Screenshot", image: null },
//       { title: "Daily Operations Screenshot", image: null },
//       { title: "Reports Screenshot", image: null },
//       { title: "Analytics Screenshot", image: null }
//     ],
//     relatedModules: ["CRM", "Website", "Recruitment"]
  },
  { 
    id: "studio",
    name: "Studio",
    category: "Productivity",
    desc: "Customize Odoo apps without writing a single line of code.",
    icon: studioIcon, 
    color: "4B8BBE",
    overview: "Odoo Studio is a powerful no-code/low-code development tool that allows you to tailor the ERP to your exact needs.",
    description: "Become a developer without writing code. With Odoo Studio, you can drag and drop to add custom fields, redesign views, create brand new applications, and automate complex workflows. Every customization is upgrade-safe and instantly available on both desktop and mobile.",
    features: [
      "No-Code Customization Builder",
      "Custom Fields & Data Models",
      "Custom Views (List, Form, Kanban)",
      "Screen & Form Designer",
      "Workflow Automation Rules",
      "PDF Report Customization",
      "Automated Actions & Server Actions",
      "Access Rights Management"
    ],
    benefits: [
      "Dramatically reduce development costs and implementation time.",
      "Adapt the software to your unique business processes instantly.",
      "Empower functional consultants and power users to make structural changes.",
      "Ensure all customizations are preserved during system upgrades."
    ],
    useCases: [
      "Creating a custom 'Quality Check' app from scratch in minutes.",
      "Adding a custom 'Priority' field to Sales Orders and designing a new Kanban view.",
      "Automating an email sequence whenever a specific custom field is updated."
    ],
    industries: [
      "All Industries",
      "IT Consultancies",
      "Manufacturing",
      "Healthcare",
      "Logistics"
    ],
    faqs: [
      { q: "Are Studio customizations safe for future upgrades?", a: "Yes, all changes made in Studio are stored in the database and seamlessly migrate when you upgrade Odoo versions." },
      { q: "Do I need coding knowledge?", a: "No, Studio is a visual tool designed for business users, though advanced Python logic can be injected if needed." }
    ],
//     screenshots: [
//       { title: "Dashboard Screenshot", image: null },
//       { title: "Configuration Screenshot", image: null },
//       { title: "Daily Operations Screenshot", image: null },
//       { title: "Reports Screenshot", image: null },
//       { title: "Analytics Screenshot", image: null }
//     ],
    relatedModules: ["Project", "Documents", "Helpdesk"]
  },
  { 
    id: "spreadsheet",
    name: "Spreadsheet",
    category: "Productivity",
    desc: "Perform complex calculations and build dashboards with live Odoo data.",
    icon: spreadsheetIcon, 
    color: "52985B",
    overview: "Odoo Spreadsheet brings the power of Excel directly into your ERP, utilizing live data for advanced reporting.",
    description: "Build custom reports without exporting to external tools. Odoo Spreadsheet allows you to insert live pivot tables, graphs, and lists straight from the database. Because the data is live, your financial reports, sales dashboards, and KPIs update automatically. Collaborate with colleagues in real-time on the same sheet.",
    features: [
      "Live Odoo Data Synchronization",
      "Pivot Tables & Analysis",
      "Financial Reporting Templates",
      "Custom KPI Dashboards",
      "Advanced Spreadsheet Formulas",
      "Cross-Module Reporting",
      "Real-Time Collaboration",
      "Historical Data Snapshots"
    ],
    benefits: [
      "Stop wasting time exporting CSVs to build external reports.",
      "Ensure data accuracy by relying on a single, live source of truth.",
      "Build highly complex, custom financial reports without developer assistance.",
      "Collaborate easily without passing static files back and forth."
    ],
    useCases: [
      "Building a complex multi-company consolidated P&L statement.",
      "Creating a custom commission calculation sheet linked to live Sales Orders.",
      "Designing a high-level executive dashboard combining Sales, HR, and Inventory KPIs."
    ],
    industries: [
      "Finance & Accounting",
      "Corporate",
      "Agencies",
      "Manufacturing",
      "Retail"
    ],
    faqs: [
      { q: "Is the data really live?", a: "Yes, changing a value in the ERP (like validating an invoice) instantly updates the associated cell in the spreadsheet." },
      { q: "Can I use standard Excel formulas?", a: "Yes, Odoo Spreadsheet supports over 400 standard functions (VLOOKUP, IF, SUMIFS, etc.) familiar to Excel users." }
    ],
//     screenshots: [
//       { title: "Dashboard Screenshot", image: null },
//       { title: "Configuration Screenshot", image: null },
//       { title: "Daily Operations Screenshot", image: null },
//       { title: "Reports Screenshot", image: null },
//       { title: "Analytics Screenshot", image: null }
//     ],
    relatedModules: ["Accounting", "Sales", "Inventory", "Project"]
  }
];
