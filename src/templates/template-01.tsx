import {
  MapPin,
  Phone,
  Mail,
  FileText,
  TrendingUp,
  PieChart,
  Clock,
  Briefcase,
  ShieldCheck,
  PenTool,
  type LucideIcon,
} from 'lucide-react';
import React, { RefObject } from 'react';

// --- Components ---

const Page = ({
  children,
  pageNumber,
  totalPages = 9,
  className = '',
}: {
  children: React.ReactNode;
  pageNumber: number;
  totalPages?: number;
  className?: string;
}) => (
  <div
    className={`relative w-full max-w-[210mm] min-h-[297mm] mx-auto bg-white shadow-2xl print:shadow-none print:w-full print:min-h-screen flex flex-col p-12 mb-8 print:mb-0 print:break-after-page ${className}`}
  >
    {/* Page Content */}
    <div className="flex-grow">{children}</div>

    {/* Footer */}
    <div className="mt-auto pt-8 border-t border-slate-200 flex justify-between items-center text-xs text-slate-400 font-medium uppercase tracking-wider">
      <span>Confidential - Privileged Information</span>
      <span>
        Page {pageNumber} of {totalPages}
      </span>
    </div>
  </div>
);

const SectionHeader = ({
  title,
  subtitle,
  icon: Icon,
}: {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}) => (
  <div className="mb-8 border-b-2 border-blue-900 pb-4">
    <div className="flex items-center gap-3 mb-2">
      {Icon && <Icon className="w-8 h-8 text-blue-600" />}
      <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">
        {title}
      </h2>
    </div>
    {subtitle && <p className="text-slate-500 font-medium">{subtitle}</p>}
  </div>
);

/*const StatCard = ({
  label,
  value,
  subtext,
  highlight = false,
}: {
  label: string;
  value: string | number;
  subtext: string;
  highlight: boolean;
}) => (
  <div
    className={`p-6 rounded-xl border ${
      highlight
        ? 'bg-blue-50 border-blue-200'
        : 'bg-white border-slate-200 shadow-sm'
    }`}
  >
    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">
      {label}
    </p>
    <p
      className={`text-2xl font-bold ${
        highlight ? 'text-blue-700' : 'text-slate-900'
      }`}
    >
      {value}
    </p>
    {subtext && <p className="text-xs text-slate-400 mt-2">{subtext}</p>}
  </div>
);*/

const ContactItem = ({
  icon: Icon,
  text,
  href,
}: {
  icon: LucideIcon;
  text: string;
  href: string;
}) => (
  <div className="flex items-center gap-3 text-slate-600">
    <div className="p-2 bg-blue-50 rounded-full text-blue-700">
      <Icon size={18} />
    </div>
    {href ? (
      <a
        href={href}
        className="hover:text-blue-700 transition-colors font-medium"
      >
        {text}
      </a>
    ) : (
      <span className="font-medium">{text}</span>
    )}
  </div>
);

// --- Main Application ---

