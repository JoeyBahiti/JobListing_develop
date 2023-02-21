package com.job.model;

import java.util.Collection;

import javax.persistence.*;

import org.springframework.security.core.GrantedAuthority;

import lombok.Getter;
import lombok.Setter;



@Entity
@NamedQuery(name="Role.findAll", query="SELECT r FROM Role r")
@Getter 
@Setter
public class Role {


@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
@Column(name="id")
private int id;

@Column(name="name")
private String name;



 


}