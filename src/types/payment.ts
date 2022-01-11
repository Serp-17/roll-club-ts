import { Profile } from "types/user";

export interface Payment {
  buckzyTransactionObject: string | null;
  created_at: string;
  deleted_at: string | null;
  fxEffectiveUntil: string | null;
  fxFee: number;
  fxFeeBuckzy: number;
  fxFeePartner: number;
  fxRate: number;
  fxSpotId: string;
  globalStatus: "new" | "confirmed" | "started" | "pending" | "issue" | "failed" | "success";
  invoiceFile: null;
  payinAmount: number;
  payinCurrency: string;
  payinMethod: string;
  payinProvider: string;
  payinReference: string;
  payoutAmount: number;
  payoutCurrency: string;
  pk: string;
  profileObject: Profile;
  profilePK: string;
  purposeCode: string;
  recipientObject: {
    address: string;
    beneficiaryName: string;
    city: string;
    countryCode: string;
    created_at: string;
    currencyCode: string;
    deleted_at: string | null;
    iban: string;
    owner: string;
    pk: string;
    sk: string | null;
    state: string;
    sts: string | null;
    swiftBicRouting: string;
    type: string | null;
    updated_at: string;
    zipCode: string;
  };
  recipientPK: string;
  relationshipCode: string;
  sourceOfFundsCode: string;
  updated_at: string;
}

export interface PaymentItem {
  response: {
    items: Payment[];
    last_evaluated_key: null;
  };
}

export interface PaymentResponse {
  data: PaymentItem;
  isLoading: boolean;
}

export interface IPaymentAmounts {
  from_currency: string;
  transfer_fee: number;
  from_method: string;
  from_full_amount: number;
  from_amount: number;
  to_currency: string;
  to_amount: number;
  fx_rate: number;
  fx_rate_id: string;
  total_fee: number;
  valid_till: string;
}

type SelectType = Record<string, string>;

export interface IPaymentData {
  payin_currency: string;
  payin_method: string;
  payin_amount: string;
  payment_method: string;
  payout_currency: string;
  payout_country: string;
  payout_amount: string;
  from: SelectType;
  to: SelectType;
  purpose_code: null | SelectType;
  relationship_code: null | SelectType;
  source_code: null | SelectType;
  invoice: Record<string, any>;
}

export interface ITtransactionData {
  recipient_pk: string;
  payout_amount: string;
  collection_method: string;
  collection_reference: string;
  purpose_code: string;
  relationship_code: string;
  source_of_funds_code: string;
}

export interface IPlaidLinkedAccounts {
  id: string;
  accountId: number;
  plaidAccountId: number;
  name: string;
  selectedAccount: string;
  accountNumber: number;
  selected: boolean;
}