export const Template01 = ({
  ref,
}: {
  ref: RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div
      className="bg-slate-100 min-h-screen py-8 print:bg-white print:p-0 font-sans text-slate-800"
      ref={ref}
    >
      {/* PAGE 1: COVER */}
      <Page pageNumber={1}>
        <div className="h-full flex flex-col justify-center relative">
          {/* Company Branding */}
          <div className="absolute top-0 left-0 w-full flex justify-between items-start border-b border-slate-200 pb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                CS
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg leading-none">
                  Cost Segregation
                </h3>
                <span className="text-blue-600 font-semibold tracking-wider text-sm">
                  GUYS
                </span>
              </div>
            </div>
            <div className="text-right text-sm font-medium text-slate-500">
              <p>www.costsegregationguys.com</p>
              <p>+1 (406) 626-7978</p>
            </div>
          </div>

          {/* Main Title Area */}
          <div className="mt-32 mb-16">
            <div className="w-24 h-2 bg-blue-600 mb-8 rounded-full"></div>
            <h1 className="text-6xl font-extrabold text-slate-900 leading-tight mb-4">
              Depreciation <br />
              <span className="text-blue-900">Analysis</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-lg">
              Strategic tax planning and engineering-based cost segregation
              study for commercial real estate assets.
            </p>
          </div>

          {/* Client Card */}
          <div className="bg-slate-50 rounded-2xl p-10 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>

            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-widest mb-6">
              Prepared For
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div>
                <p className="text-2xl font-bold text-slate-900 mb-1">
                  Alex Ly
                </p>
                <div className="flex flex-col gap-2 mt-4">
                  <ContactItem
                    icon={Mail}
                    text="lyalex@gmail.com"
                    href="mailto:lyalex@gmail.com"
                  />
                  <ContactItem
                    icon={Phone}
                    text="+1 (480) 249-8008"
                    href="tel:+1 (480) 249-8008"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center border-l border-slate-200 pl-8">
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-600 mt-1 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Property Address
                    </p>
                    <p className="text-lg font-medium text-slate-900 leading-snug">
                      867 Mokulua Dr,
                      <br />
                      Kailua, HI 96734
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto text-center">
            <p className="text-sm text-slate-400">
              Analysis Date: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </Page>

      {/* PAGE 2: HOW IT WORKS */}
      <Page pageNumber={2}>
        <SectionHeader
          title="Methodology"
          subtitle="Understanding Cost Segregation"
          icon={Briefcase}
        />

        <div className="flex flex-col h-full gap-8">
          <div className="prose prose-slate max-w-none text-justify text-sm leading-relaxed text-slate-600">
            <p className="mb-4">
              <strong>Cost Segregation</strong> is an IRS-approved application
              by which commercial property owners can accelerate depreciation
              and reduce the amount of taxes owed. This savings can be
              substantial.
            </p>
            <p className="mb-4">
              When a property is purchased, it includes not just the structure,
              but also all of its interior and exterior components. On average,
              20% to 40% of those components fall into tax categories that can
              be written off much faster than the building structure itself.
            </p>
            <p className="mb-4">
              A standard accountant will typically depreciate the entire
              purchase price (minus land) over 27.5 or 39 years. A Cost
              Segregation study identifies assets eligible for accelerated
              depreciation timelines of 5, 7, and 15 years.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 my-6">
              <h4 className="font-bold text-blue-900 mb-2">The Result?</h4>
              <p className="text-blue-800">
                Significantly increased cash flow in the early years of
                ownership through deferral of federal and state income taxes.
              </p>
            </div>
          </div>

          {/* Visual Infographic */}
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 mt-4 flex-grow flex flex-col justify-center">
            <h3 className="text-lg font-bold text-slate-900 mb-8 text-center">
              Allocation Concept: Land vs. Building
            </h3>

            <div className="flex items-end justify-center h-64 gap-2 px-8 w-full max-w-lg mx-auto">
              {/* Land Bar */}
              <div className="w-1/3 flex flex-col items-center group">
                <div className="mb-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-bold text-slate-700 block">Land</span>
                  <span className="text-xs text-slate-500">
                    Non-Depreciable
                  </span>
                </div>
                <div
                  className="w-full bg-slate-300 rounded-t-lg relative flex items-center justify-center"
                  style={{ height: '20%' }}
                >
                  <span className="font-bold text-slate-600 z-10">$200k</span>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-bold bg-slate-200 px-2 py-1 rounded text-slate-600">
                    20%
                  </span>
                </div>
              </div>

              {/* Building Bar */}
              <div className="w-1/3 flex flex-col items-center group">
                <div className="mb-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-bold text-blue-900 block">
                    Building
                  </span>
                  <span className="text-xs text-blue-600">
                    Depreciable Base
                  </span>
                </div>
                <div
                  className="w-full bg-blue-600 rounded-t-lg relative flex items-center justify-center shadow-lg"
                  style={{ height: '80%' }}
                >
                  <span className="font-bold text-white z-10">$800k</span>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-bold bg-blue-100 px-2 py-1 rounded text-blue-800">
                    80%
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-slate-500">
              <p>
                Total Purchase Price Basis: <strong>$1,000,000</strong>
              </p>
            </div>
          </div>
        </div>
      </Page>

      {/* PAGE 3: DEPRECIATION BREAKDOWN */}
      <Page pageNumber={3}>
        <SectionHeader
          title="Asset Reclassification"
          subtitle="Identified Accelerated Assets"
          icon={PieChart}
        />

        <div className="space-y-8">
          <p className="text-slate-600">
            Based on our preliminary analysis of the property at{' '}
            <span className="font-semibold text-slate-900">867 Mokulua Dr</span>
            , we estimate reallocating the following amounts into shorter
            recovery periods.
          </p>

          <div className="grid grid-cols-1 gap-6">
            {/* 5-Year Property */}
            <div className="flex items-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="h-14 w-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-6 shrink-0">
                <span className="font-bold text-lg">5yr</span>
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-slate-900 text-lg">
                  Personal Property
                </h4>
                <p className="text-sm text-slate-500">
                  Carpeting, cabinetry, decorative lighting, dedicated
                  electrical.
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-emerald-600">$100,000</p>
              </div>
            </div>

            {/* 7-Year Property */}
            <div className="flex items-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="h-14 w-14 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mr-6 shrink-0">
                <span className="font-bold text-lg">7yr</span>
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-slate-900 text-lg">
                  Office Furniture / Fixtures
                </h4>
                <p className="text-sm text-slate-500">
                  Desks, safe signage, telecommunications equipment.
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-teal-600">$100,000</p>
              </div>
            </div>

            {/* 15-Year Property */}
            <div className="flex items-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="h-14 w-14 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-6 shrink-0">
                <span className="font-bold text-lg">15yr</span>
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-slate-900 text-lg">
                  Land Improvements
                </h4>
                <p className="text-sm text-slate-500">
                  Paving, curbing, fencing, landscaping, exterior lighting.
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-indigo-600">$100,000</p>
              </div>
            </div>
          </div>

          {/* Visual Summary */}
          <div className="mt-8 bg-slate-900 text-white rounded-xl p-8 flex flex-col items-center text-center shadow-lg">
            <h3 className="text-blue-200 font-semibold uppercase tracking-widest text-sm mb-2">
              Estimated Year 1 Impact
            </h3>
            <div className="text-5xl font-extrabold mb-2">$52,106.23</div>
            <p className="text-slate-400 text-sm">
              Total First-Year Depreciation Deduction
            </p>
            <div className="w-full bg-slate-800 h-2 rounded-full mt-6 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500 w-3/4 h-full"></div>
            </div>
            <div className="flex justify-between w-full mt-2 text-xs text-slate-500 font-mono">
              <span>Standard</span>
              <span>Accelerated Potential</span>
            </div>
          </div>
        </div>
      </Page>

      {/* PAGE 4: DEPRECIATION ESTIMATE */}
      <Page pageNumber={4}>
        <SectionHeader
          title="Financial Projections"
          subtitle="Scenario Analysis"
          icon={TrendingUp}
        />

        {/* Property Details Grid */}
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-8">
          <h3 className="text-sm font-bold text-slate-900 uppercase border-b border-slate-200 pb-2 mb-4">
            Property Parameters
          </h3>
          <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Tax Rate:</span>
              <span className="font-medium text-slate-900">37.0%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Purchase Price:</span>
              <span className="font-medium text-slate-900">$1,000,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Land Value:</span>
              <span className="font-medium text-slate-900">$200,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Depreciable Basis:</span>
              <span className="font-medium text-slate-900">$800,000</span>
            </div>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Scenario 1 */}
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-slate-100 p-4 border-b border-slate-200 text-center">
              <h4 className="font-bold text-slate-700">Moderate Scenario</h4>
              <span className="text-xs font-semibold bg-white border border-slate-300 px-2 py-1 rounded text-slate-500 mt-1 inline-block">
                25% Reclassified
              </span>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-xs text-slate-400 uppercase">
                  Reclassified Amount
                </p>
                <p className="text-xl font-bold text-slate-800">$200,000</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase">
                  Bonus Depreciation
                </p>
                <p className="text-xl font-bold text-slate-800">$120,000</p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-400 uppercase font-bold">
                  Est. Tax Savings
                </p>
                <p className="text-2xl font-bold text-blue-600">$44,400</p>
              </div>
            </div>
          </div>

          {/* Scenario 2 */}
          <div className="border-2 border-blue-600 rounded-xl overflow-hidden shadow-md relative">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] px-2 py-1 font-bold uppercase rounded-bl-lg">
              Recommended
            </div>
            <div className="bg-blue-50 p-4 border-b border-blue-100 text-center">
              <h4 className="font-bold text-blue-900">Aggressive Scenario</h4>
              <span className="text-xs font-semibold bg-white border border-blue-200 px-2 py-1 rounded text-blue-600 mt-1 inline-block">
                30% Reclassified
              </span>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-xs text-slate-400 uppercase">
                  Reclassified Amount
                </p>
                <p className="text-xl font-bold text-slate-800">$240,000</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase">
                  Bonus Depreciation
                </p>
                <p className="text-xl font-bold text-slate-800">$144,000</p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-400 uppercase font-bold">
                  Est. Tax Savings
                </p>
                <p className="text-2xl font-bold text-blue-700">$53,280</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-400 text-justify mt-auto italic leading-tight">
          Disclaimer: The figures presented above are estimates based on typical
          results for similar properties. Actual results may vary based on the
          specific construction details and asset usage. This proposal does not
          constitute legal or tax advice. Consult your tax professional
          regarding your specific situation.
        </p>
      </Page>

      {/* PAGE 5: AUDIT & SCOPE */}
      <Page pageNumber={5}>
        <SectionHeader
          title="Scope of Work"
          subtitle="Deliverables & Support"
          icon={ShieldCheck}
        />

        <div className="grid grid-cols-1 gap-8">
          {/* Audit Support */}
          <div className="bg-white border-l-4 border-emerald-500 shadow-sm p-6 rounded-r-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Audit Defense Guarantee
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We stand behind our work. In the unlikely event of an IRS
                  audit regarding our study, we provide full support at no
                  additional cost. This includes responding to Information
                  Document Requests (IDRs) and defending our engineering
                  methodology and asset classifications.
                </p>
              </div>
            </div>
          </div>

          {/* Scope Steps */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <FileText size={20} className="text-blue-600" />
              Study Methodology
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">
                    Site Inspection & Analysis
                  </h4>
                  <p className="text-sm text-slate-500 mt-1">
                    A qualified engineer will (virtually or physically) inspect
                    the property to identify, quantify, and document all
                    building components, including mechanical, electrical, and
                    plumbing systems suitable for reclassification.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">
                    Cost Estimation & Classification
                  </h4>
                  <p className="text-sm text-slate-500 mt-1">
                    We utilize standard construction cost estimating data
                    (RSMeans) and actual cost records to assign values to every
                    component. Assets are then classified according to MACRS
                    guidelines and relevant Tax Court rulings.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">
                    Final Report Delivery
                  </h4>
                  <div className="text-sm text-slate-500 mt-1">
                    You will receive a comprehensive report including:
                    <ul className="list-disc ml-5 mt-1 text-xs text-slate-500">
                      <li>Executive Summary</li>
                      <li>Detailed Asset Detail Schedule (Excel/CSV)</li>
                      <li>Form 3115 Preparation Guide (if applicable)</li>
                      <li>Methodology & Legal Citations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>

      {/* PAGE 6: TIMELINE & FEES */}
      <Page pageNumber={6}>
        <SectionHeader
          title="Investment & Timeline"
          subtitle="Project Roadmap"
          icon={Clock}
        />

        <div className="flex flex-col h-full">
          {/* Timeline */}
          <div className="relative border-l-2 border-slate-200 ml-4 space-y-10 py-4 mb-12">
            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
              <h4 className="font-bold text-slate-900">Engagement Signed</h4>
              <p className="text-sm text-slate-500">Day 1</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-300 border-4 border-white shadow-sm"></div>
              <h4 className="font-bold text-slate-900">
                Data Collection & Inspection
              </h4>
              <p className="text-sm text-slate-500">Week 1-2</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-300 border-4 border-white shadow-sm"></div>
              <h4 className="font-bold text-slate-900">Engineering Analysis</h4>
              <p className="text-sm text-slate-500">Week 3-4</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-sm"></div>
              <h4 className="font-bold text-slate-900">
                Final Report Delivery
              </h4>
              <p className="text-sm text-slate-500">Week 5</p>
            </div>
          </div>

          {/* Fees */}
          <div className="mt-auto bg-slate-900 rounded-xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>

            <div className="relative z-10 flex justify-between items-end">
              <div>
                <h3 className="text-2xl font-bold mb-2">Professional Fee</h3>
                <p className="text-slate-400 text-sm max-w-sm">
                  Flat fee inclusive of all engineering, accounting analysis,
                  and audit support.
                </p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-white">$7,500</p>
                <p className="text-sm text-blue-300 mt-1">USD</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700 grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="block text-slate-500 uppercase text-xs mb-1">
                  Retainer (50%)
                </span>
                <span className="font-semibold text-white">
                  $3,750 due upon engagement
                </span>
              </div>
              <div className="text-right">
                <span className="block text-slate-500 uppercase text-xs mb-1">
                  Completion (50%)
                </span>
                <span className="font-semibold text-white">
                  $3,750 due upon delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </Page>

      {/* PAGE 7: SIGNATURES */}
      <Page pageNumber={7}>
        <SectionHeader
          title="Authorization"
          subtitle="Engagement Agreement"
          icon={PenTool}
        />

        <div className="flex flex-col h-full justify-between">
          <div className="prose prose-sm text-slate-600 max-w-none">
            <p>
              <strong>Termination Policy:</strong> Either party may terminate
              this agreement with written notice. In the event of termination by
              Client prior to completion, Client agrees to compensate Cost
              Segregation Guys for hours worked up to the date of termination at
              our standard hourly rates, not to exceed the total fixed fee.
            </p>
            <p className="mt-4">
              <strong>Acceptance:</strong> By signing below, the Client agrees
              to the terms and conditions set forth in this proposal (Pages 8-9)
              and authorizes Cost Segregation Guys to proceed with the
              Depreciation Analysis for the property located at 867 Mokulua Dr,
              Kailua, HI 96734.
            </p>
          </div>

          <div className="space-y-16 mt-12 mb-12">
            {/* Client Sig */}
            <div className="grid grid-cols-2 gap-12">
              <div>
                <div className="border-b-2 border-slate-300 h-12 mb-2"></div>
                <p className="font-bold text-slate-900 uppercase text-sm">
                  Alex Ly
                </p>
                <p className="text-xs text-slate-500">Client Signature</p>
              </div>
              <div>
                <div className="border-b-2 border-slate-300 h-12 mb-2"></div>
                <p className="font-bold text-slate-900 uppercase text-sm">
                  Date
                </p>
              </div>
            </div>

            {/* Company Sig */}
            <div className="grid grid-cols-2 gap-12">
              <div className="relative">
                {/* Faux Signature */}
                <div
                  className="absolute bottom-4 left-4 font-script text-3xl text-blue-800 opacity-80 rotate-[-5deg]"
                  style={{ fontFamily: 'cursive' }}
                >
                  CostSegGuys
                </div>
                <div className="border-b-2 border-slate-300 h-12 mb-2"></div>
                <p className="font-bold text-slate-900 uppercase text-sm">
                  Authorized Representative
                </p>
                <p className="text-xs text-slate-500">Cost Segregation Guys</p>
              </div>
              <div>
                <div className="border-b-2 border-slate-300 h-12 mb-2 flex items-end pb-1">
                  <span className="text-slate-800">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
                <p className="font-bold text-slate-900 uppercase text-sm">
                  Date
                </p>
              </div>
            </div>
          </div>
        </div>
      </Page>

      {/* PAGE 8: TERMS (1/2) */}
      <Page pageNumber={8}>
        <SectionHeader
          title="Terms & Conditions"
          subtitle="Legal Agreement (1/2)"
        />

        <div
          className="text-xs leading-relaxed text-slate-600 space-y-4 columns-2 gap-8"
          style={{ columnFill: 'auto' }}
        >
          <h4 className="font-bold text-slate-900 mb-1">
            1. Services Provided
          </h4>
          <p>
            Cost Segregation Guys ("Consultant") agrees to perform a Cost
            Segregation Study ("Study") for the property identified in this
            proposal. The Study will be conducted in accordance with the IRS
            Audit Techniques Guide for Cost Segregation. Consultant will analyze
            construction cost data and/or purchase price allocation to identify
            assets eligible for accelerated depreciation.
          </p>

          <h4 className="font-bold text-slate-900 mb-1">
            2. Client Responsibilities
          </h4>
          <p>
            Client agrees to provide Consultant with all necessary documentation
            required to complete the Study, including but not limited to:
            closing statements, appraisals, depreciation schedules, blueprints,
            construction cost details, and change orders. Consultant relies on
            the accuracy and completeness of the information provided by Client.
            Consultant is not responsible for errors resulting from inaccurate
            or incomplete data provided by Client.
          </p>

          <h4 className="font-bold text-slate-900 mb-1">3. Confidentiality</h4>
          <p>
            Consultant agrees to keep all information provided by Client
            confidential and will not disclose such information to third parties
            without Client's written consent, except as required by law or
            professionally required to complete the Study (e.g., discussions
            with Client's CPA).
          </p>

          <h4 className="font-bold text-slate-900 mb-1">4. No Tax Advice</h4>
          <p>
            While Consultant provides engineering-based tax analysis, Consultant
            is not a law firm or a CPA firm acting in the capacity of a tax
            return preparer for the Client. The Study provides factual data to
            be used by the Client's tax professionals. Client should consult
            with their own tax advisors regarding the application of the Study
            results to their specific tax situation.
          </p>

          <h4 className="font-bold text-slate-900 mb-1">
            5. Limitation of Liability
          </h4>
          <p>
            Consultant's liability for any claim arising out of this agreement,
            whether in contract, tort, or otherwise, shall be limited to the
            total amount of fees actually paid by Client to Consultant under
            this agreement. In no event shall Consultant be liable for
            consequential, special, incidental, or punitive damages, including
            lost profits or tax savings not realized.
          </p>
        </div>
      </Page>

      {/* PAGE 9: TERMS (2/2) */}
      <Page pageNumber={9}>
        <SectionHeader
          title="Terms & Conditions"
          subtitle="Legal Agreement (2/2)"
        />

        <div className="text-xs leading-relaxed text-slate-600 space-y-4 columns-2 gap-8">
          <h4 className="font-bold text-slate-900 mb-1">6. Audit Support</h4>
          <p>
            In the event the Study is challenged by the IRS or state taxing
            authorities, Consultant agrees to provide audit support as defined
            in the "Scope of Work". This support includes clarifying methodology
            and providing supporting documentation. This support does not
            include legal representation in tax court. Consultant's obligation
            to provide audit support is contingent upon Client having paid all
            fees due under this agreement.
          </p>

          <h4 className="font-bold text-slate-900 mb-1">7. Payment Terms</h4>
          <p>
            Invoices are due upon receipt unless otherwise specified in the
            "Fees" section. A finance charge of 1.5% per month (or the maximum
            allowed by law) will be applied to all past-due balances. Consultant
            reserves the right to withhold the final Study report until payment
            is received in full.
          </p>

          <h4 className="font-bold text-slate-900 mb-1">8. Governing Law</h4>
          <p>
            This agreement shall be governed by and construed in accordance with
            the laws of the State in which the Consultant's principal office is
            located, without regard to its conflict of laws principles.
          </p>

          <h4 className="font-bold text-slate-900 mb-1">9. Entire Agreement</h4>
          <p>
            This proposal constitutes the entire agreement between the parties
            and supersedes all prior agreements, proposals, or understandings,
            whether written or oral. No modification of this agreement shall be
            valid unless in writing and signed by both parties.
          </p>

          <h4 className="font-bold text-slate-900 mb-1">10. Severability</h4>
          <p>
            If any provision of this agreement is found to be invalid or
            unenforceable, the remaining provisions shall remain in full force
            and effect.
          </p>

          <div className="bg-slate-50 p-4 border border-slate-200 mt-8 break-inside-avoid">
            <p className="font-bold text-slate-800 mb-2">
              Electronic Transmission
            </p>
            <p>
              This agreement may be executed in counterparts and delivered by
              electronic transmission (PDF/Email), which shall be deemed an
              original.
            </p>
          </div>
        </div>

        <div className="mt-auto pt-12 flex flex-col items-center">
          <div className="w-16 h-1 bg-slate-200 rounded mb-4"></div>
          <p className="text-slate-400 italic">End of Document</p>
        </div>
      </Page>
    </div>
  );
};
