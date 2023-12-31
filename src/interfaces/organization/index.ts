import { BlogPostInterface } from 'interfaces/blog-post';
import { CourseInterface } from 'interfaces/course';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  blog_post?: BlogPostInterface[];
  course?: CourseInterface[];
  user?: UserInterface;
  _count?: {
    blog_post?: number;
    course?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
