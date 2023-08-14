import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,AbstractControl, Validators } from '@angular/forms';
import { AssociateAndSkills } from 'src/app/model/associate-and-skills';
import { Associate } from 'src/app/model/associate';
import { Skills } from 'src/app/model/skills';
import { LoginService } from 'src/app/service/login.service';
import { AssociateSkillServiceService } from 'src/app/service/associate-skill-service.service';
import { UserDetailsService } from 'src/app/service/user-details.service';
import { Router } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
interface ValidationMessages {
  [key: string]: { [key: string]: string };
  skillGroup: { [key: string]: string };
  skillName: { [key: string]: string };
  certification: { [key: string]: string };
  startDate: { [key: string]: string };
  endDate: { [key: string]: string };
  duration: { [key: string]: string };
  experience: { [key: string]: string };
  rating: { [key: string]: string };
}

interface FormErrors {
  [key: string]: string;
  skillGroup: string;
  skillName: string;
  certification: string;
  startDate: string;
  endDate: string;
  duration: string;
  experience: string;
  rating: string;
}


@Component({
  selector: 'app-update-asso-skills',
  templateUrl: './update-asso-skills.component.html',
  styleUrls: ['./update-asso-skills.component.scss']
})
export class UpdateAssoSkillsComponent implements OnInit {

  skillUpdateForm: FormGroup | undefined;
  submitted = false;
  name = 'Angular 5';
  aid: number | undefined
  private AssociateSkill: AssociateAndSkills = new AssociateAndSkills("", "", "", "", "", "", new Associate(0, "", "", "", "", 0, "", "", "", ""), new Skills(0, "", ""));

  constructor(
   
    private fb: FormBuilder,
    private loginservice: LoginService,
    private associateskillService: AssociateSkillServiceService,
    private Uservice: UserDetailsService,
    private router: Router
  ) { }


  validationMessages: ValidationMessages = {
    skillGroup: {
      required: 'Skill Group is required.'
    },
    skillName: {
      required: 'Skill name is required'
    },
    certification: {
      required: 'certification is required'
    },
    startDate: {
      required: 'startDate is required'
    },
    endDate: {
      required: 'startDate is required'
    },
    duration: {
      required: 'duratiion is required'
    },
    experience: {
      required: 'experience is required'
    },
    rating: {
      required: 'rating is required'
    }
  };

  forErrors: FormErrors = {
    skillGroup: '',
    skillName: '',
    certification: '',
    startDate: '',
    endDate: '',
    duration: '',
    experience: '',
    rating: ''
  };



  ngOnInit() {
    this.AssociateSkill = this.associateskillService.getAssociteSkillmodel();

    

    this.skillUpdateForm = this.fb.group({
      skillGroup: ['', Validators.required],
      skillName: ['', Validators.required],
      certification: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      duration: ['', Validators.required],
      experience: ['', Validators.required],
      rating: ['', Validators.required]

    });
  }

  // get f() { return this.skillUpdateForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.skillUpdateForm!.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.skillUpdateForm!.value, null, 4));
  }


  onUpdateChange(model: AssociateAndSkills) {
    this.associateskillService.updateAssociateSkillByASid(model).subscribe(response => {
      this.router.navigate(["/viewSkills"]);
    })
  }


  logValidationErrors(group: FormGroup = this.skillUpdateForm!): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      // console.log(Object.keys(group.controls));
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        this.forErrors[key] = '';
        // console.log("hello" + abstractControl.value);
        if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
          const message = this.validationMessages[key];
          for (const errKey in abstractControl.errors) {
            if (errKey) {
              this.forErrors[key] += message[errKey] + ' ';
              // console.log( this.forErrors[key]);
            }
          }
        }
      }

    });

  
  }



}
