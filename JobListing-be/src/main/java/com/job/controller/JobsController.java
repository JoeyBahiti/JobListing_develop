package com.job.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.job.dto.JobDto;
import com.job.model.Jobs;
import com.job.model.User;
import com.job.model.UserJobs;
import com.job.repository.JobsRepository;
import com.job.repository.UserJobsRepository;
import com.job.repository.UserRepository;
import com.job.util.ResponseHandler;
import com.job.util.UserLogged;



@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/action")
public class JobsController {
	
	@Autowired
	JobsRepository jobsRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserJobsRepository userJobsRepository;
	
	@Autowired
	UserLogged userLogged;
	
	
	@GetMapping("/all/jobs")
    public ResponseEntity<Object> filterJobs(@RequestParam(required = true) int pageSize,
			 @RequestParam(required = true) int pageNumber, 
			 @RequestParam(required = true) String filterSorting,
			 @RequestParam(required = true) boolean isAscending,
			 @RequestParam(value = "id", required = false) Integer id,
			 @RequestParam(value = "title", required = false) String title,
			 @RequestParam(value = "author", required = false) Integer author) {
		
		Sort s = isAscending ? Sort.by(filterSorting).ascending() : Sort.by(filterSorting).descending();

		Pageable pageable = PageRequest.of(pageNumber, pageSize, s);
		
		List<Jobs> listJob = jobsRepository.searchJobs(id, title, author);
		List<JobDto> listJobDto = new ArrayList<>();
		User user = userLogged.getUserLogged();
		for (Jobs jobs : listJob) {
			JobDto jobDto = new JobDto();
			jobDto.setJob(jobs);
			UserJobs userJobs =	userJobsRepository.findByUserAndJobFavorite(user.getId(), jobs.getId());
			if(userJobs != null) jobDto.setFavorite(true); else jobDto.setFavorite(false);
			listJobDto.add(jobDto);
		}
		Page<JobDto> pager = new PageImpl(listJobDto,pageable,listJob.size());
		return ResponseHandler.generateResponse("OK", HttpStatus.OK, pager);
    }
	
	
	@GetMapping("/job/details")
    public ResponseEntity<Object> getDetails(
			 @RequestParam(value = "id", required = true) Integer id) throws Exception {
		
		Optional<Jobs> optionalJob = jobsRepository.findById(id);
		if(!optionalJob.isEmpty()) {
			return ResponseHandler.generateResponse("OK", HttpStatus.OK, optionalJob.get());
		}else throw new Exception("Job not found");
		
    }
	
	
	@DeleteMapping("/job/delete")
    public ResponseEntity<Object> deleteJob(@RequestParam(value = "id", required = true) Integer id) throws Exception {
		
		User user = userLogged.getUserLogged();
		if(user.getRole().getName().equalsIgnoreCase("job seekers")) {
			throw new Exception("Job seekers cannot add work based in their role");
		}
		Optional<Jobs> optionalJob = jobsRepository.findById(id);
		if(!optionalJob.isEmpty()) {
			jobsRepository.delete(optionalJob.get());
		}else throw new Exception("Job not found");
		return ResponseHandler.generateResponse("Deleted", HttpStatus.OK);
		
    }
	
	@PostMapping("/job/add")
    public ResponseEntity<Object> addJob(@RequestBody Jobs dto) throws Exception {
		
		if(dto.getTitle() == null) {
			throw new Exception("Title cannot be empty");
		}
		if(dto.getDescription() == null) {
			throw new Exception("Description cannot be empty");
		}
		
		User user = userLogged.getUserLogged();
		if(user.getRole().getName().equalsIgnoreCase("job seekers")) {
			throw new Exception("Job seekers cannot add work based in their role");
		}
		dto.setUser(user);
		Jobs job = jobsRepository.save(dto);
		
		return ResponseHandler.generateResponse("CREATED", HttpStatus.CREATED, job);
		
    }
	
	@PutMapping("/job/update")
    public ResponseEntity<Object> updateJob(@RequestBody Jobs dto) throws Exception {
		
		User user = userLogged.getUserLogged();
		if(user.getRole().getName().equalsIgnoreCase("job seekers")) {
			throw new Exception("Job seekers cannot add work based in their role");
		}
		if(dto == null || dto.getId() == 0) {
			throw new Exception("Job and id cannot be empty");
		}
		
		Optional<Jobs> optionalJob = jobsRepository.findById(dto.getId());
		if(optionalJob.isEmpty()) {
			throw new Exception("Job not found");
		}
		Jobs job = optionalJob.get();
		
		if(dto.getTitle() == null) {
			throw new Exception("Title cannot be empty");
		}else job.setTitle(dto.getTitle());
		if(dto.getDescription() == null) {
			throw new Exception("Description cannot be empty");
		}else job.setDescription(dto.getDescription());
	
		jobsRepository.save(job);
		
		return ResponseHandler.generateResponse("CREATED", HttpStatus.CREATED, job);
		
    }
	
	
	@PostMapping("/job/add/favorite")
    public ResponseEntity<Object> addJobAsFavorite( @RequestParam(value = "id", required = true) Integer id) throws Exception {
		
		if(id == null) {
			throw new Exception("Id of job cannot be empty");
		}
		Optional<Jobs> optionalJob = jobsRepository.findById(id);
		if(optionalJob.isEmpty()) {
			throw new Exception("Job not found");
		}
		UserJobs userJobs = new UserJobs();
		User user = userLogged.getUserLogged();
		if(!(user.getRole().getName().equals("job seekers"))) {
			throw new Exception("Only job seekers can put favorite");
		}
		
		UserJobs uJobs = userJobsRepository.findByUserAndJob(user.getId(), id);
		if(uJobs != null) {
			throw new Exception("Job it is already favorite");
		}
		userJobs.setUser(user);
		userJobs.setJob(optionalJob.get());
		userJobs.setFavorite((byte) 1);
		userJobs.setApplied((byte) 0);
		userJobsRepository.save(userJobs);
		
		return ResponseHandler.generateResponse("CREATED", HttpStatus.CREATED, userJobs);
		
    }
	
	
	@GetMapping("/job/get/favorite")
    public ResponseEntity<Object> favoriteJobs() {
		
		User user = userLogged.getUserLogged();
		List<Jobs> listJob = jobsRepository.findFavoriteOfUser(user.getId());
		
		return ResponseHandler.generateResponse("OK", HttpStatus.OK, listJob);
    }

	
	@GetMapping("/job/get/applied")
    public ResponseEntity<Object> appliedJobs() {
		
		User user = userLogged.getUserLogged();
		List<Jobs> listJob = jobsRepository.findAppliedOfUser(user.getId());
		
		return ResponseHandler.generateResponse("OK", HttpStatus.OK, listJob);
    }
}
