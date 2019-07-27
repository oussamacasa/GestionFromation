package com.training.spring.restapi.mysql.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.*;

@Entity
@Table(name = "session")
public class Session {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "track")
	private String track;
	
	@Column(name = "date")
	private Date date;

	@Column(name = "duree")
	private int duree;

	@Column(name = "adress")
	private String adress;

	@Column(name = "participants")
	private int participants;

	@Column(name = "isCompleted")
	private boolean isCompleted;
	
	@ManyToOne(fetch = FetchType.LAZY, cascade= CascadeType.ALL)
	@JoinColumn(name = "formateur_id", insertable = true, updatable = true)
	@Fetch(FetchMode.JOIN)
	
	
	private Formateur formateur;
	
	@ManyToMany(mappedBy ="Participants")
	private Set<Participant> Participants = new HashSet<>();

	public Session() {
	}

	public Session(String name, String track, Date date, int duree, String adress, int participants, boolean isCompleted, Formateur formateur)
	 {
		this.name = name;
		this.track = track;
		this.date = date;
		this.duree= duree;
		this.adress= adress;
		this.participants = participants;
		this.isCompleted = false;
		this.formateur = formateur;

	}
	public Session(long id, String name, String track, Date date, int duree, String adress, int participants, boolean isCompleted)
	 {
		this.id = id;
		this.name = name;
		this.track = track;
		this.date = date;
		this.duree= duree;
		this.adress= adress;
		this.participants = participants;
		this.isCompleted = false;

	}

	public long getId() {
		return id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return this.name;
	}

	public void setTrack(String track) {
		this.track = track;
	}

	public String getAdress() {
		return this.adress;
	}
	public void setAdress(String adress) {
		this.adress= adress;
	}

	public int getDuree() {
		return this.duree;
	}
	public void setDuree(int duree) {
		this.duree= duree;
	}


	public int getParticipants() {
		return this.participants;
	}
	public void setParticipants(int participants) {
		this.participants= participants;
	}


	public String getTrack() {
		return this.track;
	}
	public Date getDate() {
		return this.date;
	}
	
	public void setDate(Date date) {
		this.date = date;
	}
	public boolean getIsCompleted() {
		return isCompleted;
	}

	public void setIsCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}

    public Formateur getFormateur()
    {
        return formateur;
    }

    public void setFormateur(Formateur f)
    {
        this.formateur = f;
    }


	//@Override
	public String toString() {
		return "Session [id=" + id + ", name=" + name + ", track=" + track + ", date=" + date + ", duree=" +duree+", adress="+adress+", participants="+participants+", isCompleted= "+isCompleted+", formateur= "+participants+"]";
	}

}
