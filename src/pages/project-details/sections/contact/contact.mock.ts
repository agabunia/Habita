export type ContactInfoType = {
  developer_id: number;
  mobile_phone: string;
  hot_line: string;
  email: string;
  head_quarter: string;
};

export const contactInfo: ContactInfoType[] = [
  {
    developer_id: 1,
    mobile_phone: "+ 995 591 99 32 10",
    hot_line: "+ 032 2 53 24 87",
    email: "info@blox.ge",
    head_quarter: "Tbilisi, Georgia",
  },
  {
    developer_id: 2,
    mobile_phone: "+ 995 591 12 34 56",
    hot_line: "+ 032 2 11 22 33",
    email: "info@archi.ge",
    head_quarter: "Tbilisi, Georgia",
  },
  {
    developer_id: 3,
    mobile_phone: "+ 995 591 23 45 67",
    hot_line: "+ 032 2 44 55 66",
    email: "info@m2.ge",
    head_quarter: "Tbilisi, Georgia",
  },
  {
    developer_id: 4,
    mobile_phone: "+ 995 591 34 56 78",
    hot_line: "+ 032 2 34 56 78",
    email: "info@deka.ge",
    head_quarter: "Tbilisi, Georgia",
  },
  {
    developer_id: 5,
    mobile_phone: "+ 995 591 45 67 89",
    hot_line: "+ 032 2 45 67 89",
    email: "info@biograpi.ge",
    head_quarter: "Tbilisi, Georgia",
  },
  {
    developer_id: 6,
    mobile_phone: "+ 995 591 56 78 90",
    hot_line: "+ 032 2 56 78 90",
    email: "info@apex.ge",
    head_quarter: "Tbilisi, Georgia",
  },
  {
    developer_id: 7,
    mobile_phone: "+ 995 591 67 89 01",
    hot_line: "+ 032 2 67 89 01",
    email: "info@whitesquare.ge",
    head_quarter: "Tbilisi, Georgia",
  },
  {
    developer_id: 8,
    mobile_phone: "+ 995 591 78 90 12",
    hot_line: "+ 032 2 78 90 12",
    email: "info@istoria.ge",
    head_quarter: "Tbilisi, Georgia",
  },
];

export const bestCallTimes = [
  "09:00 - 12:00",
  "12:00 - 15:00",
  "15:00 - 18:00",
  "18:00 - 20:00",
];

export const getContactInfoByDeveloper = (
  developerId: number,
): ContactInfoType | undefined => {
  return contactInfo.find((item) => item.developer_id === developerId);
};
