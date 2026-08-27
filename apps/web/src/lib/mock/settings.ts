export interface ToggleRow {
  label: string;
  detail: string;
  isToggle: true;
  isValue: false;
  trackBg: string;
  trackBd: string;
  knobLeft: string;
}

export interface ValueRow {
  label: string;
  detail: string;
  isToggle: false;
  isValue: true;
  value: string;
}

export type SettingsRow = ToggleRow | ValueRow;

export interface SettingsGroup {
  title: string;
  note: string;
  rows: SettingsRow[];
}

function tog(label: string, detail: string, on: boolean): ToggleRow {
  return {
    label,
    detail,
    isToggle: true,
    isValue: false,
    trackBg: on ? "#2F5BEA" : "#E3E8EF",
    trackBd: on ? "#2F5BEA" : "#D3DBE6",
    knobLeft: on ? "17px" : "2px",
  };
}

function val(label: string, detail: string, value: string): ValueRow {
  return { label, detail, value, isToggle: false, isValue: true };
}

export const SETTINGS_GROUPS: SettingsGroup[] = [
  {
    title: "Target role",
    note: "Drives every match score in the app",
    rows: [
      val("Primary role", "All scoring and filtering is anchored to this.", "Java Spring Boot Backend Developer"),
      val("Experience band", "Postings outside this range are down-ranked, not hidden.", "0–2 years"),
      val("Locations", "Bangalore, Hyderabad, Pune, Remote", "4 selected"),
      val("Compensation floor", "Below this, jobs are marked but not surfaced on the dashboard.", "₹6 LPA"),
      tog("Include campus and placement drives", "Adds eligibility checks against your academic record.", true),
    ],
  },
  {
    title: "Sources",
    note: "5 of 7 active",
    rows: [
      tog("LinkedIn", "9 applications sent · 1 interview", true),
      tog("Naukri", "13 applications sent · 0 interviews. Consider pausing.", true),
      tog("Company career pages", "Tracked for 14 companies", true),
      tog("Placement cell feed", "Synced Aug 26, 06:00", true),
      tog("Instahyre", "Not connected", false),
      tog("AngelList / Wellfound", "Not connected", false),
    ],
  },
  {
    title: "Notifications",
    note: "Deadlines always notify",
    rows: [
      tog("Deadline warnings", "Placement drives, application closes, assessments. Cannot be muted below 24 hours.", true),
      tog("New high-match jobs", "Only at 85% match or above, batched twice a day.", true),
      tog("Follow-up reminders", "One reminder, then one escalation, then it stops.", true),
      tog("Weekly review digest", "Sunday evening summary with next week's priorities.", true),
      tog("All other activity", "Off. Keeps the notification list about deadlines and matches.", false),
    ],
  },
  {
    title: "AI behaviour",
    note: "Review-first by default",
    rows: [
      tog(
        "Prepare application packs automatically",
        "Drafts resume selection, answers and cover letters for jobs above 85% match. Nothing is submitted.",
        true
      ),
      tog("Draft outreach messages", "Written and held for your review. Never sent.", true),
      tog("Suggest resume changes", "Shown as diffs you accept or reject.", true),
      tog("Infer skills from projects", "Off. Skills only appear when you add evidence yourself.", false),
      val("Evidence strictness", "Controls how much proof a generated claim needs.", "Strict"),
    ],
  },
];

export const HARD_LIMITS: string[] = [
  "Submitting an application on your behalf.",
  "Sending a LinkedIn connection, message, or email from your account.",
  "Bulk or automated outreach of any kind.",
  "Adding a skill or experience to your profile that has no evidence behind it.",
];
