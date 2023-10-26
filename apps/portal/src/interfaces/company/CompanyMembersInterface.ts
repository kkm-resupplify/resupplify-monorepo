import type { UserDetails } from "../user/UserStoreDataInterface";

export interface CompanyMembersData {
    members: Array<CompanyMember>;
}

export interface CompanyMember {
    id: number;
    email: string;
    type: number;
    userDetails: UserDetails;
}