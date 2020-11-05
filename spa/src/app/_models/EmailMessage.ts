export interface EmailMessage {
  from: string;
  to: string;
  subject: string;
  body: string;
  surgeon: string;
  surgeonImage: string;
  textFragments: string[];
  phone: string;
  soort: string;

  }