export type BranchOffice={
    name: string; 
    src_img: string; 
    src_map: string;
    location?: location; 
    title: string; 
    description: string;
    timetable: string;
    phone?: number;
}
export type location = {
    lat: string;
    long: string;
}