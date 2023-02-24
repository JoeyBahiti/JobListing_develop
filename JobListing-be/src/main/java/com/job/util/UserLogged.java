package com.job.util;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.job.model.User;
import com.job.repository.UserRepository;


@Service
public class UserLogged {
	
	@Autowired
	UserRepository userRepository;
	
	public User getUserLogged() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		User user = userRepository.findByUsername(authentication.getName()).get();
		 
		return user;
		
	}

	public User findById(long id) {
		// TODO Auto-generated method stub
		User user = userRepository.findById(id).get();
		return user;
	}

}
