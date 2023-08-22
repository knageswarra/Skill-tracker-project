import { Component } from '@angular/core';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-associate-skills',
  templateUrl: './associate-skills.component.html',
})
export class AssociateSkillsComponent {
  associateId!: number;
  skillId!: number;
  certification!: string;
  duration!: string;
  startDate!: string;
  endDate!: string;
  experience!: string;
  rating!: string;

  constructor(private skillsService: SkillsService) {}

  onSaveAssociateSkill() {
    
    const data = {
      aid: { associateId: this.associateId }, 
      certification: this.certification,
      duration: this.duration,
      startDate: this.startDate,
      endDate: this.endDate,
      experience: this.experience,
      rating: this.rating,
      sid: { skillId: this.skillId },
    };

    
    this.skillsService.saveAssociateSkill(this.associateId, this.skillId, data).subscribe(
      () => {
        console.log('Associate skill saved successfully.');
        
      },
      (error) => {
        console.error('Error saving associate skill:', error);
        
      }
    );
  }
}
