import type { UserDetails } from "../user/UserStoreDataInterface";

export interface CompanyMember {
    id: number;
    email: string;
    type: number;
    createdAt: string;
    userDetails: UserDetails | null;
}