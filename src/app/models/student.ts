export interface Student {
  city: string;
  company: string;
  email: string;
  firstName: string;
  grades: string[];
  id: string;
  lastName: string;
  pic: string;
  skill: string;
  average?: string | number;
  filterStatus?: boolean;
  tags?: string[];
  tagStatus?: boolean;
}

export interface Students {
  students: Student[];
}
