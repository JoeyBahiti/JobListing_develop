package com.job.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MessageResponse {

	String message;

	public MessageResponse() {
		super();
		// TODO Auto-generated constructor stub
	}

	public MessageResponse(String message) {
		super();
		this.message = message;
	}
	
	
}
