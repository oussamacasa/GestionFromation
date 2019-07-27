package com.training.spring.restapi.mysql.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.spring.restapi.mysql.model.Formateur;
import com.training.spring.restapi.mysql.repo.FormateurRepository;
import java.util.*;
import java.text.*;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/apif/")
public class FormateurController {

	/**
	 *
	 */
	
	@Autowired
	FormateurRepository repository;



	@GetMapping("/formateurs")
	public ResponseEntity<List<Formateur>> getAllFormateurs() {
		List<Formateur> formateurs = new ArrayList<>();
		try {
			
			repository.findAll().forEach(formateur ->
			{
				formateurs.add(new Formateur (formateur.getId(), formateur.getName(), formateur.getLastname(), formateur.getEmail(), formateur.getAdress(), formateur.getTel()));
			});

			if (formateurs.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(formateurs, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@RequestMapping("/save")
    public String process(){
        repository.save(new Formateur("Walid", "Saad", "walid@gmail.com", "Lille", 11111));
        repository.save(new Formateur("Walid", "Saad", "walid@gmail.com", "Lille", 11111));
        return "Done";
    }



	@GetMapping("/oneformateur/{id}")
	public ResponseEntity<Formateur> getFormateurById(@PathVariable("id") long id) {
		Formateur FormateurData = repository.findById(id);
        
		if (repository.existsById(id)) {
			return new ResponseEntity<>(new Formateur (FormateurData.getName(), FormateurData.getLastname(), FormateurData.getEmail(), FormateurData.getAdress(), FormateurData.getTel()), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping(value = "/formateur")
	public ResponseEntity<Formateur> postSession(@RequestBody Formateur formateur) {
		try {
			//Formateur _formateur = repository.save(new Formateur(formateur.getName(), formateur.getLastname(), formateur.getEmail(), formateur.getAdress(), formateur.getTel()));
			Formateur _formateur = repository.save(formateur);
			return new ResponseEntity<>(_formateur, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
	@GetMapping("/nombreformateurs/")
	public ResponseEntity<Long> getNombreFormateurs() {
		try {
			if (repository.count()==0) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(repository.count(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
	

}
