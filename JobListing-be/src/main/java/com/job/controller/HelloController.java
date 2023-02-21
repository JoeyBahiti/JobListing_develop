package com.job.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins = "*")
@RestController
public class HelloController {

	 @GetMapping("/hello")
		public String dettaglioAlloggio() {
			return "hello";
	}
}
