export interface ProfileProps {
  initialValues: Profile;
  setErrorMessage: (value: string) => void;
  errorMessage?: string;
}

export interface Profile {
  addressCity: string | null;
  addressCountry: string | null;
  addressLine1: string | null;
  addressLine2: string | null;
  addressLine3: string | null;
  addressPostalCode: string | null;
  addressProvince: string | null;
  birthDate: string | null;
  buckzyKycStatus: string;
  buckzyPartId: string | null;
  countryOfBirth: string | null;
  countryOfResidence: string | null;
  created_at: string;
  currencyCode: string | null;
  deleted_at: string | null;
  documents: any;
  email: string;
  firstName: string;
  lastName: string;
  middleName: string | null;
  mobileCountryCode: string | null;
  mobileNumber: string | null;
  occupation: string | null;
  pk: string;
  referralCode: string | null;
  updated_at: string;
}

export interface FormValues {
  firstName: string;
  lastName: string;
  kycStatus?: string;
  countryOfResidence: any;
  countryOfBirth: any;
  occupation: string;
  birthDate: any;
  country: any;
  city: string;
  addressLine1: string;
  addressLine2?: string;
  province: string;
  postalCode: string;
  mobileCountryCode: string;
  mobileNumber: string;
  email: string;
  type1: {
    id: string;
    name: string;
  };
  type2: {
    id: string;
    name: string;
  };
  type3: {
    id: string;
    name: string;
  };
  identifier1: string;
  identifier2: string;
  identifier3: string;
}
