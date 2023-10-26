import type { UserDetails } from "../user/UserStoreDataInterface";

export interface CompanyMembersData {
    users: CompanyMember[];
}

export interface CompanyMember {
    id: number;
    email: string;
    type: number;
    createdAt: string;
    userDetails: UserDetails | null;
}