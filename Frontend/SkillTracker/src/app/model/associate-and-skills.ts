import { Associate } from "./associate";
import { Skills } from "./skills";

export class AssociateAndSkills {
sid: any;
aid: any;
    constructor(


        // private srNo:number,
        public certification:string,
        private rating:string,
        private startDate:string,
        private endDate:string,
        public duration:string,
        public experience:string,
        private AssociateInfo :Associate,
        private SkillsInfo :Skills,
	

        ){

        }

        // public setAssociateInfo(Assoc)

}
