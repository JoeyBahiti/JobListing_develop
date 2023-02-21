package com.job.dto;

import com.job.model.Jobs;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class JobDto {

	Jobs job;
	boolean favorite;
}
