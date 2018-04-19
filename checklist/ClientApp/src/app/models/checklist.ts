import { ChecklistItem } from './checklist-item';
import { OutputCheckItem } from './output-check-item';

export class Checklist {
    checklistId: number;
    name: string;
    outputCheckItems: OutputCheckItem[];
}
