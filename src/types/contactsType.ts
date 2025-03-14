import { iconsMap, IconKey } from "../data/contacts/icons";
import contactsJson from "../data/contacts/contacts.json";

export interface ContactItem {
    id: string;
    icon: IconKey;
    text: string;
    link?: string;
}

export type ContactWithIcon = Omit<ContactItem, "icon"> & { icon: JSX.Element };

export const getContactsData = (): ContactWithIcon[] => {
    return contactsJson.map((item) => ({
        ...item,
        icon: iconsMap[item.icon as IconKey]
    }));
};
