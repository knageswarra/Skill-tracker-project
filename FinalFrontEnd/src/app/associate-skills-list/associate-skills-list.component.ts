import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-associate-skills-list',
  templateUrl: './associate-skills-list.component.html',
  styleUrls: ['./associate-skills-list.component.scss']
})
export class AssociateSkillsListComponent implements OnInit {
  associateSkills: any[] = []; 
  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.fetchAssociateSkills();
  }

  fetchAssociateSkills() {
    this.skillsService.getAllAssociateSkills().subscribe(
      (data: any) => {
        this.associateSkills = data; 
      },
      (error: any) => {
        console.error('Error fetching associate skills:', error);
      }
    );
  }
}
