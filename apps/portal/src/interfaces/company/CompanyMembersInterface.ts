import type { UserDetails } from "../user/UserStoreDataInterface";

export interface CompanyMembersData {
    members: CompanyMember[];
}

export interface CompanyMember {
    id: number;
    email: string;
    type: number;
    createdAt: string;
    details: UserDetails | null;
}