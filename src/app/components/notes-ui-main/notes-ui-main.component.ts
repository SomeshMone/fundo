import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { title } from 'process';
import { NotesService } from '../../services/Notes/notes.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { subscribe } from 'diagnostics_channel';
import { response } from 'express';
import { OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-notes-ui-main',
  templateUrl: './notes-ui-main.component.html',
  styleUrl: './notes-ui-main.component.scss'
})
export class NotesUiMainComponent implements OnInit {
  notesForm!: FormGroup;
  submitted = false;
  display=true;
  
  constructor(private formBuilder: FormBuilder, private notes: NotesService, private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.notesForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  

  onSubmit() {
    this.submitted = true;
    if (this.notesForm.valid) {
      const reqData = {
        title: this.notesForm.value.title,
        description: this.notesForm.value.description
      };
      console.log(reqData);
      this.notes.addNotes(reqData).subscribe((response: any) => {
        console.log(response);
      });
    }
  }
 
  
}
