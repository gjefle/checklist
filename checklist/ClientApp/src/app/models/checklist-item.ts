import { Checklist } from "./checklist";

export class ChecklistItem {
    checklistItemId: number;
    description: string;
    state: string;
    checklist: Checklist;
}
