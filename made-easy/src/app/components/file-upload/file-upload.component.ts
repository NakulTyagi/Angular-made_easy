import { Component, EventEmitter ,OnInit } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';

const URL = 'http://localhost:3000/fileupload/';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public uploader: FileUploader = new FileUploader({
    url: URL,
    disableMultipart : false,
    autoUpload: true,
    method: 'post',
    itemAlias: 'attachment',
    allowedFileType: ['image', 'pdf']


    });

  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
    console.log(file);

  }
}
