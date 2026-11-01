/**
 * Recognition, kept in separate categories so awards, memberships and
 * invitations are never blended. Only entries with `confirmed: true` render.
 * Flip an entry to `confirmed: true` once you have the evidence to hand.
 */
export interface Recognition {
  title: string;
  issuer: string;
  year?: string;
  detail?: string;
  confirmed: boolean;
}

export const awards: Recognition[] = [
  {
    title: "Inspirational and Motivational Teaching Award",
    issuer: "Brighton Students' Union",
    year: "2025",
    detail: "Student-nominated award for teaching.",
    confirmed: false,
  },
];

export const memberships: Recognition[] = [
  {
    title: "Member",
    issuer: "IEEE Robotics and Automation Society",
    confirmed: false,
  },
];

export const invitations: Recognition[] = [
  {
    title: "Invited Speaker",
    issuer: "Abu Dhabi AI-Robotics Conference (AIRoC) 2025",
    year: "2025",
    confirmed: true,
  },
];

export const development: Recognition[] = [
  {
    title: "NVIDIA Isaac Sim / Isaac Lab certification",
    issuer: "NVIDIA",
    confirmed: false,
  },
];
