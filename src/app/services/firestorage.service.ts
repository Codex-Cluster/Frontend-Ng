import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { ImageUpload } from '../models/image-upload';


@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor(private storage: AngularFireStorage) { }
  uploadFile(event:any) {
    const file = event.target.files[0];
    const filePath = 'UserImages/';
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
  }
}
