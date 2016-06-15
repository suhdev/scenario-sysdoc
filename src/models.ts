/**
 * Interface represents a single member of staff
 */
export interface StaffMember {
    /**
     * The name of the staff member
     */
    name:string;
    /**
     * A numeric representation of the role. 
     * The role field is internally used for calculating who
     * should or shouldn't be involved in a consultation.  
     */
    role:number;
    /**
     * A string representation of the role. 
     */
    roleLabel:string;
}