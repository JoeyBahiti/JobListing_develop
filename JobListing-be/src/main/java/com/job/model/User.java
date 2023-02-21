package com.job.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


import javax.persistence.*;


import lombok.Getter;
import lombok.Setter;








@Entity
@Table(	name = "user")
@Getter 
@Setter
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;


	
	private String username;

	

	private String email;



	private String password;

	@OneToOne
	@JoinColumn(name = "roles", nullable = false)
	private Role role;

	public User(Long id, String username, String email, String password, Role role) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
		this.role = role;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}


	
	
	

}
