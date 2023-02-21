package com.job.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.job.model.Jobs;

@Repository
public interface JobsRepository extends JpaRepository<Jobs, Integer> {

	@Query(value = "Select j From Jobs j "
			+ " where  ( ?1 IS NULL OR j.id= ?1) "
			+ " AND ( ?2 IS NULL OR UPPER (j.title) LIKE '%' || UPPER(?2) || '%') "
			+ " AND (?3 IS NULL OR j.user.id= ?3) ")
	List<Jobs> searchJobsPageable(Integer id, String title, Integer author, Pageable pageable);
	
	@Query(value = "Select j From Jobs j "
			+ " where  ( ?1 IS NULL OR j.id= ?1) "
			+ " AND ( ?2 IS NULL OR UPPER (j.title) LIKE '%' || UPPER(?2) || '%') "
			+ " AND (?3 IS NULL OR j.user.id= ?3) ")
	List<Jobs> searchJobs(Integer id, String title, Integer author);

	@Query(value = "Select j From Jobs j inner join UserJobs uj on j.id = uj.job.id where uj.favorite = 1 and uj.applied = 0")
	List<Jobs> findFavoriteOfUser(Long id);

	@Query(value = "Select j From Jobs j inner join UserJobs uj on j.id = uj.job.id where uj.applied = 1")
	List<Jobs> findAppliedOfUser(Long id);
}
