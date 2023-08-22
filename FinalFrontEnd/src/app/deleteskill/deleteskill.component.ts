import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-deleteskill',
  templateUrl: './deleteskill.component.html',
  styleUrls: ['./deleteskill.component.scss']
})
export class DeleteSkillComponent implements OnInit {
  skillId!: number;
  deletionSuccess = false; // Add a property to track deletion success

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
  }

  deleteSkill(): void {
    if (!this.skillId) {
      console.error('Skill ID is required.');
      return;
    }

    this.skillsService.deleteSkillById(this.skillId).subscribe(
      () => {
        console.log('Skill deleted successfully');
        // Set deletionSuccess to true to display the success message
        this.deletionSuccess = true;
        
        // You can add any additional logic or notifications here
      },
      (error: any) => {
        console.error('Error deleting skill:', error);
        // Handle error and show error message if needed
      }
    );
  }
}