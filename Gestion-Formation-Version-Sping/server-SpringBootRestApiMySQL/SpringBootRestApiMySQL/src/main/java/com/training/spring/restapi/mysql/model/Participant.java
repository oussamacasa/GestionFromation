package com.training.spring.restapi.mysql.model;

import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import javax.persistence.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.*;

@Entity
@Table(name = "Participant")
public class Participant {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id; 
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "prenom")
	private String prenom;
	
	@Column(name = "mail")
	private String mail;
	@ManyToMany(cascade= CascadeType.ALL)
	@JoinTable(
	  name = "CourParticipant", 
	  joinColumns = @JoinColumn (name = "Participant_id"), 
	  inverseJoinColumns = @JoinColumn(name = "Session_id"))
	private Set<Session> sessions;

	public Set<Session> getSessions() {
		return sessions;
	}

	public void setSessions(Set<Session> sessions) {
		this.sessions = sessions;
	}

	public Participant(String name, String prenom, String mail, Session sessions) {
		super();
		this.name = name;
		this.prenom = prenom;
		this.mail = mail;
		this.sessions = Stream.of(sessions).collect(Collectors.toSet());
	}

	public Participant() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}
	
	
	
   
}
