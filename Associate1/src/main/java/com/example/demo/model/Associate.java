package com.example.demo.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="associate")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Associate {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int associateid;
private String associatefirstname;
private String associatelastname;
private String gender;
private Date dob;
@Column(unique=true)
private String associateemail;
private String associatecountry;
@Column(unique=true)
private String associatemobilenumber;
private String password;
//private List<Integer> Skillsid;
public int getAssociateid() {
	return associateid;
}
public void setAssociateid(int associateid) {
	this.associateid = associateid;
}
public String getAssociatefirstname() {
	return associatefirstname;
}
public void setAssociatefirstname(String associatefirstname) {
	this.associatefirstname = associatefirstname;
}
public String getAssociatelastname() {
	return associatelastname;
}
public void setAssociatelastname(String associatelastname) {
	this.associatelastname = associatelastname;
}
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}
public Date getDob() {
	return dob;
}
public void setDob(Date dob) {
	this.dob = dob;
}
public String getAssociateemail() {
	return associateemail;
}
public void setAssociateemail(String associateemail) {
	this.associateemail = associateemail;
}
public String getAssociatecountry() {
	return associatecountry;
}
public void setAssociatecountry(String associatecountry) {
	this.associatecountry = associatecountry;
}
public String getAssociatemobilenumber() {
	return associatemobilenumber;
}
public void setAssociatemobilenumber(String associatemobilenumber) {
	this.associatemobilenumber = associatemobilenumber;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public Associate(int associateid, String associatefirstname, String associatelastname, String gender, Date dob,
		String associateemail, String associatecountry, String associatemobilenumber, String password) {
	super();
	this.associateid = associateid;
	this.associatefirstname = associatefirstname;
	this.associatelastname = associatelastname;
	this.gender = gender;
	this.dob = dob;
	this.associateemail = associateemail;
	this.associatecountry = associatecountry;
	this.associatemobilenumber = associatemobilenumber;
	this.password = password;
}
public Associate() {
	super();
	// TODO Auto-generated constructor stub
}

}
