import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  [x: string]: any;
  private apiUrl = 'http://localhost:8088/api'; 

  constructor(private http: HttpClient) {}

  getAllSkills(): Observable<any> {
    return this.http.get(`${this.apiUrl}/skills/all`);
  }

  saveSkills(skillInfo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/saveSkills`, skillInfo);
  }

  searchSkill(skillCategory: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/searchskill/${skillCategory}`);
  }

  getSkillId(skillCategory: string, skillName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/getSkillid/${skillCategory}/${skillName}`);
  }

  
  login(email: string, password: string): Observable<any> {
    const loginData = { associateEmail: email, password: password };
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }

  
  saveAssociate(associate: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/saveAssociate`, associate);
  }

  // Example method to call your microservice's verifyAssociate endpoint
  verifyAssociate(email: string, password: string): Observable<any> {
    const data = { associateEmail: email, password: password };
    return this.http.post(`${this.apiUrl}/verifyAssociate`, data);
  }

  // Delete skills by their ID
  deleteSkillById(skillId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteSkill/${skillId}`);
  }

  

  saveAssociateSkill(associateId: number, skillId: number, data: any) {
    const url = `${this.apiUrl}/saveAssociateSkill/${associateId}/${skillId}`;
    return this.http.post(url, null); 
  }

  getAssociates(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/associates`);
  }

  getSkills(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/skills`);
  }

  getAllAssociateSkills(): Observable<any[]> {
    const url = `${this.apiUrl}/associateSkills/all`;
    return this.http.get<any[]>(url);

  }


}
