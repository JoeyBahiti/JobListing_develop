package com.job.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.job.model.UserJobs;

@Repository
public interface UserJobsRepository extends JpaRepository<UserJobs, Integer> {

	@Query(value = "Select uj From UserJobs uj where uj.user.id = ?1 and uj.job.id = ?2")
	UserJobs findByUserAndJob(Long userId, Integer job);
	
	@Query(value = "Select uj From UserJobs uj where uj.user.id = ?1 and uj.job.id = ?2 and uj.favorite = 1")
	UserJobs findByUserAndJobFavorite(Long userId, Integer job);

}
