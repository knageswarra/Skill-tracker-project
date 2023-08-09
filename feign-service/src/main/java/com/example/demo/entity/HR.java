package com.example.demo.entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Table(name="hr")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HR {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int id;
	String userEmail;
	String userPassword;
	String securityQuestion;
	String securityAnswer;

}
