package com.job.dto;

import java.util.List;

import com.job.model.Role;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class JwtResponse {
	
	String token;
	Long id;
	String username;
	String email;
	List<String> roles;
	
	
	
	public JwtResponse(String token,  Long id, String username, String email, List<String> roles) {
		super();
		this.token = token;
		this.id = id;
		this.username = username;
		this.email = email;
		this.roles = roles;
	}



	public JwtResponse() {
		super();
		// TODO Auto-generated constructor stub
	} 

	
	
}
