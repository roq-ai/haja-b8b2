import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  name: string;
  description?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  organization_id?: string;
}
