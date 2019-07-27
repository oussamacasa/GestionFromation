package com.training.spring.restapi.mysql.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.training.spring.restapi.mysql.model.Formateur;
import com.training.spring.restapi.mysql.model.Participant;
import com.training.spring.restapi.mysql.model.Session;

public interface ParticipantRepository extends CrudRepository<Participant, Integer> {
    
	
	List<Participant> findByName(String name);

	Participant findById(long id);
	@Query("SELECT P.id, p.Name, p.prenom, p.mail" + "FROM Participant  p")
	
    List<Participant> fetchAllParticipant();
	
	 
}
