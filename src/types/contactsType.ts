import { iconsMap, IconKey } from "../data/contacts/icons";
import contactsJson from "../data/contacts/contacts.json";

export interface ContactTypes {
    id: string;
    icon: IconKey;
    text: string;
    link?: string;
}

export type ContactWithIcon = Omit<ContactTypes, "icon"> & { icon: JSX.Element };

export const getContactsData = (): ContactWithIcon[] => {
    return contactsJson.map((item) => ({
        ...item,
        icon: iconsMap[item.icon as IconKey]
    }));
};
