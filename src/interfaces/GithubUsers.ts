import { GitHubUser } from './item';
export interface GitHubUsersResp {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubUser[];
}
