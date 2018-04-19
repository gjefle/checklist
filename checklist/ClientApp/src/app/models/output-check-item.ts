import { ChecklistItem } from "./checklist-item";

export class OutputCheckItem extends ChecklistItem {
    normallyHigh: boolean;
    state: string;
    number: number;
    ipAddress: string;
    // checklistItemId: number;
    // name: string;
    // state: string;
}
