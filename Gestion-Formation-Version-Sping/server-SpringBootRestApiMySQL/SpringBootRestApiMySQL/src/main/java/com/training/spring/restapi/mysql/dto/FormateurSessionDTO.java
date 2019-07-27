package com.training.spring.restapi.mysql.dto;

import java.io.Serializable;
import java.util.Date;

public class FormateurSessionDTO  {
    private long sessionid;
    private String sessionname;
    private String sessiontrack;
    private Date sessiondate;
    private int sessionduree;
    private String sessionadress;
    private int sessionparticipants;
    private boolean sessionisCompleted;
    private long formateurid;
    private String formateurname;
    private String formateurlastname;


	public FormateurSessionDTO( 
     long session_id,  String session_name,  String session_track,  Date session_date,
     int session_duree,
     String session_adress,
     int session_participants,
     boolean session_isCompleted,
     long formateur_id,
     String formateur_name,
     String formateur_lastname)
     {
        this.sessionid=session_id;
        this.sessionname = session_name;
        this.sessiontrack = session_track;
        this.sessiondate = session_date;
        this.sessionduree = session_duree;
        this.sessionadress = session_adress;
        this.sessionparticipants = session_participants;
        this.sessionisCompleted = session_isCompleted;
        this.formateurid = formateur_id;
        this.formateurname = formateur_name;
        this.formateurlastname = formateur_lastname;
	}

        //getters and setters


        public long getSessionId() {
            return sessionid;
        }

        public void setSessionId(long id) {
            this.sessionid = id;
        }
    
        public void setSessionName(String name) {
            this.sessionname = name;
        }
    
        public String geSessiontName() {
            return this.sessionname;
        }
    
        public void setSessionTrack(String track) {
            this.sessiontrack = track;
        }
    
        public String getSessionAdress() {
            return this.sessionadress;
        }
        public void setSessionAdress(String adress) {
            this.sessionadress= adress;
        }
    
        public int getSessionDuree() {
            return this.sessionduree;
        }
        public void setSessionDuree(int duree) {
            this.sessionduree= duree;
        }
    
    
        public int getSessionParticipants() {
            return this.sessionparticipants;
        }
        public void setSessionParticipants(int participants) {
            this.sessionparticipants= participants;
        }
    
    
        public String getSessionTrack() {
            return this.sessiontrack;
        }
        public Date getSessionDate() {
            return this.sessiondate;
        }
        
        public void setSessionDate(Date date) {
            this.sessiondate = date;
        }
        public boolean getSessionIsCompleted() {
            return sessionisCompleted;
        }
    
        public void setSessionIsCompleted(boolean isCompleted) {
            this.sessionisCompleted = isCompleted;
        }


        public long getFormateurId() {
            return formateurid;
        }

        public void setFormateurId(long id) {
            this.formateurid = id;
        }
    
        public void setFormateurName(String name) {
            this.formateurname = name;
        }
    
        public String geFormateurName() {
            return this.formateurname;
        }

        public void setFormateurLastname(String name) {
            this.formateurlastname = name;
        }
    
        public String geFormateurLastname() {
            return this.formateurlastname;
        }

}