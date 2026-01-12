export type TSingleGhlContact = {
  id: number | string;
  contactId: string;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  fullName?: string | null;
  phone?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  fullAddress?: string | null;
  address1?: string | null;
  tags: string[];
  postalCode?: string | null;

  propertyType?: string | null;
  assetClass?: string | null;
  leaseType?: string | null;
  acquisitionType?: string | null;
  purchaseDate?: string | null;
  placedInService?: string | null;
  currentTaxYear?: string | null;
  buildingSquareFeet?: string | null;
  howManyRoomTypes?: string | null;
  purchasePrice?: string | null;
  renovationCost?: string | null;

  createdAt: Date;
  updatedAt: Date;

  // Extended fields for template
  landValue?: string;
  depreciableBasis?: string;
  taxRate?: string;
  allocations?: {
    fiveYear?: string;
    sevenYear?: string;
    fifteenYear?: string;
  };
  scenarios?: {
    moderate?: {
      reclassificationRate?: string;
      reclassifiedAmount?: string;
      bonusDepreciation?: string;
      taxSavings?: string;
    };
    aggressive?: {
      reclassificationRate?: string;
      reclassifiedAmount?: string;
      bonusDepreciation?: string;
      taxSavings?: string;
    };
  };
  yearOneImpact?: string;
  professionalFee?: string;
};

export const contactData: TSingleGhlContact = {
    id: 1,
    contactId: "contact_01",
    firstName: "Alex",
    lastName: "Ly",
    fullName: "Alex Ly",
    email: "lyalex@gmail.com",
    phone: "+1 (480) 249-8008",
    city: "Kailua",
    state: "HI",
    country: "USA",
    fullAddress: "867 Mokulua Dr, Kailua, HI 96734",
    address1: "867 Mokulua Dr",
    postalCode: "96734",
    tags: ["Real Estate", "Investor"],

    // Property Details
    propertyType: "Residential",
    assetClass: "Single Family",
    leaseType: "N/A",
    acquisitionType: "Purchase",
    purchaseDate: "2023-05-15",
    placedInService: "2023-06-01",
    currentTaxYear: "2024",
    buildingSquareFeet: "2500",
    howManyRoomTypes: "3",
    purchasePrice: "1000000",
    renovationCost: "0",

    // Analysis Data (Extensions to the schema to support the template)
    landValue: "200000",
    depreciableBasis: "800000",
    taxRate: "0.37",

    // Estimated Allocations
    allocations: {
        fiveYear: "100000",
        sevenYear: "100000",
        fifteenYear: "100000",
    },

    // Financial Projections
    scenarios: {
        moderate: {
            reclassificationRate: "0.25",
            reclassifiedAmount: "200000",
            bonusDepreciation: "120000",
            taxSavings: "44400"
        },
        aggressive: {
            reclassificationRate: "0.30",
            reclassifiedAmount: "240000",
            bonusDepreciation: "144000",
            taxSavings: "53280"
        }
    },

    yearOneImpact: "52106.23",
    professionalFee: "7500",

    createdAt: new Date("2023-05-15T10:00:00Z"),
    updatedAt: new Date("2024-01-12T15:00:00Z"),
};
