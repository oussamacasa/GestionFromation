package com.training.spring.restapi.mysql.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.training.spring.restapi.mysql.model.Session;
import com.training.spring.restapi.mysql.model.Formateur;

import com.training.spring.restapi.mysql.dto.FormateurSessionDTO;
public interface SessionRepository extends CrudRepository<Session, Integer> {
	List<Session> findByName(String name);

	Optional<Session> findById(long id);

	void deleteById(long id);

	List<Session> findByTrack(String track);
	/*@Query ("select count(s) from session s WHERE u.track = ?1")
	int findByTrack();*/
	@Query("SELECT s.id, s.name, s.track, s.date, s.duree, s.adress, s.participants, s.isCompleted "
	+ "FROM Session s")
	List<Session> fetchAllSessions();

	@Query("SELECT new com.training.spring.restapi.mysql.dto.FormateurSessionDTO(s.id, s.name, s.track, s.date, s.duree, s.adress, s.participants, s.isCompleted, f.id, f.name, f.lastname) "
			+ "FROM Formateur f INNER JOIN f.sessions s")
	List<FormateurSessionDTO> fetchFormateurBySession();
}
