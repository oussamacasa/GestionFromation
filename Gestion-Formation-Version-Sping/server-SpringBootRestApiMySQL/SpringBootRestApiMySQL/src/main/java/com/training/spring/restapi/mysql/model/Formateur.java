package com.training.spring.restapi.mysql.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.*;

@Entity
@Table(name = "formateur")
public class Formateur {


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "lastname")
	private String lastname;
	
	@Column(name = "email")
	private String email;

	@Column(name = "adress")
	private String adress;

	@Column(name = "tel")
	private long tel;
	
    @OneToMany(targetEntity = Session.class, mappedBy = "formateur", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Session> sessions;

	public Formateur() {
	}

	public Formateur(String name, String lastname, String email, String adress, long tel)
	 {
		this.name = name;
		this.lastname = lastname;
		this.email = email;
		this.adress= adress;
		this.tel = tel;
	}

	public Formateur(long id, String name, String lastname, String email, String adress, long tel)
	 {
	    this.id = id;
		this.name = name;
		this.lastname = lastname;
		this.email = email;
		this.adress= adress;
		this.tel = tel;
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

	public String getLastname() {
		return this.lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getAdress() {
		return this.adress;
	}
	public void setAdress(String adress) {
		this.adress= adress;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email=email;
	}

	public long getTel() {
		return this.tel;
	}
	public void setTel(long tel) {
		this.tel= tel;
	}

	public Set<Session> getSessions()
    {
        return sessions;
    }

    public void setSessions(Set<Session> sessions)
    {
        this.sessions = sessions;
    }

	@Override
	public String toString() {
		return "Formateur [id=" + id + ", name=" + name + ", lastname=" + lastname + ", email=" + email + ", adress=" +adress+", tel="+tel+"]";
	}

	

}
