import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NoteManagmentService } from './NoteManagment.service';
import { Note } from 'src/models/Note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'NoteEver';
  isLoaded=false;
  isAnimationClosed=false;
  listNotesSubscription: Subscription;
  
  constructor(private router : Router, private noteManagmentService : NoteManagmentService){}
  ngOnInit(){
    this.noteManagmentService.getNotes();
    this.listNotesSubscription = this.noteManagmentService.listNotesSubject.subscribe(
      (listNotes: Note[]) => {
        if(listNotes.length!=0){
          this.isLoaded=true;
          setTimeout(()=>{
            this.isAnimationClosed=true;
          },400);
        }
      }
    );
  }
}
