import { Component, Input, OnInit,  } from '@angular/core';
import { NotesService } from '../../services/Notes/notes.service';
import { response } from 'express';

@Component({
  selector: 'app-app-icons',
  templateUrl: './app-icons.component.html',
  styleUrl: './app-icons.component.scss'
})
export class AppIconsComponent implements OnInit {
  constructor(private notes:NotesService ){}
  @Input() notesObject:any;
  ngOnInit(): void {
    
  }
  onDelete(){debugger
    let reqData={
      notesId:this.notesObject.noteId
    }
    console.log(reqData);
    this.notes.trashNotes(reqData).subscribe((response:any)=>{
      console.log("Notes trashed successfully",response);
    })
  }
  onArchiev(){
    let reqData={
      notesId:this.notesObject.noteId
    }
    console.log(reqData);
    this.notes.archievNotes(reqData).subscribe((response:any)=>{
      console.log("Success",response);
    })
  }


}
