interface Secret {
    id: number;
    key: string;
    createdOn: string;
    validTill: string;
    lastAccessedBy: string;
    lastAccessedOn: string;
}

interface Secrets {
    [key: number]: Secret[];
}
