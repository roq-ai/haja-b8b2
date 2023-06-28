const mapping: Record<string, string> = {
  'blog-posts': 'blog_post',
  courses: 'course',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
