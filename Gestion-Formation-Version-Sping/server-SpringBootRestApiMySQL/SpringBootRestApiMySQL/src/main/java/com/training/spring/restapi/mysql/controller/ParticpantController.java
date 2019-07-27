package com.training.spring.restapi.mysql.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.Repository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.spring.restapi.mysql.dto.FormateurSessionDTO;
import com.training.spring.restapi.mysql.model.Formateur;
import com.training.spring.restapi.mysql.model.Participant;
import com.training.spring.restapi.mysql.model.Session;
import com.training.spring.restapi.mysql.repo.ParticipantRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/apiP")
public class ParticpantController {

	@Autowired
	ParticipantRepository repository;  
	
	@GetMapping("/participant")
  public ResponseEntity <List<Participant>>getAllParticipant() {
	
		List<Participant> Participants = new ArrayList<>();
		
		try {
			
			repository.findAll().forEach(Participant ->
			{
				Participants.add(new Participant (Participant.getName(), Participant.getPrenom(), Participant.getMail(), (Session) Participant.getSessions()));
			});
			

			if (Participants.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(Participants, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		
		
		
		}
	}
	
}
		




