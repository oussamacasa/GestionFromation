package com.training.spring.restapi.mysql.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.training.spring.restapi.mysql.model.Formateur;
import com.training.spring.restapi.mysql.model.Session;

public interface FormateurRepository extends CrudRepository<Formateur, Long> {
	List<Session> findByName(String name);

	Formateur findById(long id);
	@Query("SELECT f.id, f.name, f.lastname, f.adress, f.email, f.tel "
	+ "FROM Formateur f")
    List<Formateur> fetchAllFormateur();
}
