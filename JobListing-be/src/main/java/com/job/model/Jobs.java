package com.job.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.Setter;

@Entity
@NamedQuery(name="Jobs.findAll", query="SELECT j FROM Jobs j")
@Getter 
@Setter
public class Jobs {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;

	@Column(name="title")
	private String title;
	
	@Column(name="description")
	private String description;
	
	@Column(name="location")
	private String location;
	
	@Column(name="salary")
	private String salary;
	
	@OneToOne
	@JoinColumn(name = "author", nullable = false)
	private User user;
}
